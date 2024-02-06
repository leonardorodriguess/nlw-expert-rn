import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from "@expo-google-fonts/inter";

export default function Layout () {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })
  return (
    <SafeAreaView className="flex-1">
      <Slot />
    </SafeAreaView>
  )
}