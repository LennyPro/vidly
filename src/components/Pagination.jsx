import _ from 'lodash';
import propTypes from 'prop-types';

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.itemsCount / props.pagesSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1); // given a range of numbers, creats an array sequentially // + 1 because method does not include the last number itself


    return (

        <nav>
            <ul className="pagination">

                {pages.map((page) =>

                    <li key={page}
                        className={page === props.currentPage ? 'page-item active' : 'page-item'}>

                        <a className="page-link" onClick={() => props.onPageChange(page)}>{page}</a>


                    </li>)}

            </ul>
        </nav>
    );
}


Pagination.propTypes = {
    itemsCount: propTypes.number.isRequired,
    pagesSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired,
}



export default Pagination;