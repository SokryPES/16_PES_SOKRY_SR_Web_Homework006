import React from 'react'
import ProductDetail from '@/components/ProductDetail'

export default async function page({ params }) {
    const { id } = await params;
    const res = await fetch(
        `https://homework-api.noevchanmakara.site/api/v1/products/${id}`
    );
    const product = await res.json();
    console.log(product);

    return (
        <div>
            <ProductDetail product={product.payload} />
        </div>
    )
}
