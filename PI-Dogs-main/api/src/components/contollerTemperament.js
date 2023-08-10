const {Temperament} = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;


const temperamentApi = async () => {
    const dogsAPI = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;

    const group = [];

    const allTemperament = dogsAPI.map((dog) => {
        if(dog.temperament) {
        const temperament = dog.temperament.split(', ');
            const newArray = temperament.map((t) => {
                if(!group.includes(t)) {
                    group.push(t)
                }
            })
        }


    });
    const temperamentInDB = await Temperament.findAll();
    if(temperamentInDB.length === 0) {
        const createTemperamentDB = group.map((g) => {
            Temperament.create({name : g});
        });
    }
    return temperamentInDB;
};



module.exports = {
    temperamentApi,
}