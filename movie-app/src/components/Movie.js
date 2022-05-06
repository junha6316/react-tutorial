import { Link } from "react-router-dom";


function Movie({id, coverImage, title, summary, genres}){
  
    
    return (
        <div>
          <img alt="movie cover image" src={coverImage} />
          <h2>
            <Link to={`/movies/${id}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map(g=><li key={g}>{g}</li>)}
          </ul>
        </div>
    )
}
export default Movie

