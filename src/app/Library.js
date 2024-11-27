import { useState } from 'react';

const libros = ['El señor de los anillos','Harry Potter','The Witcher']


//Componente libro que mostrara dependiendo de si estamos editando o no el titulo del libro
function Libro({index,titulo,editar,nuevoTitulo}){

    const [itsEditable,setItsEditable] = useState(false)

    //Este if comprobara si se esta editando el libro y mostrara un input para cambiar el titulo
    let libro
    if(itsEditable){
        libro = 

        <>
            <input value={nuevoTitulo} onChange={ e => editar(index,e.target.value)} />
            <button onClick={() => setItsEditable(false)}>Actualizar</button>
        </>
    }
    //Si no se esta editando mostrara el titulo y un boton para cambiar el estado a editable
    else{
        libro = 
        <>
            {titulo}
            <button onClick={() => setItsEditable(true)}>Editar</button>
        </>
    }

    return(
        <div>
            {libro}
        </div>
    )
}

//Componente biblioteca que mostrara todos los libros
export default function Library(){
    const [nuevoTitulo,setNuevoTitulo] = useState('')
  
    //Funcion que recibe el indice del array del libro y el nuevo titulo que tendra para modificarlo
    function modify(index,nuevoTexto){
        setNuevoTitulo(nuevoTexto)
        libros[index] = nuevoTitulo
    }


    return(
        <div>
          {
            /*Mapeo de los libros donde le pasaremos el titulo, el indice, el nuevo titulo que tendran
            y la funcion que modificara el titulo para llamar en el boton del libro*/
            libros.map((libro,index) =>
                <Libro key={index} titulo={libro} editar={modify} nuevoTitulo={nuevoTitulo} index={index}></Libro>
            )
          }
        </div>
    )
}