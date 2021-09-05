import axios from "axios";
import Leagues from "../api/leagues.json"

export const fetchLeagues = async () => {
    const { data } = await axios.get(Leagues)
    return data
}

// export const fetchDailyData = async (country) => {
//     const { data } = await axios.get(`${mainLink}/dayone/country/${country}`)
//     return data
// }