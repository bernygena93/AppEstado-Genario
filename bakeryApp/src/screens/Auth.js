import {View, Text, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles/authStyles';
import AuthForm from '../components/AuthForm';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signup, signin} from '../store/actions/auth.action';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isregister, setIsregister] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = () => {
    isregister
      ? dispatch(signin(email, password))
      : dispatch(signup(email, password));
  };

  const handleChangeRegister = () => {
    setIsregister(!isregister);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>{isregister ? 'Ingreso' : 'Registro'}</Text>
        <AuthForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.text}>
            {isregister ? 'Ingresar' : 'Registrarme'}
          </Text>
        </TouchableOpacity>
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>
            {isregister ? '¿Todavia no tenes cueta?' : '¿Ya tienes cuenta?'}
          </Text>
          <TouchableOpacity onPress={handleChangeRegister}>
            <Text style={styles.promptButton}>
              {isregister ? 'Registrate' : 'Ingresa'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
