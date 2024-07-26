import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String
  },
  category: {
    type: String,
    required: true
  }
})

const Item = mongoose.models.items || mongoose.model('items', itemSchema)

export default Item
