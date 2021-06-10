import { FiClock } from "react-icons/fi";
import {
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
} from "./styles";

export default function Listing() {
  return (
    <Content>
      <Schedule>
        <h1>Agenda Diária</h1>
        <p>
          <span>Hoje | </span>
          <span>Dia 06 |</span>
          <span>Segunda-feira</span>
        </p>

        <NextAppointment>
          <strong>Próximo item da agenda</strong>
          <div>
            <img src="/avatar_url" alt="Nome do usuário" />

            <strong>Victor Reis</strong>
            <span>
              <FiClock />
              08:00
            </span>
          </div>
        </NextAppointment>

        <Section>
          <strong>Manhã</strong>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img src="/avatar_url" alt="Nome do usuário" />

              <strong>Nome do usuário</strong>
            </div>
          </Appointment>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img src="/avatar_url" alt="Nome do usuário" />

              <strong>Nome do usuário</strong>
            </div>
          </Appointment>
        </Section>

        <Section>
          <strong>Tarde</strong>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img src="/avatar_url" alt="Nome do usuário" />

              <strong>Nome do usuário</strong>
            </div>
          </Appointment>
        </Section>
      </Schedule>
    </Content>
  );
}
