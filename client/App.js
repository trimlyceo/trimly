import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [barber, setBarber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = () => {
    // For now we’ll just simulate a booking
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      {!submitted ? (
        <>
          <Text style={styles.title}>Book Your Cut 💈</Text>
          <TextInput
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Service (e.g., Fade)"
            value={service}
            onChangeText={setService}
            style={styles.input}
          />
          <TextInput
            placeholder="Barber Name"
            value={barber}
            onChangeText={setBarber}
            style={styles.input}
          />
          <Button title="Confirm Booking" onPress={handleBooking} />
        </>
      ) : (
        <>
          <Text style={styles.title}>You're Booked, {name}!</Text>
          <Text>Service: {service}</Text>
          <Text>Barber: {barber}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 12,
    marginBottom: 12
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});
