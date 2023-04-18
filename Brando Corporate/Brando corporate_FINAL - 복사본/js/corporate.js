// $(function(){  // 제이쿼리 선언문 => $ 사인이 제이쿼리 라이브러리와 충돌성 있다.
//     console.log( $ );
// });

(function($, window, document){ // 내부변수


    // 객체 생성 : 변수의 중복을 피한다.
    const corperate = {
        init(){
            this.section4();
        },
        section4(){
            
            //Element 요소 선택자
            //선택자 중복을 피하기 위해서 반드시 해당 섹션 아이디를 앞에 표기
            const galleryBtn = $('#section4 .gallery-btn');//갤러리 이벤트 버튼\
            const imgBox = $('#section4 .img-box')

            const galleryBoxUl = $('#gallery-box ul');//갤러리 박스
            const galleryBoxUlLi = $('#gallery-box ul li'); //갤러리 리스트(목록):이미지박스
            

            
            let n = galleryBoxUlLi.length; //li 갯수 hidw 갯수 -  show 갯수 
            let cols = 4; //기본 4칸
            let rows = Math.ceil(n/cols); // 8개/4칸 = 2줄
            let winW = $(window).innerWidth();
            let imgW = winW/cols; //창너비 / 칸수 li너비
            let imgH = imgW*0.75; //이미지너비 * 0.75 li 높이
            let galboxH = imgH*rows; //갤러리박스 전체 높이
            
            let btnNumber = 0; //버튼 클릭시 전달되는 버튼번호

            ///로딩시 함수 호출실행 (버튼 번호 0번)
            galleryfn();
            galleryBtn.removeClass('on');
            galleryBtn.eq(btnNumber).addClass('on');
            //1.반응형 이벤트를 구현

            //$(window).scroll() //스크롤 값이 변경될때 이벤트 발생
            $(window).resize(function(){

                galleryfn();
            }); //크기 변경시 이벤트 발생


            //2.갤러리 함수

            function galleryfn(){
                //console.log('버튼번호', btnNumber);

                switch(btnNumber){
                    case 0:
                        n=8;
                        break;
                    case 1:
                        n=5;
                        break;
                    case 2:
                        n=6;
                        break;
                    case 3:
                        n=4;
                        break;
                    case 4:
                        n=7;
                        break;
                    default:
                }
                console.log('갤러리 리스트 갯수' , n);

            if($(window).innerWidth() >= 1200){
                cols = 4;
            }
            else if($(window).innerWidth() >= 991){
                cols = 3;
            }
            else if($(window).innerWidth() >= 768){
                cols = 2;
            } 
            else{
                cols = 1;
            }

            rows = Math.ceil(n/cols); 
            winW = $(window).innerWidth();
            imgW = winW/cols; 
            imgH = imgW*0.75; 
            galboxH = imgH*rows; 

            //3.갤러리 박스 높이 지정

            galleryBoxUl.css({height:galboxH});
            galleryBoxUlLi.css({width:imgW, height:imgH});//투랜지션 설정되어 있어서 animate() 충돌




            if(btnNumber===0){//ALL8
                //줌 아웃(zoom out)
                imgBox.removeClass('addZoom');//줌 효과 모두 초기화
                
                switch(cols){//변수 cols가 4인경우
                    case 4:
                            galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                            galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *2 }, 300);
                            galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *3 }, 300);
                    
                            galleryBoxUlLi.eq(4).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(5).stop().animate({top: imgH*1 , left: imgW *1 }, 300);
                            galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *2 }, 300);
                            galleryBoxUlLi.eq(7).stop().animate({top: imgH*1 , left: imgW *3 }, 300);
                        break;
                    case 3: //3인경우
                            galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                            galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *2 }, 300);
                    
                            galleryBoxUlLi.eq(3).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(4).stop().animate({top: imgH*1 , left: imgW *1 }, 300);
                            galleryBoxUlLi.eq(5).stop().animate({top: imgH*1 , left: imgW *2 }, 300);
                    
                            galleryBoxUlLi.eq(6).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(7).stop().animate({top: imgH*2 , left: imgW *1 }, 300);
    
                        break;
                    case 2://2인경우
                            galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                    
                            galleryBoxUlLi.eq(2).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(3).stop().animate({top: imgH*1 , left: imgW *1 }, 300);
                    
                            galleryBoxUlLi.eq(4).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(5).stop().animate({top: imgH*2 , left: imgW *1 }, 300);
                    
                            galleryBoxUlLi.eq(6).stop().animate({top: imgH*3 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(7).stop().animate({top: imgH*3 , left: imgW *1 }, 300);
                        break;
    
                        default: //그 외 다른 모든것 그밖에
                            galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(1).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(2).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(3).stop().animate({top: imgH*3 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(4).stop().animate({top: imgH*4 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(5).stop().animate({top: imgH*5 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(6).stop().animate({top: imgH*6 , left: imgW *0 }, 300);
                            galleryBoxUlLi.eq(7).stop().animate({top: imgH*7 , left: imgW *0 }, 300);
                     }
    
    
                    //줌 인(zoom in)
                    imgBox.eq(0).addClass('addZoom');
                    imgBox.eq(1).addClass('addZoom');
                    imgBox.eq(2).addClass('addZoom');
                    imgBox.eq(3).addClass('addZoom');
                    imgBox.eq(4).addClass('addZoom');
                    imgBox.eq(5).addClass('addZoom');
                    imgBox.eq(6).addClass('addZoom');
                    imgBox.eq(7).addClass('addZoom');
            }
           else if(btnNumber===1){//web5
               //줌 아웃(zoom out)
               imgBox.removeClass('addZoom');//줌 효과 모두 초기화

                //갤러리리스트포지션
                switch(cols){//변수 cols가 4인경우
                    case 4:

                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*0 , left: imgW *2 }, 300);
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*0 , left: imgW *3 }, 300);

                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                        break;
                    case 3: //3인경우
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*0 , left: imgW *2 }, 300);
                    
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*1 , left: imgW *1 }, 300);
    
                        break;
                    case 2://2인경우
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *1 }, 300);

                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *1 }, 300);

                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                        break;
    
                        default: //그 외 다른 모든것 그밖에
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*3 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*4 , left: imgW *0 }, 300);
                     }

                //줌 인(zoom in)
                //hide
                imgBox.eq(0).removeClass('addZoom');
                imgBox.eq(1).removeClass('addZoom');
                imgBox.eq(4).removeClass('addZoom');

                //show
                imgBox.eq(2).addClass('addZoom');
                imgBox.eq(3).addClass('addZoom');
                imgBox.eq(5).addClass('addZoom');
                imgBox.eq(6).addClass('addZoom');
                imgBox.eq(7).addClass('addZoom');


            }
           else if(btnNumber===2){//DESIGN6
            imgBox.removeClass('addZoom');//줌 효과 모두 초기화
                
            switch(cols){//변수 cols가 4인경우 013467 / 25
                case 4:
                    galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                    galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *2 }, 300);
                    galleryBoxUlLi.eq(4).stop().animate({top: imgH*0 , left: imgW *3 }, 300);
    
                    galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(7).stop().animate({top: imgH*1 , left: imgW *1 }, 300);

                    break;
                case 3: //3인경우
                    galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                    galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *2 }, 300);

                    galleryBoxUlLi.eq(4).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *1 }, 300);
                    galleryBoxUlLi.eq(7).stop().animate({top: imgH*1 , left: imgW *2 }, 300);

                    break;
                case 2://2인경우
                    galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *1 }, 300);

                    galleryBoxUlLi.eq(3).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(4).stop().animate({top: imgH*1 , left: imgW *1 }, 300);

                    galleryBoxUlLi.eq(6).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(7).stop().animate({top: imgH*2 , left: imgW *1 }, 300);
                    break;

                    default: //그 외 다른 모든것 그밖에
                    galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(1).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(3).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(4).stop().animate({top: imgH*3 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(6).stop().animate({top: imgH*4 , left: imgW *0 }, 300);
                    galleryBoxUlLi.eq(7).stop().animate({top: imgH*5 , left: imgW *0 }, 300);
                 }


                //줌 인(zoom in)
                 //hide
                imgBox.eq(2).removeClass('addZoom');
                imgBox.eq(5).removeClass('addZoom');

                 //show
                imgBox.eq(0).addClass('addZoom');
                imgBox.eq(1).addClass('addZoom');
                imgBox.eq(3).addClass('addZoom');
                imgBox.eq(4).addClass('addZoom');
                imgBox.eq(6).addClass('addZoom');
                imgBox.eq(7).addClass('addZoom');

            }
           else if(btnNumber===3){//BRANDING4

             //줌 아웃(zoom out)
             imgBox.removeClass('addZoom');//줌 효과 모두 초기화
                
             switch(cols){//변수 cols가 4인경우0 2 4 6
                 case 4:
                         galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                         galleryBoxUlLi.eq(4).stop().animate({top: imgH*0 , left: imgW *2 }, 300);
                         galleryBoxUlLi.eq(6).stop().animate({top: imgH*0 , left: imgW *3 }, 300);
    
                     break;
                 case 3: //3인경우
                        galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                        galleryBoxUlLi.eq(4).stop().animate({top: imgH*0 , left: imgW *2 }, 300);

                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
 
                     break;
                 case 2://2인경우
                        galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *1 }, 300);

                        galleryBoxUlLi.eq(4).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *1 }, 300);
                     break;
 
                     default: //그 외 다른 모든것 그밖에                         
                        galleryBoxUlLi.eq(0).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(2).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                        galleryBoxUlLi.eq(4).stop().animate({top: imgH*0 , left: imgW *2 }, 300);
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*0 , left: imgW *3 }, 300);
                  }
 
 
                 //줌 인(zoom in)

                 imgBox.eq(1).removeClass('addZoom');
                 imgBox.eq(3).removeClass('addZoom');
                 imgBox.eq(5).removeClass('addZoom');
                 imgBox.eq(7).removeClass('addZoom');

                 imgBox.eq(0).addClass('addZoom');
                 imgBox.eq(2).addClass('addZoom');
                 imgBox.eq(4).addClass('addZoom');
                 imgBox.eq(6).addClass('addZoom');

            }
           else if(btnNumber===4){//ADVERTISING6
             //줌 아웃(zoom out)
             imgBox.removeClass('addZoom');//줌 효과 모두 초기화
                
             switch(cols){//변수 cols가 4인경우
                 case 4:
                         galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                         galleryBoxUlLi.eq(4).stop().animate({top: imgH*0 , left: imgW *2 }, 300);
                         galleryBoxUlLi.eq(5).stop().animate({top: imgH*0 , left: imgW *3 }, 300);

                         galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(7).stop().animate({top: imgH*1 , left: imgW *1 }, 300);
                     break;
                 case 3: //3인경우
                        galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *1 }, 300);
                        galleryBoxUlLi.eq(4).stop().animate({top: imgH*0 , left: imgW *2 }, 300);

                        galleryBoxUlLi.eq(5).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                        galleryBoxUlLi.eq(6).stop().animate({top: imgH*1 , left: imgW *1 }, 300);
                        galleryBoxUlLi.eq(7).stop().animate({top: imgH*1 , left: imgW *2 }, 300);
 
                     break;
                 case 2://2인경우
                         galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(3).stop().animate({top: imgH*0 , left: imgW *1 }, 300);   

                         galleryBoxUlLi.eq(4).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(5).stop().animate({top: imgH*1 , left: imgW *1 }, 300);

                         galleryBoxUlLi.eq(6).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(7).stop().animate({top: imgH*2 , left: imgW *1 }, 300);
                     break;
 
                     default: //그 외 다른 모든것 그밖에
                         galleryBoxUlLi.eq(1).stop().animate({top: imgH*0 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(3).stop().animate({top: imgH*1 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(4).stop().animate({top: imgH*2 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(5).stop().animate({top: imgH*3 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(6).stop().animate({top: imgH*4 , left: imgW *0 }, 300);
                         galleryBoxUlLi.eq(7).stop().animate({top: imgH*5 , left: imgW *0 }, 300);
                  }
 
 
                 //줌 인(zoom in)
                 imgBox.eq(0).removeClass('addZoom');
                 imgBox.eq(2).removeClass('addZoom');


                 imgBox.eq(1).addClass('addZoom');
                 imgBox.eq(3).addClass('addZoom');
                 imgBox.eq(4).addClass('addZoom');
                 imgBox.eq(5).addClass('addZoom');
                 imgBox.eq(6).addClass('addZoom');
                 imgBox.eq(7).addClass('addZoom');
            }
            

            }
            
            //3.갤러리 버튼 클릭 이벤트 : '버튼마다 해당 이미지 리스트가 다르다' 를 구성
            //5개의 버튼 개채에 대한 배열처리 ->EACH 기본이 idx
            galleryBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        galleryBtn.removeClass('on');//버튼초기화 클래스
                        $(this).addClass('on');
                        btnNumber = idx;
                        galleryfn();
                    }
                })
            });
            
        }
    }

    corperate.init(); 

})(jQuery, window, document); 



