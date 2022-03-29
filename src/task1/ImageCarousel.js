import React,{useState,useEffect} from "react";
import {fetchImageUrls} from "../api/index.mjs"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'



const ImageCarousel =  (props) => {
    const [current,setCurrent]=useState(0);
    const [images, setImages] = useState([]);//all the image are in images;

    useEffect(() => {
      async function fetchImages() {
        const imgs = await fetchImageUrls();
        setImages(imgs);
      }
  
      fetchImages()
    }, [])

    const nextSlide=()=>
    {
        setCurrent(current===images.length-1? 0:current+1);
    }

    const prevSlide=()=>
    {
        setCurrent(current===0 ? images.length-1:current-1); 
    }

    return(
        <section>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {
             images.map((slide,index) => {
            return (
                <div
                className={index===current?'slide active':'slide'}
                key={index}>
                {index===current &&(<img src={slide} alt="travel" className='image'/>)}

                </div>
            )
            
            
             })

        }
     </section>
    )
};
export default ImageCarousel;
