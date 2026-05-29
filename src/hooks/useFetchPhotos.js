
import { useState, useEffect } from "react"

function useFetchPhotos() {
    const [photos, setPhotos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchData() {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000)) 
                const response = await fetch("https://picsum.photos/v2/list?limit=30")
                if (!response.ok) throw new Error("Failed to fetch photos")
                const data = await response.json()
                console.log(data);
                setPhotos(data)
            } catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return { photos, loading, error }
}

export default useFetchPhotos