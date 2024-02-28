import React,{useState} from 'react'
import JokeItem from './JokeItem'

export default function Generate() {
  const[articles,setArticles]=useState({})
  const generateJoke= async()=>{
    const url="https://v2.jokeapi.dev/joke/Any?format=json"
    let data=await fetch(url)
    let parsedData=await data.json(data)
    setArticles(parsedData)
   console.log(articles.setup)
   console.log(articles.delivery) 

  }
  return (
    <div>
      {articles.setup && <JokeItem element={articles}/>}
      <button type="button" class="btn btn-primary" onClick={generateJoke}>Generate Random Joke</button>
    </div>
  )
}
