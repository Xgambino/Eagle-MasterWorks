import { useEffect, useState, React } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
    let heroData = [
        {text1: "Dive into",text2:"what you love"},
        {text1: "Discover",text2:"new passions"},
        {text1: "Explore",text2:"the world"},
        
    ]
    const [heroCount,setHeroCount] = useState(1);
    const [playStatus,setPlayStatus]= useState(false);
useEffect (()=> {
  setInterval(()=>{
    setHeroCount((count)=>{return count===2?0:count+1})
  },3000);
})
  return (
    <>
    <Background playStatus ={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
    />
    </>
  )
}

export default App;