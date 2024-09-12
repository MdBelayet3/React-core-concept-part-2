import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
function handleEvent(){
  alert('btn click')
}
const handleEvent2 = ()=>{
  alert('btn 2 clicked')
}
const fourBtn = (num) => alert(num+3)
const greetingBtn = (name) =>{
  alert(`hello ${name}`)
}

  return (
    <>
      <h3> React core concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* html onclick event */}
      {/* <button onclick="handleEvent()">click me</button> */}

      {/* jsx onClick event */}
      <button className='btn' onClick={handleEvent}>Click me</button>
      <button className='btn' onClick={handleEvent2}>click 2</button>
      <button className='btn' onClick={() =>alert('Third btn clicked')}>Third btn</button>
      <button className='btn' onClick={()=>{fourBtn(5)}}>Four btn</button>
      <button className='btn' onClick={()=>{greetingBtn('Belayet')}}>Greeting btn</button>

    </>
  )
}

export default App
