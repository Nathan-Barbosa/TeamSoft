import Image from 'next/image.js';
import { ProductDescription, ProductFullValue, ProductItems, ProductOff, ProductTitle, ProductValue, StyledProductInfo } from './ProductInfo.styles.js'
import productImage from '../../../public/foto.png'


  // const [ id, name, description, vl_price, vl_discount, url_image ] = {
  //   id: data.id,
  //   name: data.name,
  //   description: data.description,
  //   vl_price: data.price,
  //   vl_discount: data.vl_discount,
  //   url_image: data.url_image
  // }

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