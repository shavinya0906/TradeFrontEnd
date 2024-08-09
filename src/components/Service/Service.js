import React from "react";
import './service.css';
import icon2 from './Icon (1) (1).svg';
import icon1 from './Icon (2).svg';
import pc1 from './pc (1).png';
import icon3 from './Icon (2) (1).svg';
import icon4 from './Icon (3).svg';
import gifFile from './video.gif'; 

function Service() {
    return (
        <section className="services_ pt-4">
            <div id="mmmmm" style={{padding: "30px"}}>
                <h6 className="text">Why Choose Us</h6>
                <h2 className="text2">
                    Reason For <span id="gradient-text">Choose Us</span>
                </h2>
                <div className="line">
                    <span className="divider"></span>
                </div>
                <div className="container-fluid">
                    <div className="row mb-3">
                    <div className="img-res"><img src={icon1} id="iconimg1-res" className="iconimg" alt="Icon 1" /></div>
                        <div className="transitionnnnnn col-lg-4 col-12" style={{ textAlign: "end", fontSize: "18px" }}>
                            <h5 className="head">Pass Free Account</h5>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum sint, voluptatem a provident veritatis error in.
                        </div>
                        <div className="col-lg-4 col-12 alignimg" id="alignimg">
                            <img src={icon1} id="iconimg" className="iconimg" alt="Icon 1" />
                            <img src={icon2} id="iconimg2" className="iconimg" alt="Icon 2" />
                        </div>
                        <div className="img-res"><img src={icon2} id="iconimg2-res" className="iconimg" alt="Icon 2" /></div>
                        
                        <div className="transitionnnnnn col-lg-4 col-12" style={{ fontSize: "18px", textAlign: "left" }}>
                            <h5 style={{ fontFamily: "'Poppins'", fontWeight: 700, textAlign: "left" }}>Easy To Start</h5>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut placeat beatae mollitia similique itaque fugit, iste ipsa
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-12"></div>

                        <div className="col-lg-4 col-12 alignimg" id="alignimg-pc">
                            <div className="position-relative">
                                <img src={pc1} id="pcimg" alt="PC" />
                                    <img
                                        src={gifFile}
                                        alt="GIF"
                                        className="gif-player"
                                        style={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
                                    />
                                </div>
                        </div>
                        
                        <div className="col-lg-4 col-12"></div>
                    </div>

                    <div className="row mt-3">
                    <div className="img-res"><img src={icon3} id="iconimg3-res" className="iconimg" alt="Icon 3" /></div>
                        <div className="transitionnnnnn col-lg-4 col-12" style={{ textAlign: "end", fontSize: "18px" }}>
                            <h5 className="head">Affordable Plans</h5>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum sint, voluptatem a provident veritatis error in, dolor nesciunt illum tenetur.
                        </div>
                        <div className="col-lg-4 col-12 alignimg" id="alignimg2">
                            <img src={icon3} id="iconimg3" className="iconimg" alt="Icon 3" />
                            <img src={icon4} id="iconimg4" className="iconimg" alt="Icon 4" />
                        </div>
                        <div className="img-res"><img src={icon4} id="iconimg4-res" className="iconimg" alt="Icon 4" /></div>
                        <div className="transitionnnnnn col-lg-4 col-12" style={{ fontSize: "18px", textAlign: "left" }}>
                            <h5 style={{ fontFamily: "'Poppins'", fontWeight: 700, textAlign: "left" }}>24/7 Support</h5>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aut placeat beatae mollitia similique itaque fugit, iste ipsa, pariatur ea ipsam do.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
