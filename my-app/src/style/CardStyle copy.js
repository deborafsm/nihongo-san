import styled from 'styled-components'

export const CardTop = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;     
    background-color: gray;
    border: 1px solid gray;
    border-radius: 5px 5px 0px 0px ;
`
export const CardBody = styled.div `
    
    background-color: gray;
    border: 1px solid gray;
`
export const CardBottom = styled.div `
    background-color: white;
    border:1px solid gray;
    border-radius: 0px 0px 5px 5px;
`
export const Container = styled.div `
    width:20%;
    
`
export const CardBodyBack = styled.div `
transform: rotateY(180deg);
`