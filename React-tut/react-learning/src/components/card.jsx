import React from 'react'

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgSrc} alt="" />
                    <div className="card_indo">
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title">{props.name}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card