import mongoose from 'mongoose';
const { Schema } = mongoose;

const mealSchema = new mongoose.Schema({
    creator: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    creator_email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    image: {
       type:  String,
       required: true
    }
});

const MealModel = mongoose.models.meals || mongoose.model('meals', mealSchema);
export default MealModel;