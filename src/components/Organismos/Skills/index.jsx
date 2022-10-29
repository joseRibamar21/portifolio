import Card from "../../Moleculas/Card";
import style from "./style.module.scss";

export default function Skills() {
  return (
    <div className={style.containerMain}>
      <h2 >
        Skills
      </h2>

      <div className={style.listCard}>
       
        <Card title="React" skills={["Next JS", "TypeScript", "Componentização", "Hooks"]} colorBG="aqua" colorText="black" >
          <img src="/react.png" alt="react" width="90px" height="90px" />
        </Card>
        <Card title="Flutter" skills={["Gestão de estados com Streams, Getx e Providers", "Código limpo", "Arquiteturas MVC e MVP", "Responsividade"]} colorBG="#085799" colorText="white" >
          <img src="/flutter.png" alt="flutter" width="90px" height="90px" />
        </Card>
      </div>
      <img />
    </div>
  )
}