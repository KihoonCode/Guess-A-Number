import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

import Colors from '../constants/colors';

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

/**
 * Returns a text showing guessing history.
 */
const generateItem = (guess, round) => (
   <View key={guess} style={styles.listItem}>
      <BodyText style={styles.historyText}>Guess for #{round}:</BodyText>
      <BodyText style={styles.historyText}>{guess}</BodyText>
   </View>
);

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
         <View style={styles.listContainer}>
            <ScrollView contentContainerStyle={styles.list}>
               {pastGuesses.map((guess, index) =>
                  generateItem(guess, pastGuesses.length - index))}
            </ScrollView>
         </View>
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
   },
   listContainer: {
      flex: 1,
      width: '80%'
   },
   list: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
   },
   listItem: {
      backgroundColor: Colors.primary,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      padding: 15,
      fontSize: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
      width: '60%'
   },
   historyText: {
      color: '#FFFFFF'
   }
});

export default GameScreen;