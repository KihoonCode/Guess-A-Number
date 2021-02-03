import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
   // user's final guess
   const [userGuess, setUserGuess] = useState();
   // number of guesses taken to get user's number
   const [numGuess, setNumGuess] = useState(0);

   /**
    * Starts the game with the final guess.
    */
   const startGame = guess => {
      setUserGuess(guess);
   };

   /**
    * Finishes the game. 
    */
   const endGame = totalGuess => {
      setNumGuess(totalGuess);
   }

   /**
    * Restarts the game.
    */
   const restartGame = () => {
      setUserGuess();
      setNumGuess(0);
   }

   // current screen
   let currScreen = <StartGameScreen startGame={startGame} />

   if (userGuess && numGuess <= 0) {
      currScreen = <GameScreen userGuess={userGuess} endGame={endGame} />;
   } else if (numGuess > 0) {
      currScreen = <GameOverScreen
         totalGuesses={numGuess}
         userGuess={userGuess}
         onRestart={restartGame} />;
   }

   return (
      <View style={styles.screen}>
         <Header title="Guess a number" />
         {currScreen}
      </View>
   );
}

const styles = StyleSheet.create({
   screen: {
      flex: 1
   }
});
