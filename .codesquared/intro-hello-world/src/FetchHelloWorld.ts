import { OperationInsertable } from './config.ts'
import type { OperationInsertableArgs } from '@skmtc/core'

export class FetchHelloWorld extends OperationInsertable {
  constructor({ context, operation, settings }: OperationInsertableArgs) {
    super({ context, operation, settings })
  }

  override toString(): string {
    return `async () => {
      const response = await fetch('${this.operation.path}');

      const data = await response.json();

      return data
    }`
  }
}
