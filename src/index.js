export ask from './ask'
export confirm from './confirm'
export replacer from './replacer'
export remote from './remote'

import getCommit from './getCommit'
export const tag = async () => {
  console.warn('tag is deprecated. use "getCommit"')
  return await getCommit()
}

