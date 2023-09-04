import React, { useState} from 'react';
import StickerItem from './StickerItem';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchSt.css';

export default function SearchSt() {


    let url='';
    const tkval=(event)=>{
    let sr=event.target.value;
    url='https://api.mojilala.com/v1/stickers/search?q='+sr+'&api_key=dc6zaTOxFJmzC';
    }


        const [jsonData, setJsonData] = useState([]);

        const fetchData = async () => {
            try {
              const response = await axios.get(url);
              //console.log(url);
              setJsonData(response.data);
            } catch (error) {
              console.log(error);
            }
          }


  return (
    <>
    <div className="container my-3">   
    
    <div className="input-group mb-3 mx-5">
          <input type="text" className="input-res" placeholder="Search Sticker here" onChange={tkval}/>
        <div className="input-group-append">
        <Link to="/SearchSt" className="btn btn-outline-success position-relative" onClick={fetchData}>Find</Link>
        </div>
        </div>

        <div className="row mx-2">
        {jsonData.data?.map((element) => {
            //console.log(typeof element.id);
            if(element.id===null)
            {
                return<div className="col-md-4">
                STICKER not found
            </div>
            
            }
            else {
                return<div className="col-md-4" key={element.id}>
                <StickerItem img={element.images.fixed_height.url}></StickerItem>
            </div>
            
            }
           
        })}

        
            

        
        </div>
    
        
      
    </div>
    </>
  )
}
