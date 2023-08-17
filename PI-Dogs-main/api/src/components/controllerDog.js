const {Dog, Temperament} = require('../db');
const {
    API_KEY
} = process.env;
const axios = require('axios')


const dogsByDB = async () => {
    const dogsDB = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through : {attributes: {}}
        }
    })
    const response = dogsDB.map((dog) => {
        const alltemperament = dog.temperaments.map((t) => {
             return t.name 
        })
        const temperamentDog = alltemperament.join(', '); 
        const dogs = {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            height: dog.height,
            weight: dog.weight,
            temperament: temperamentDog,
            year: dog.years,
            origin: dog.origin,
            breed_group : dog.breedGroup ? dog.breedGroup : 'not breed group',
        }
        return dogs
    })
    return response
};

const dogsByAPI = async () => {
    const dogsAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const response = dogsAPI.map( (dog) => {
        const dogs = {
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            height: dog.height.metric,
            weight: dog.weight.metric !== 'NaN' ? dog.weight.metric : '0 - 0',
            temperament: dog.temperament, 
            year: dog.life_span,
            origin: dog.origin,
            breed_group : dog.breed_group ? dog.breed_group : 'not breed group', 

        }
        return dogs
    })
    return response
};

const getDogsAll = async (name) => {
    const dogsDB = await dogsByDB();
    const dogsApi = await dogsByAPI();

    const allDogs =  [...dogsDB,...dogsApi];
    if (name) {
        const filterDog = allDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
        if(filterDog.length) {
            return filterDog
        }
        throw new Error('that dog with that name was not found')
    } else {
        return allDogs
    }
};

const getDogsById = async (id) => {
    if(isNaN(id)) {
        const dogsDB = await dogsByDB();
        const dogsAPI = await dogsByAPI();

        const allDogs = [...dogsDB,...dogsAPI];
        const dog = allDogs.filter(dog => dog.id == id) 
        
        
        // const dog = await Dog.findByPk(id);

        // const dogDetailBD = {
        //     id: dog.id,
        //     name: dog.name,
        //     image: dog.image,
        //     height: dog.height,
        //     weight: dog.weight, 
        //     year: dog.years,
        //     temperament: dog.temperament,
        //     origin: dog.origin ? dog.origin : 'unknown origin',
        //     breedGroup : dog.breedGroup ? dog.breedGroup : 'unknown Group' 
        // }

        // return dogDetailBD;
        return dog;
    };

    
    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`);
    
    const dogDetailAPI= {
        id: data.id,
        name: data.name,
        image: 'https://cdn2.thedogapi.com/images/' + data.reference_image_id + '.jpg',
        height: data.height.metric,
        weight: data.weight.metric, 
        year: data.life_span,
        temperament: data.temperament ? data.temperament : 'unknown temperament',
        origin: data.origin ? data.origin : 'unknown origin',
        breed_group : data.breed_group ? data.breed_group : 'unknown Group', 

    }
    return dogDetailAPI

};

const createDogsDB = async (name, image, heightMin, heightMax, weightMin, weightMax, year, temperament, origin, breedGroup,) => {

    const height = heightMin + ' - ' + heightMax;
    const weight = weightMin + ' - ' + weightMax;
    const years = year + ' years';

    const createDogs = await Dog.create({name, image, height, weight, years, temperament, origin, breedGroup});

    const allTemperament = await Temperament.findAll({
        where: {name : temperament}
    });

    createDogs.addTemperament(allTemperament);
    return 'Se ha creado un Perro exitosamente';
}

module.exports = {
    getDogsAll,
    getDogsById,
    createDogsDB,
}