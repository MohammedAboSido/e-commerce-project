import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
    * {
      box-sizing: border-box;
      font-family: 'Space Grotesk', sans-serif;
    }
    body {
      margin: 0;
    }

    a {
      text-decoration: none;
    }
    
`;

export const theme = {
  pallete: {
    black: "#000",
    white: "#fff",
  },
};

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexColum = styled(FlexBox)`
  flex-direction: column;
`;

export const Typography = styled.p`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;
export const Container = styled("div")`
  width: 94%;
  margin: 0 auto;
`;
