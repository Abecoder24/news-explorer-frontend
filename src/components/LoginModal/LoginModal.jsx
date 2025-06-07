import { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ModalContext from "../Contexts/ModalContext";

export default function LoginModal() {
    const { formSetter, formGetter, formValidation, handleInputChange, handleLogin } = useContext(ModalContext)

    return (
        <ModalWithForm submitButtonText={"Sign in"} title={"Sign in"} modalSwitch={"Sign up"} isFormValid={
            formValidation.email.isValid && formValidation.password.isValid ? true : false
        } handleFormSubmit={handleLogin}>
            <label htmlFor="" className="modal__input-label">
                <span className="modal--blue">Email</span>
                <input type="text" name="" id="" className="modal__input" placeholder="Enter email" onChange={(e) => handleInputChange(e, "email", formSetter)} value={formGetter.email} required/>
                {!formValidation.email.isValid && formValidation.email.msg != "" && <span className="modal__input-error">{formValidation.email.msg}</span>}
            </label>
            <label htmlFor="" className="modal__input-label">
                <span className="modal--blue">Password</span>
                <input type="password" name="" id="" className="modal__input" placeholder="Enter password" onChange={(e) => handleInputChange(e, "password", formSetter)} value={formGetter.password} required/>
                {!formValidation.password.isValid && formValidation.password.msg != "" && <span className="modal__input-error">{formValidation.password.msg}</span>}
            </label>
        </ModalWithForm>
    )
}