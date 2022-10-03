import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import CheckBox from "./src/components/CheckBox";

export default function App() {
  const [check, setCheck] = useState(false)
  function handleCheck() {
    setCheck(!check);
  }
  return (
    <>
      <StatusBar backgroundColor="#33ccff" />
      <View style={styles.Container}>

        {/* Esse é o nosso lindo checkBox */}
        {/* <CheckBox
          label="Esse é o checkbox"
          labelStyle={{ color: '#fff', fontSize: 16 }}
          iconColor="#fff"
          checkColor="#fff"
          value={check}
          onChange={handleCheck}
        /> */}

         <CheckBox
          label="Esse é o checkbox"
          labelStyle={{ color: 'black', fontSize: 15 }}
          iconColor="black"
          checkColor="black"
          value={check}
          onChange={handleCheck}
        /> 
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "baseline",
    backgroundColor: '#33ccff',
    padding: 20
  }
})