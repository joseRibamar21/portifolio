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
    {
      title: 'Partiu Jogar',
      subtitle: 'Sistema de marcação de quadras.',
      status: 'Em andamento',
      image: './partiu-jogar.png'
    },
    {
      title: 'SeedListing',
      subtitle: '',
      status: 'Em andamento',
      image: './lidium.png'
    },

  ]

  return (
    <div className={style.container}>
      <div className={style.buttonProject}>
        Projetos
      </div>
      <CardProduct title={data[0].title} image={data[0].image} subtitle={data[0].subtitle}  colorText="#fff" />
      <div className={style.grid}>
        {data.map((e, i) => {
          if (i !== 0) {
            return <CardProduct title={e.title} image={e.image} subtitle={e.subtitle}  colorText="#fff" />
          }
        })}
      </div>
    </div>
  )
}