import $ from 'shelljs'
import ask from './ask'

const makeRepo = async () => {
  const matchRepo = /[a-zA-Z0-9_-]*\/[a-zA-Z0-9_-]*/
  if ($.which('hub')) {
    const hubArg = await ask('project repo? (arg to `hub create`)')
    await $.exec(`hub create ${hubArg}`)
    let matches = hubArg.match(matchRepo)
    if (matches) {
      return `https://github.com/${matches[0]}.git`
    }
  }
  const repo = await ask('project clone url?')
  return repo
}

export default makeRepo

