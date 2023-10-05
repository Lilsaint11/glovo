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
    totalCount:0,
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
    removeFromCart: (productId) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
    setTotalCount: (count) => set((state) => ({ totalCount: (state.totalCount + count)}))
}))