import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';

const GameOverScreen = ({ totalGuesses, userGuess, onRestart }) => {
   return (
      <View style={styles.screen}>
         <TitleText>The Game is Over!</TitleText>
         <View style={styles.imageContainer}>
            <Image
               source={require('../assets/success.png')}
               style={styles.image}
            />
         </View>
         <BodyText>Your number was: {userGuess}</BodyText>
         <BodyText>Total guesses taken: {totalGuesses}</BodyText>
         <Button title='Restart' onPress={onRestart} />
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },

   imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: Colors.primary,
      overflow: 'hidden',
      marginVertical: 30
   },

   image: {
      width: '100%',
      height: '100%'
   }
});

export default GameOverScreen;