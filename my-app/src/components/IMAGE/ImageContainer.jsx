import React from 'react'
import { ContainerImg, ContainerTitle, H1 } from './styleImg'
export default function ImageContainer({ title, img }) {
    return (
        <ContainerImg>
            <img src={img} alt="" />
            <ContainerTitle>
                <H1>{title}</H1>
            </ContainerTitle>
        </ContainerImg>
    )
}
