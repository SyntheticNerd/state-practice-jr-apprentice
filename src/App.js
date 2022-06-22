import Form from "./components/form/Form";
import { useState } from "react";
import Thing from "./components/thing/Thing";

const defaultState = [
  {
    name: "bob",
    age: 25,
  },
  {
    name: "clarice",
    age: 32,
  },
  {
    name: "Grogu",
    age: 25,
  },
];

function App() {
  //things is our state which holds a list of objects
  const [things, setThings] = useState(defaultState);
  //we had to raise the state of name and age from the form component to the main app
  //this allowed us to access the setName and setAge when update is used in the child
  const [name, setName] = useState("");
  const [age, setAge] = useState("");


  function updateThings(data) {
    //update gets the current data from the child and changes our
    //input fields to the appropriate value
    setName(data.name);
    setAge(data.age);
  }

  

  return (
    <div className='App'>
      <Form setThings={setThings} things={things} name={name} setName={setName} age={age} setAge={setAge}/>
      {things.map((thing) => (
        <Thing key={thing.name} data={thing} updateThings={updateThings}/>
      ))}
    </div>
  );
}

export default App;
