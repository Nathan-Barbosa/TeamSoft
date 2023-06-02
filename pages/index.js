import { Container } from "@/components/Container/Container.styles";
import Header from "@/components/Header/Header.component";
import OrderIngredient from "@/components/OrderIngredient/OrderIngredient.component";
import ProductInfo from "@/components/ProductInfo/ProductInfo.component";


export default function Home() {
  return (

    <main>
      <Header />
      <Container >
        <ProductInfo />
        <OrderIngredient />
      </Container>
    </main>
    
  )
}
