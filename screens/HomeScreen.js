import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Avatar from '../components/Avatar/Avatar';
import ProfileScreen from './ProfileScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <ProfileScreen />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.push('Profile');
          }}
        >
          <TitleBar>
            <Avatar size='44px' rad='22px' />
            <Title>Welcome back,</Title>
            <Name>Gerard</Name>
          </TitleBar>
        </TouchableOpacity>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
  padding-bottom: 50px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

export default HomeScreen;
