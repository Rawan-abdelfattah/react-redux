import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch=useDispatch();

  const counterState=useSelector((state)=>{
    if(state.value<1){
      return 'nonumber'
    }
    return state.value
  }) //call back function (state)=>{ return state.value}

  const toggleState=useSelector((state)=>{
    return state.showCounter
  })

  const increase=()=>
  {
    const action={type:'increase',payload: 1 }
    dispatch(action)

  }
  const decrease=()=>
  {
    const action={type:'decrease',payload: 1 }
    dispatch(action)

  }
  
  const toggleCounter=()=>{
    dispatch({type:'toggleCounter'})
  
  }
  return (
    <>
    <div className="container  text-center ">  
            <h1 className='fw-bold p-5'>Hello to Redux</h1>


      {
        toggleState? 
        <>       
          <h2 className=''>Counter {counterState}</h2>
          <button className='btn bg-danger m-2 text-white' onClick={increase}>increase</button>
          <button className='btn bg-info  text-white'onClick={decrease}>decrease</button>
          <br></br>
          <button className='btn text-white bg-success ' onClick={toggleCounter}>hide</button>

        </>
        :
        <button className='btn text-white bg-success' onClick={toggleCounter}>Show</button>

      }
     





 
    
    </div>


   
    </>
  );
}

export default App;
