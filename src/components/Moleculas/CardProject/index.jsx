import style from "./style.module.scss";

export default function CardProduct({ title, subtitle, colorText, image, isOpen }) {
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
                <img src={image} className={style.img} />
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