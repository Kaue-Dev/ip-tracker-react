import styled from "styled-components";

export const StyledHeader = styled.header<{ imgUrl: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url(${(props)=>props.imgUrl}) no-repeat center/cover;
  padding: 4rem 1rem 8rem 1rem;

  form {
    flex: 1;
    text-align: center;
    max-width: 600px;

    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--white);
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;

      input {
        flex: 1;
        height: 100%;
        border-radius: .5rem 0 0 .5rem;
        padding: 0 1rem;
        color: var(--black);
      }

      button {
        height: 100%;
        border-radius: 0 .5rem .5rem 0;
        padding: 0 2rem;
        background-color: var(--black);
        color: var(--white);
      }
      button:hover {
        background-color: var(--very-dark-gray);
      }
    }
  }
`