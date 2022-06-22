import React from 'react'

export default function Thing({data, updateThings}) {
  return (
    <div>
        <h3>{data.name}</h3>
        <p>{data.age}</p>
        {/* on click updateThings passes the appropriate data to initialize the data*/}
        <button onClick={()=>updateThings(data)}>update</button>
    </div>
  )
}
