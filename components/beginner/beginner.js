import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const App = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 32, textAlign: "center"}}>Beginner Push-Up</Text>
        <Text style={{fontSize: 16, textAlign: "center", marginTop: 10}}>Do 10 Push-Ups with correct posture</Text>
      </View>
      <Text style={{fontSize:14, width: 350, marginLeft: 15, marginTop: 15, justifyContent:"center"}}>Let’s begin your push-up journey with just 10 push-up. We will help you fix your form and count until you did 10 push-ups.</Text>
      <View style={styles.content}>
        <View style>
          <Image
            source={require("../../assets/Beginner-Push-Up.png")}
            style={{ width: 200, height: 100, marginLeft: 15, marginTop: 15}}
          />
        </View>
        <View style>
          <Text style={{width: 160, justifyContent: "center", marginLeft: 15, fontSize: 12, marginTop: 15}}>If it’s hard to do, we recommend to do Incline Push-Up instead.</Text>
        </View>
      </View>
      <Image
        source={require("../../assets/pushup.png")}
        style={{ width: 360, height: 230, marginLeft: 15, marginTop: 40}}
      />
      <Text style>(Example of the camera capture)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
  },
  header:{
    width: "100%",
    height: 90,
    backgroundColor: "#82AAE3",
  },
  content:{
    flexDirection: "row",
  }
});


export default App;
