import React from 'react';

const Slide = () => {
  return (
    <div>
      <div className="swiffy-slider slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible">
        <ul className="slider-container py-4">
          <li className="slide-visible">
            <div className="card shadow h-100">
              <div className="ratio ratio-16x9">
                <img src="../assets/img/photos/img7.webp" className="card-img-top" loading="lazy" alt="..." />
              </div>
              <div className="card-body p-3 p-xl-5">
                <h3 className="card-title h5">See the world</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </li>
          <li className="slide-visible">
            <div className="card shadow h-100">
              <div className="ratio ratio-16x9">
                <img src="../assets/img/photos/img8.webp" className="card-img-top" loading="lazy" alt="..." />
              </div>
              <div className="card-body p-3 p-xl-5">
                <h3 className="card-title h5">Tranquil locations far away</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
          <li>
            <div className="card shadow h-100">
              <div className="ratio ratio-16x9">
                <img src="../assets/img/photos/img9.webp" className="card-img-top" loading="lazy" alt="..." />
              </div>
              <div className="card-body p-3 p-xl-5">
                <h3 className="card-title h5">Road trip in the wilderness</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
          <li>
            <div className="card shadow h-100">
              <div className="ratio ratio-16x9">
                <img src="../assets/img/photos/img4.webp" className="card-img-top" loading="lazy" alt="..." />
              </div>
              <div className="card-body p-3 p-xl-5">
                <h3 className="card-title h5">To the hidden lake side</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
          <li>
            <div className="card shadow h-100">
              <div className="ratio ratio-16x9">
                <img src="../assets/img/photos/img5.webp" className="card-img-top" loading="lazy" alt="..." />
              </div>
              <div className="card-body p-3 p-xl-5">
                <h3 className="card-title h5">Up, up, up in the Air</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
          <li>
            <div className="card shadow h-100">
              <div className="ratio ratio-16x9">
                <img src="../assets/img/photos/img6.webp" className="card-img-top" loading="lazy" alt="..." />
              </div>
              <div className="card-body p-3 p-xl-5">
                <h3 className="card-title h5">A climber's birds view</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
        </ul>

        <button type="button" className="slider-nav" aria-label="Go left"></button>
        <button type="button" className="slider-nav slider-nav-next" aria-label="Go right"></button>

        <div className="slider-indicators">
          <button className="active" aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
        </div>
      </div>
    </div>
  );
}

export default Slide;
