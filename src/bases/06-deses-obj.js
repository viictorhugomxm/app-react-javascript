const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado'
}

// const {nombre,edad,clave} = persona

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const uuseContext = ({clave, nombre,edad,rango = 'Capitán'}) => {

  // console.log(nombre,edad,rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.35,
      lng: 14.67
    }
  }
}

// const avenger =  uuseContext(persona);
const {nombreClave, anios, latlng: {lat, lng}} =  uuseContext(persona);


console.log(nombreClave, anios);
console.log(lat, lng);