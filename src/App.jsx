import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './components/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  const handleIncrement = () => {
    dispatch(increment())
  }


  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <div className='flex items-center justify-center'>
        <button 
        className='p-0.5 text-[100px] mx-5 hover:text-crimson'
        onClick={handleIncrement}
        >+
        </button>
        <p 
        className='count text-[14rem]'
        >{count}
        </p>
        <button 
        className='p-0.5 text-[100px] mx-5 hover:text-crimson'
        onClick={handleDecrement}
        >-
        </button>
      </div>

    </div>
  )
}

export default App
