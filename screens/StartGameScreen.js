import React, { useState } from 'react';
import {
   StyleSheet,
   View,
   Text,
   Button,
   TouchableWithoutFeedback,
   Keyboard
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
   const [number, setNumber] = useState('');

   const inputTracker = input => {
      setNumber(input.replace(/[^0-9]/g, ''));
   };

   return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
               <Text>Select a number!</Text>
               <Input
                  style={styles.userInput}
                  blurOnSubmit
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='number-pad'
                  maxLength={2}
                  onChangeText={inputTracker}
                  value={number} />
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
      </TouchableWithoutFeedback>
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
      fontSize: 15,
      width: '15%',
      textAlign: 'center'
   },

   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20
   },

   button: {
      width: '50%'
   }
});

export default StartGameScreen;