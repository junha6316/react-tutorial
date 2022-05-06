import {useParams} from "react-router-dom"
import { useEffect, useState} from "react"

function Detail(){
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => setMovie(json.data))
        setLoading(false)
    },[])

    return (
        <div>
            {loading ? <h1>Loading..</h1> : <h1>{movie.title}</h1>}
        </div>
    )
}

export default Detail