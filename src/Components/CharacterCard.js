import { useState } from 'react';
import Modal from './Modal'
import { updateArray, setItem, favorites, getItem } from '../Utils/storage';

function CharacterCard({ character, deleteItem }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);
    const [isFavoriteAlreadyAdded, setIsFavoriteAlreadyAdded] = useState(false);

    const enableModal = () => {
        setIsModalOpen(true);
    }

    const addFavorite = () => {
        if (getItem('favorites') === null) {
            updateArray(character.id);
            setItem('favorites', favorites);
            setIsFavoriteAdded(true);
            setTimeout(() => {
                setIsFavoriteAdded(false);
            }, 1500);
        }else {
            const array = JSON.parse(getItem('favorites'));

            if (array.includes(character.id)) {
                setIsFavoriteAlreadyAdded(true);
                setTimeout(() => {
                    setIsFavoriteAlreadyAdded(false);
                }, 1500);
            }else {
                setIsFavoriteAdded(true);
                array.push(character.id);
                setItem('favorites', array);
                setTimeout(() => {
                    setIsFavoriteAdded(false);
                }, 1500);
            }
        }
    }

    const remFavorite = () => {
        if (getItem('favorites') === null) {
            return
        }else {
            const array = JSON.parse(getItem('favorites'));
            const newArray = array.filter(item => item !== character.id);
            setItem('favorites', newArray);
        }
    }

    const toggleFavorite = () => {
        if(deleteItem){
            remFavorite();
        }else {
            addFavorite();
        }
    }

    return (
        <div className="card p-2 m-2 shadow-sm" style={{ width: "18rem" }}>
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{character.name}</h4>
                <h6 className="card-title">{character.species}</h6>
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
                        onClick={toggleFavorite}>
                        {deleteItem ? "Remove from favorites" : "Add to favorites"}
                    </button>
                </div>
                {
                    (isFavoriteAdded || isFavoriteAlreadyAdded) &&
                    <div className={`alert mt-3 py-2 mb-0 ${isFavoriteAlreadyAdded ? "alert-danger" : "alert-success" }`} role="alert">
                        {isFavoriteAlreadyAdded ? "Already added" : "Added to favorites"}
                    </div>
                }
                {
                    isModalOpen &&
                    <Modal
                        key={character.id}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        character={character}
                    />
                }
            </div>
        </div>
    )
}

export default CharacterCard
