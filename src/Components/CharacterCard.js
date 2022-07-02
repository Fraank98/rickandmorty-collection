import React from 'react'
import Modal from './Modal'

function CharacterCard({ img, name, species, status, location, origin }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const enableModal = () => {
        setIsModalOpen(true);
    }
    return (
        <div className="card p-2 m-2 shadow-sm" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6 className="card-title">{species}</h6>

                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" onClick={enableModal}>
                    More info
                </button>
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