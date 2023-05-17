import React from 'react'



export default function Reviews() {
    return (
        <>
            <div className='reviews-section'>
                <div className='reviews-section-heading'>
                    <h1>What Our Customer Says❓ </h1>
                </div>
              
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                                <div className="carousel-caption  d-block">
                                    <p>“This place is great! Atmosphere is chill and cool, staff is also really friendly.They know what they're doing and what they're talking about and you can tell making the customers happy is their main priority.”</p>
                                    <h5>-Mia Khalifa</h5>
                                </div>
                        </div>
                        <div className="carousel-item">
                                <div className="carousel-caption  d-md-block">
                                    <p> “This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.”</p>
                                    <h5>-Jonny Sins</h5>
                                </div>
                        </div>
                        <div className="carousel-item">
                                <div className="carousel-caption  d-md-block">
                                    <p>“Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it's worth checking them out.”</p>
                                    <h5>-Sunny Leone</h5>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="false"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
