import $ from 'shelljs'

const replacer = files => (old, _new) =>
  files.forEach(file => {
    if (!$.test('-d', file)) {
      $.sed('-i', old, _new, file)
    }
  })

export default replacer

