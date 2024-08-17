import SearchIcon from '@/assets/svg/search-icon'

const Search = ({ setSearch }: any) => {
  return (
    <div className="form-icon shadow-md md:w-72 xl:-ml-3 xl:w-96">
      <SearchIcon />
      <input
        className="form-input rounded-none border-primary placeholder:text-primary-light"
        placeholder="Search items..."
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
