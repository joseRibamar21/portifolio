import Card from "../../Moleculas/Card";
import style from "./style.module.scss";

export default function SoftSkills(id) {
  return (

    <div className={style.container}>
      <img className={style.img} src='./soft_skills.png' alt='soft_skills' />
    </div>
  )
}