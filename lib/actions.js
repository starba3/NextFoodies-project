import mongoose from "mongoose"
import MealModel from "./Models"
import { redirect } from "next/navigation"
import slugify from "slugify"
// import { saveMeal } from "./meals"
import { uploadImage } from "./cloudinary"
import { revalidatePath } from "next/cache"
import connectToDb from "./dbConnect"

const connectToMongo = async () => {
  const conn = await mongoose.connect('mongodb+srv://admin:admin@myapplication.qp2btdg.mongodb.net/?retryWrites=true&w=majority&appName=MyApplication');
  conn.readyState; // 1, means Mongoose is connected
}



// Server Action
const shareButonClick = async (formData) => {
    "use server"

    await connectToDb
    
    const {name , email , title , summary , instructions , image} = Object.fromEntries(formData)
    
    let imageUrl = ''

    try {
      imageUrl = await uploadImage(image);
    } catch (error) {
      throw new Error(
        'Image upload failed, post was not created. Please try again later.'
      );
    }

    const meal = {
      creator: name,
      creator_email: email,
      slug: slugify(title, { lower:true }),
      title,
      summary,
      instructions,
      image: imageUrl
    }

    // await saveMeal(meal)
    MealModel.create(meal)
    // IMPORTANT
    // Adding a second param of value "layout" will reset the cache of all nested paths
    revalidatePath("/meals")
    redirect("/meals")
}

export {
    shareButonClick
}