import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)", objectFit: "contain" }}></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?noodles" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)", objectFit: "contain" }}></img>

                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?mojito" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)", objectFit: "contain" }}></img>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
// bootstrap <command />
// npm i bootstrap-dark-5 bootstrap react-bootstrap