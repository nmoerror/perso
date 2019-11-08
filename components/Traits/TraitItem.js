import React, { useState } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TraitItem = props => {
  const [it, setIt] = useState(0);
  return (
    <TouchableOpacity
      style={{ alignItems: 'center' }}
      onPress={e => setIt(it + 1)}
    >
      <Item>
        <Text>{it}</Text>
      </Item>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const Item = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-width: 1px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Text = styled.Text``;

export default TraitItem;
