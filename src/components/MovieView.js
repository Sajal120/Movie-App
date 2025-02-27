import { useState, useEffect} from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";

const MovieView = () => {
   const  {id} = useParams()
   console.log(id)

   const [moviewDetails, setMovieDetails] = useState({})
   const [ isLoading, setIsLoading] = useState(true)

   useEffect( () => {
        console.log('make api request')
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=50638a80e3b7831348ccb63a3f6776dd&language=en-US`)
            .then(response =>response.json()) 
            .then(data=> {
                setMovieDetails(data)
                setIsLoading(false)
            })  
   }, [id])

   function renderMovieDetails() {
        if(isLoading) {
                return <Hero text = "Loading..." />
        }

        if(moviewDetails) {
            
            
             const posterPath = `https://image.tmdb.org/t/p/w500${moviewDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${moviewDetails.backdrop_path}`
            
            return (

                   
                    <>
                         <Hero text={moviewDetails.original_title} backdrop={backdropUrl}/>
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={posterPath} alt=".." className="img-fluid shadow rounded"/>
                                </div>
                                <div className="col-md-9">
                                    <h2>{moviewDetails.original_title}</h2>
                                    <p className="lead">
                                        {moviewDetails.overview}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </>
                    
            )

        }
   }

  return renderMovieDetails();
};

export default MovieView;
