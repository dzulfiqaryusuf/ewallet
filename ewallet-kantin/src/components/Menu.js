import React, {useState} from 'react';
import axios from 'axios';
import ImageList from './ImageList'
const Menu = () => {
  // const addToCart = (product) => {
  //   setCart([...cart, product])
  // }
  // const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      image: 'https://cdn.yummy.co.id/content-images/images/20200211/XsHnWjNBKvp2NqkybyhF9pmxYcqedra1-31353831333932393239d41d8cd98f00b204e9800998ecf8427e_800x800.jpg', id:1, nama:'Balabala',
    }, 
    {
      image: 'https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/208206/208206_p?pgw=1&pgwact=1', id:2, nama:'Coca Cola',
    },
    {
      image: 'https://img-global.cpcdn.com/recipes/eaaa8c708e97aaa0/751x532cq70/indomie-kuah-telor-bayam-foto-resep-utama.jpg', id:3, nama:'Indomie Telor'}
  ])

  return (
    <div className="menu">
      <ImageList images={products}/>
    </div>
  )
  
}

export default Menu;