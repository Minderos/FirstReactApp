
import './App.css'
import './Chicken.css'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'

import Chicken from './chicken'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'

function App() {
 

  return (
    <div>
      {/* <Greeter person="Bill" from="Elton"/>
      <Greeter person="Ted" from="Peter" /> */}
      {/* <Die numSides={20}/>
      <Die />
      <Die numSides={10}/> */}
    {/* <ListPicker values={[1,2,3]}/>
    <ListPicker values={["a", "b", "c"]}/> */}
    <Heading color="pink" text="Welcome!" fontSize="48px" />
    <Heading color="teal" text="blah" fontSize="20px" />
    <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/>
    <ColorList colors={["red", "pink", "purple", "teal"]} />
    <ColorList colors={["olive", "orangered", "slategrey"]} />
    </div>
  )
}

export default App
