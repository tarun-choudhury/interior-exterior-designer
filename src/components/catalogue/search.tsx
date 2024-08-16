import SearchIcon from '@/assets/svg/search-icon'

const Search = ({ setSearch }: any) => {
  return (
    <div className="form-icon -ml-3 hidden w-96 bg-red-500 shadow-md md:block">
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
