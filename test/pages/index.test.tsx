import { render, screen } from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux'
import userEvent from '@testing-library/user-event'

import MainPage from '@pages/index'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

describe('mainPage', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => (counterStore.count += 1))
    useSelectorMock.mockImplementation((selector) =>
      selector({ counter: counterStore })
    )

    render(<MainPage />)
  })

  afterEach(() => {
    useDispatchMock.mockClear()
    useSelectorMock.mockClear()
  })

  const useSelectorMock = useSelector as jest.Mock
  const useDispatchMock = useDispatch as jest.Mock

  const counterStore = {
    count: 0,
  }

  it('should show count 0', () => {
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('should up count', () => {
    userEvent.click(screen.getByText('+'))

    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
