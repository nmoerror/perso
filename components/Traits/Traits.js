import React from 'react';
import styled from 'styled-components';
import { ScrollView } from 'react-native';
import TraitItem from './TraitItem';

const Traits = () => {
  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TraitItem text='Fit' />
        <TraitItem text='Humble' />
        <TraitItem text='Ambitious' />
        <TraitItem text='Unique' />
        <TraitItem text='Charming' />
        <TraitItem text='Observant' />
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  padding-top: 50px;
`;

export default Traits;
