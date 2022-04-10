import React from "react";
import { AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai';
import {BsFillBagCheckFill} from 'react-icons/bs'
import Link from "next/link";

const Checkout = ({cart,clearCart,addToCart, removeFromCart,subTotal}) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="my-5 font-bold text-center text-3xl">Checkout</h1>
      <h2 className="text-xl font-semibold">1.Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="  px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="  px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="  px-2 w-full">
          <div className=" mb-4">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">
              Address
            </label>
            <input
              type="text"
            />
            <textarea name="address" id="address" cols="15" rows="2"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="mx-auto flex my-4">
        <div className="  px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
            phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="  px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
            city
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
      <div className="  px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="street" className="leading-7 text-sm text-gray-600">
            street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="  px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
            pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

      </div>
      <h2 className="text-xl font-semibold  py-3">2.Review cart details</h2>
      <div  className="sideCart bg-pink-100 p-6 m-2">
        <ol className='list-decimal font-semibold' >
          {Object.keys(cart).length==0 &&  <div className='my-2'>No items found.please add items to cart </div> }
          { Object.keys(cart).map((k)=>{return <li key={k}>
            <div className='item flex my-3'>
            <div className='font-semibold '>{cart[k].name}</div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg' ><AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].variant,cart[k].size)}} className='cursor-pointer text-pink-500'/><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].variant,cart[k].size)}} className='cursor-pointer text-pink-500' /></div>
            </div>
          </li>})}
        </ol>
        <span className="total">subTotal:{subTotal} </span>
        </div>
        <div className="mx-4">
        <Link href={'/'}><a><button className=" cursor-pointer flex  mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Pay ₹{subTotal}</button>
            </a></Link>
        </div>
    </div>
  );
};

export default Checkout;
