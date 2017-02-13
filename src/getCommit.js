import $ from 'shelljs'

import remote from './remote'

const isClean = () => $.exec('git status --porcelain').stdout.trim() === ''
const sha = () => $.exec('git rev-parse HEAD').stdout.trim()

const origin = async () => {
  if (!isClean()) throw Error('Unclean!')
  const tag = `${remote()}@${sha()}`
  return tag
}

export default origin

