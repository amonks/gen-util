import $ from 'shelljs'

const getRemote = () => $.exec('git remote -v').stdout

const matchRemote = (str, remote = '') =>
  (new RegExp(`^${remote}.+?github\.com.([a-zA-Z0-9_-]*\/[a-zA-Z0-9_-]*)`, 'm')).exec(str)[1]

const remote = () => matchRemote(getRemote())

export default remote

