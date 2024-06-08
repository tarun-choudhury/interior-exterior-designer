import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})

const Item = mongoose.models.items || mongoose.model('items', itemSchema)

export default Item
