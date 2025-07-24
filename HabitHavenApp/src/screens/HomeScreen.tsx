import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to HabitHaven</Text>
      <Text style={styles.infoText}>Your cozy habit tracking town builder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f5f2',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6d597a',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#6d597a',
    opacity: 0.8,
  },
});

export default HomeScreen; 