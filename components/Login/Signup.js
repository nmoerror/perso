import React, { useState } from 'react';
import styled from 'styled-components';

const Login = props => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Container>
      <Input
        placeholderTextColor='white'
        placeholder='Name'
        onChangeText={e => setName(e)}
      />
      <Input
        placeholderTextColor='white'
        placeholder='Surname'
        onChangeText={e => setSurname(e)}
      />
      <Input
        placeholderTextColor='white'
        placeholder='Email'
        onChangeText={e => setEmail(e)}
      />
      <Input
        secureTextEntry={true}
        placeholderTextColor='white'
        placeholder='Password'
        onChangeText={e => setPassword(e)}
      />
      <Input
        secureTextEntry={true}
        placeholderTextColor='white'
        placeholder='Confirm Password'
        onChangeText={e => setConfirmPassword(e)}
      />
      <SignUp>
        <Text>Sign Up</Text>
      </SignUp>

      <Toggle
        onPress={() => {
          props.toggle();
        }}
      >
        <Text>Already have an account</Text>
      </Toggle>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: rgba(33, 51, 63, 1);
  justify-content: center;
  align-items: center;
`;

const SignUp = styled.TouchableOpacity`
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

export default Login;
