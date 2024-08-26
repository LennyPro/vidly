import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';


const Like = (props) => {

    return (
        <div>
            <button className='btn btn-warning btn-sm' onClick={props.onClick}>
                <FontAwesomeIcon icon={props.liked ? faHeart : faHeartBroken} />
            </button>
        </div>
    );
}

export default Like;