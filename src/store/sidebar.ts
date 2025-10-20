import { create } from 'zustand'

type State = {
  isOpen: boolean
}

type Actions = {
  toggle: () => void
}

const useToggleStore = create<State & Actions>((set) => ({
  isOpen: false, // مقدار اولیه
  toggle: () => set((state) => ({ isOpen: !state.isOpen })), // استفاده از state فعلی

}))

export default useToggleStore
