import { FiClock } from "react-icons/fi";
import ReactModal from "react-modal";

import { BsPlusCircle } from "react-icons/bs";
import styles from "./Schedule.module.scss";
import { useState } from "react";

export default function Listing() {
  const [showModal, SetShowModal] = useState(false);
  return (
    <div className={styles.content}>
      <ReactModal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={() => {
          SetShowModal(false);
        }}
        shouldCloseOnOverlayClick={false}
        overlayClassName={styles.modal_overlay}
        className={styles.modal_content}
      >
        <div>
          <p>Modal text!</p>
          <button
            onClick={() => {
              SetShowModal(false);
            }}
          >
            Close Modal
          </button>
        </div>
      </ReactModal>
      <div className={styles.schedule}>
        <div className={styles.header}>
          <div>
            <h1>Agenda Diária</h1>
            <p>
              <span>Hoje | </span>
              <span>Dia 06 |</span>
              <span>Segunda-feira</span>
            </p>
          </div>
          <button
            className={styles.addButton}
            onClick={() => {
              SetShowModal(true);
            }}
          >
            <BsPlusCircle />
          </button>
        </div>

        <div className={styles.nextAppointment}>
          <strong>Próximo item da agenda</strong>
          <div>
            <strong>Victor Reis</strong>
            <span>
              <FiClock />
              08:00
            </span>
          </div>
        </div>
        <div className={styles.scrollFlex}>
          <section className={styles.section}>
            <strong>Manhã</strong>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Nome do usuário</strong>
              </div>
            </div>

            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <strong>Nome do usuário</strong>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <strong>Tarde</strong>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Nome do usuário</strong>
              </div>
            </div>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Nome do usuário</strong>
              </div>
            </div>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Nome do usuário</strong>
              </div>
            </div>
            <div className={styles.appointment}>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <strong>Nome do usuário</strong>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
