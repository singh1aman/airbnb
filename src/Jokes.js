import React from 'react'

export default function Jokes(props) {
  return (
    <div>
        <h1>setup:{props.setup}</h1>
        <p>punchline:{props.punchline}</p>
        <p>upvotes:{props.upv}</p>
        <hr></hr>
    </div>
  )
}
