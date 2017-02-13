import $ from 'shelljs'

export default () => $.exec('git ls-files').stdout
  .trim()
  .split('\n')

