import React from 'react';
import styled from 'styled-components';

const Avatar = props => {
  return (
    <Self
      source={require('../../assets/img/gg.jpg')}
      size={props.size}
      rad={props.rad}
    />
  );
};

const Self = styled.Image`
  width: ${props => props.size};
  height: ${props => props.size};
  background: black;
  border-radius: ${props => props.rad};
  margin-left: 20px;
  position: absolute;
`;

export default Avatar;
