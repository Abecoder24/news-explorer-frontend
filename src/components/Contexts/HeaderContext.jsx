import { createContext } from "react";

const HeaderContext = createContext({
    showModal: () => { },
    toggleMobileMenu: () => { },
    activeModal: ""
})

export default HeaderContext