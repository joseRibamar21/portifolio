import CardProduct from "../../Moleculas/CardProject";
import style from "./style.module.scss";

export default function Projects() {

  const data = [
    {
      title: 'Potifolio',
      subtitle: 'Meu espacinho para compartilhar meus projetos!',
      status: 'Em andamento',
      image: './portifolio.png'
    },
  ]

  return (
    <div className={style.container}>
      <div className={style.buttonProject}>
        Projetos
      </div>
      <CardProduct title={data[0].title} image={data[0].image} subtitle={data[0].subtitle} colorBG="#000610" colorText="#fff" />
      <div className={style.grid}>
      <CardProduct title={data[0].title} image={data[0].image} subtitle={data[0].subtitle} colorBG="#000030" colorText="#fff" />
      <CardProduct title={data[0].title} image={data[0].image} subtitle={data[0].subtitle} colorBG="#000610" colorText="#fff" />
      <CardProduct title={data[0].title} image={data[0].image} subtitle={data[0].subtitle} colorBG="#000610" colorText="#fff" />
      </div>
    </div>
  )
}