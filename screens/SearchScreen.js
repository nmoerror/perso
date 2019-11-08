import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native';

class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Text> Search Screen</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

export default SearchScreen;
