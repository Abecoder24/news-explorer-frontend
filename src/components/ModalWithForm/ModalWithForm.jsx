import { useContext } from "react"
import "./ModalWithForm.css"
import ModalContext from "../Contexts/ModalContext"
export default function ModalWithForm({ submitButtonText, title, modalSwitch, isFormValid, handleFormSubmit, children }) {
    const { clearModal, showModal } = useContext(ModalContext)
    return (
        <div className="modal">
            <div className="modal__overlay" onClick={clearModal}></div>
            <form className="modal__form" onSubmit={(e) => {
                e.preventDefault()
                handleFormSubmit()
            }}>
                <div className="modal__close" onClick={clearModal}>
                    <div className="modal__close-hand close-hand1"></div>
                    <div className="modal__close-hand close-hand2"></div>
                </div>
                <h2 className="modal__title">{title}</h2>
                {children}
                {/* i will use this when backend will return an Error */}
                {/* <span className="modal__form-error">
                    Email is not available
                </span> */}
                <input type="submit" value={submitButtonText} className={`${isFormValid ? "modal__submit modal__submit-valid" : "modal__submit"}`} />
                {modalSwitch && <span className="modal__switch">
                    or {modalSwitch == "Sign up" ? <span className="modal--blue modal--clickable" onClick={() => showModal('sign up')}>{modalSwitch}</span> : <span className="modal--blue modal--clickable" onClick={() => showModal('sign in')}>{modalSwitch}</span>}
                </span>}
            </form>
        </div>
    )
}