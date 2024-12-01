import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Non-slip and Eco Friendly</p>
        <h3>Winter Sale</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src="/assets/gggg.png"className="hero-banner-image" width="600" alt="headphones"  />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Wacces Reversible Yoga Mat</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner