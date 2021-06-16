import ReactModal from 'react-modal'
import styles from './Modal.module.scss'

export default function Modal({ showModal, closeModal, content }) {
  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      overlayClassName={styles.modal_overlay}
      className={styles.modal_content}
    >
      <div>
        {content}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </ReactModal>
  )
}
