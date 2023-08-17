import { CLEAN_DETAIL, DETAILS_DOG, FILTER_API_DB, FILTER_WEIGHT, GET_DOGS, PAGINATE, TEMP_DOGS , FILTER_TEMPERAMENT} from "../Actions/actions-types";



let initialState = {
    allDogs: [],
    allDogsBackUp: [],
    temperamentDogs: [],
    currentPage: 0,
    filterDogs: [],
    detailDog: [],

}

function rootReducer(state = initialState, action){
    
    const ItemsForPage = 8; 
    
    switch(action.type){

        case GET_DOGS:
            return {
                ...state,
                allDogs: [...action.payload].splice(0, ItemsForPage),
                allDogsBackUp: action.payload,
                filterDogs: action.payload
            }
        case TEMP_DOGS:
            console.log('temperament')
            return {
                ...state,
                temperamentDogs: action.payload,
            }
        case PAGINATE:
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const firstIndex = action.payload === 'next' ? next_page * ItemsForPage : prev_page * ItemsForPage
            if(action.payload === 'next' && firstIndex >= state.filterDogs.length) {
                return {...state}
            }
            else if(action.payload === 'prev' && prev_page < 0) {
                return {...state}
            }
            return {
                ...state,
                allDogs: [...state.filterDogs].splice(firstIndex, ItemsForPage),
                currentPage: action.payload === 'next' ? next_page : prev_page
            }
        case FILTER_API_DB: 
            if(action.payload === 'Api') {
                const filterApi = [...state.filterDogs].filter((dogs) => typeof dogs.id === 'number')
                return {
                    ...state,
                    allDogs: [...filterApi].slice(0, ItemsForPage),
                    currentPage: 0
                }
            }
            else if(action.payload === 'Db') {
                const filterDB = [...state.filterDogs].filter((dogs) => typeof dogs.id === 'string')
                return {
                    ...state,
                    allDogs: [...filterDB].slice(0, ItemsForPage),
                    currentPage: 0
                }
            }
            return {
                ...state,
                allDogs: [...state.allDogsBackUp].slice(0, ItemsForPage),
                filterDogs: [...state.allDogsBackUp],
                currentPage: 0
            }
        case FILTER_WEIGHT: 
            if(action.payload === 'Min') {
                const allWeightOrder = [...state.allDogs].sort((min, max) => {
                    const menor = min.weight.split('-');
                    const mayor = max.weight.split('-');
                    if(parseInt(menor[0]) > parseInt(mayor[0])) return 1;
                    if(parseInt(menor[0]) < parseInt(mayor[0])) return -1;
                    return 0
                })
                return {
                    ...state,
                    allDogs: [...allWeightOrder].slice(0, ItemsForPage),
                    filterDogs: allWeightOrder,
                    currentPage: 0
                }
            } else if(action.payload === 'Max') {
                const allWeightOrder = [...state.allDogs].sort((min, max) => {
                    const menor = min.weight.split('-');
                    const mayor = max.weight.split('-');
                    if(parseInt(menor[0]) > parseInt(mayor[0])) return -1;
                    if(parseInt(menor[0]) < parseInt(mayor[0])) return 1;
                    return 0
                })
                return {
                    ...state,
                    allDogs: [...allWeightOrder].slice(0, ItemsForPage),
                    filterDogs: allWeightOrder,
                    currentPage: 0
                }
            } else {
                return {
                    ...state,
                    allDogs: [...state.allDogsBackUp].slice(0, ItemsForPage),
                    filterDogs: [...state.allDogsBackUp],
                    currentPage: 0
                }
            }
        case FILTER_TEMPERAMENT:
            if(action.payload === 'All') {
                return {
                    ...state,
                    allDogs: [...state.filterDogs].slice(0, ItemsForPage),
                    filterDogs: [...state.allDogsBackUp],
                }
            }
            const temperamentSelect = state.filterDogs.filter((t) => t.temperament && t.temperament.includes(action.payload))

            return {
                ...state,
                allDogs: [...temperamentSelect].slice(0, ItemsForPage),
                filterDogs: [...temperamentSelect],
                currentPage: 0
            }
        case DETAILS_DOG:
            return {
                ...state,
                detailDog: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                detailDog: []
            }
        default: 
            return state;
    }
};

export default rootReducer;