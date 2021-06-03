import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
    background: aliceblue;
    color: gray;

  `
const Title = styled.h1 `
    color: blueviolet;
    margin-bottom: 1mm;
`
const Date = styled.h2 `
    font-size: 20px;
    color: royalblue;
    margin-top: 1mm;
`
const explanation = styled.p `
  /* text-align: center; */
`
const Image = styled.img `
  ${'' /* width: 570px;
  max-height: 270px; */}
  
`

const Card = (props) => {
    return(
        <Wrapper>
            <Title>Nasa Photo of the Day</Title>
            <Date>Date:{props.date}</Date>
            <Image src={props.url} alt="Nasa Image of the Day" />
            <explanation><h3>{props.explanation}</h3></explanation> 
        </Wrapper>
    )
}
export default Card;




