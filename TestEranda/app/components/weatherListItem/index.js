import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export const ItemSeparatorView = ({item}) => {
    return (

        <View>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.name}</Text>
        </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
     flex: 1,
     flexDirection : 'column'
    },

    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color : '#000'
    },
  })