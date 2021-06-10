import styled from 'styled-components';

export const Content = styled.div`
  max-width: 100%;
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
`;

export const Schedule = styled.div`
display: flex;
flex-direction: column;
  flex: 1;
  h1 {
    font-size: 36px;
    color: #656565;
  }
  p {
    margin-top: 8px;
    color: #4197E5;

    display: flex;
    align-items: center;
    font-weight: 500;
    span {
      display: flex;
      color: #4197E5;
      align-items: center;
    }
    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: white;
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 30px;
  > strong {
    color: #656565;
    font-size: 20px;
    font-weight: 400;
  }
  div {
    background: #4197E5;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 5px;
      left: 0;
      top: 10%;
      background: #0053A0;
      border-radius: 0 5px 5px 0;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #ADADAD;
    }
    strong {
      margin-left: 24px;
      color: #fff;
    }
    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #656565;
      svg {
        color: #4197E5;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;
  > strong {
    color: #656565;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #4197E5;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  > p {
    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-top: 16px;
  }
  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;
    width: 70px;
    svg {
      color: #4197E5;
      margin-right: 8px;
    }
  }
  div {
    flex: 1;
    background: #4197E5;
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
    margin-left: 24px;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #ADADAD;
    }
    strong {
      margin-left: 16px;
      color: #f4ede8;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;