import '/home/gambi/P3/P3-project/front-end/src/index.css'
import video1 from '/home/gambi/P3/P3-project/front-end/src/assets/video1.mp4'
import image1 from '/home/gambi/P3/P3-project/front-end/src/assets/image1.jpg'
import image2 from '/home/gambi/P3/P3-project/front-end/src/assets/image2.jpg'
import image3 from '/home/gambi/P3/P3-project/front-end/src/assets/image3.png'


const Background = ({playStatus,heroCount}) => {

    if(playStatus){
        return(
            <video className='background fade-in' autoPlay loop>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    }
    else if (heroCount===0)
    {
        return <img src={image1} className='background fade-in' alt=""/>
    }
    else if (heroCount===1)
    {
        return <img src={image2} className='background fade-in' alt=""/>
    }
    else if (heroCount===2)
    {
        return <img src={image3} className='background fade-in' alt=""/>
    }
}

export default Background;