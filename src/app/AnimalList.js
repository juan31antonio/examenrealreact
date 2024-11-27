import { useState } from 'react';

//Declaracion del componente animal que recibira las siguientes props
function Animal({nombre,especie,edad,sexo}){
    return(
        <div>
            Nombre:{nombre}<br></br>
            Especie:{especie}<br></br>
            Edad:{edad}<br></br>
            Sexo:{sexo}<br></br>
        </div>
    )
}

//Declaracion del componente principal que permitira gestionar los animales
export default function AnimalList(){
  
    //constantes use state para crear nuevos animales
    const [nombreAnimal, setNombreAnimal] = useState('')
    const [especieAnimal, setEspecieAnimal] = useState('')
    const [edadAnimal, setEdadAnimal] = useState(0)
    const [sexoAnimal, setSexoAnimal] = useState('')
    const [animales,setAnimales] = useState([])
    const [error,setErrores] = useState({
        nombre:"El nombre no puede estar vacio",
        especie:"La especie no puede estar vacio"
    })


    /*Funcion que se llamara desde el form. 
     Creamos un objeto animal y lo añadimos al array de animales*/
    function handleSubmit(e){
        e.preventDefault();
        const animal = {
            nombre: nombreAnimal,
            especie: especieAnimal,
            edad: edadAnimal,
            sexo: sexoAnimal
        }

        setAnimales([
            ...animales,
            animal]
        )
    }

    //Funcion que valida que el tamaño del nombre no sea 0
    function validarNombre (valor) {
        return valor.length != 0
          ? ""
          : "El nombre no puede estar vacio";
    }

    //Funcion que valida que el tamaño de la especie no sea 0
    function validarEspecie(valor){
        return valor.length != 0
          ? ""
          : "La especie no puede estar vacio";
    }

    /*Funcion que llamara a los validadores de los campos nombre y especie.
    Dependiendo del resultado del validador hara un set de lo que devuelvan los validadores para luego mostarlos en vivo*/
    function validador (campo, valor) {
    let error = "";
    if (campo == "nombreAnimal") {
        setNombreAnimal(valor)
        error = validarNombre(valor)
        setErrores(prevErrores => ({
            ...prevErrores,
            nombre:error
        }))
    } 
    else if(campo == "especieAnimal"){
        setEspecieAnimal(valor)
        error = validarEspecie(valor) 
        setErrores(prevErrores => ({
            ...prevErrores,
            especie:error
        }))
    }
    }

    return(
        <div>
           <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de Animal: </label>
                    <input
                        type="text"
                        id="animalName"
                        value={nombreAnimal}
                        onChange={(e) => validador("nombreAnimal", e.target.value)}
                    />
                </div>
                {error.nombre}
                <div>
                    <label>Especie de Animal: </label>
                    <input
                        type="text"
                        id="animalEspecie"
                        value={especieAnimal}
                        onChange={(e) => validador("especieAnimal", e.target.value)}
                    />
                </div>
                {error.especie}
                <div>
                    <label>Edad de Animal: </label>
                    <input
                        type="number"
                        id="animalAge"
                        value={edadAnimal}
                        onChange={(e) => setEdadAnimal(e.target.value)}
                    />
                </div>
                <div>
                    <label>Sexo de Animal: </label>
                    <select onChange={(e) => setSexoAnimal(e.target.value)}>
                        <option value="macho">Macho</option>
                        <option value="hembra">Hembra</option>
                    </select>
                </div>
                <button type="submit">Agregar Animal</button>
            </form>

            <ul>
                {
                    animales.map((animal,index) =>
                    <Animal key={index} nombre={animal.nombre} especie={animal.especie} edad={animal.edad} sexo={animal.sexo}></Animal>
                    )
                }
            </ul>
        </div>
    )
}