import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Rests() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();
  return (
    <View>
      <Text className="font-bold text-lg justify-center">{rest.join("/")}</Text>
      <Text> Details about products at {rest.join("/")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
