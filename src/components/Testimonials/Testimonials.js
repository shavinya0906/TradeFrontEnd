import React, { useState } from 'react';
import './Testimonials.css';
import starImage from './start_img.png'

const testimonialsData = [
    {
      name: "Wilson Bergson ABC",
      position: "Marketing manager Director",
      review: "Lorem, ipsum dolor sit amet consectet minus modi distinctio! Doloribus aliquam iure officiis provident tempore quibusdam facilis consequatur.",
      img: "img/Ellipse 20.png",
      stars: Array(3).fill(starImage)
    },

    {
      name: "John Smith GHI",
      position: "Developer Engineer",
      review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "img/Ellipse 20.png",
      stars: Array(5).fill(starImage)
    },
    {
      name: "Wilson Bergson JKL",
      position: "Marketing manager",
      review: "Loctio! Doloribus aliquam iure officiis provident tempore quibusdam facilis consequatur.",
      img: "img/Ellipse 20.png",
      stars: Array(2).fill(starImage)
    },
    {
      name: "Jane Doe MNO",
      position: "Project Manager",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      img: "img/Ellipse 20.png",
      stars: Array(5).fill(starImage)
    },
    {
      name: "John Smith PQR",
      position: "Developer",
      review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "img/Ellipse 20.png",
      stars: Array(4).fill(starImage)
    },
    {
      name: "Wilson Bergson STU",
      position: "Marketing manager",
      review: "em impedit minus modi distinctio! Doloribus aliquam iure officiis provident tempore quibusdam facilis consequatur.",
      img: "img/Ellipse 20.png",
      stars: Array(5).fill(starImage)
    },
    {
      name: "Jane Doe VWX",
      position: "Project Manager",
      review: "Lorem ipsum dolor sit amet,suere erat a ante.",
      img: "img/Ellipse 20.png",
      stars: Array(4).fill(starImage)
    },
    {
      name: "John Smith YZ",
      position: "Developer Software",
      review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "img/Ellipse 20.png",
      stars: Array(2).fill(starImage)
    }
  ];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(3);

  const handleLeftClick = () => {
    setStartIndex(prev => (prev - 3 < 0 ? 0 : prev - 3));
  };

  const handleRightClick = () => {
    setStartIndex(prev => (prev + 3 >= testimonialsData.length ? prev : prev + 3));
  };

  const isLeftDisabled = startIndex === 0;
  const isRightDisabled = startIndex + 3 >= testimonialsData.length;

  return (
    <section className="container4">
      <h6 className="center-text">Review's</h6>
      <h3 className="journal">My Trading Journal <span id="revi">Reviews</span></h3>
      <div className="row justify-content-center">
        {testimonialsData.slice(startIndex, startIndex + 3).map((testimonial, index) => (
          <div className="col-xl-4 col-lg-4 d-flex justify-content-center" key={index}>
            <div className="review">
              <div className="img-svg">
                {testimonial.stars.map((star, idx) => (
                  <img src={star} alt="Star" key={idx} />
                ))}
              </div>
              <div className="inneralign">
                <div className="row">
                  <div className="col-4"><img src={testimonial.img} alt={testimonial.name} /></div>
                  <div className="col-8">
                    <span className="testimonial-name">{testimonial.name}</span><br />
                    <span className="position">{testimonial.position}</span>
                  </div>
                </div>
                <div className="review-text">{testimonial.review}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row navigation-icons">
        <div className={`col-5 col-md-5 ${isLeftDisabled ? 'disabled' : ''}`} id="lefticon" onClick={!isLeftDisabled ? handleLeftClick : undefined}>
          <img src="img/iconleft.png" alt="Left Icon" style={{ cursor: isLeftDisabled ? 'not-allowed' : 'pointer' }} />
        </div>
        <div className="col-2 col-md-2"><hr className="divider4" /></div>
        <div className={`col-5 col-md-5 ${isRightDisabled ? 'disabled' : ''}`} id="righticon" onClick={!isRightDisabled ? handleRightClick : undefined}>
          <img src="img/iconright.png" alt="Right Icon" style={{ cursor: isRightDisabled ? 'not-allowed' : 'pointer' }} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
