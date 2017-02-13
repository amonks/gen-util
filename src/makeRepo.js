import $ from 'shelljs'
import ask from './ask'

const makeRepo = async () => {
  const matchRepo = /[a-zA-Z0-9_-]*\/[a-zA-Z0-9_-]*/
  if ($.which('hub')) {
    const hubArg = await ask('project repo? (arg to `hub create`)')
    await $.exec(`hub create ${hubArg}`)
    const matches = hubArg.match(matchRepo)[0]
    if (matches.length > 0) {
      const repo = `https://github.com/${matches[0]}.git`
      return repo
    }
  }
  const repo = await ask('project clone url?')
  return repo
}

export default makeRepo

