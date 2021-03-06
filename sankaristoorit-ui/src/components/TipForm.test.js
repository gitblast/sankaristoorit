
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TipForm from './TipForm'

test('TipForm posts correct data.', () => {
  const createTip = jest.fn()
  const component = render(
    <TipForm addTip={createTip} />
  )

  const input = component.container.querySelector('#title')
  const inputUrl = component.container.querySelector('#url')
  const form = component.container.querySelector('#create-button')

  fireEvent.change(input, {
    target: { title: 'Heroes' }
  })

  fireEvent.change(inputUrl, {
    target: { url: 'https://github.com/tkt-sankarikoodaajat-2020/sankaristoorit' }
  })

  fireEvent.submit(form)
  expect(createTip.mock.calls.length).toBe(1)
  expect(input.title).toBe('Heroes')
  expect(inputUrl.url).toBe('https://github.com/tkt-sankarikoodaajat-2020/sankaristoorit')
})





