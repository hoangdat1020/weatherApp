/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  state = {
    name: 'loading',
    humidity: 'loading',
    temp: 'loading',
    descrip: 'loading',
    weather: 'loading'
  };

  getWeatherCity() {
    const city = this.props.navigation.getParam('citySearch', 'Hanoi');
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ebb42b00cdec55898025ba25c0277005`
    )
      .then(data => data.json())
      .then(data2 => {
        this.setState({
          name: data2.name,
          humidity: data2.main.humidity,
          temp: data2.main.temp,
          weather: data2.weather[0].main,
          descrip: data2.weather[0].description
        });
      });
  }

  componentDidMount() {
    this.getWeatherCity();
  }

  render() {
    if (this.props.navigation.getParam('citySearch')) {
      this.getWeatherCity();
    }
    return (
      <View style={styles.container}>
        <Text>name: {this.state.name} </Text>
        <Text>temp: {this.state.temp} </Text>
        <Text>weather: {this.state.weather} </Text>
        <Text>descrip: {this.state.descrip} </Text>
        <Text>humidity: {this.state.humidity} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#E6E6E6'
  }
});
