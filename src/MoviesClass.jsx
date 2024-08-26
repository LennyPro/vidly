import React, { Component } from 'react';

import { getMovies } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService';
import { paginate } from './utils/paginate';


import ListGroup from './components/ListGroup';
import Pagination from './components/Pagination';
import MoviesTable from './components/MoviesTable';


class MovieClass extends Component {

    state = {
        movies: [],
        genres: [],
        liked: false,
        pagesSize: 4,
        currentPage: 1,
    }

    componentDidMount() {

        const genres = [{ name: 'All Genres' }, ...getGenres()]

        this.setState({
            movies: getMovies(),
            genres,
        })
    }

    handleGenreSelect = (genre) => {
        this.setState({
            selectedGenre: genre,
            currentPage: 1,
        });
    }

    handleLike = (movie) => {
        let movies = [...this.state.movies]; // copy original array []
        let index = movies.indexOf(movie); // define 'index' of each movie inside the newly created array []
        movies[index] = { ...movies[index] }; // spread newly created array by 'index' (like 'key')?
        movies[index].liked = !movies[index].liked; // toggle the 'like' property
        this.setState({ movies }); // set the state
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handleDelete = (movie) => {
        let movies = this.state.movies.filter((m) => m._id !== movie._id);
        this.setState({ movies });
    }

    render() {

        if (this.state.movies.length === 0) return <h3 className='m-4'>There are no movies in the data base!</h3>

        let filteredMovies = this.state.selectedGenre && this.state.selectedGenre._id
            ? this.state.movies.filter((m) => m.genre._id === this.state.selectedGenre._id)
            : this.state.movies;


        const allMovies = paginate(filteredMovies, this.state.currentPage, this.state.pagesSize);

        return (

            <div className='row m-5'>


                <div className="col-2">
                    <ListGroup
                        genres={this.state.genres}
                        onGenreSelect={this.handleGenreSelect}
                        selectedGenre={this.state.selectedGenre}
                    />
                </div>


                <div className="col">

                    <h4>Number of movies left in data base {filteredMovies.length}</h4>

                    <MoviesTable
                        allMovies={allMovies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                    />

                    <Pagination
                        itemsCount={filteredMovies.length}
                        pagesSize={this.state.pagesSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>

            </div>

        );
    }
}

export default MovieClass;