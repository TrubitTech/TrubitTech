import type { Adapter, Bridge } from './types'

export class StorageBridge implements Bridge {
  adapter: Adapter
  constructor() {
    this.adapter = {}
  }
}
