/* eslint-disable import/no-extraneous-dependencies */
import { RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'

export type CustomRender = (ui: ReactElement) => RenderResult
