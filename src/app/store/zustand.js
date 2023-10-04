import { create } from 'zustand';
export const useStore = create((set) => ({
    profileState: false,
    authModalState: false,
    mapModalState:false,
    sidesModalState:false,
    sideMenu: "",
    userName:"",
    userEmail:"",
    cart:[],
    openProfile: () => set({profileState: true}),
    closeProfile: () => set({profileState: false}),
    openAuthModal: () => set({authModalState: true}),
    closeAuthModal: () => set({authModalState: false}),
    openSidesModal: () => set({sidesModalState: true}),
    closeSidesModal: () => set({sidesModalState: false}),
    openMapModal: () => set({mapModalState: true}),
    closeMapModal: () => set({mapModalState: false}),
    setUserName:(userName) => set(() => ({ userName: userName })),
    setEmail:(userEmail) => set(() => ({ userEmail: userEmail })),
    setSideMenu:(sideMenu) => set(() => ({ sideMenu: sideMenu })),
    setCart:(newItem) => set((state) => ({cart:  [...state.cart,newItem] })),
   
}))