import React from 'react';

function Hero() {
  return ( 
    <div className = "container p-5 mb-5">
      <div className='row text-center'>
          <img src= 'Media/images/homeHero.png' alt="Home HeroImg" className='mb-5'/>

          <h1 className='mt-5'>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
          <button class="btn btn-primary btn-lg col-2 mx-auto mb-5">Signup now</button>

      </div>

    </div>
   );
}

export default Hero;