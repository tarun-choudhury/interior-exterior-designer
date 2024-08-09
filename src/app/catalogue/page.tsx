import Option from '@/components/catalogue/option'

const Catalogue = () => {
  return (
    <div>
      <p>Browse our previous works by category-</p>
      <div className="mt-12 grid grid-cols-4">
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
