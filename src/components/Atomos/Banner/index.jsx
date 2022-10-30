import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import style from "./style.module.scss";

export default function Banner() {

    return (
        <div className={style.container}>
            <ParallaxProvider>
                <Parallax speed={-10}>
                    <img className={style.imagem} src='./banner.png' />
                    <div style={{
                        background: "rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 6, 16, 0.1) 40%, rgba(0, 6, 16, 0.1) 75%, rgba(0, 6, 16, 1) 100%) repeat scroll 0 0",
                        position: "relative",
                        marginTop: "-200px",
                        height: "200px",
                    }}>
                    </div>
                </Parallax>
            </ParallaxProvider>
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
                <img className={style.foto} src="./jose2.png" alt="jose"></img>
            </div>
        </div>
    )
}