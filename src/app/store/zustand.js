import { create } from 'zustand';
export const useStore = create((set) => ({
    profileState: false,
    authModalState: false,
    mapModalState:false,
    userName:"",
    userEmail:"",
    openProfile: () => set({profileState: true}),
    closeProfile: () => set({profileState: false}),
    openAuthModal: () => set({authModalState: true}),
    closeAuthModal: () => set({authModalState: false}),
    openMapModal: () => set({mapModalState: true}),
    closeMapModal: () => set({mapModalState: false}),
    setUserName:(userName) => set(() => ({ userName: userName })),
    setEmail:(userEmail) => set(() => ({ userEmail: userEmail })),
}))