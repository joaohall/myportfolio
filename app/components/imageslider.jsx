'use client'

import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

export default function ImageSlider(props){
    const Images = props.ImageSource;
    
    return(
        <div>
            <Carousel useKeyboardArrows={true}>

            </Carousel>
        </div>
    )
}
