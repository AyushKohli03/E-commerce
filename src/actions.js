export const addtocart = (product,quantity,subtotal) => {
    return {
        type: "AddToCart",
        payload: {
            key: new Date().getTime(),
            title: product.title,
            image: product.image,
            price: product.price,
            quantity:quantity,
            subtotal:subtotal

        }

    }
}

export const removetocart = (key) => {
    return {
        type: "RemoveToCart",
        payload: key

    }
}
