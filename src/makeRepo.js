import $ from 'shelljs'
import ask from './ask'
import remote from './remote'

const makeRepo = async () => {
  if ($.which('hub')) {
    const hubArg = await ask('project repo? (arg to `hub create`)')
    await $.exec(`hub create ${hubArg}`)
    return `https://github.com/${remote()}.git`
  }
  const repo = await ask('project clone url?')
  return repo
}

export default makeRepo

