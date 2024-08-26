import { useState } from "react";
import { getMovies } from "./services/fakeMovieService";

export default function MovieFunction() {

    const [movies, setMovies] = useState(getMovies());
    console.log(movies);

    const handleDelete = (movie) => {
        let newMovieArray = movies.filter((m) => m._id !== movie._id);
        setMovies(newMovieArray);
    }

    if (movies.length === 0) return <h3 className="m-4">There are no movies in the data base</h3>

    return (

        <div>

            <h3>Function Component</h3>
            <h5>Number of movies in the data base: {movies.length}</h5>

            <table className="table">

                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Genre</td>
                        <td>Stock</td>
                        <td>Rate</td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>
                    {movies.map((movie) => {
                        return (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => handleDelete(movie)}>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>
    )
}