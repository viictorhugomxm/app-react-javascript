//Funciones en JS 
// const saludar = function (nombre) {
//   return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = nombre => `Hola, ${nombre}`;
const saludar4 = _ => `Hola Mundo!!`;

// console.log(saludar('Victor'));
// console.log(saludar);
// console.log(saludar2('Pedrito'));
console.log(saludar3('Pedrito'));
console.log(saludar4());

const getUser = () => (
  {
    uid:'ABC123',
    username: 'Victor'
  }
)

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => (
  {
    uid:'ABC567',
    username: nombre
  }
)

const usuarioActivo = getUsuarioActivo('Victorsin')
console.log(usuarioActivo);