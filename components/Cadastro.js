import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      mensagem: null,
      erros: [],
    };

    this.onCadastrarPress = this.onCadastrarPress.bind(this);
  }

  onCadastrarPress() {
    const erros = [];
    if (!this.state.email) {
      erros.push('O email não pode ficar em branco');
    }
    if (!this.state.senha) {
      erros.push('A senha não pode ficar em branco');
    }
    if (erros.length > 0) {
      this.setState({ erros });
      return;
    }

    this.setState({
      mensagem: 'Muito obrigado por se cadastrar! Verique o seu email para os próximos passos',
      email: '',
      senha: '',
    });
  }

  renderErros() {
    if (this.state.erros.length > 0) {
      return (
        <View>
          <Text>O seu cadastro falhou:</Text>
          {this.state.erros.map(erro => <Text>{erro}</Text>)}
        </View>
      );
    }
  }

  renderMensagem() {
    if (this.state.mensagem) {
      return (
        <Text style={{ alignSelf: 'center', color: 'green', fontSize: 18 }}>{this.state.mensagem}</Text>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Nova Conta</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Senha</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              value={this.state.senha}
              onChangeText={(text) => this.setState({ senha: text })}
            />
          </View>

          <View style={{ padding: 8 }}>
            <Button
              title="Cadastrar"
              onPress={this.onCadastrarPress}
            />
          </View>
        </View>

        {this.renderErros()}
        {this.renderMensagem()}
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
