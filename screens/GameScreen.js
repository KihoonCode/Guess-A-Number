import React, { useState } from 'react';
import {
   StyleSheet,
   View,
   Text,
   Button
} from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
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

const GameScreen = props => {
   // current computer guess
   const [currGuess, SetCurrGuess] =
      useState(generateNumber(1, 100, props.userGuess));

   return (
      <View style={styles.screen}>
         <Card style={styles.numberContainer}>
            <Text>Your opponent's guess:</Text>
            <NumberContainer>{currGuess}</NumberContainer>
         </Card>
         <Card style={styles.buttonContainer}>
            <Button color={Colors.primary} title='LOWER'/>
            <Button color={Colors.primary} title='GREATER'/>
         </Card>
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