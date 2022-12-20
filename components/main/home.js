import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet} from "react-native";
import {image} from "react-native"

const home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.header}>PUSH-UP DETECTOR</Text>
                <Text style={styles.header2}>HELLO, USER</Text>
                <Text style={styles.header3}>Day Streak: xxx days</Text>
            </View>
            <View style={styles.beginner}>
                <Text style={styles.contentB1}>Beginner</Text>
                <Text style={styles.contentB2}>Start as a beginner</Text>
                <Text style={styles.contentB3}>START</Text>
            </View>
            <View style={styles.advanced}>
                <Text style={styles.contentA1}>Advanced</Text>
                <Text style={styles.contentA2}>Train continuously</Text>
                <Text style={styles.contentA3}>START</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center", 
        fontFamily: "Lexend",
    },
    container2:{
        width: "100%",
        height: 166,
    },
    header:{
        fontSize: 28,
    },
    header2:{
        fontSize: 16,
    },
    header3:{
        fontSize: 13,
    },
    beginner:{
        width: "80%",
        height: 120,
        backgroundColor: '#BFEAF5',
    },
    contentB1:{
        fontSize: 36,
    },
    contentB2:{
        fontSize: 13,
    },
    contentB3:{
        fontSize: 13,
        width: "30%",
        height: 21,
        borderRadius: 20,
    },
    advanced:{
        width: "80%",
        height: 120,
        backgroundColor: '#BFEAF5',
    },
    contentA1:{
        fontSize: 36,
    },
    contentA2:{
        fontSize: 13,
    },
    contentA3:{
        fontSize: 13,
        width: "30%",
        height: 21,
        borderRadius: 20,
    },
});