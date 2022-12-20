import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate email and password
    // Send a request to the server to log in
    // If successful, navigate to the home screen
    // If unsuccessful, show an error message
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleLabel}>
          START YOUR {"\n"}WORKOUT {"\n"}JOURNEY
        </Text>
      </View>
      <Image
        source={require("../../assets/Push-up-Login.png")}
        style={{ width: 120, height: 120 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        // style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {/* <Text style={styles.label}>password</Text> */}
      <TextInput
        style={styles.input}
        placeholder={"Password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Continue" onPress={handleLogin} />
      <Text Style={styles.label2}>Don't Have Account?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    // justifyContent: "center",
  },
  titleLabel: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 50,
    marginTop: 60,
    width: 240,
    marginLeft: 130,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "60%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  title: {
    width: "60%",
    height: 40,
    backgroundColor: "black",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  label2: {
    marginTop: 40,
    fontSize: 30,
  },
});

export default LoginPage;
