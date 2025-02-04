import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError("") // Reset error before request

            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch data");
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, loading, error }
}

export default useFetch
