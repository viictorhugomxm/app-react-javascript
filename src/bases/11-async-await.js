// const getImagenPromesa = () => new Promise(resolve => resolve('https://cualquiercosa.com'))

// getImagenPromesa().then(console.log);

const getImagen = async() => {

  try {
    const apiKey = 'tVD9dz1PfX83A2c31S8mWa9nF30nxl4l';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
  
    const {url} = data.images.original;
  
    const img = document.createElement('img');
    img.src = url; 
    document.body.append(img);
  } catch (error) {
    //manejo de error
    console.error(err);
  }

  

}

getImagen()
