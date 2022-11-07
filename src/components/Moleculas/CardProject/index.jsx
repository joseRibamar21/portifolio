import style from "./style.module.scss";

export default function CardProduct({ title, subtitle, colorText, image }) {
    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            , (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))
    let list = hexToRgb("#000610")

    const styleText = {
        color: colorText

    }

    return (
        <div className={style.card}>
            
            <img src={image} className={style.img}/>
            {/* <div style={{
                background: `rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(${list[0]}, ${list[1]}, ${list[2]}, 0) 10%, rgba(${list[0]}, ${list[1]}, ${list[2]}, 0.1) 40%, rgba(${list[0]}, ${list[1]}, ${list[2]}, 0.3) 75%, rgba(${list[0]}, ${list[1]}, ${list[2]}, 1) 100%) repeat scroll 0 0`,
                position: "relative",
                marginTop: "-50px",
                height: "50px",
            }}></div> */}
            <div >
                <h4 >
                    {title}
                </h4>
                <p >
                    {subtitle}
                </p>
            </div>

        </div>
    )
}