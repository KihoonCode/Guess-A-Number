import React from 'react';
import {
   StyleSheet,
   View,
   Text,
   Button,
   TextInput
} from 'react-native';

const StartGameScreen = props => {
   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Start a New Game!</Text>
         <View style={styles.inputContainer}>
            <Text>Select a number!</Text>
            <TextInput style={styles.userInput} placeholder="Type a number" />
            <View style={styles.buttonContainer}>
               <Button title="RESET" onPress={() => { }} />
               <Button title="CONFIRM" onPress={() => { }} />
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
   },

   title: {
      fontSize: 20,
      marginVertical: 10
   },

   inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center'
   },

   userInput: {
      padding: 10,
      marginVertical: '5%'
   },

   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: '5%'
   }
});

export default StartGameScreen;