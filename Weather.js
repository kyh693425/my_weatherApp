import React from "react";
import PropTypes from "prop-types";
import { Animated, Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Video } from "expo-av";

const weatherOption = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    uri: require("./video/thunderStorm.mp4"),
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    uri: require("./video/rainy.mp4"),
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    uri: require("./video/snowy.mp4"),
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    uri: require("./video/sunShine.mp4"),
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    uri: require("./video/clouds.mp4"),
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    uri: require("./video/fog.mp4"),
  },
};

export default function Weather({ temp, condition }) {
  const opacity = React.useMemo(() => new Animated.Value(0), []);

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <Animated.View style={[styles.backgroundViewWrapper, { opacity: 0.6 }]}>
        <Video
          isLooping
          isMuted
          positionMillis={500}
          onLoad={() => {
            Animated.timing(opacity, {
              toValue: 1,
              useNativeDriver: true,
            }).start();
          }}
          resizeMode="cover"
          shouldPlay
          source={weatherOption[condition].uri}
          //source={require()}
          style={{ flex: 1 }}
        />
      </Animated.View>
      <MaterialCommunityIcons
        size={86}
        name={weatherOption[condition].iconName}
        color="white"
      ></MaterialCommunityIcons>
      <Text style={styles.text}>{temp}°</Text>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
});
