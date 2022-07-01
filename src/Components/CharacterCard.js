import React from 'react'

function CharacterCard({img, name, species}) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-title">{species}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-primary mx -2">More info</button>
                </div>
        </div>
    )
}

export default CharacterCard