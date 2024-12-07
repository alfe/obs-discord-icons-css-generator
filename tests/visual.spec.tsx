import React from 'react'
import { test, expect } from '@playwright/experimental-ct-react'
import CheckBoxListItem from '../src/component/CheckBoxListItem'

test.use({ viewport: { width: 800, height: 500 } })

test('Visual comparisons example test', async ({ mount }) => {
  const component = await mount(
    <CheckBoxListItem
      title="title"
      onChange={() => {}}
    />
  )
  await expect(component).toHaveScreenshot()
})