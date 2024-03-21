import React from 'react';

const Homebtn = () => {
  return (
    <div className='flex max-full'>
      <div className="video-container flex m-2 p-2">
        <iframe 
      
          src="https://www.youtube.com/embed/yeXzB53Xu08?si=bxTGStgw1-Y1EynK" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        ></iframe>
      </div>
      <div className="video-container  flex m-2 p-2">
        <iframe 
          
          src="https://www.youtube.com/embed/yeXzB53Xu08?si=bxTGStgw1-Y1EynK" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        ></iframe>
      </div>
     
    
    </div>
  );
}

export default Homebtn;
