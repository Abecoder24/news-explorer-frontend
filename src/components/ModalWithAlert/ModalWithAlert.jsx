import { useContext } from "react"
import "./ModalWithAlert.css"
import ModalContext from "../Contexts/ModalContext"
export default function ModalWithAlert({ title, modalSwitch }) {
    const {showModal, clearModal} = useContext(ModalContext)
    return (
        <div className="modal">
            <div className="modal__overlay" onClick={clearModal}></div>
            <div className="modal__form">
                <div className="modal__close" onClick={clearModal}>
                    <div className="modal__close-hand close-hand1"></div>
                    <div className="modal__close-hand close-hand2"></div>
                </div>
                <h2 className="modal__title">{title}</h2>                
                {modalSwitch && <span className="modal__switch-alert">
                    {modalSwitch == "Sign in" && <span className="modal--blue modal--clickable" onClick={() => showModal('sign in')}>{modalSwitch}</span>}
                </span>}
            </div>
        </div>
    )
}