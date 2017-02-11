import $ from 'shelljs'

const getRemote = () => $.exec('git remote -v').stdout
const matchRemote = str => /github\.com.([a-zA-Z0-9-]*\/[a-zA-Z0-9-]*)/.exec(str)[1]
const remote = () => matchRemote(getRemote())

const isClean = () => $.exec('git status --porcelain').stdout.trim() === ''
const sha = () => $.exec('git rev-parse HEAD').stdout.trim()

const tag = async () => {
  if (!isClean()) throw Error('Unclean!')
  const tag = `${remote()}@${sha()}`
  return tag
}

export default tag

