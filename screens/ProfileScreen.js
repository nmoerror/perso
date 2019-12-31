import React from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';
import Avatar from '../components/Avatar/Avatar';
import Traits from '../components/Traits/Traits';

import { connect } from 'react-redux';

const screenHeight = Dimensions.get('window').height;

class ProfileScreen extends React.Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: screenHeight
    }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TouchableOpacity onPress={this.toggleMenu}>
          <Name>Gerard</Name>
          <LastName>Indo Martinez</LastName>
          <Wall source={require('../assets/img/ss.jpg')} />
          <Circled>
            <Avatar size='80px' rad='40px' />
          </Circled>
          <Traits />
        </TouchableOpacity>
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
  height: ${screenHeight};
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f0f3f5;
  z-index: 1000;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Wall = styled.Image`
  width: 100%;
  height: 300px;
`;

const Name = styled.Text`
  position: absolute;
  top: 150px;
  left: 20px;
  z-index: 100;
  color: white;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 1px;
`;

const LastName = styled.Text`
  position: absolute;
  top: 195px;
  left: 20px;
  z-index: 100;
  color: white;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 1px;
`;

const Circled = styled.View`
  position: absolute;
  top: 250px;
  left: 10px;
`;

const mapStateToProps = state => {
  action: state.action;
};

export default connect()(ProfileScreen);
