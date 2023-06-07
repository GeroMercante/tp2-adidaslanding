import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'firebase/firestore';
import { db } from '../firebase/firebase.config';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  margin-top: 10rem;
  height: auto;
  position: relative;

  .title{
    position: absolute;
    left: 50%;
    top: -85px;
    transform: translate(-50%, 0%);
    font-size: 50px;
    font-family: 'AdidasBold';
  }
`;

const Sidebar = styled.div`
  width: 30%;
  background-color: #f2f2f2;
`;

const MainSection = styled.div`
  flex: 1;
  padding: 20px;
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const Item = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 300px;
  height: 300px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const Products = () => {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    // Cargar la colección "novedades" desde Firebase
    const loadItems = async () => {
      const snapshot = await db.collection('novedades').get();
      const loadedItems = snapshot.docs.map(doc => doc.data());
      setItems(loadedItems);
    };

    loadItems();
  }, []);

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
  };

  return (
    <Container>
      <h1 className="title">PRODUCTOS</h1>
      <Sidebar>
        {/* Contenido de la barra lateral */}
      </Sidebar>
      <MainSection>
        <ItemList>
          {items.slice(0, visibleItems).map((item, index) => (
            <Item key={index}>
              <img src={item.imageURL} alt="" />
            </Item>
          ))}
        </ItemList>
        {visibleItems < items.length && (
          <ButtonContainer>
            <Button onClick={loadMoreItems}>Ver más</Button>
          </ButtonContainer>
        )}
      </MainSection>
    </Container>
  );
};

export default Products;
