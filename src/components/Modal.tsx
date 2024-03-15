import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';

interface ModalProps {
    children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
    const navigate = useNavigate();

    function exitHandler() {
        navigate('..')
    }
    return (
        <>
            <div className={styles.backdrop} onClick={exitHandler} />
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    )
}