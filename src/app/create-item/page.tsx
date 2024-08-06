'use client'
import { ChangeEvent, FormEvent, useState } from 'react'

import useAddItem from '@/hooks/use-add-item'

interface Inputs {
  image: File | null
  title: string
  price: number
  desc: string
  category: string
}

const AddItem = () => {
  const [inputs, setInputs] = useState<Inputs>({
    image: null,
    title: '',
    price: 0,
    desc: '',
    category: 'kitchen'
  })
  const { loading, addItem } = useAddItem()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault
    console.log(inputs)

    const formData = new FormData(e.currentTarget)
    formData.append('image', inputs.image as Blob)
    formData.append('title', inputs.title)
    formData.append('price', String(inputs.price))
    formData.append('desc', inputs.desc)
    formData.append('category', inputs.category)
    console.log('formData', formData)
    await addItem(formData)
  }

  return (
    <section>
      <form className="space-y-4 pb-1" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-custG">
            Product Image
          </span>
          <input
            required
            className="form-input rounded-none"
            type="file"
            // value={inputs.image}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              e.target.files &&
              setInputs({ ...inputs, image: e.target.files[0] })
            }
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-custG">
            Product Title
          </span>
          <input
            required
            className="form-input rounded-none"
            placeholder="Enter title here"
            type="text"
            value={inputs.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, title: e.target.value })
            }
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-custG">
            Product Price
          </span>
          <input
            required
            className="form-input rounded-none"
            placeholder="Enter price in Interior"
            type="number"
            value={inputs.price}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, price: Number(e.target.value) })
            }
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-custG">
            Product Description
          </span>
          <textarea
            required
            className="form-input rounded-none"
            placeholder="Enter product description here"
            value={inputs.desc}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInputs({ ...inputs, desc: e.target.value })
            }
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-custG">
            Product Category
          </span>
          <select
            className="form-select rounded-none"
            id="color"
            value={inputs.category}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setInputs({ ...inputs, category: e.target.value })
            }
          >
            <option value="kitchen">Kitchen</option>
            <option value="living-room">Living Room</option>
            <option value="dining-room">Dining Room</option>
            <option value="dressing-room">Dressing Room</option>
            <option value="bed-room">Bed Room</option>
            <option value="study-room">Study Room</option>
            <option value="office-room">Office Room</option>
            <option value="painting-work">Painting Work</option>
            <option value="false-ceiling">False Ceiling</option>
            <option value="door-panelling">Door Panelling</option>
            <option value="louver">Louver</option>
            <option value="renovation">Renovation</option>
          </select>
        </label>
        <div className="flex items-center justify-end">
          <button
            className="btn btn-outline-primary rounded-none"
            type="submit"
          >
            {loading ? 'Loading...' : 'Add Product'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddItem