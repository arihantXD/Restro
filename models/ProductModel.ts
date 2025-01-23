import mongoose, { mongo } from "mongoose";
import { Category } from "../enums/CategoryEnum";

export interface IProduct extends Document{
    name : string,
    description : string,
    price : number,
    category : Category,
    image : string
}

const productModel = new mongoose.Schema<IProduct>({
    name : {
        type : String,
        required :true,
    },
    description : {
        type : String,
        required :true,
    },
    price : {
        type : Number,
        required :true,
    },
    category : {
        type : String,
        enum: Object.values(Category),
        default: Category.Burger
    },
    image : {
        type : String,
        required :true,
    }
})

const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productModel);

export default Product;