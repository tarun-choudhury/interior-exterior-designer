'use client'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'

import Button from '@/common/button'
import useAutosizeTextArea from '@/helpers/autosize'
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
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const { loading, addItem } = useAddItem()
  useAutosizeTextArea(textAreaRef.current, inputs.desc)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault

    const formData = new FormData(e.currentTarget)
    formData.append('image', inputs.image as Blob)
    formData.append('title', inputs.title)
    formData.append('price', String(inputs.price))
    formData.append('desc', inputs.desc)
    formData.append('category', inputs.category)
    await addItem(formData)
  }

  return (
    <div className="flex flex-col gap-10 bg-60-light p-20 pb-32">
      <h1 className="text-center text-3xl text-30-light">Add a New Product</h1>
      <form
        className="mx-auto max-w-7xl space-y-4 bg-white p-10 shadow-lg outline outline-1 outline-30"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1">
          <label className="text-sm text-30-light">Product Image</label>
          <input
            required
            className="form-input rounded-none border-30-light"
            type="file"
            // value={inputs.image}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              e.target.files &&
              setInputs({ ...inputs, image: e.target.files[0] })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-30-light">Product Title</label>
          <input
            required
            className="form-input rounded-none border-30-light"
            placeholder="Enter title here"
            type="text"
            value={inputs.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, title: e.target.value })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-30-light">Product Price</label>
          <input
            required
            className="form-input rounded-none border-30-light"
            placeholder="Enter price in Interior"
            type="number"
            value={inputs.price}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, price: Number(e.target.value) })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-30-light">Product Description</label>
          <textarea
            ref={textAreaRef}
            required
            className="form-input resize-none rounded-none border-30-light"
            placeholder="Enter product description here"
            rows={1}
            style={{ scrollbarGutter: 'stable' }}
            value={inputs.desc}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInputs({ ...inputs, desc: e.target.value })
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-30-light">Product Category</label>
          <select
            className="form-input rounded-none border-30-light"
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
            loading={loading}
            onclick={() => {}}
            text="Add Product"
            type="submit"
            width={12}
          />
        </div>
      </form>
    </div>
  )
}

export default AddItem
