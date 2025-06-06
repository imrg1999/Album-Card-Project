
import './Card.css'

function Card({imgcard,imgAlt,title,description}) {
  
    return (
      <>
        <div className="pop">
            <img src={imgcard} alt={imgAlt} className="pop-image"/>
            <h3 className="pop-title">Album: {title}</h3>
            <p className="pop-description">Description: {description}</p>
        </div>
        </>
    )
}
export default Card

/*import React from 'react'

import image1989 from './assets/image1989.jpg'
import imageUV from './assets/imageUV.jpg'
import imageBlond from './assets/imageBlond.jpg'
import imageMelodrama from './assets/imageMelodrama.jpg'
import imageTF from './assets/imageTF.jpg'
import imageRumors from './assets/imageRumors.jpg'
import imageDamn from './assets/imageDamn.jpg'
import imageFL from './assets/imageFL.jpg'
import imageDOAB from './assets/imageDOAB.jpg'
import imageGH from './assets/imageGH.jpg'
import Card from './Components/Card'

function App() {
   return (
   <>
     <h1>The Record Store</h1>
     <Card
    imgcard={image1989}
     imgAlt= "1989 - Album Cover"
     title= "1989 - Taylor Swift"
     description= "Pop Perfection"/>

    <Card
    imgcard={imageUV}
    imgAlt= "Ultraviolence - Album Cover"
     title= "Ultraviolence - Lana Del Rey"
    description= "Melancholic Darkness"/>

     <Card
     imgcard={imageBlond}
     imgAlt= "Blond - Album Cover"
   title= "Blond - Frank Ocean"
     description= "Experimental Finnesse"/>

     <Card
     imgcard={imageMelodrama}
     imgAlt= "Melodrama - Album Cover"
     title= "Melodrama - Lorde"
     description= "Sophomore Wonders"/>

    <Card
     imgcard={imageTF}
     imgAlt= "Twin Fantasy - Album Cover"
     title= "Twin Fantasy - Car Seat Headrest"
     description= "Undercover Indie"/>

     <Card
     imgcard={imageRumors}
     imgAlt= "Rumors - Album Cover"
     title= "Rumors - Fleetwood Mac"
     description= "80's Chaos born Perfection"/>

     <Card
     imgcard={imageDamn}
     imgAlt= "Damn. - Album Cover"
     title= "Damn. - Kendrick Lamar"
     description= "Compilation of the most infectious Rap hits"/>
    
     <Card
     imgcard={imageFL}
     imgAlt= "Fine Line - Album Cover"
     title= "Fine Line - Harry Styles"
     description= "Blueprint of almost every 2020s Solo Male Popstars"/>

     <Card
    imgcard={imageDOAB}
     imgAlt= "Death Of A Bachelor - Album Cover"
     title= "Death Of A Bachelor - Panic! At The Disco"
     description= "Pure Madness"/>

    <Card
     imgcard={imageGH}
     imgAlt= "Golden Hour - Album Cover"
     title= "Golden Hour - Kacey Musgraves"
     description= "Serene Soft Ballads"/>
     </>
   )
 }
export default App*/
   
