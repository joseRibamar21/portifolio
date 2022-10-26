import Card from "../../Moleculas/Card";
import style from "./style.module.scss";

export default function Skills() {


  return (
    <div className={style.containerMain}>
      <h2>
        Skills
      </h2>

      <div className={style.listCard}>
        <div className={style.card}>
          <div className={style.cardTop}>
            <img src="/react.png" alt="react" width="90px" height="90px" className={style.spin} />
          </div>
          <div className={style.cardBottom}>
            <h4>
              React
            </h4>

            <ul>
              <li>Next JS</li>
              <li>TypeScript</li>
              <li>Componentização</li>
              <li>Hooks</li>
            </ul>
          </div>

        </div>
        <Card title="React" skills={["Next JS","Código limpo","Arquiteturas MVC e MVP","Responsividade"]} colorBG="#085799" colorText="white" >
          <img src="/react.png" alt="react" width="90px" height="90px" />
        </Card>
        <Card title="Flutter" skills={["Gestão de estados com Streams, Getx e Providers","Código limpo","Arquiteturas MVC e MVP","Responsividade"]} colorBG="#085799" colorText="white" >
          <img src="/flutter.png" alt="flutter" width="90px" height="90px" />
        </Card>
      </div>
    </div>
  )
}