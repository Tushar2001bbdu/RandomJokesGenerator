import React from 'react'

export default function JokeItem(props) {
  return (
    <div class="container">
     {props.element.setup} 
     {props.element.delivery}
    </div>
  )
}
