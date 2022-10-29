import style from "./style.module.scss"

export default function Contact() {
  return (
    <footer className={style.container}>
      <div className={style.buttonContatc}>Contatos</div>
      <div className={style.divContatic}>
        (86) 9 9420-4632<br />
        jose.21rb@gmail.com
      </div>
      <div className={style.rowContacts}>
        <a href="https://www.linkedin.com/in/joser-ribamar" target="_blank" rel="noreferrer">
          <img src="./linkedin.png" alt="linkedin"></img>
        </a>
        <a href="https://instagram.com/dev_araujo?igshid=MDE2OWE1N2Q=" target="_blank" rel="noreferrer">
          <img src="./instagram.png" alt="instagram"></img>
        </a>
        <a href="mailto:jose.21rbrb@gmail.com" target="_blank" rel="noreferrer">
        <img src="./envelope.png" alt="envelope"></img>
        </a>
      </div>
    </footer>
  )
}