import {useState} from 'react';
import Modal from './Modal'
import { updateArray, setItem, favorites, getItem } from '../Utils/storage';

function CharacterCard({ img, name, species, status, location, origin, id, deleteItem }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const enableModal = () => {
        setIsModalOpen(true);
    }
    const addFavorite = () => {
        if (getItem('favorites') === null) {
            updateArray(id);
            setItem('favorites', favorites);
        }
        else {
            const array = JSON.parse(getItem('favorites'));
            array.push(id);
            setItem('favorites', array);
        }
    }
    const remFavorite = () => {
        if (getItem('favorites') === null) {
            return
        }
        else {
            const array = JSON.parse(getItem('favorites'));
            const newArray = array.filter(item => item !== id);
            setItem('favorites', newArray);
        }
    }

    return (
        <div className="card p-2 m-2 shadow-sm" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6 className="card-title">{species}</h6>

                {/* Button trigger modal */}
                <div className='d-flex justify-content-between'>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={enableModal}>
                        More info
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={deleteItem ? remFavorite : addFavorite}>
                        {deleteItem ? "Remove from favorites" : "Add to favorites" }
                    </button>
                </div>

                {
                    isModalOpen &&
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        location={location}
                        status={status}
                        origin={origin}
                        name={name}
                    />
                }
            </div>
        </div>
    )
}

export default CharacterCard
