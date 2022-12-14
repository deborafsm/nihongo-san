import styled from 'styled-components'

export const FLIP_CONTAINER = styled.div `

    width: 150px;
    height: 150px;
    perspective:1000px;
    border-radius: 20px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    
    .flip-container&:hover .flipper {
     transform: rotateY(180deg);
    }
     
    .front, .back{
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: column;
        justify-content: center;
        position:absolute;
        width: 100%;
        height:100%;
        backface-visibility: hidden;
        
        border-radius: 50px 50px 50px 50px;
        margin: 10px auto;
    }
    .back{
        transform: rotateY(180deg);
        
    }
    .front{
       
    }
   
   
   
    `
export const FLIPER = styled.div `
    position:relative;
    width: 100%;
    height:100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    
    
`
export const FRONT = styled.div `
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    justify-content: center;
   
    

    
`
export const ContainerImg = styled.div `
.img{
    width: 64ox;
    height: 64px;
    border-radius: 20px;

   
}
`

export const BACK = styled.div `

`
export const H1 = styled.h1 `

    font-size:4.5em;
    `;
export const H3 = styled.h1 `

    font-size:1.5em;

`
export const ContainerTitle = styled.div `

// opacity: 0.6;
    

`
export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
`
export const FLIP_FOOTER = styled.div `
    
`


// .sw&:hover .flip-container .flipper {
//     transform: rotateY(180deg);
//  }
//  .sw{
//     display: none;

// }