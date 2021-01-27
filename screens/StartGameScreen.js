import React from 'react';
import {
   StyleSheet, View, Text, Button, TextInput
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = props => {
   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Start a New Game!</Text>
         <Card style={styles.inputContainer}>
            <Text>Select a number!</Text>
            <TextInput style={styles.userInput} placeholder="Type a number" />
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <Button
                     title="RESET"
                     onPress={() => { }}
                     color={Colors.primary} />
               </View>
               <View style={styles.button}>
                  <Button
                     title="CONFIRM"
                     onPress={() => { }}
                     color={Colors.primary} />
               </View>
            </View>
         </Card>
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
      alignItems: 'center',
      marginTop: 20
   },

   userInput: {
      padding: 10,
      marginVertical: '5%',
      fontSize: 15
   },

   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: '5%'
   },

   button: {
      width: '50%'
   }
});

export default StartGameScreen;