import SearchIcon from '@/assets/svg/search-icon'

const Search = ({ setSearch }: any) => {
  return (
    <div className="form-icon shadow-md md:w-72 xl:-ml-3 xl:w-96">
      <SearchIcon />
      <input
        className="border-30 placeholder:text-30-light form-input rounded-none"
        placeholder="Search items..."
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
