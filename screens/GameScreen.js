import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

/**
 * Returns a random number between min(inclusive) and max(exclusive), yet
 * exludes user guess.
 */
const generateNumber = (min, max, exclude) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   const random = Math.floor(Math.random() * (max - min)) + min;
   if (random === exclude) {
      return generateNumber(min, max, exclude);
   } else {
      return random;
   }
};

const GameScreen = props => {
   // initial guess in the game
   const [initialGuess,] = useState(generateNumber(1, 100, props.userGuess));
   // current computer guess
   const [currGuess, setCurrGuess] = useState(initialGuess);
   // past guesses of computer
   const [pastGuesses, setPastGuesses] = useState([initialGuess]);
   // current game's maximum number
   const currHigh = useRef(100);
   // current game's minimum number
   const currLow = useRef(1);

   const { userGuess, endGame } = props;

   useEffect(() => {
      if (currGuess === userGuess) {
         endGame(pastGuesses.length);
      }
   }, [currGuess, userGuess, endGame]);

   /**
    * Generates a new random value based on whether current guess is lower or greater.
    * If user picks a wrong choice, alert user that user is lying.
    */
   const generateNextGuess = direction => {
      if ((direction === 'lower' && currGuess < props.userGuess) ||
         (direction === 'greater' && currGuess > props.userGuess)) {
         Alert.alert('Don\'t lie!',
            'Seems like you are lying :(',
            [{ title: 'Sorry...', style: 'cancel' }]);
         return;
      }
      if (direction === 'lower') {
         currHigh.current = currGuess;
      } else { // direction is greater
         currLow.current = currGuess + 1;
      }
      const nextGuess = generateNumber(currLow.current, currHigh.current, currGuess);
      setCurrGuess(nextGuess);
      setPastGuesses(curr => [nextGuess, ...curr]);
   };

   return (
      <View style={styles.screen}>
         <Card style={styles.numberContainer}>
            <TitleText>Your opponent's guess:</TitleText>
            <NumberContainer>{currGuess}</NumberContainer>
         </Card>
         <Card style={styles.buttonContainer}>
            <MainButton onPress={() => generateNextGuess('lower')}>
               <Ionicons name="md-remove" size={26} color="white" />
            </MainButton>
            <MainButton onPress={() => generateNextGuess('greater')}>
               <Ionicons name="md-add" size={26} color="white" />
            </MainButton>
         </Card>
         <ScrollView>
            {pastGuesses.map(guess =>
               <View key={guess}>
                  <Text>{guess}</Text>
               </View>)}
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
   },
   numberContainer: {
      alignItems: "center",
      marginBottom: '5%'
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '70%',
      paddingHorizontal: 20
   }
});

export default GameScreen;