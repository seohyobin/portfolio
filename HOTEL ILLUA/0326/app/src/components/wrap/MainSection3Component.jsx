import React from 'react';

export default function MainSection3Component(){
    return (
        <section id='section3'>
          <div className="container">
            <div className="gap">
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className='slide slide1'></li>
                                <li className='slide slide2'></li>
                                <li className='slide slide3'></li>
                                <li className='slide slide4'></li>
                                <li className='slide slide5'></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-box">
                    <h2>HEALING <br />IN THE PLACE</h2>
                    <p>편안한 휴식이 있는 공간</p>
                    <ul className='span-box'>
                        <li className='tag'><span>STANDARD <i>  |  </i></span></li>
                        <li className='tag'><span>DELUXE<i>  |  </i></span></li>
                        <li className='tag'><span>SPA<i>  |  </i></span></li>
                        <li className='tag'><span>SUITE</span></li>
                    </ul>
                    <span>VIEW MORE</span>
                </div>
            </div>
          </div>
        </section>
    );
};

