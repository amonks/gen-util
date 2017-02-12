import $ from 'shelljs'

const getRemote = () => $.exec('git remote -v').stdout
const matchRemote = str => /github\.com.([a-zA-Z0-9_-]*\/[a-zA-Z0-9_-]*)/.exec(str)[1]
const remote = () => matchRemote(getRemote())

export default remote

