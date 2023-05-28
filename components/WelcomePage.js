import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HRProcessScreen = () => {
  const handleTaskPress = (task) => {
    // Perform the desired action when a task is pressed
    console.log('Task pressed:', task);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../src/images/hr.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.heading}>HR Process Automation</Text>
      <Text style={styles.description}>Streamline your HR operations with ease.</Text>
      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Onboarding')}>
        <Text style={styles.taskButtonText}>Onboarding</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Leave Management')}>
        <Text style={styles.taskButtonText}>Leave Management</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Performance Review')}>
        <Text style={styles.taskButtonText}>Performance Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.taskButton} onPress={() => handleTaskPress('Employee Benefits')}>
        <Text style={styles.taskButtonText}>Employee Benefits</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000		',
  },
  image: {
    width:200,
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  description: {
    fontSize: 16,
    marginBottom: 40,
    color: '#666666',
    textAlign: 'center',
  },
  taskButton: {
    width: 200,
    height: 50,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  taskButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default HRProcessScreen;
