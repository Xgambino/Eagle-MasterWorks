import '/home/gambi/P3/P3-project/front-end/src/index.css'
import play_icon from '/home/gambi/P3/P3-project/front-end/src/assets/play_icon.png'
import pause_icon from '/home/gambi/P3/P3-project/front-end/src/assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore The World</p>
            <img width="64" height="64" src="https://img.icons8.com/nolan/64/circled-right-2.png" alt="circled-right-2"/>
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)}className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)}className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
                <p>See the Video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero