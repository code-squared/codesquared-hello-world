import { Identifier, toOperationInsertable } from '@skmtc/core'
import { join } from '@std/path'

export const OperationInsertable = toOperationInsertable({
  id: '@skmtc/intro-hello-world',

  toIdentifier() {
    return Identifier.createVariable('fetchHelloWorld')
  },

  toExportPath() {
    return join('@', 'fetchHelloWorld.ts')
  }
})

