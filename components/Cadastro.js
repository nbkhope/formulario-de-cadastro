import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Cadastro extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Nova Conta</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput style={styles.textInput} underlineColorAndroid="rgba(0, 0, 0, 0)"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'rgb(130, 149, 174)',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  inputText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
  },
});

export default Cadastro;
