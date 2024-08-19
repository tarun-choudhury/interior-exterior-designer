import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true
  },
  public_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
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
