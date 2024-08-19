import { useState, ReactNode } from "react";
import styles from './Modal.module.css';

type ModalProps = {
    children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
    const [visible, setVisible] = useState<boolean>(false);



    return (
        <div className={styles.backdrop} onClick={() => setVisible(!visible)}>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </div>
    )
}

export default Modal;