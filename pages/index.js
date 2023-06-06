import { Container } from "@/components/Container/Container.styles";
import Header from "@/components/Header/Header.component";
import OrderIngredient from "@/components/OrderIngredient/OrderIngredient.component";
import ProductInfo from "@/components/ProductInfo/ProductInfo.component";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    try {
      fetch('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products')
      .then(response => response.json())
      .then(data => setData(data))
    } catch (error) {
      console.log('Ocorreu um erro:', error);
    }
  };  
  
  useEffect(() => {
    fetchData();
  }, []);

  if(data.length){
    return (      
      <main>
        <Header/>
        {
          fetchData ? (
            <Container >
              <ProductInfo productData={data}/>
              <OrderIngredient ingredientData={data[0]?.ingredients[0]?.itens}/>
            </Container>
          )
          :
          <p>Carregando API...</p>   
        }
      </main>    
    )
  }  

}
