// import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';
import '../css/ImageList.css'


const ImageList = (props) => {
  const images = props.images.map(({image, id, nama} = image) => {
    console.log(id);
    return <ImageCard image={image} key={id} nama={nama} cart={props.cart} />;
  });

  return (
  <div className="image-list">{images}</div>
  );
};

export default ImageList;