import Link from 'next/link'
import React from 'react'


const StoreSection = ({storeSectionData}) => {
  return (
    <div className="fz-about-store-area">
      <div className="container">
        {storeSectionData.map((store) => (
          <div key={store.id} className="fz-about-single-store">
            <div className="row gy-3 gy-sm-4 align-items-center">
              {store.imageFirst && (
                <div className="col-xl-6 col-lg-6">
                  <div className="fz-about-store-img">
                    <img src={store.image} alt={`Store ${store.id}`} />
                  </div>
                </div>
              )}

              <div className="col-xl-6 col-lg-6">
                <div className="fz-about-store-content">
                  <h4 className="fz-about-store-title">{store.title}</h4>
                  <p>{store.description}</p>
                  <div className="fz-about-right-list">
                    <ul>
                      {store.checklist.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href={store.link.href} className="fz-1-banner-btn fz-about-store-btn">
                    {store.link.label}
                  </Link>
                </div>
              </div>

              {!store.imageFirst && (
                <div className="col-xl-6 col-lg-6">
                  <div className="fz-about-store-img">
                    <img src={store.image} alt={`Store ${store.id}`} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreSection
