const axios = require('axios').default;

const listarPlanetasSWAPI = async (event) => {  
   try {
    let url = 'https://swapi.py4e.com/api/planets'
    let result = await axios.get(url);
    let planetas = result.data;
    let newResultES = []
    // Formateando Nombres a Español
    for (let i = 0; i < planetas.results.length; i++) {
        const onePlanet = planetas.results[i];
        const jsonNewPlanetES = {
            nombre : onePlanet.name,
			periodo_rotacion : onePlanet.rotation_period,
			periodo_orbital: onePlanet.orbital_period,
			diametro: onePlanet.diameter,
			clima: onePlanet.climate,
			gravedad: onePlanet.gravity,
			terreno: onePlanet.terrain,
			superficie_agua: onePlanet.surface_water,
			poblacion: onePlanet.population,
			residentes: onePlanet.residents,
			peliculas: onePlanet.films,
			creado: onePlanet.created,
			editado: onePlanet.edited,
			url: onePlanet.url
        }
        newResultES.push(jsonNewPlanetES)
    }
    return {
        status: 200,
        body: newResultES
    }; 
   } catch (error) {
    console.log(error)
   }                                                        
};

module.exports = {
    listarPlanetasSWAPI
};