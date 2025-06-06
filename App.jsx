import React from 'react'

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
import imageGinger from './assets/imageGinger.jpg'
import imageB2B from './assets/imageB2B.jpg'
import imageH from './assets/imageH.jpg'
import imagePunisher from './assets/imagePunisher.jpg'
import imageHTE from './assets/imageHTE.jpg'
import imageSour from './assets/imageSour.jpg'
import imageOKC from './assets/imageOKC.jpg'
import imageGAGA from './assets/imageGAGA.jpg'
import imageTD from './assets/imageTD.jpg'
import imageBF from './assets/imageBF.jpg'
import Card from './Components/Card'
//import './App.css'

function App() {
   return (
   <>
     <h1 className='heading'>The Record Store</h1>
     <div className='cardContainer'>
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

     <Card
     imgcard={imageGinger}
     imgAlt= "Ginger - Album Cover"
     title= "Ginger - Brockhampton"
     description= "Group of dudes making fire music!"/>

     <Card
     imgcard={imageB2B}
     imgAlt= "Back to Black - Album Cover"
     title= "Back to Black - Amy Winehouse"
     description= "Forever immortal in our hearts"/>

     <Card
     imgcard={imagePunisher}
     imgAlt= "Punisher - Album Cover"
     title= "Punisher - Phoebe Bridgers"
     description= "Feeling Scared,Lonely,Broken,Abducted at the same time"/>

     <Card
     imgcard={imageH}
     imgAlt= "Hozier - Album Cover"
     title= "Hozier - Hozier"
     description= "Irish Lullaby"/>

     <Card
     imgcard={imageHTE}
     imgAlt= "Happier Than Ever - Album Cover"
     title= "Happier Than Ever - Billie Eilish"
     description= "This is exactly what growing old feels like!?"/>

     
     <Card
     imgcard={imageSour}
     imgAlt= "Sour - Album Cover"
     title= "Sour - Olivia Rodrigo"
     description= "The Gen-Z Hitmaker"/>

     <Card
     imgcard={imageOKC}
     imgAlt= "OK Computer - Album Cover"
     title= "OK Computer - Radiohead"
     description= "The OG Emos"/>

     <Card
     imgcard={imageGAGA}
     imgAlt= "Born This Way - Album Cover"
     title= "Born This Way - Lady GaGa"
     description= "Never be ashamed of your identity"/>

     <Card
     imgcard={imageTD}
     imgAlt= "Teenage Dream - Album Cover"
     title= "Teenage Dream - Katy Perry"
     description= "Bubble-gum POP final boss"/>

     <Card
     imgcard={imageBF}
     imgAlt= "American Boyfriend - Album Cover"
     title= "American Boyfriend - Kevin Abstract"
     description= "One of the Greatest coming of age LPs"/>
     </div>
     </>
   )
 }
export default App
   
