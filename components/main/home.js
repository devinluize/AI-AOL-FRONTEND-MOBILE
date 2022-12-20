import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const App = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 50, height: 50, marginLeft: 20 }}
        />
        <View style={styles.container3}>
          <Text style={styles.header}>PUSH-UP DETECTOR</Text>
          <Text style={styles.header2}>HELLO, USER</Text>
          <Image
            source={require("../../assets/user.png")}
            style={{ width: 50, height: 50, marginLeft: 300, marginTop: -20 }}
          />
          <Text style={styles.header3}>Day Streak: xxx days</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.beginner}>
        <View style>
          <Text style={styles.contentB1}>Beginner</Text>
          <Text style={styles.contentB2}>Start as a beginner</Text>
        </View>
        <View style={{alignSelf:"center", marginLeft: 50}}>
          <Image
              source={require("../../assets/beginner.png")}
              style={{ width: 70, height: 70}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.advanced}>
        <View style>
          <Text style={styles.contentA1}>Advanced</Text>
          <Text style={styles.contentA2}>Train continuously</Text>
        </View>
        <View style={{alignSelf:"center", marginLeft: 50}}>
          <Image
                source={require("../../assets/Advanced.png")}
                style={{ width: 70, height: 70}}
          /> 
        </View>
      </TouchableOpacity >
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  container2: {
    width: "100%",
    height: 160,
    backgroundColor: "#82AAE3",
  },
  container3:{
    width: "100%",
    height: 65,
    backgroundColor: "#EAFDFC",
    marginTop: 15,
  },
  header: {
    fontSize: 28,
    marginLeft: 100,
    marginTop: -60,
  },
  header2: {
    fontSize: 16,
    marginTop: 30,
    marginLeft: 20,
    fontFamily: "sans-serif",
  },
  header3: {
    fontSize: 13,
    marginLeft: 20,
    fontFamily: "sans-serif",
    marginTop: -20,
  },
  beginner: {
    width: "80%",
    height: 120,
    backgroundColor: "#BFEAF5",
    marginTop: 60,
    borderRadius: 20,
    flexDirection: "row",
  },
  contentB1: {
    fontSize: 40,
    marginLeft: 10,
    marginTop: 20,
  },
  contentB2: {
    fontSize: 13,
    marginLeft: 10,
  },
  advanced: {
    width: "80%",
    height: 120,
    backgroundColor: "#BFEAF5",
    marginTop: 50,
    borderRadius: 20,
    flexDirection: "row",
  },
  contentA1: {
    fontSize: 36,
    marginTop: 20,
  },
  contentA2: {
    fontSize: 13,
  },
});

export default App;
