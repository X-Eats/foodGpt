// components/FoodCard.js
import React from 'react';
import styled from 'styled-components/native';

const FoodCard = ({ meal }) => {
  return (
    <Card>
      <MealName>{meal.name}</MealName>
      <MealDescription>{meal.description}</MealDescription>
    </Card>
  );
};

export default FoodCard;

const Card = styled.View`
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  background-color: #f9f9f9;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2 };
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 3;
`;

const MealName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const MealDescription = styled.Text`
  font-size: 14px;
  color: #666;
`;
