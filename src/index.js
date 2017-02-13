export ask from './ask'
export confirm from './confirm'
export replacer from './replacer'
export remote from './remote'
export makeRepo from './makeRepo'
export gitFiles from './gitFiles'

import getCommit from './getCommit'
export { getCommit }
export const tag = async () => {
  console.warn('tag is deprecated. use "getCommit"')
  return await getCommit()
}

