import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import CardData from './CardData';

function App() {
  const elem = CardData.map(item =>{
    return <Card
    coverImg={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title={item.title}
    price={item.price}
             
    />
  })
  return (
   <>
   <Navbar />
   {/* <Hero /> */}
   {elem}

   </>
  );
}

export default App;

// import JokesData from './JokesData';
// import React from 'react'
// import Jokes from "./Jokes"


// export default function App() {
//   const jokesElement = JokesData.map(joke =>{
//     return <Jokes 
//             setup={joke.setup}
//             punchline={joke.punchline}
//             upv={joke.upv} />
//   })
//   return (
//     <div>
//       {jokesElement}

//     </div>
//   )
// }

