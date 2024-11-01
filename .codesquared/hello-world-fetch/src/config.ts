import { join } from '@std/path'
import { Identifier, toOperationInsertable, camelCase } from '@skmtc/core'

export const OperationInsertable = toOperationInsertable({
  id: '@skmtc/intro-hello-world',

  toIdentifier({ operation }) {
    const name = `get${camelCase(operation.path, { upperFirst: true })}`

    return Identifier.createVariable(name)
  },

  toExportPath(args) {
    return join('@', `${this.toIdentifier(args)}.ts`)
  }
})