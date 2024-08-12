const Button = ({ text, width }: any) => {
  return (
    <div className="p-1">
      <button className="group relative" style={{ width: width? width+'rem' : '100%' }}>
        <div className="btn btn-lg absolute -right-1 -top-0.5 left-1 size-full rounded-none bg-custY text-transparent shadow transition-all group-hover:-translate-x-1 group-hover:translate-y-0.5"></div>
        <div className="btn btn-lg absolute -left-1 right-1 top-0.5 size-full rounded-none border border-custR bg-transparent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-1"></div>
        <div className="btn btn-lg w-full rounded-none bg-transparent text-primary">
          {text}
        </div>
      </button>
    </div>
  )
}

export default Button
