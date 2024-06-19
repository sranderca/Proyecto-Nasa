import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lefContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>

      <View style={styles.rightContainer}>
        <Image
          source={require("../../assets/nasa-logo.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexDirection: "row",
    alignItems: "center",
  },
  lefContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Header;
