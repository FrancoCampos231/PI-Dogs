const { temperamentApi } = require("../components/contollerTemperament");


const getAllTemperament = async (req, res) => {
    try {
        const response = await temperamentApi()
        res.status(200).json(response);
    } catch (error) { 
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getAllTemperament,
}