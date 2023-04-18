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
                                <li className='slide slide1'><img src="./img/main_rooms_1369x954_01.jpg" alt="" /></li>
                                <li className='slide slide2'><img src="./img/main_rooms_1369x954_02.jpg" alt="" /></li>
                                <li className='slide slide3'><img src="./img/main_rooms_1369x954_03.jpg" alt="" /></li>
                                <li className='slide slide4'><img src="./img/main_rooms_1369x954_04.jpg" alt="" /></li>
                                <li className='slide slide5'><img src="./img/main_rooms_1369x954_05.jpg" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-box">
                    <h2>HEALING <br />IN THE PLACE</h2>
                    <p>편안한 휴식이 있는 공간</p>
                    <ul className='span-box'>
                        <li className='tag'><span>DELUXE</span></li>
                        <li className='tag'><span>SPA</span></li>
                        <li className='tag'><span>SUITE</span></li>
                        <li className='tag'><span></span></li>
                    </ul>
                    <span></span>
                </div>
            </div>
          </div>
        </section>
    );
};

