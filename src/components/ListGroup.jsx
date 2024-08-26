
const ListGroup = (props) => {


    return (
        <div>

            <ul className="list-group">


                {props.genres.map((genre) =>

                    <li
                        key={`${genre._id}${genre.name}`}
                        className={genre === props.selectedGenre ? "list-group-item active" : "list-group-item"}
                        onClick={() => props.onGenreSelect(genre)}
                    >

                        {genre.name}

                    </li>)}

            </ul>

        </div>
    );
};



export default ListGroup;