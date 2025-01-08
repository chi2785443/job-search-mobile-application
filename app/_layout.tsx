import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import React from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // const [fontLoaded] = useFonts({
  //   DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  //   DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  //   DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontLoaded]);

  // if (!fontLoaded) return null;
  return (
    <Stack
    // onLayout={onLayoutRootView}
    />
  );
};

export default RootLayout;
