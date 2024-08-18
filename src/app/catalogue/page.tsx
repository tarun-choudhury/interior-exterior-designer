import jsonData from '@/assets/json/links.json'
import Option from '@/components/catalogue/option'

const Catalogue = () => {
  const links = jsonData.links

  return (
    <div className="bg-60-light pb-20 pt-10 md:py-20">
      <h1 className="pl-10 pr-28 md:pr-0 md:text-2xl xl:pl-20 xl:text-3xl">
        Browse our previous works by category-
      </h1>
      <div className="mb-10 mt-4 grid grid-cols-2 md:my-10 xl:grid-cols-4">
        {links.map((i) => {
          return <Option key={i.index} categoryName={i.title} link={i.href} />
        })}
      </div>
    </div>
  )
}

export default Catalogue
