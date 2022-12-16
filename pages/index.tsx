import wrapper, { RootState } from '@store'
import { decreament, increament } from '@store/counter'
import { GetServerSideProps } from 'next'
import { useDispatch, useSelector } from 'react-redux'

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    store.dispatch(increament())
    return { props: {} }
  })

export default function Home() {
  const { counter } = useSelector((state: RootState) => ({
    counter: state.counter.count,
  }))
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  )
}
