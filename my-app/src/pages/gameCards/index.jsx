import React from "react";
import cores from "../../img/paleta-de-tinta.png";
import profissoes from "../../img/medico.png";
import lugares from "../../img/restaurante.png";
import familia from "../../img/familia.png";
import viagem from "../../img/viagem-de-negocios.png";
import emergencia from "../../img/ligacao-de-emergencia.png";
import styled from "styled-components";
function index() {
  return (
    <div>
      <div>
        <div>
          <Button>
            <img src={cores} alt="" />
          </Button>
          <Button>
            <img src={profissoes} alt="" />
          </Button>
          <Button>
            <img src={lugares} alt="" />
          </Button>
          <Button>
            <img src={familia} alt="" />
          </Button>
          <Button>
            <img src={viagem} alt="" />
          </Button>
          <Button>
            <img src={emergencia} alt="" />
          </Button>
          
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
  border: 2px solid #eeeee4;
  border-radius: 33px;
`;

