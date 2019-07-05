/**
 * Remote Code :D
 *   https://github.com/fabiodamasceno/remotecode

 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import codePush from "react-native-code-push";

export default class App extends Component {
  state = {
    bicote: false
  };
  componentDidMount() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.ON_NEXT_RESUME,
      checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
    });
  }
  bicote = () => {
    this.setState({ bicote: !this.state.bicote });
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: this.state.bicote
              ? "https://i.ibb.co/LPGM9gM/Guilherme-Porto-Sem-Bigodon.png"
              : "https://i.ibb.co/LPGM9gM/Guilherme-Porto-Sem-Bigodon.png"
          }}
        />
        <View style={styles.username}>
          <Text style={styles.name}>Guilherme </Text>
          <Text style={styles.surname}>Porto</Text>
        </View>
        <Text style={styles.instructions}>
          Você acha que o Guilherme Porto deve voltar a ter bigode?
        </Text>
        <TouchableOpacity onPress={this.bicote} style={styles.button}>
          <Text style={styles.buttonText}>
            {this.state.bicote ? "Sem Bicote" : "Com Bicote"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#676099",
    padding: 32
  },
  image: { width: 230, height: 230, borderRadius: 50 },
  username: {
    flexDirection: "row",
    margin: 30,
    textAlign: "center"
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff"
  },
  surname: {
    fontSize: 24,
    color: "#fff"
  },
  instructions: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  button: {
    width: 300,
    height: 50,
    marginTop: 50,
    backgroundColor: "#f79191",
    borderRadius: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  }
});
