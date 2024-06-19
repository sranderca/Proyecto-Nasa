import React, { FC } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PostImage, RootStackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNativationPro = NativeStackNavigationProp<
  RootStackParams,
  "Details"
>;

const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNativationPro>();

  const handleViewPress = () => {
    navigate("Details", { date, title, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleViewPress}
      >
        <Text style={styles.titleButton}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  titleButton: {
    color: "#078BDE",
    fontSize: 16,
  },
});

export default TodaysImage;
