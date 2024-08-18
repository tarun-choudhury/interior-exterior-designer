interface ButtonProps {
  text: string
  width: number
  type: 'submit' | 'button'
  loading: boolean
  onclick: () => void
}

const Button = ({ text, width, type, loading, onclick }: ButtonProps) => {
  return (
    <div className="p-1">
      <button
        className="group relative"
        style={{ width: width ? width + 'rem' : '100%' }}
        type={type}
        onClick={onclick}
      >
        <div className="bg-10 btn btn-lg absolute -right-1 -top-0.5 left-1 size-full rounded-none text-transparent shadow transition-all group-hover:-translate-x-1 group-hover:translate-y-0.5"></div>
        <div className="border-30 btn btn-lg absolute -left-1 right-1 top-0.5 size-full rounded-none border bg-transparent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-1"></div>
        <div className="text-30 btn btn-lg w-full rounded-none bg-transparent">
          {loading ? (
            <span className="">
              <span
                aria-hidden="true"
                className="spinner size-4"
                role="status"
              ></span>
              <span className="pl-4">Loading</span>
            </span>
          ) : (
            text
          )}
        </div>
      </button>
    </div>
  )
}

export default Button
