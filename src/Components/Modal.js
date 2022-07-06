import { useFetchEpisodes } from '../Utils/fetchData';

function Modal({ isModalOpen, setIsModalOpen, character }) {
    const closeModal = () => {
        setIsModalOpen(false);
    }

    const { episodes, loading, error } = useFetchEpisodes(character);

    return (
        <div className={isModalOpen ? "modal d-block" : "modal"} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow-lg border-2 border-primary overflow-auto" style={{ height: "17em" }}>
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">{character.name}</h5>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={closeModal} >Close</button>
                    </div>
                    <div className="modal-body">
                        <h6 className="card-title">Location: {character.location.name}</h6>
                        <h6 className="card-title">Status: {character.status}</h6>
                        <h6 className="card-title">Origin: {character.origin.name}</h6>
                        <h6 className="card-title fw-bold mt-3">Appears in {episodes.length} {episodes.length > 1 ? "episodes:" : "episode:"}</h6>
                        {!loading ?
                            (!error && (episodes.length > 0)
                                && 
                                (episodes.map(episode => (
                                    <h6 className="card-title" key={episode.id}>- Episode {episode.id} : {`"${episode.name}"`}</h6>
                                )))
                            ) : <h6 className='fw-bold mt-3'>Loading...</h6>
                        }
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal