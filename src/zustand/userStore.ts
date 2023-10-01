import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UserState {
  user: any
  setUser: (user: any) => void
}

const userStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        setUser: (value) =>  set(() => ({user: value})),
      }),
      {
        name: 'mememania-storage',
      }
    )
  )
)


export default userStore