"use server";
import Review from "../models/review.model";
import { connectToDatabase } from "../lib/db";

const addReview = async (params) => {
    console.log("Action Called");
    
    connectToDatabase()

    try {
        const {title, description, rating} = params
        const data = Review.insertMany({title, description, rating});
        console.log(data);

        return {message:"Data Added",data}

    } catch (error) {
        console.log(error);
        
    }
    
}


const getReview = async () => {
    connectToDatabase()

    try {
        const data = await Review.find()
        return data
    } catch (error) {
        console.log(error);
        
    }
}

const updateReview = async (params) => {
    connectToDatabase()

    const {id} = params

    try {
        const data = Review.findByIdAndUpdate({_id:id})
        return data
    } catch (error) {
        console.log(error);
        
    }
}

const deleteReview = async (params) => {
    onnectToDatabase()

    const {id} = params

    try {
        const data = Review.findByIdAndDelete({_id:id})
        return data
    } catch (error) {
        console.log(error);
        
    }
}

export {addReview,getReview,deleteReview,updateReview}