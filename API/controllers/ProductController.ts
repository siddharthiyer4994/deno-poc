import { products } from "../models/Products.ts";

// @desc Save a Product
// @route POST /api/v1/Products

const addProduct = async ({ request, response }: { request: any, response: any }) => {
    try {
        let newProduct = await request.body();
        newProduct = await products.insertOne(newProduct);
        response.body = {
            success: true,
            data: newProduct
        };
    } catch (error) {
        console.log(`Error ------> ${JSON.stringify(error)}`)
    };
}

export { addProduct };