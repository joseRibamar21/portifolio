import style from "./style.module.scss";

export default function Card({ title, skills, colorText, colorBG, children }) {
    const styleCardCustom = {
        border: "2px solid " + colorBG,
        boxShadow: "0 4px 30px " + colorBG
    }

    const styleText = {
        color: colorText
    }

    const styleCardBgBottom = {
        backgroundColor: colorBG
    }


    return (
        <div className={style.card} style={styleCardCustom}>
            <div className={style.cardTop}>
                {children}
            </div>
            <div className={style.cardBottom} style={styleCardBgBottom}>
                <h4 style={styleText}>
                    {title}
                </h4>

                <ul>
                    {skills.map(e => {
                        return <li key={e} style={styleText}>{e}</li>
                    })}
                </ul>
            </div>

        </div>
    )
}