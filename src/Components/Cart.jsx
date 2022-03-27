import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deletItem } from '../redux/action'

const Cart = () => {
    const state = useSelector((state) => state.additem)
    const dispatch = useDispatch()
    const cartHandel = (item) => {
        dispatch(deletItem(item))
    }
    const CartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className="container">
                    <button className='btn-close float-end py-4' onClick={()=> cartHandel(cartItem)} aria-label='close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4 py-4">
                            <img src={cartItem.img} alt={cartItem.title} height='200px' width='200px' />
                        </div>
                        <div className="col-md-4 py-4 ">
                            <h3> {cartItem.title}</h3>
                            <p className='lead fw-bold' >Price : {cartItem.Price}</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    const emptyCart = () =>{
        return(
            <div className="container px-4 my-5 bg-light">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 py-5">
                        <h2>Your Cart Empty</h2>
                    </div>
                </div>

            </div>
        );
    }

    const CheckoutBtn = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to ='/checkout' className='btn btn-outline-primary w-50 mx-auto mb-5'>
                        Proceed To CheckOut

                    </NavLink>
                </div>
            </div>
        );
    }
    return (
        <>
            {
                state.length === 0 && emptyCart()
            }
            {
                state.length !== 0 && state.map(CartItems)
            }
            {
                state.length !== 0 && CheckoutBtn()
            }
        </>
    )
}

export default Cart