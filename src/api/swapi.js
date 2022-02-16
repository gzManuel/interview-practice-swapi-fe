import axios from "axios"

axios.defaults.baseURL=process.env.REACT_APP_SWAPI_URL;
export const getCharacter = async (number)=>{
    const result = await axios.get(`/api/character/${number}`);
    return result.data;
}


