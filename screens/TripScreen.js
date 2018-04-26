import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TripScreen extends React.Component {

  constructor() {
    super();
    this.finishTrip = this.finishTrip.bind(this);
  }

  finishTrip(event) {
    event.preventDefault();
    this.props.navigation.navigate('Done');
  }

  render() {
    return (
      <View>
        <Text>
          This is the Trip screen!
          <Button onPress={this.finishTrip} title="OK" />
        </Text>
      </View>
    )
  }

}
