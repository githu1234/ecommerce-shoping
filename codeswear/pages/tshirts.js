import React from 'react';
import Link from 'next/link';
import mongoose from 'mongoose';
import Product from '../models/Product';
const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => {
              return (
                <Link key={item._id} href={`/products/${item.slug}`}>
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5 ">
                    <a className="block relative  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto h-[30vh] md:h-[36vh]  block "
                        src={item.img}
                      />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                    <h2 className="text-gray-500 title-font text-sm font-medium">
                        {item.category}
                      </h2>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">₹{item.price}</p>
                      <p className="mt-1">{item.size}</p>
                      <p className='mt-1'>{item.color}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let products = await Product.find();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Tshirts;
