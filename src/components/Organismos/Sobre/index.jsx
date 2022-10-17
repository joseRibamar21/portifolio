import style from "./style.module.scss";

export default function Sobre() {
  return (
    <div className={style.containerMain}>
      <div className={style.container1}>
        <h1>
          Desenvolvedor Front-End Web e Mobile
        </h1>
        <h2>
          José Ribamar Pilar de Araujo Neto
        </h2>
      </div>
      <div className={style.container2}>
        <img src="https://avatars.githubusercontent.com/u/45271784?s=400&u=fd486609e7a2a160e4f6fe831d24749ee3b4d384&v=4" alt="image">
        </img>
      </div>
    </div>
  )
}