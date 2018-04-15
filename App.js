import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "For a run at the Ledford Branch Trail at Bent Creek"
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleTextChange(location) {
  this.setState({ location });
}

handleSubmit(event) {
  event.preventDefault();
  console.log('button clicked!');
  console.log('Trip location:', this.state.location); 
}
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Start A New Trip</Text>
        <Text>Where are you going?</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          onChangeText={this.handleTextChange}
          value={this.state.location}
        />
        <Button onPress={this.handleSubmit} title="OK" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
