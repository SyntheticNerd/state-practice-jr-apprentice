import React, { useState } from "react";

export default function Form({
  setThings,
  things,
  name,
  setName,
  age,
  setAge,
}) {
  function handleSubmit(e) {
    //prevent default refresh behavior
    e.preventDefault();
    //build new object that will be added to the array
    const newThing = { name: name, age: age };
    //test to see if our array of things contains the same name we are entering
    let testArray = things.filter((thing) => thing.name === name);
    //if anything is inside testArray that means we have a match
    if (testArray.length > 0) {
      //if we have a match create a new array that does not contain the match
      let newArray = things.filter((thing) => thing.name !== name);
      //update the state with the new array plus the updated thing
      setThings([...newArray, newThing]);
    } else {
      //if there are no matches it is a new thing and will be added to the end
      setThings([...things, newThing]);
    }
    //reset values of the inputs to blank
    setName("");
    setAge("");
  }

  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* use 2-way binding on the inputs to give them access to 
        their value and the ability to change it */}
        <input
          type='text'
          placeholder='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}
