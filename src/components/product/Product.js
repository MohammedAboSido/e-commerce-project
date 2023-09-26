import React from 'react'
import img1 from "../../images/Paste image.png";
import img2 from "../../images/Paste imagesplash.png";
import { StyledAllProduct, StyledButtonProduct, StyledHProduct, StyledImgProduct, StyledProduct1,StyledProduct2} from './Product.Styled';

const Product = () => {
  return (
    <>
    <StyledAllProduct>
        <StyledProduct1>
        <StyledImgProduct src={img1}/>
       
            <StyledHProduct>
            Splash
            </StyledHProduct>
            <StyledButtonProduct>
            See Collection
            </StyledButtonProduct>
        
        </StyledProduct1>
       

        <StyledProduct2>
        <StyledImgProduct src={img2}/>
            <StyledHProduct>
            Hair Style
            </StyledHProduct>
            <StyledButtonProduct>
            See Collection
            </StyledButtonProduct>
        
        </StyledProduct2>

    </StyledAllProduct>
    </>
  )
}

export default Product