import { View, Image, StyleSheet } from "react-native";

export default function PremiumCards() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/PremiumCard.png")} style={styles.backgroundImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: "100%",
    gap: 12,
  },
  backgroundImage: {
    width: "100%",
    height: 140,
    borderRadius: 16,
  },
});
