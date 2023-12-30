// Import your images as necessary
import img1 from '../../assets/prizes/1.png';
import img2 from '../../assets/prizes/2.png';
import img3 from '../../assets/prizes/3.png';

import React, { ReactNode } from 'react';

import './Prizes.scss';



function Prizes() {
  return (
    <div className="prizes">
        <h1>Prizes</h1>

        <div className="prizes-container">
            <div className="prize">
                <img className='prize-image' src={img1} alt="Prize 1" />
                <h2>Prize 1</h2>
                <p>Prize 1 description</p>

                </div>
                <div className="prize">
                <img className='prize-image' src={img1} alt="Prize 1" />
                <h2>Prize 1</h2>
                <p>Prize 1 description</p>

                </div>
                <div className="prize">
                <img className='prize-image' src={img1} alt="Prize 1" />
                <h2>Prize 1</h2>
                <p>Prize 1 description</p>

                </div>
            </div>
     

    
    </div>
  );
}

export default Prizes;