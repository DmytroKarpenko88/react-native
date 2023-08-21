import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import React, { useState } from 'react';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeybord(false);
  };
  const onSubmitForm = () => {
    console.log(state);
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.wrapper}>
            <Text style={styles.title}>Увійти</Text>

            <View style={{ ...styles.form, marginBottom: isShowKeybord && 30 }}>
              <TextInput
                onFocus={() => setIsShowKeybord(true)}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, email: value }))
                }
                value={state.email}
                style={styles.input}
                placeholder='Адреса електронної пошти'
              />
              <View>
                <TextInput
                  onFocus={() => setIsShowKeybord(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, password: value }))
                  }
                  style={styles.input}
                  secureTextEntry
                  placeholder='Пароль'
                />
                <Text style={styles.text}>Показати</Text>
              </View>
              <Pressable
                style={{
                  ...styles.button,
                  display: isShowKeybord ? 'none' : 'flex',
                }}
                onPress={() => onSubmitForm()}
              >
                <Text style={styles.buttonText}>Увійти</Text>
              </Pressable>
              <Text
                style={{
                  ...styles.buttonText,
                  color: '#1B4371',
                  textAlign: 'center',
                  display: isShowKeybord ? 'none' : 'flex',
                  marginBottom: isShowKeybord ? 0 : 144,
                }}
              >
                Немає акаунту? Зареєструватися
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
    // height: 489,
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
    marginTop: 32,
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
