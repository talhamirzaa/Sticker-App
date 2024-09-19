import React from 'react'
//import {saveAs} from "file-saver";

export default function StickerItem(props) {

  //it sends url of sticker!//why
    const handleShareSticker = () => {
      const stickerUrl = props.img;
      const encodedStickerUrl = encodeURIComponent(stickerUrl);
      const whatsappUrl = `https://wa.me/?text=${encodedStickerUrl}`;

      window.open(whatsappUrl, '_blank');
      //saveAs(props.img, 'image.jpg') // put your image url here.
    }


  
  return (
    <>
    <div className="conatiner my-3">
    <div className="card" style={{width: "18rem",minHeight:"12rem"}}>
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
        <div className="d-grid gap-2 col-6 mx-auto position-relative">
            <button className="btn btn-outline-dark" type="button" onClick={handleShareSticker}><b>Share</b></button>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
