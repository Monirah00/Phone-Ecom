import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import DATA from './Data'
import Aos from 'aos'
import 'C:/Users/USER/Desktop/E-Comm--Update/my-app/node_modules/aos/dist/aos.css'

const Products = () => {
  useEffect(() => {
    Aos.init()
   },)
  const cartItem = (item) => {
    return(
      <div className="card mb-4 py-4 " key={item.id} style={{width: '18rem'}}  data-aos='fade-left'>
  <img src={item.img} className="card-img-top" alt={item.title} height='200px'  />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className='lead'>{item.Price}</p>
    <NavLink to ={`/Products/${item.id}`} className='btn btn-outline-primary'>Buy Now</NavLink>
    
  </div>
</div>
    )

  }
  return (
    <>
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2>PRODUCTS</h2>
          <hr />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-around">
            {DATA.map(cartItem)}
      </div>
    </div>
    </>
  )
}

export default Products