import React, {useEffect, useState} from 'react'

function Hero() {

    const sentences = [
        'Battle out your Mobile Application Development Skills',
        "Sri lanka's first ever Mobile App Development Hackathon",
        'A project by IEEE student branch of UCSC',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);
    const skipDelay = 15;
    const speed = 70;

    useEffect(() => {
        const handleAnimation = () => {
            if (forwards) {
                if (offset >= sentences[currentIndex].length) {
                    setSkipCount(skipCount + 1)
                    if (skipCount === skipDelay) {
                        setForwards(false);
                        setSkipCount(0);
                    }
                }
            } else if (offset === 0) {
                setForwards(true);
                setCurrentIndex((currentIndex + 1) % sentences.length);
            }

            if (skipCount === 0) {
                forwards ? setOffset(offset + 1) : setOffset(offset - 1);
            }
        };

        const timerId = setTimeout(handleAnimation, speed);
        return () => clearTimeout(timerId); // Clean up on unmount
    }, [currentIndex, offset, forwards, skipCount]);


    return (
      <div className="site-section site-hero">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-10">
                      <span className="d-block mb-3 caption" data-aos="fade-up" data-aos-delay="100">By IEEE Student Branch of UCSC</span>
                      <h1 className="d-block mb-4" data-aos="fade-up" data-aos-delay="200">MADHACK 2023</h1>
                      <span className=" mb-5 sentence" data-aos="fade-up" data-aos-delay="300">{sentences[currentIndex].substring(0, offset)}</span>
                      <br className={"d-block"}></br>
                      <a href="#" className="btn-custom mt-5" data-aos="fade-up" data-aos-delay="400"><span>Buy Tickets</span></a>
                  </div>
              </div>
          </div>
      </div>
    // <div>
    //                 <main className="main-content">
    //             <div className="text-buttons">
    //                 <h1>Battle out your Mobile App Development Skills</h1>
    //                 <div className="buttons">
    //                     <button className="register-btn">Register Now</button>
    //                     <button className="learn-more-btn">Learn More</button>
    //                 </div>
    //             </div>
    //             <div className="hero-image">
    //                 {/* <img src={hero} alt="Hero" /> */}
    //             </div>
    //         </main>
    //
    // </div>
  )
}

export default Hero
