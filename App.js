import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {
   // user's final guess
   const [userGuess, setUserGuess] = useState();

   /**
    * Starts the game with the final guess.
    */
   const startGame = guess => {
      setUserGuess(guess);
   }; 

   /**
    * current screen
    */
   let currScreen = <StartGameScreen startGame={startGame} />

   if (userGuess) {
      currScreen = <GameScreen userGuess={userGuess} />
   }

   return (
      <View style={styles.screen}>
         <Header title="Guess a number"/>
         {currScreen}
      </View>
   );
}

const styles = StyleSheet.create({
   screen: {
      flex: 1
   }
});
