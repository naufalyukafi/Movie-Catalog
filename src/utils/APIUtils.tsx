import { API_KEY, BASE_URL } from "../store"
import axios from "axios"
import { useParams } from "react-router-dom"
import { IdDetailMovie } from "../types"

export const useRequestMovie = () => {
    const { id } = useParams<IdDetailMovie>()
    const getAllMovie = async () => await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
    const getIdMovie = async () => await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    return { getAllMovie, getIdMovie }
}

