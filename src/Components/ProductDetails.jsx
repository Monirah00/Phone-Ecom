import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import DATA from './Data'
import { useDispatch } from 'react-redux'
import { additem,deletItem } from '../redux/action'

const ProductDetails = () => {
    const [cartBtn,setCartBtn] = useState('Add to Cart')
    const ProductId = useParams();
    const ProductDetails = DATA.filter(x => x.id == ProductId.id)
    const Product = ProductDetails[0];

    const dispatch = useDispatch()

    const cartBtnHandeler = (Product) => {

        if(cartBtn === 'Add to Cart'){
            dispatch(additem(Product))
            setCartBtn('Remove The Cart')
        }
        else{
            dispatch(deletItem(Product))
            setCartBtn("Add to Cart")
        }

    }
  
  return (
    <>
    <div className="container py-4 px-4">
        <div className="row">
            <div className="col-lg-6 col-sm-12 py-5 px-5">
                <img src={Product.img} alt={Product.title} height='400px' width='400px' />
            </div>
            <div className="col-lg-6 col-sm-12">
                <h2>{Product.title}</h2>
                <hr />
                <h3>Price : {Product.Price}</h3>
                <p>{Product.Desc}</p>

                <button className='btn btn-outline-primary' onClick={() => cartBtnHandeler(Product)}>{cartBtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails