import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faTwitterSquare, faYoutube, faFacebookSquare, } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faLocationArrow, faSortDown } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">



            <div className="col-md-2">

              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>Home</li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>Services</li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>Fashion stylist</li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}> Why Study At Fashion <span style={{ color: "rgb(214, 14, 114)" }}>Design</span>?</li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>Contact us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1 style={{ fontFamily: "Besley" }}>Fashion <span style={{ color: "rgb(214, 14, 114)", fontFamily: "Besley" }} >Design</span></h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>

                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>

                </div>
                <p className="mt-4 ">
                  <small style={{ fontFamily: "Besley" }}>
                    FeaturedLatest Education NewsExamsCollegesOpinionThe WorkplaceSubscribe
                    HomeExamEntrance Exams NewsThings you should know about Fashion Designing: Courses, colleges, entrance exam, scope, top recruiters.
                  </small>
                </p>


              </div>
            </div>




            <div className="col-md-5">
              <div className="right-footer-container">
                <h3 style={{ fontFamily: "Besley" }}>The Art Of Fashion <span style={{ color: "rgb(214, 14, 114)", fontFamily: "Besley" }}>Design</span> :</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Your Active Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                
                </div>
                <div className="map d-flex align-items-center justify-content-center">

                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <p style={{ height: "120px", textAlign: "center", fontWeight: "bold", padding: "30px", fontFamily: "Besley" }}><small> ©copyright  <span style={{ color: "rgb(214, 14, 114)" }}>Arti jha</span>@Fashion <span style={{ color: "rgb(214, 14, 114)" }}>Design</span> </small></p>

    </div>


  );
};

export default Footer;
