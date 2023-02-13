import Layout from "@/components/Layout";
import React from "react";
import { useRouter } from "next/router"
import data from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

const ProductScreen = () => {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(x => x.slug === slug);
    if(!product){
      return <div>Not found</div>

    }
    return(
        <> 
          
              <div className="py-2">
                <Link href='/'>Back to products</Link>
              </div>
              <div className="grid md:grid-cols-4 md:gap-3">
                <div className="md:col-span-2">
                    <Image 
                    src={product.image} 
                    alt={product.name}
                    width={640}
                    height={640}
                    
                     ></Image>
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className="text-lg">{product.name}</h1>
                        </li>
                        <li>Category: {product.category}</li>
                        <li>Brand: {product.brand}</li>
                        <li>{product.rating} of {product.numReviews} reviews</li>
                        <li>Description: {product.description}</li>
                    </ul>
                </div>
                <div>
                    <div className="card p-5 ">
                    <div className="mb-2 flex justify-between">
                        <div>Price</div>
                        <div>R${product.price}</div>
                    </div>
                    </div>
                </div>
              </div>
          
        </>
    )

}  
export default ProductScreen