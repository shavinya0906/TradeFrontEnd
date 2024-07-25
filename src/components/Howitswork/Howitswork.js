import React from 'react'
import './Howitswork.css';
import yt from './yt.png';

const Howitswork = () => {

    const openYouTubeVideo = () => {
        window.open("https://youtu.be/DRAcPbYPNVk?si=OTrPMNvd8vJwRpki", "_blank");
      };

  return (
    <div>
        {/*Review Section*/}
        <section className="reviews-responsive">
            <h6 style={{textAlign: 'center', color: 'rgba(110, 110, 110, 1)', paddingTop: 50}}>How it Works</h6>
            <h1 className="term"><span id="startclr">Start Trading</span> on Your Terms</h1>
            <div className='container ml-5'>
            <div className="row">
                <div className="col-md-3">
                <div className="row">
                    <div className="col-md-5 big-circle" style={{cursor:"pointer"}}>
                        <div className="circle-res text-center">
                            <p style={{position: 'absolute', paddingBottom: '5%', fontSize: 18}}>Open <br /> Your Account
                            </p>
                            <p style={{position: 'absolute', paddingTop: '25%', fontSize: 18, color: 'rgba(110, 110, 110, 1)'}}>
                            Beguiled demoralized <br /> all...</p>
                            <div className="circle_small2-res">
                                <h2 className="step">Step 01</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-5 small-circle-res">
                        <div className="circle_small-res"><i className="bi bi-arrow-down-short" /></div>
                    </div>
                </div>
                </div>
                <div className="col-md-3" style={{cursor:"pointer"}}>
                <div className="row">
                    <div className="col-md-5 big-circle">
                    <div className="circle-res text-center">
                        {/* <p style={{position: 'absolute', paddingBottom: '5%', fontSize: 18}}>Select a <br /> currency
                        pair</p> */}
                        <p style={{ position: 'absolute', paddingBottom: '5%', fontSize: 18 }}>
                            Select a <br /> currency pair
                            </p>
                        <p style={{position: 'absolute', paddingTop: '25%', fontSize: 18, color: 'rgba(110, 110, 110, 1)'}}>
                        Minus id maxime <br /> placeat...</p>
                        <div className="circle_small2-res">
                        <h2 className="step">Step 02</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-5 small-circle-res">
                    <div className="circle_small-res"><i className="bi bi-arrow-down-short" /></div>
                    </div>
                </div>
                </div>
                <div className="col-md-3" style={{cursor:"pointer"}}>
                <div className="row">
                    <div className="col-md-5 big-circle">
                    <div className="circle-res text-center">
                        <p style={{position: 'absolute', paddingBottom: '5%', fontSize: 18, color: 'rgba(27, 30, 49, 1)'}}>
                        Analyze <br /> the market</p>
                        <p style={{position: 'absolute', paddingTop: '25%', fontSize: 18, color: 'rgba(110, 110, 110, 1)'}}>
                        Itaque earu rerum <br /> tenetur...</p>
                        <div className="circle_small2-res">
                        <h2 className="step">Step 03</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-5 small-circle-res">
                    <div className="circle_small-res"><i className="bi bi-arrow-down-short" /></div>
                    </div>
                </div>
                </div>
                <div className="col-md-3 big-circle" style={{cursor:"pointer"}}>
                <div className="circle-res text-center">
                    <p style={{position: 'absolute', paddingBottom: '5%', fontSize: 18}}>Trade <br /> &amp; make money</p>
                    <p style={{position: 'absolute', paddingTop: '25%', fontSize: 18, color: 'rgba(110, 110, 110, 1)'}}>
                    perferen doloribus <br />asperio...</p>
                    <div className="circle_small2-res">
                    <h2 className="step">Step 04</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="playbtn" style={{cursor:"pointer"}} onClick={openYouTubeVideo}>
                <img src={yt} onClick={openYouTubeVideo} /> &nbsp;&nbsp;<span style={{fontSize: 22}} onClick={openYouTubeVideo}>
                    How to
                Trade ?</span>
            </div>
        </div>
  </section>
























  <section className="reviews">
            <h6 style={{textAlign: 'center', color: 'rgba(110, 110, 110, 1)', paddingTop: 50}}>How it’s Work</h6>
            <h1 className="term"><span id="startclr">Start Trading</span> on Your Terms</h1>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                <div className="row">
                    <div className="col-md-5" style={{cursor:"pointer"}}>
                    <div className="circle text-center">
                        <p style={{position: 'absolute', paddingBottom: '5%', fontSize: 18}}>Open <br /> Your Account
                        </p>
                        <p style={{position: 'absolute', paddingTop: '3%', fontSize: 18, color: 'rgba(110, 110, 110, 1)'}}>
                        Beguiled demoralized <br /> all...</p>
                        <div className="circle_small2">
                        <h2 className="step">Step 01</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-5">
                    <div className="circle_small"><i className="bi bi-arrow-right-short" /></div>
                    </div>
                </div>
                </div>
                <div className="col-md-3" style={{cursor:"pointer"}}>
                <div className="row">
                    <div className="col-md-5">
                    <div className="circle text-center">
                        <p style={{position: 'absolute', paddingBottom: '5%', fontSize: 18}}>Select a <br /> currency
                        pair</p>
                        <p style={{position: 'absolute', paddingTop: '3%', fontSize: 18, color: 'rgba(110, 110, 110, 1)'}}>
                        Minus id maxime <br /> placeat...</p>
                        <div className="circle_small2">
                        <h2 className="step">Step 02</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-5">
                    <div className="circle_small"><i className="bi bi-arrow-right-short" /></div>
                    </div>
                </div>
                </div>
                <div className="col-md-3" style={{cursor:"pointer"}}>
                <div className="row">
                    <div className="col-md-5">
                    <div className="circle text-center">
                        <p style={{position: 'absolute', paddingBottom: '5%', fontSize: 18, color: 'rgba(27, 30, 49, 1)'}}>
                        Analyze <br /> the market</p>
                        <p style={{position: 'absolute', paddingTop: '3%', fontSize: 18, color: 'rgba(110, 110, 110, 1)'}}>
                        Itaque earu rerum <br /> tenetur...</p>
                        <div className="circle_small2">
                        <h2 className="step">Step 03</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-5">
                    <div className="circle_small"><i className="bi bi-arrow-right-short" /></div>
                    </div>
                </div>
                </div>
                <div className="col-md-3" style={{cursor:"pointer"}}>
                <div className="circle2 text-center">
                    <p style={{position: 'absolute', paddingBottom: '5%', fontSize: 18}}>Trade <br /> &amp; make money</p>
                    <p style={{position: 'absolute', paddingTop: '3%', fontSize: 18, color: 'rgba(110, 110, 110, 1)'}}>
                    perferen doloribus <br />asperio...</p>
                    <div className="circle_small2">
                    <h2 className="step">Step 04</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="playbtn" style={{cursor:"pointer"}} onClick={openYouTubeVideo}>
                <img src={yt} onClick={openYouTubeVideo} /> &nbsp;&nbsp;<span style={{fontSize: 22}} onClick={openYouTubeVideo}>
                    How to
                Trade ?</span>
            </div>
        </div>
  </section>
    </div>
  )
}

export default Howitswork;
