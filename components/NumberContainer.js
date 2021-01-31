import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Color from '../constants/colors';

const NumberContainer = props => {
   return (
      <View style={styles.container}>
         <Text style={styles.number}>{props.children}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {

   },

   number: {

   }
});

export default NumberContainer ;