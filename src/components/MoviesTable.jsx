import React from 'react';
import Like from './Like';


export default function MoviesTable(props) {

    return (
        <React.Fragment>
            <table className='table'>
                <thead>
                    <tr>
                        <td><b>Title</b></td>
                        <td><b>Genre</b></td>
                        <td><b>Stock</b></td>
                        <td><b>Rate</b></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>

                <tbody>

                    {props.allMovies.map((movie) => {
                        return (
                            <tr key={movie._id}>

                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>

                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => props.onLike(movie)}
                                    />
                                </td>

                                <td>
                                    <button
                                        onClick={() => { props.onDelete(movie) }}
                                        className='btn btn-danger btn-sm'
                                    >delete
                                    </button>
                                </td>

                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </React.Fragment>
    )
}