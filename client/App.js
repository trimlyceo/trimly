import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [barber, setBarber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, service, barber, date: '2025-06-21', time: '14:30' })
    });

    const data = await response.json();
    console.log('Booking response:', data);

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Something went wrong!');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Could not connect to the server.');
  }
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
