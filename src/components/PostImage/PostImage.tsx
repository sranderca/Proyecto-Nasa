import React, { FC } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { PostImage as PostImageTypes, RootStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type PostImageNativationPro = NativeStackNavigationProp<
  RootStackParams,
  "Details"
>;

const PostImage: FC<PostImageTypes> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNativationPro>();

  const handleViewPress = () => {
    navigate("Details", { date, title, url, explanation });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity
        onPress={handleViewPress}
        style={styles.buttonContainer}
      >
        <Text style={styles.titleButton}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,19,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  date: {
    color: "#fff",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  titleButton: {
    color: "#078BDE",
    fontSize: 16,
  },
});

export default PostImage;
