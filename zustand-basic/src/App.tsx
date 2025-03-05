import './App.css'
import { useCounterStore } from './store/store';


const App = () => {
  const count = useCounterStore((state) => state.count)

  return <OtherComponent count={count}/>;
};

const OtherComponent = ({count}:{count:number}) => {

  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const incrementAsync = useCounterStore((state)=> state.incrementAsync);
  const decrementAsync = useCounterStore((state)=> state.incrementAsync);

  return (
    <>
      <div>
        <div>
          <button onClick={increment}> Increment </button> &nbsp;
          <button onClick={decrement}> Decrement </button>
        </div>

        <br />
        Count: {count}
        <br />
        <br />
        
        <div>
          <button onClick={incrementAsync}> Increment Async </button> &nbsp;
          <button onClick={decrementAsync}> Increment Async </button>
        </div>
      </div>
    </>
  )
}

export default App
