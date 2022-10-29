import style from "./style.module.scss";

export default function Banner() {

    return (
        <div className={style.container}>
            <img className={style.imagem} src='./banner.png' />
            <div className={style.rowContainer}>
                <div className={style.columnContainer}>
                    <h1>
                        José Ribamar
                    </h1>
                    <h2>
                        Desenvolvedor Front-End
                    </h2>
                    <span>
                        Amante da aréa da tecnologia<br />Cursando Ciencias da Computação-UFPI
                    </span>

                </div>
                <img className={style.foto} src="./jose2.png" alt="jose"/>
            </div>
        </div>
    )
}