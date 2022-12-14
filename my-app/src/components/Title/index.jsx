import { css } from '@emotion/css'
import { useState } from 'react'
const Title = ({ text, props }) => {
    const [color, setColor] = useState('');
    const styleColor = (color) => {
        setColor(color)
    }
    const title = css`
    color: ${color};
    width: 100%;
    margin: 0;
    padding-bottom: 4%;
    `
    return (
        <h1 className={title} colorTitle={() => styleColor(color)}>{text}</h1>
    )
}
export default Title
// arrumar
