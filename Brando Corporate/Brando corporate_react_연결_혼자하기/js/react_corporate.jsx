function WrapComponent(){
    return(
        <div id="wrap">
            <SkipComponent/>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <GoComponent/>
        </div>
    )
}
    function SkipComponent (){
        return(
            <ul id="skip">
                <li><a href="#header">헤더바로가기</a></li>
                <li><a href="#main">메인바로가기</a></li>
                <li><a href="#footer">하단바로가기</a></li>
            </ul>
        )
    }
    function HeaderComponent (){
        return(
            <header id="header">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="logo">
                                <a href="#wrap" className="logo-btn" title="HOME">
                                    <img src="./img/home-classic-corporate-logo.png" alt=""/>
                                </a>
                            </div>
                            <nav id="right">
                                <ul>
                                    <li><a href="#section2" className="main-btn " title="ABOUT">ABOUT</a></li>
                                    <li><a href="#section4" className="main-btn" title="PORTFOLIO">PORTFOLIO</a></li>
                                    <li><a href="#section5" className="main-btn" title="SERVICES">SERVICES</a></li>
                                    <li><a href="#section9" className="main-btn" title="TESTIMONIAL">TESTIMONIAL</a></li>
                                    <li><a href="#section10" className="main-btn" title="BLOG">BLOG</a></li>
                                    <li><a href="#section11" className="main-btn" title="CONTACT">CONTACT</a></li>
                                </ul>
                            </nav>
                            <div id="mobileNav">
                                <a href="!#" className="mobile-btn">
                                    <i className="line line1"></i>
                                    <i className="line line2"></i>
                                    <i className="line line3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    function MainComponent (){
        return(
            <main id="main">
                <Section1Component/>
                <Section2Component/>
                <Section3Component/>
                <Section4Component/>
                <Section5Component/>
                <Section6Component/>
                <Section7Component/>
                <Section8Component/>
                <Section9Component/>
                <Section10Component/>
                <Section11Component/>
                <Section12Component/>
            </main>
        )
    }
    function Section1Component(){
            return(
                <section id="section1">
                    <div className="container">
                        <div className="gap">
                            <div className="content">
                                <ul>
                                    <li><h4>WE WORK HARD, WE PLAY HARD</h4></li>
                                    <li><h1>SALIENT IS DIGITAL<br/> BRILLIANCE</h1></li>
                                    <li><h3>CREATIVE SOLUTIONS TO IMPROVE YOUR BUSINESS</h3></li>
                                    <li><button>OUR SERVICES</button></li>
                
                                </ul>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
    function Section2Component(){
            return(
                <section id="section2">
                    <div className="container">
                        <div className="gap">
                            <div className="content">
                                <div className="right-box">
                                    <img src="./img/home-classic-corporate-left-img.png" alt=""/>
                                </div>
                                <div className="left-box">
                                    <ul>
                                        <h2>ABOUT US</h2>
                                        <h3>We've been crafting beautiful websites, launching stunning brands and making clients happy for years.</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. printing and typesetting industry.</h4>
                                        <button>OUR SERVICES</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
    function Section3Component(){
        return(
            <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="right">
                            <div className="col-gap-right">
                                <figure>
                                    <img src="./img/home-classic-corporate-parallax-img01-1.jpg" alt=""/>
                                </figure>
                            </div>
                        </div>
                        <div className="left">
                            <div className="col-gap-left">
                                <div className="up-box">
                                    <ul className="a">
                                        <li><h2><i className="icon-tools"></i></h2></li>
                                        <li><h3>PIXEL PERFECT DESIGN</h3></li>
                                        <li><p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem <br/>Ipsum has been the standard.</p></li>
                                    </ul>
                                    <ul className="b">
                                        <li><h2><i className="icon-document"></i></h2></li>
                                        <li><h3>FULL DOCUMENTATION</h3></li>
                                        <li><p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem <br/>Ipsum has been the standard.</p></li>
                                    </ul>
                                </div>
                                <div className="bottom-box">
                                    <ul className="c">
                                        <li><h2><i className="icon-pricetags"></i></h2></li>
                                        <li><h3>REASONABLE PRICING</h3></li>
                                        <li><p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem <br/>Ipsum has been the standard.</p></li>
                                    </ul>
                                    <ul className="d">
                                        <li><h2><i className="icon-megaphone"></i></h2></li>
                                        <li><h3>USER-FRIENDLY</h3></li>
                                        <li><p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem <br/>Ipsum has been the standard.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
        )
    }
    function Section4Component(){
            return(
                <section id="section4">
                    <div className="container">
                        <div className="gap">
                            <div className="title"><h2>PORTFOLIO</h2></div>
                            <div className="content">
                                <nav id="gallery-nav">
                                    <ul>
                                        <li><a href="!#" className="gallery-btn on">ALL</a></li>
                                        <li><a href="!#" className="gallery-btn">WEB</a></li>
                                        <li><a href="!#" className="gallery-btn">DESIGN</a></li>
                                        <li><a href="!#" className="gallery-btn">BRANDING</a></li>
                                        <li><a href="!#" className="gallery-btn">ADVERTISING</a></li>
                                    </ul>
                                </nav>
                                <div id="gallery-box">
                                    <ul>
                                        <li>
                                            <div className="col-gap">
                                                <figure className="img-box">
                                                    <img src="./img/portfolio-01-2.jpg" alt=""/>
                                                    <figcaption>
                                                        <h3>Herbal Beauty Salon</h3>
                                                        <h4>PHOTOGRAPHY</h4>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <figure className="img-box">
                                                    <img src="./img/portfolio-02-3.jpg" alt=""/>
                                                    <figcaption>
                                                        <h3>Pixflow Studio</h3>
                                                        <h4>Branding</h4>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <figure className="img-box">
                                                    <img src="./img/portfolio-03-1.jpg" alt=""/>
                                                    <figcaption>
                                                        <h3>Third Eye Glasses</h3>
                                                        <h4>Graphics</h4>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <figure className="img-box">
                                                    <img src="./img/portfolio-04-1.jpg" alt=""/>
                                                    <figcaption>
                                                        <h3>RedDot Media</h3>
                                                        <h4>Design</h4>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <figure className="img-box">
                                                    <img src="./img/portfolio-05-3.jpg" alt=""/>
                                                    <figcaption>
                                                        <h3>Banana Design</h3>
                                                        <h4>Design</h4>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <figure className="img-box">
                                                    <img src="./img/portfolio-06-2.jpg" alt=""/>
                                                    <figcaption>
                                                        <h3>Rubber Studio</h3>
                                                        <h4>Graphics</h4>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <figure className="img-box">
                                                    <img src="./img/portfolio-07-2.jpg" alt=""/>
                                                    <figcaption>
                                                        <h3>Kaya Skin Care</h3>
                                                        <h4>Photography</h4>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-gap">
                                                <figure className="img-box">
                                                    <img src="./img/portfolio-08-2.jpg" alt=""/>
                                                    <figcaption>
                                                        <h3>Tailoring Interior</h3>
                                                        <h4>Branding</h4>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
    function Section5Component(){
            return(
                <section id="section5">
                    <div className="container">
                        <div className="gap">
                            <div className="content">
                                <div className="title">
                                    <h2>SERVICES</h2>
                                </div>
                               <div className="left-right">
                                <div className="left">
                                    <figure>
                                        <img src="./img/home-classic-corporate-services-left-img.png" alt=""/>
                                    </figure>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li><h2>Beautifully handcrafted templates for your website</h2></li>
                                        <li>
                                            <div className="icon-text">
                                                <div><i className="fa fa-check"></i><p>Beautiful and easy to understand UI, professional animations</p></div>
                                                <div><i className="fa fa-check"></i><p>Theme advantages are pixel perfect design & clear code delivered</p></div>
                                                <div><i className="fa fa-check"></i><p>Present your services with flexible, convenient and multipurpose</p></div>
                                                <div><i className="fa fa-check"></i><p>Find more creative ideas for your projects</p></div>
                                                <div><i className="fa fa-check"></i><p>Unlimited power and customization possibilities</p></div>
                                            </div>
                                        </li>
                                        <li><button>OUR SERVICES</button></li>
                                    </ul>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
    function Section6Component(){
            return(
                <section id="section6">
                    <div className="container">
                        <div className="gap">
                            <div className="content">
                                <ul>
                                    <li>
                                        <div className="col-gap">
                                             <div className="box1">
                                                 <i className="icon-flag"></i>
                                                 <h3>WE'RE CREATIVE</h3>
                                                 <hr/>
                                                 <h4>Lorem Ipsum is simply<br/> dummy text of the printing</h4>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-gap">
                                            <div className="box2">
                                                    <i className="icon-clock"></i>
                                                    <h3>WE'RE PUNCTUAL</h3>
                                                    <hr/>
                                                    <h4>Lorem Ipsum is simply<br/> dummy text of the printing</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-gap">
                                            <div className="box3">
                                                    <i className="icon-heart"></i>
                                                    <h3>WE'RE RESPONSIBLE</h3>
                                                    <hr/>
                                                    <h4>Lorem Ipsum is simply<br/> dummy text of the printing</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="col-gap">
                                            <div className="box4">
                                                <i className="icon-chat"></i>
                                                <h3>WE'RE FRIENDLY</h3>
                                                <hr/>
                                                <h4>Lorem Ipsum is simply<br/> dummy text of the printing</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )
    }
    function Section7Component(){
            return(
                <section id="section7">
                    <div className="container">
                        <div className="gap">
                            <div className="content">
                                <ul>
                                    <li>
                                        <div className="box1">
                                            <span className="num">250</span>
                                            <h4>HAPPY CLIENTS</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="box2">
                                            <span className="num">165</span>
                                            <h4>PROJECT COMPLETED</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="box3">
                                            <span className="num">234</span>
                                            <h4>CUPS OF COFFEE</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="box4">
                                            <span className="num">95</span>
                                            <h4>AWARD WINNING</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
    function Section8Component(){
       return(
        <section id="section8">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="col-gap">
                                <p>We create premium<br/>designs &<br/> technology. we<br/> design brand,<br/> digital experience<br/> that engage the<br/> right customers.</p>
                            </div>
                        </div>
                        <div className="center-box">
                            <img src="./img/home-classic-personal-img-03.jpg" alt=""/>
                        </div>
                        <div className="right-box">
                            <div className="col-gap">
                                <ul>
                                    <li><h4>JQUERY- 4 YEARS EXPERIENCE</h4></li>
                                    <li><h4>WORDPRESS - 6 YEARS EXPERIENCE</h4></li>
                                    <li><h4>HTML5- 5 YEARS EXPERIENCE</h4></li>
                                    <li><h4>PHOTOGRAPHY- 6 YEARS EXPERIENCE</h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
       )
    }            
    function Section9Component(){
            return(
                <section id="section9">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>CLIENTS WORDS</h2>
                            </div>
                            <div className="content">
                                <div className="box123">
                                    <ul>
                                        <li>
                                           <div className="box1">
                                            <div className="img-box">
                                                <img src="./img/avtar9.jpg" alt=""/>
                                            </div>
                                            <div className="text-box">
                                                <ul>
                                                    <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.</p></li>
                                                    <li><h3>ALEXANDER SMITH - GOOGLE</h3></li>
                                                    <li><i className="fa fa-quote-left"></i></li>
                                                </ul>
                                            </div>
                                           </div> 
                                        </li>
                                        <li>
                                            <div className="box2">
                                                <div className="img-box">
                                                    <img src="./img/avtar10.jpg" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <ul>
                                                        <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.</p></li>
                                                        <li><h3>HERMAN MILLER - APPLE</h3></li>
                                                        <li><i className="fa fa-quote-left"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="box3">
                                                <div className="img-box">
                                                    <img src="./img/avtar11.jpg" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <ul>
                                                        <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.</p></li>
                                                        <li><h3>BRYAN JONHSON - YAHOO</h3></li>
                                                        <li><i className="fa fa-quote-left"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
    function Section10Component(){
            return(
                <section id="section10">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>LATEST BLOG</h2>
                            </div>
                            <div className="content">
                                <div className="box123">
                                    <ul>
                                        <li>
                                            <div className="box-1">
                                                <div className="img-box">
                                                <img src="./img/latest-blog-01.jpg" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <ul>
                                                        <li><h3><a href="!#">I LIKE THE BODY. I LIKE TO DESIGN <br/>EVERYTHING TO DO WITH THE BODY</a></h3></li>
                                                        <li> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting...</p></li>
                                                        <li><hr/></li>
                                                        <li><a href="!#">DECEMBER 14, 2017 </a>/ POSTED BY <a href="!#">HARESH</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="box-2">
                                                <div className="img-box">
                                                    <img src="./img/latest-blog-02.jpg" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <ul>
                                                        <li><h3><a href="!#">IRECOGNIZING THE NEED IS THE PRIMARY CONDITION FOR DESIGN</a></h3></li>
                                                        <li> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting...</p></li>
                                                        <li><hr/></li>
                                                        <li><a href="!#">DECEMBER 14, 2017 </a>/ POSTED BY <a href="!#">HARESH</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="box-3">
                                                <div className="img-box">
                                                    <img src="./img/latest-blog-03.jpg" alt=""/>
                                                </div>
                                                <div className="text-box">
                                                    <ul>
                                                        <li><h3><a href="!#">GET IN OVER YOUR HEAD AS OFTEN AND AS JOYFULLY AS POSSIBLE</a></h3></li>
                                                        <li> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting...</p></li>
                                                        <li><hr/></li>
                                                        <li><a href="!#">DECEMBER 14, 2017 </a>/ POSTED BY <a href="!#">HARESH</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
    function Section11Component(){
            return(
                <section id="section11">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <h2>CONTACT US</h2>
                            </div>
                            <div className="content">
                                <div className="left-box">
                                    <div className="col-gap">
                                        <ul>
                                            <li>
                                                <i className="icon-phone"></i>
                                                <div>
                                                    <h3>CALL US AT</h3>
                                                    <a href="!#">123-456-7890</a>
                                                </div>
                                            </li>
                                            <li>
                                                <i className="icon-map-pin"></i>
                                                <div>
                                                    <h3>580 Pitner Ave #2</h3>
                                                    <h4>Victoria, United States</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <i className="icon-envelope"></i>
                                                <div>
                                                    <h3>EMAIL US AT</h3>
                                                    <a href="!#">sales@domain.com</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="right-box">
                                    <div className="col-gap">
                                        <form name="message_form" id="formMessage" method="post" action="">
                                            <ul>
                                                <li>
                                                    <input type="text" name="name" id="name" placeholder="* YOUR NAME"/>
                                                </li>
                                                <li>
                                                    <input type="text" name="email" id="email" placeholder="* YOUR EMAIL"/>
                                                </li>
                                                <li>
                                                    <textarea name="message" id="message" placeholder="* YOUR MESSAGE"></textarea>
                                                </li>
                                                <li>
                                                    <button type="submit" className="submit-btn">SEND MESSAGE</button>
                                                </li>
                                                <li>
                                                    <h3>* PLEASE COMPLETE ALL FIELDS CORRECTLY</h3>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
    function Section12Component(){
            return(
                <section id="section12">
                    <div className="container">
                        <div className="gap">
                            <div className="content">
                                <div className="up">
                                    <figure><img src="./img/logo-personal-footer.png" alt=""/></figure>
                                </div>
                                <div className="middle">
                                    <p>RESPONSIVE & MULTIPURPOSE ONEPAGE WORDPRESS THEME</p>
                                </div>
                                <div className="bottom">
                                    <a href="!#"><i className="fa fa-facebook"></i></a>
                                    <a href="!#"><i className="fa fa-twitter"></i></a>
                                    <a href="!#"><i className="fa fa-dribbble"></i></a>
                                    <a href="!#"><i className="fa fa-youtube-play"></i></a>
                                    <a href="!#"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
            )
    }
        
    function FooterComponent (){
        return(
            <footer id="footer">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="foot">
                                <p>&copy; 2022 BRANDO IS PROUDLY POWERED BY THEMEZAA.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    function GoComponent (){
        return(
            <div id="go">
                <a href="#wrap" className="gotop"><i className="fa fa-angle-up"></i></a>
            </div>
        )
    }


    ReactDOM.render(
        <WrapComponent/>,
        document.getElementById('root')
    );