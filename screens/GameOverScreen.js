import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const GameOverScreen = ({ totalGuesses, userGuess, onRestart }) => {
   return (
      <View style={styles.screen}>
         <Text >The Game is Over!</Text>
         <Text>Your number was: {userGuess}</Text>
         <Text>Total guesses taken: {totalGuesses}</Text>
         <Button title='Restart' onPress={onRestart} />
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});

export default GameOverScreen;