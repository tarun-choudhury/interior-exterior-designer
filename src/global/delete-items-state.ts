import { create } from 'zustand'

interface DeleteItemsState {
  globalItems: any[]
  setGlobalItems: (newItems: any) => void
}

const useDeleteItemsState = create((set) => ({
  globalItems: [],
  setGlobalItems: (newItems: DeleteItemsState) => set({ globalItems: newItems })
}))

export default useDeleteItemsState
