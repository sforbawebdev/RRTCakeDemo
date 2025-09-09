import React from 'react';

const StorySection = ({ stats, content }) => {
  return (
    <div className="fz-about-area">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-6">
            <div className="fz-about-images">
              <div className="row g-0">
                <div className="col-sm-8 col-6">
                  <div className="fz-about-images-left">
                    <div className="fz-about-images-left-img">
                      <img src={stats.images.left} alt="About Left" />
                    </div>

                    <div className="fz-about__infos mt-30">
                      <div className="fz-about__members">
                        <span className="fz-about__members-amount">
                          {stats.activeCustomers}
                        </span>
                        <span className="fz-about__members-label">
                          {stats.activeCustomerLabel}
                        </span>
                      </div>

                      <ul className="fz-about__members-img">
                        {stats.customerImages.map((imgSrc, i) => (
                          <li key={i}>
                            <img src={imgSrc} alt={`Customer ${i + 1}`} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-6 align-self-end align-self-xxs-start">
                  <div className="fz-about-images-right">
                    <div className="fz-about-images-right-img">
                      <img src={stats.images.right} alt="About Right" />
                    </div>

                    <div className="fz-about-images-right__card">
                      <div className="fz-about-images-right__card-wrapp">
                        <div className="fz-about-images-right__card-inner">
                          <span className="fz-about-images-right__card-text">Since From</span>
                          <span className="fz-about-images-right__card-year">
                            {stats.yearFounded}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="fz-about-right-content">
              <h4 className="fz-about-right-title">{content.heading}</h4>
              <p className="fz-about-right-descr">{content.description}</p>

              <div className="row">
                <div className="col-xl-5 col-md-4 col-sm-5 col-7 col-xxs-12">
                  <div className="fz-about-right-img">
                    <img src={content.rightImage} alt="Person" />
                  </div>
                </div>
                <div className="col-sm-7 col-md-8 col-xl-7">
                  <div className="fz-about-right-list">
                    <ul>
                      {content.checklist.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="fz-about-author">
                <span className="fz-about-author-sign-img">
                  <img src={content.author.signature} alt="Signature" />
                </span>

                <div className="fz-about-author-intro">
                  <span className="fz-about-author-img">
                    <img src={content.author.image} alt={content.author.name} />
                  </span>
                  <div className="fz-about-author-intro__txt">
                    <h5 className="fz-about-author-name">{content.author.name}</h5>
                    <span className="fz-about-author-label">{content.author.title}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
