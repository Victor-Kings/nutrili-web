import { FiClock } from "react-icons/fi";
import styles from "./listen.module.scss";

export default function Listing() {
  return (
    <div className={styles.content}>
      <div className={styles.schedule}>
        <h1>Agenda Diária</h1>
        <p>
          <span>Hoje | </span>
          <span>Dia 06 |</span>
          <span>Segunda-feira</span>
        </p>

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
