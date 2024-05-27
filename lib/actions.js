import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

// Server Action
const shareButonClick = async (formData) => {
    "use server"
    const {name , email , title , summary , instructions , image} = Object.fromEntries(formData)
    
    const meal = {
      creator: name,
      creator_email: email,
      title,
      summary,
      instructions,
      image
    }

    await saveMeal(meal)
    // IMPORTANT
    // Adding a second param of value "layout" will reset the cache of all nested paths
    revalidatePath("/meals")
    redirect("/meals")
}

export {
    shareButonClick
}