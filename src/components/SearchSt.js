import React, { useState} from 'react';
import StickerItem from './StickerItem';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchSt.css';

export default function SearchSt() {


    let url='';
    console.log(url)
    const tkval=(event)=>{
    let sr=event.target.value;
    url='https://api.mojilala.com/v1/stickers/search?q='+sr+'&api_key=dc6zaTOxFJmzC';
    }


        const [jsonData, setJsonData] = useState([]);
        const [totalCount, setTotalCount]= useState(0)

        const fetchData = async () => {
            try {
              const response = await axios.get(url);
              //console.log(url);
              setJsonData(response.data);
              setTotalCount(response.data.pagination.total_count);
              console.log("count:",totalCount); // This will log the total_count value
            } catch (error) {
              console.log(error);
            }
          }
          


  return (
    <>
    <div className="container my-3">   
    
    <div className="input-group mb-3 mx-auto d-flex flex-row justify-content-center">
          <input type="text" className="input-res" placeholder="Search Sticker here" onChange={tkval}/>
        <div className="input-group-append">
        <Link to="/SearchSt" className="btn btn-outline-secondary position-relative" onClick={fetchData}>Find</Link>
        </div>
        </div>

        <div className="row mx-2">
        {jsonData.data?.map((element) => {
            console.log(typeof totalCount);
            if(totalCount===0)
            {
              alert("not found")
                return<div className="container">
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
