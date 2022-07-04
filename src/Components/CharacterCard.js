import {useState} from 'react';
import Modal from './Modal'
import { favorites } from '../Utils/storage';

function CharacterCard({ img, name, species, status, location, origin, id }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const enableModal = () => {
        setIsModalOpen(true);
    }
    const addFavorite = () => {
        favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
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
                        onClick={addFavorite}>
                        Add to favorites
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
