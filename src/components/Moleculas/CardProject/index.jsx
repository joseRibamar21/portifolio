import style from "./style.module.scss";
import { FastAverageColor } from "fast-average-color";

export default function CardProduct({ title, subtitle, colorText, colorBG, image }) {
    const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
    const styleCardCustom = {
        
        boxShadow: "0 4px 30px " + colorBG
    }
    let list = hexToRgb(colorBG)
    const fac = new FastAverageColor();
    const color = fac.getColor(container.querySelector('img'));

    const styleText = {
        color: colorText
    }

    const styleCardBgBottom = {
        backgroundColor: colorBG
    }


    return (
        <div className={style.card} style={styleCardCustom}>
            <div className={style.cardTop}>
                <img className={style.img} src={image}></img>

            </div>
            <div style={{
                background: `rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(${list[0]}, ${list[1]}, ${list[2]}, 0) 10%, rgba(${list[0]}, ${list[1]}, ${list[2]}, 0.1) 40%, rgba(${list[0]}, ${list[1]}, ${list[2]}, 0.1) 75%, rgba(${list[0]}, ${list[1]}, ${list[2]}, 1) 100%) repeat scroll 0 0`,
                position: "relative",
                marginTop: "-100px",
                height: "100px",
            }}></div>
            <div className={style.cardBottom} style={styleCardBgBottom}>
                <h4 style={styleText}>
                    {title}
                </h4>
                <p style={styleText}>
                    {subtitle}
                </p>
            </div>

        </div>
    )
}