import Image from 'next/image.js';
import { ProductDescription, ProductFullValue, ProductItems, ProductOff, ProductTitle, ProductValue, StyledProductInfo } from './ProductInfo.styles.js'
import productImage from '../../../public/foto.png'

const ProductInfo = ({
  productData
}) => {
  return (
    <StyledProductInfo>

        {productData.map(item => (
          <ProductItems key={item.id}>
              <Image src={productImage} alt="ProductImage" width="597" height="388"></Image>
              <ProductTitle>{item.nm_product}</ProductTitle>
              <ProductDescription>{item.description}</ProductDescription>
              <ProductValue>
                <ProductOff>R${item.vl_discount}</ProductOff>
                <ProductFullValue>R${item.vl_price}</ProductFullValue>
              </ProductValue>
          </ProductItems>
        ))}

    </StyledProductInfo>
  );
}

export default ProductInfo;