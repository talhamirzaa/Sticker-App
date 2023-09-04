import React, { useState,useEffect } from 'react';
import StickerItem from './StickerItem';
import axios from 'axios';

export default function Sticker() {

    const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.mojilala.com/v1/stickers/trending?api_key=dc6zaTOxFJmzC");
        setJsonData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    

    fetchData();
  }, []);

  return (
    <>
    <div className="container my-3">
        <div className="mx-auto">
          <h2 style={{color:'purple',marginLeft:'30%'}}>Trending Stickers</h2>
        </div>
        <div className="row mx-2">
        {jsonData.data?.map((element) => {
            // console.log(element.images.fixed_height.width);
            return <div className="col-md-4" key={element.id}>
                <StickerItem img={element.images.fixed_height.url}></StickerItem>
            </div>
        })}
            

        
        </div>
      
    </div>
    </>
  )
}
