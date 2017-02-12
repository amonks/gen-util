import inquire from './inquire'

const ask = (text, opts) => inquire({
  type: 'input',
  name: 'result',
  message: text,
  validate: opts ? opts.validator : undefined,
  'default': opts ? opts['default'] : undefined
})

export default ask

