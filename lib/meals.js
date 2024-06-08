import fs from "node:fs"
import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"
import connectToDb from "./dbConnect"
import MealModel from "./Models"

// const db = sql("meals.db")

export async function getMeals() {

    await connectToDb()


    // run() used to modify data
    // all() used to fetch data
    const meals = await MealModel.find({})


    // console.log({"Meals" : meals})
    return meals
}

export async function getMeal(slug) {
    // run() used to modify data
    // all() used to fetch data
    await connectToDb()

    // run() used to modify data
    // all() used to fetch data
    const meal = await MealModel.findOne({ slug: slug})
    // const meal = db.prepare("SELECT * FROM meals where slug = ?").get(slug)
    console.log(meal)
    return meal
}

// export async function saveMeal(meal) {
//     meal.slug = slugify(meal.title, { lower:true })
//     meal.instructions = xss(meal.instructions)

//     const extention = meal.image.name.split('.').pop()
//     const fileName = `${meal.slug}.${extention}`

//     const stream = fs.createWriteStream(`public/images/${fileName}`)
//     const bufferedImage = await meal.image.arrayBuffer()

//     stream.write(Buffer.from(bufferedImage), (error) => {
//         throw new Error(error)
//     })

//     meal.image = `images/${fileName}`

//     db.prepare(`
//         INSERT INTO meals 
//             (slug, title, image, summary, instructions, creator, creator_email)
//             values(@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
//     `).run(meal)
// }

