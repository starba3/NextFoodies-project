import fs from "node:fs"
import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"

const db = sql("meals.db")

export function getMeals() {
    // run() used to modify data
    // all() used to fetch data
    const meals = db.prepare("SELECT * FROM meals").all()
    // console.log(meals)
    return meals
}

export function getMeal(slug) {
    // run() used to modify data
    // all() used to fetch data
    const meal = db.prepare("SELECT * FROM meals where slug = ?").get(slug)
    // console.log(meals)
    return meal
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower:true })
    meal.instructions = xss(meal.instructions)

    const extention = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extention}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error) => {
        throw new Error(error)
    })

    meal.image = `images/${fileName}`

    db.prepare(`
        INSERT INTO meals 
            (slug, title, image, summary, instructions, creator, creator_email)
            values(@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
    `).run(meal)
}

