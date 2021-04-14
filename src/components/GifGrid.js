import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({ category }) => {


      const { data: images, loading } = useFetchGifs( category );
    
   
    
    return (
      <>


        <div className="card-grid">
            <h3 className="animate__animated animate__bounce">{ category } </h3>
          
          {loading && <p className="animate__animated animate__flash">loading</p> }
                
                {
                    images.map( img => (
                        <GifGriditem 
                        key={img.id}
                        { ...img }
                        />
                        ))
                    }

          
        </div>
        </>
    )
}
