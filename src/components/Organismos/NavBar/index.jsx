import style from "./style.module.scss";

export default function NavBar(){
    return(
        <nav className={style.nav}>
        <a>
          Contato
        </a>
        <a>
          Projetos
        </a>
        <a>
          Sobre 
        </a>
      </nav>
    )
   }