import React from 'react';

export default function MainSection1Component(){
    return (
        <section id='section1'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        {/* <div id="videoHotel">
                            <iframe className='main-video' src="https://player.vimeo.com/video/744069451?background=1"
                            width="1920px" height="1080px" title= "조용하고 프리이빗한 호텔" frameborder="0" allow='autoplay; fullscreen'></iframe>
                        </div> */}
                    </div>
                    <div className="content">
                        <div className="box12">
                            <div className="box1">
                                <h1>조용하고 프라이빗한 호텔</h1>
                            </div>
                            <div className="box2">
                                <form name='s1-form' id='s1Form' method='post' action="./form.php" >
                                    <ul>
                                        <li>
                                            <div className='reserve-form-label'>
                                                <span>CHECK IN</span>
                                            </div>
                                            <div className='reserve-form-input'>
                                                <input type="date" name='form' class='form_reser' value='날짜선택' />
                                            </div>
                                        </li>
                                        <li>
                                            <div className='reserve-form-label'>
                                                <span>CHECK O</span>
                                            </div>
                                            <div className='reserve-form-input'>
                                                <input type="date" name='form' class='form_reser' value='날짜선택' />
                                            </div>
                                        </li>
                                        <li>
                                            <div className='reserve-form-label'>
                                                <span>ROOM</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='reserve-form-label'>
                                                <span>ADULT</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='reserve-form-label'>
                                                <span>CHILDREN</span>
                                            </div>
                                        </li>
                                        <li>
                                            <button>SEARCH</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
};
