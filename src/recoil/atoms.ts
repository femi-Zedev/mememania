import { atom } from 'recoil';

const currentUserAtom  = atom<any>({
  key: 'currentUser',
  default: {}
})


export { currentUserAtom } 