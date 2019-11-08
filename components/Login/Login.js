import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Fragment>
      <Container>
        <Ionicons name='ios-mail' size={32} color='white' />
        <Input
          placeholder='Email'
          placeholderTextColor='white'
          onChangeText={e => setEmail(e)}
        />
        <Input
          secureTextEntry={true}
          placeholder='Password'
          placeholderTextColor='white'
          onChangeText={e => setPassword(e)}
        />

        <SignIn
          onPress={() => {
            props.setAuth();
          }}
        >
          <Text>Sign In</Text>
        </SignIn>
        <Line></Line>
        <Or>
          <Text>Or</Text>
        </Or>
        <Toggle
          onPress={() => {
            props.toggle();
          }}
        >
          <Text>Create Account</Text>
        </Toggle>
      </Container>
    </Fragment>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(33, 51, 63, 1);
  justify-content: center;
  align-items: center;
  color: white;
`;

const Wall = styled.Image`
  width: 80px;
  height: 170px;
  position: absolute;
  z-index: 100;
  top: 9%;
  left: 37%;
`;

const SignIn = styled.TouchableOpacity`
  padding: 10px;
  background: rgba(25, 142, 115, 1);
  border-radius: 3px;
  margin: 10px;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Toggle = styled.TouchableOpacity`
  padding: 10px;
  background: rgba(45, 71, 91, 1);
  border-radius: 3px;
  margin: 10px;
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
`;

const Input = styled.TextInput`
  width: 90%;
  padding: 10px 10px;
  border-radius: 10px;
  margin: 10px;
  border-bottom-width: 1px;
  border-bottom-color: white;
  color: white;
`;

const Line = styled.View`
  height: 1px;
  background: white;
  width: 90%;
  margin: 40px 0;
`;

const Or = styled.View`
  position: absolute;
  top: 56%;
  background: rgba(33, 51, 63, 1);
  padding: 0 10px;
`;

export default Login;
