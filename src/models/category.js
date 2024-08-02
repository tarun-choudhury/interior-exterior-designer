import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'items',
      default: []
    }
  ]
})

const Category =
  mongoose.models.categories || mongoose.model('categories', categorySchema)

export default Category
