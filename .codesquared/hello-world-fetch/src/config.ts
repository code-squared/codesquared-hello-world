import { Identifier, toOperationInsertable } from '@skmtc/core'
import { join } from '@std/path'

export const OperationInsertable = toOperationInsertable({
  id: '@skmtc/hello-world-fetch',

  toIdentifier() {
    return Identifier.createVariable('HelloWorldFetch')
  },

  toExportPath() {
    return join('@', 'HelloWorldFetch.ts')
  }
})

