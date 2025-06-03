import { createContext } from "react";

const ModalContext = createContext({
    showModal: () => { },
    clearModal: () => { },
    formSetter: () => { },
    formGetter: {},
    formValidation: {},
    handleLogin: () => { },
    handleRegister: () => { },
    handleInputChange: () => { }
})

export default ModalContext