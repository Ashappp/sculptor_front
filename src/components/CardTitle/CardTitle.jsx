/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: inherit;
  text-align: center;
  padding: 1.2rem;
  border-bottom: 1px solid #ccc;
  font-family: 'Roboto';
  color: #b9c3c8;
  text-transform: uppercase;
`;

const CardTitle = ({ title }) => {
  return <Title> {title || 'DAY TITLE'} </Title>;
};

export default CardTitle;
