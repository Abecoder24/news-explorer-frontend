import { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ModalContext from "../Contexts/ModalContext";

export default function RegisterModal() {
    const { formSetter, formGetter, formValidation, handleRegister, handleInputChange } = useContext(ModalContext)

    return (
        <ModalWithForm submitButtonText={"Sign up"} title={"Sign up"} modalSwitch={"Sign in"} isFormValid={
            formValidation.email.isValid && formValidation.password.isValid & formValidation.username.isValid ? true : false
        } handleFormSubmit={handleRegister}>
            <label htmlFor="" className="modal__input-label">
                <span className="modal--blue">Email</span>
                <input type="text" name="" id="" className="modal__input" placeholder="Enter email" onChange={(e) => handleInputChange(e, "email", formSetter)} value={formGetter.email} />
                {!formValidation.email.isValid && formValidation.email.msg != "" && <span className="modal__input-error">{formValidation.email.msg}</span>}

            </label>
            <label htmlFor="" className="modal__input-label">
                <span className="modal--blue">Password</span>
                <input type="password" name="" id="" className="modal__input" placeholder="Enter password" onChange={(e) => handleInputChange(e, "password", formSetter)} value={formGetter.password} />
                {!formValidation.password.isValid && formValidation.password.msg != "" && <span className="modal__input-error">{formValidation.password.msg}</span>}

            </label>
            <label htmlFor="" className="modal__input-label">
                <span className="modal--blue">Username</span>
                <input type="text" name="" id="" className="modal__input" placeholder="Enter your username" onChange={(e) => handleInputChange(e, "username", formSetter)} value={formGetter.username} />
                {!formValidation.username.isValid && formValidation.username.msg != "" && <span className="modal__input-error">{formValidation.username.msg}</span>}
            </label>
        </ModalWithForm>
    )
}