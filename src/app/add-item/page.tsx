'use client'
import useLogout from '@/hooks/use-logout'

const AddItem = () => {
  const { loading, logout } = useLogout()
  return (
    <section>
      <button
        className="btn btn-outline-primary rounded-none"
        type="submit"
        onClick={logout}
      >
        {loading ? 'Loading...' : 'Logout'}
      </button>
    </section>
  )
}

export default AddItem
