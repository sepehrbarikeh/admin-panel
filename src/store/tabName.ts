import { create } from 'zustand'

type State = {
  tabName: string
}

type Actions = {
  changTab: (tab: string) => void
}


const useTabStore = create<State & Actions>()((set) => ({
  tabName: "داشبورد",
  changTab: (tab) => set({ tabName: tab }),
}))

export default useTabStore
