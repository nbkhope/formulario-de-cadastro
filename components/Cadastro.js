import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Cadastro extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Nova Conta</Text>
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
});

export default Cadastro;
