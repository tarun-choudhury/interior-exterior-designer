'use client'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'

import Button from '@/common/button'
import useAddItem from '@/hooks/use-add-item'
import autosizeTextArea from '@/helpers/autosize'

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
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const { loading, addItem } = useAddItem()
  autosizeTextArea(textAreaRef.current, inputs.desc)

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
    <div className="bg-60-light flex flex-col gap-10 p-20 pb-32">
      <h1 className="text-3xl text-primary-light text-center">Add a New Product</h1>
      <form
        className="mx-auto max-w-7xl space-y-4 bg-white p-10 shadow-lg outline outline-1 outline-primary"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1">
          <label className="text-sm text-primary-light">Product Image</label>
          <input
            required
            className="form-input rounded-none border-primary-light"
            type="file"
            // value={inputs.image}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              e.target.files &&
              setInputs({ ...inputs, image: e.target.files[0] })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-primary-light">Product Title</label>
          <input
            required
            className="form-input rounded-none border-primary-light"
            placeholder="Enter title here"
            type="text"
            value={inputs.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, title: e.target.value })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-primary-light">Product Price</label>
          <input
            required
            className="form-input rounded-none border-primary-light"
            placeholder="Enter price in Interior"
            type="number"
            value={inputs.price}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, price: Number(e.target.value) })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-primary-light">
            Product Description
          </label>
          <textarea
            required
            ref={textAreaRef}
            className="form-input resize-none rounded-none border-primary-light"
            placeholder="Enter product description here"
            value={inputs.desc}
            rows={1}
            style={{ scrollbarGutter: 'stable' }}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInputs({ ...inputs, desc: e.target.value })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-primary-light">Product Category</label>
          <select
            className="form-input rounded-none border-primary-light"
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
        </div>
        <div className="flex justify-center pb-1 pt-6">
          <Button
            text="Add Product"
            width={12}
            type="submit"
            loading={loading}
          />
        </div>
      </form>
    </div>
  )
}

export default AddItem
