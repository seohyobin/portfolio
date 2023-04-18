import React from 'react';
import $ from 'jquery';

export default function MainSection4Component(){

     const [state,setState] = React.useState();

    //  React.useEffect(()=>{
    //     let setId=0;
    //     let cnt=0;
    
    
    //             //1.메인슬라이드
                
    //             function mainSlide(){
    //                 $('.slide-wrap-sec4').stop().animate({left:`${-1542*cnt}px`}, 3000,function(){
    //                     if(cnt===5) cnt=0;//처음이면 처음으로
    //                     if(cnt<0) cnt=4; //첫번째 왼쪽으로 이동하면 마지막슬라이드로 이동
    //                     $('.slide-wrap-sec4').stop().animate({left:`${-1542*cnt}px`},'ease',0);//처음으로 리턴
    //                 });
    //             }
    
    //             //2-1.다음카운트함수
    
    //             function nextCount(){
    //                 cnt++;
    //                 mainSlide();
    //             }
    //             //2-2.이전카운트함수       
    //             function prevCount(){
    //                 cnt--;
    //                 mainSlide();
    //             }
    
    //     //3.자동타이머함수
    //     function autoTimer(){
    //         setId=setInterval(nextCount, 3000);
    //         console.log(setId);
    //     }
    //     autoTimer();
    
      
    
    
    //    })
    return (
        <section id='section4'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="text-box">
                            <ul>
                                <li><h2>ONLY ENJOY IT</h2></li>
                                <li>
                                    <span>THAI RESTAURANT<i>  |  </i></span>
                                    <span>RESTAURANT<i>  |  </i></span>
                                    <span>BRUNCH CAFE & BAKERY<i>  |  </i></span>
                                    <span>BAR</span>
                                </li>
                                <li><span className='view'>VIEW MORE</span></li>
                            </ul>
                        </div>
                        <div className="slide-box">
                            <div className="col-gap">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap-sec4">
                                            <li className='slide slide1'></li>
                                            <li className='slide slide2'></li>
                                            <li className='slide slide3'></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide-bottom">
                            <div className="bottom-container">
                                <div className="bottom-gap">
                                    <div className="bottom-box123">
                                        <div className="bottom-box">
                                           <hr />
                                            <a href="!#">LF SAINT AUGUSTIN</a>
                                        </div>
                                        <div className="bottom-box">
                                            <hr />
                                            <a href="!#">2F COLLABO</a>
                                        </div>
                                        <div className="bottom-box">
                                            <hr />
                                            <a href="!#">2F MOONTAN BAR</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

