import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Cadastro from './components/Cadastro';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cadastro />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;
