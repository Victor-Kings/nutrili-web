import ReactModal from 'react-modal'
import styles from './Schedule.module.scss'
import { useState } from 'react'
export default function ModalSchedule({ showModal, closeModal }) {
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
        <p>Modal text!</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </ReactModal>
  )
}
