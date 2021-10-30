import React from 'react';
import './Popular.css';

const Popular = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <h2>Popular Tour</h2>
                <p>See our most popular tour</p>
            </div>
            <div id="popular" className="mb-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                    <div className="col px-5">
                        <div className="card h-100 border-0 rounded-0">
                        <img src="https://i.ibb.co/z8tZg86/Earth-and-sky-behind.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Paragliding</h5>
                            <p className="card-text">While paragliders range in prices from beginner gliders to advanced sports gliders. The average price of a paraglider can typically range from low $2,000's to $5,000, with the average mid range glider costing $3,500.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col px-5">
                        <div className="card h-100 border-0 rounded-0">
                        <img src="https://i.ibb.co/jr9PH54/Group-of-people-white-water-rafting-The-raft-goes-through-a-big-rapid-on-Koprulu-Canyon-near-Antalya.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Rafting</h5>
                            <p className="card-text">Rafting and whitewater rafting are recreational outdoor activities which use an inflatable raft to navigate a river or other body of water. ... Rafting on certain sections of rivers is considered an extreme sport and can be fatal, while other sections are not so extreme or difficult.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col px-5">
                        <div className="card h-100 border-0 rounded-0">
                        <img src="https://i.ibb.co/XsDpPPs/Hot-air-balloon.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Hot Air Balloning</h5>
                            <p className="card-text">Hot air ballooning is the activity of flying hot air balloons. ... Since the balloon moves with the direction of the winds, the passengers feel absolutely no wind, except for brief periods during the flight when the balloon climbs or descends into air currents of different direction or speed.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;