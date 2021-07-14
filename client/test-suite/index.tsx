/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ThemeProvider } from 'styled-components'

import { rootReducer } from '@client/store/modules/rootReducer'
import theme from '@client/styles/theme'
import { CustomRender } from './test-suite.types'

const makeProviders = (store: any): FC => ({ children }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>{children}</Provider>
  </ThemeProvider>
)

export const customRender: CustomRender = (ui, options = {}) => {
  const store = createStore(rootReducer)

  return render(ui, {
    wrapper: makeProviders(store),
    ...options
  })
}

function customRenderHook<P, R>(cb: (props: P) => R) {
  const store = createStore(rootReducer)

  return renderHook(cb, { wrapper: makeProviders(store) as FC })
}

export * from '@testing-library/react'
export * as reactHooks from '@testing-library/react-hooks'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
export { customRenderHook as renderHook }
