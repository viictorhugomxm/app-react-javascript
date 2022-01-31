import { getHeroeById } from "./bases/08-imp-ex";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     // reject('No se pudo encontrar el heroe');
//   }, 3000);
// });

// promesa
//   .then(heroe => console.log('heroe', heroe))
//   .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if(heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el heroe')
      }
    }, 3000);
  });

}

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn);