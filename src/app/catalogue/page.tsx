import Option from '@/components/catalogue/option'

const Catalogue = () => {
  return (
    <div className="py-20 bg-60-light">
      <h1 className="pl-20 text-3xl">Browse our previous works by category-</h1>
      <div className="my-10 grid grid-cols-4">
        <Option categoryName="category1" />
        <Option categoryName="category2" />
        <Option categoryName="category3" />
        <Option categoryName="category4" />
        <Option categoryName="category5" />
        <Option categoryName="category6" />
        <Option categoryName="category6" />
        <Option categoryName="category6" />
      </div>
    </div>
  )
}

export default Catalogue
