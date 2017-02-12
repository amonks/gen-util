import inquire from './inquire'

const confirm = (text, defaultValue = true) => inquire({
  type: 'confirm',
  name: 'result',
  message: text,
  'default': defaultValue
})

export default confirm

