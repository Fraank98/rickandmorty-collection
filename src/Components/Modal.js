import React from 'react'

function Modal({ isModalOpen, setIsModalOpen, location, status, origin, name }) {
    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <div className={isModalOpen ? "modal d-block" : "modal"} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow-lg border-2 border-primary">
                    <div className="modal-header">
                        <h5 className="modal-title">{name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <h6 className="card-title">Location: {location}</h6>
                        <h6 className="card-title">Status: {status}</h6>
                        <h6 className="card-title">Origin: {origin}</h6>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={closeModal} >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal