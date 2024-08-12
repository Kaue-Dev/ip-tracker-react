import styled from "styled-components";

export const DisplayData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 1rem;
  background-color: var(--white);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  width: 90%;
  border-radius: 1rem;
  padding: 2.5rem 2rem;

  position: absolute;
  top: 30%;
  z-index: 99999;
`

export const Separator = styled.div`
  height: 60px;
  width: 1px;
  background-color: var(--dark-gray);
`