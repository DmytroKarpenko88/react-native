import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AddIcon from '../src/assets/AddIcon';
import { useState } from 'react';

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.addIconBox}>
          <AddIcon style={styles.addIcon} />
        </View>
        <Text style={styles.title}>Реєстрація</Text>

        <View style={styles.form}>
          <TextInput
            value={login}
            onChange={setLogin}
            style={styles.input}
            placeholder='Логін'
          />
          <TextInput
            value={email}
            onChange={setEmail}
            style={styles.input}
            placeholder='Адреса електронної пошти'
          />
          <View>
            <TextInput
              value={password}
              onChange={setPassword}
              style={styles.input}
              secureTextEntry
              placeholder='Пароль'
            />
            <Text style={styles.text}>Показати</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </Pressable>
          <Text
            style={[
              styles.buttonText,
              { color: '#1B4371', textAlign: 'center' },
            ]}
          >
            Вже є акаунт? Увійти
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  wrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 549,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  addIconBox: {
    position: 'absolute',
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  addIcon: {
    position: 'absolute',
    bottom: 14,
    right: -12,
  },
  title: {
    marginTop: 92,
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Medium',
    fontSize: 30,

    letterSpacing: 0.3,
  },
  form: {
    paddingHorizontal: 16,
    marginTop: 33,
    width: '100%',
    gap: 16,
    fontFamily: 'Regular',
  },

  input: {
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 7,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    fontFamily: 'Regular',
    fontSize: 16,
  },
  text: {
    position: 'absolute',
    right: 32,
    bottom: 16,
    fontSize: 16,
    color: '#1B4371',
  },
  button: {
    marginTop: 27,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
