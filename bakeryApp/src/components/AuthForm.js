import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles/authFormStyles';

const AuthForm = ({setEmail, email, setPassword, password}) => {
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <Text>Contraseña</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={setPassword}
        value={password}
      />
    </View>
  );
};

export default AuthForm;
