const { getDogsAll, getDogsById, createDogsDB } = require('../components/controllerDog')

const getAllDogs = async (req, res) => {
    const {name} = req.query;
    try {
        const response = await getDogsAll(name)
        res.status(200).json(response);
    } catch (error) { 
        res.status(400).json({error: error.message})
    }
};

const getDogId = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await getDogsById(id)
        res.status(201).json(response); 
    } catch (error) {
        res.status(401).json({error: error.message});
    }
};

const createDogs = async (req, res) => {
    const {name, image, height, weight, years, temperament, origin, breedGroup} = req.body;

    const response = await createDogsDB(name, image, height, weight, years, temperament, origin, breedGroup);
    try {
        res.status(202).json(response);
    } catch (error) {
        res.status(402).json({error: error.message})
    }
};




module.exports = {
    getAllDogs,
    getDogId,
    createDogs,
};