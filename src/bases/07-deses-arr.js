const personajes = ['Goku','Vegeta','Trunks'];
const [,,p3] = personajes;
// console.log(p3);

const retornaArreglo = () => {
  return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();

// console.log(letras, numeros);

const uuseState = (valor) => {
  return [valor, () =>{console.log('Hola Mundo');}]
}

const [nombre, setNombre] = uuseState('Goku');

console.log(nombre);
setNombre();