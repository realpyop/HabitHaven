import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HabitHaven</Text>
      <Text style={styles.subtitle}>Build habits, build your town</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5f2', // Soft background for cozy feel
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6d597a', // Soft purple for cozy aesthetic
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#6d597a',
    opacity: 0.8,
  }
});
