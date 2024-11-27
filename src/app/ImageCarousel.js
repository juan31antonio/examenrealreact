import { useState } from 'react';

//Componente imagen que recibira la url y el alt
function Image({src,alt}){
    return(
        <>
            {alt}
            <br></br>
            <img src={src} alt={alt}></img>
        </>
        
    )
}

//Componente principal que mostrara las imagenes y permitira moverse entre ellas
export default function ImageCarousel({imagenes}){
    const [indice, setIndice] = useState(0)

    /*Funcion que aumentara el indice para cambiar de imagen, 
    o lo pondra en 0 para la primera imagen si llega al final*/
    function nextImage(){
        if(indice < imagenes.length - 1 ){
            setIndice( indice + 1)
        }
        else{
            setIndice(0)
        }
    }

    /*Funcion que disminuira el indice para cambiar a la imagen anterior,
    o pondra el indice en la ultima imagen del array si retrocede demasiado*/
    function prevImage(){
        if(indice > 0){
            setIndice( indice - 1)
        }
        else{
            setIndice(imagenes.length-1)
        }
    }

    let imagenActual = imagenes[indice]

    return(
        <div>
            <Image src={imagenActual.src} alt={imagenActual.alt}></Image>
            <button onClick={nextImage}>Siguiente</button>
            <button onClick={prevImage}>Anterior</button>
        </div>
    )
}