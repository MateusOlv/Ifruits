import { View, Text, Image, StyleSheet } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>QS 07, Lote 01, Taguatinga Sul</Text>
          <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c1d5eeeac7cc143756965fdaa8d034e0144009?placeholderIfAbsent=true" }} style={styles.chevronIcon} />
        </View>
        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd96c52d4c1f5cb13286511313d79b3e51db66d4?placeholderIfAbsent=true" }} style={styles.searchIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 350,
    width: "100%",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  addressText: {
    fontFamily: "DM Sans",
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
  chevronIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
