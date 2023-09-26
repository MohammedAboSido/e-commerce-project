import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Mooli&family=Nunito+Sans:ital@1&family=Rubik:ital@1&family=Urbanist:wght@300&display=swap');
  
    * {
      box-sizing: border-box;
      font-family: 'Rubik', sans-serif;
    }
    body {
      margin: 0;
    }
    
`

export const theme = {
    pallete : {
        black : "#000",
        white: "#fff"

    }
}

export const FlexBox = styled.div`  
    display: flex;
`

export const FlexColum = styled(FlexBox)`  
    flex-direction: column;
`

export const Typography = styled.p`
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
`

