import { tmpdir } from 'os'
import { describe, expect, it, vi } from 'vitest'

vi.mock('electron', () => ({
  app: {
    getPath: () => tmpdir()
  }
}))

import { compareVersions } from './adapter'

describe('compareVersions', () => {
  it('orders NAM versions for A2 gating', () => {
    expect(compareVersions('0.13.0', '0.13.0')).toBe(0)
    expect(compareVersions('0.13.1', '0.13.0')).toBeGreaterThan(0)
    expect(compareVersions('0.12.3', '0.13.0')).toBeLessThan(0)
  })
})
