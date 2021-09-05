import axios from "axios";

const  mainLink = "http://localhost:3000"

export const fetchLeagues = async () => {
    const { data } = await axios.get(`${mainLink}/leagues`)
    return data
}

export const fetchClubTrophy = async (league) => {
    const { data } = await axios.get(`${mainLink}/${league}`)
    return data
}