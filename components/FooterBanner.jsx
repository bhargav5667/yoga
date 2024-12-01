import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>30 nov - 7 Dec</p>
        </div>
        <div className="right">
          <p>Non-slip and Eco Friendly</p>
          <h3>winter Sale</h3>
          <p>Best Yoga Mats in the Market</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src="/assets/www.png" width="470" className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner