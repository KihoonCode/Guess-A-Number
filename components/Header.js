import React from 'react';
import {
   StyleSheet,
   View,
   Text
} from 'react-native';

const Header = props => {
    return (
       <View style={styles.header}>
          <Text style={styles.headerTitle}>{props.title}</Text>
       </View>
    );
};

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: 90,
      backgroundColor: '#333333',
      paddingTop: 36,
      justifyContent: 'center',
      alignItems: 'center'
   },
   
   headerTitle: {
      color: 'white',
      fontSize: 18
   }
});

export default Header;