import { createContext } from "react";

const HeaderContext = createContext({
    showModal: () => { },
    toggleMobileMenu: () => { }
})

export default HeaderContext