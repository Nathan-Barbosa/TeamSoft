import Image from 'next/image.js';
import { ProductDescription, ProductFullValue, ProductItems, ProductOff, ProductTitle, ProductValue, StyledProductInfo } from './ProductInfo.styles.js'
import productImage from '../../../public/foto.png'
const ProductInfo = () => {
  return (
    <StyledProductInfo>
      <ProductItems>
        <Image src={productImage} alt="ProductImage"></Image>
        <ProductTitle>Oferta Picanha Cheddar Bacon</ProductTitle>
        <ProductDescription>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</ProductDescription>
        <ProductValue>
          <ProductFullValue>R$34,95</ProductFullValue>
          <ProductOff>R$31,99</ProductOff>
        </ProductValue>
      </ProductItems>
    </StyledProductInfo>
  );
}

export default ProductInfo;