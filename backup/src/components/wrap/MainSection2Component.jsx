import React from 'react';

function MainSection2Component(){
    return (
        <section id='section2'>
            <div className="container">
                <div className="gap">
                        <div className="title">
                            <h2>STAY ALL INCLUSIVE</h2>
                            <a href="!#"><span>VIEW MORE</span></a>
                        </div>
                        <div className="content">
                            <div className="s2-box">
                                <ul>
                                    <li>
                                        <div className='imgbox'>
                                            <a href="!#">
                                                <img src="./img/pizza.jpg" alt="" />
                                            </a>
                                        </div>
                                    </li>
                                    <li><h3>피자드림</h3></li>
                                    <li><p>숙박하고 덤으로 맛있는 화덕피자를 즐기세요.</p></li>
                                    <li><hr /></li>
                                    <li className='reserve'>

                                            <b>예약기간</b>
                                            <span>23.01.18 - 23.03.30</span>


                                    </li>
                                    <li className='reserve'>

                                        <br /> <br /> 
                                            <b>숙박기간</b>
                                            <span>23.01.18 - 23.03.30</span>

                                    </li>
                                </ul>
                            </div>
                            <div className="s2-box">
                                 <ul>
                                    <li>
                                        <div className='imgbox'>
                                            <a href="!#">
                                                <img src="./img/마이스위트달링_pkg-749x558.jpg" alt="" />
                                            </a>
                                        </div>
                                    </li>
                                    <li><h3>마이스위트달링</h3></li>
                                    <li><p>연인과 함께 달콤한 시간을 보내보세요.</p></li>
                                    <li><hr /></li>
                                    <li className='reserve'>

                                            <b>예약기간</b>
                                            <span>23.01.18 - 23.03.30</span>


                                    </li>
                                    <li className='reserve'>

                                        <br /> <br /> 
                                            <b>숙박기간</b>
                                            <span>23.01.18 - 23.03.30</span>

                                    </li>
                                </ul>
                            </div>
                            <div className="s2-box">
                                <ul>
                                    <li>
                                        <div className='imgbox'>
                                            <a href="!#">
                                                <img src="./img/봄캉스_pkg-837x558.jpg" alt="" />
                                            </a>
                                        </div>
                                    </li>
                                    <li><h3>봄캉스</h3></li>
                                    <li><p>바쁜 일상은 잠시 잊고 도심 속 여행을 떠나보세요.</p></li>
                                    <li><hr /></li>
                                    <li className='reserve'>

                                            <b>예약기간</b>
                                            <span>23.03.05 - 23.05.31</span>


                                    </li>
                                    <li className='reserve'>

                                        <br /> <br /> 
                                            <b>숙박기간</b>
                                            <span>23.03.05 - 23.05.31</span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection2Component;