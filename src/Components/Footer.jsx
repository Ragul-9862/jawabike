import React from 'react'
export default function Footer() {
  return (
    <div>
     <footer className="footer-wrapper common-padding">
  <div className="container-fluid common-spacing">
    <div className="row g-5 pt-3">
      <div className="col-lg-3">
        <div className="footer-logo">
          <img className="img-fluid" src={require("../Components/assets/Footer/footer-logo.png")} alt="logo" />
        </div>
      </div>
      <div className="col-lg-5">
        <div className="footer-content text-center">
          <h5>Follow Us On</h5>
          <div className="social d-flex justify-content-center">
            <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/fb.png")} alt /></a>
            </div>
            <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/ins.png")} alt /></a>
            </div>
            <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/x.png")} alt /></a>
            </div>
            <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/print.png")} alt /></a>
            </div>
            <div className="social-icons">
              <a href="#"><img src={require("../Components/assets/Footer/in.png")} alt /></a>
            </div>
          </div>
          <div className="contact pt-4">
            <ul>
              <li><a href="tel: +91 9876543210"><i className="bi bi-telephone-fill" />+91 9876543210
                </a>
              </li>
              <li><a href="mailto: jawayezdi@gmail.com"><i className="bi bi-envelope-open" />jawayezdi@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="map-location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.182446141198!2d76.9926243757052!3d11.02493425455943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8597229082379%3A0xa05c486340ffa872!2sCLOUD%20DREAMS!5e0!3m2!1sen!2sin!4v1706746238044!5m2!1sen!2sin" width="100%" height={200} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
