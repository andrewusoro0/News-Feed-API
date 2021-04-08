import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
     <div class="cards-footer">
        <article class="card-footer">
         <header>
             <h2>Comment Section</h2>
         </header>    
         <textarea id="w3review" name="w3review" rows="4" cols="50" className="cardFooter"></textarea>
         <div class="content-footer">
             <button  className='commentbtn' >Success</button>
             <p> Read and Comment on daily news </p>
         </div>
        </article>
    </div>
    )
}

export default Footer
