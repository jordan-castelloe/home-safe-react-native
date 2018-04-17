import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, DatePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      location: "For a run at the Ledford Branch Trail at Bent Creek",
      time: new Date(),
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.setEndTime = this.setEndTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

setEndTime(time) {
  this.setState({ time })
}
   
handleTextChange(location) {
  this.setState({ location });
}

handleSubmit(event) {
  event.preventDefault();
  console.log('Trip location:', this.state.location); 
  console.log('Return time:', this.state.time);
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
        <Text>What time should you be back?</Text>
        <DatePickerIOS
          date={this.state.time}
          mode='time'
          onDateChange={this.setEndTime}
        />
        <Button onPress={this.handleSubmit} title="OK" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export default StackNavigator({
  Home: {
    screen: HomeScreen
  }
})