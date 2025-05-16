import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'


function App() {
 
  const [products] = useState([
    {
      id: 1,
      name: '1985  Air Jordan #1 Retro',
      price: "8,900",
      description: 'Black and Red', 
      image:" https://th.bing.com/th/id/R.2d12eaf458deb36b2bc4f58ae3cc5eb0?rik=pupWzyHMe3O0CQ&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: '1986  Air Jordan #2 Retro',
      price: "6,899",
      description: 'No swoosh White/Red/Black',
      image:"https://3.bp.blogspot.com/-HFLtPoIy5SY/TalhJ79GCuI/AAAAAAAAAA0/Fwx-hsqTKwg/s1600/Air-Jordan-2-II-Retro-9.JPG",
    },
    {
      id: 3,
      name: '1988  Air Jordan #3 Retro',
      price: "3,500",
      description: 'First mid-cut sneaker Fire Red',
      image:"https://images.solecollector.com/complex/image/upload/bdaoaxe0asclis4cwtci.jpg",
    },
    {
    id: 4,
    name: '1989  Air Jordan #4 Retro',
    price: "2,500", 
    description: 'White Cement, Military Blue',
    image:"https://www.sneakers.fr/wp-content/uploads/2024/06/air-jordan-4-white-cement-2025-av.jpg",
  },
])
  return (
    <>
     <h1>Ecommerce Application</h1>

     <div>
<ProductList allProducts = {products}  />
      </div>
    </>
  )
}


export default App
