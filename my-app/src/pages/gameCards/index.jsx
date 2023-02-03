import React from "react";

import styled from "styled-components";
function index() {
  return (
    <div>
      <div>
        <div>
          <Button>Cores</Button>
          <Button>Animais</Button>
          <Button>Profissoes</Button>
          <Button>Lugares</Button>
          <Button>Familia</Button>
          <Button>Viagem</Button>
          <Button>Emergência</Button>
          <Button>Comodos</Button>
        </div>
      </div>
    </div>
  );
}

export default index;
const Button = styled.button`
  background: transparent;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
