import MealModel from "@/lib/Models";
import connectToDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export default async function GET() {
    await connectToDb()
    
    try {
        const meals = await MealModel.find().
        NextResponse.json(meals)
    } catch (err) {
        NextResponse.json({error: err})
    }
}