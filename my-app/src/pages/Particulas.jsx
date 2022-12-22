import Dialog from "../components/Dialog";
import Frases from "../components/TextJapanese/index";
function Particulas() {
  return (
    <>
      <div>
        <div>
          <h1>Particulas</h1>
        </div>
        <br />
        <div>
          <h2>Wa【は】</h2>
          <p>
            A função da particula Wa【は】ele é usada para dizer frases como
            "isso é aquilo" e "isso está aquilo
            <Frases
              jpnTextHira="猫は動物です"
              jpnTextRMj="neko wa doubutsu desu"
              jpnPt="Gatos são animais."
            />
          </p>
        </div>
        <div>
          <h2>Ga【が】</h2>
          <p>
            A função da particula Ga【が】 serve para indicar quem está
            realizando uma ação.
            <Frases
              jpnTextHira="猫が逃げた"
              jpnTextRMj="neko ga nigeta."
              jpnPt="O gato fugiu."
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default Particulas;
