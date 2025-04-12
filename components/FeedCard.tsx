import { View, Text, Image, StyleSheet } from "react-native";

export default function FeedCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdbd33047fd4d1afa87d7bf501b15ccd92ce6cc9?placeholderIfAbsent=true" }} style={styles.profileImage} />
        <Text style={styles.storeName}>Hortifruti Esperança</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e92cc5dcfb3c6a69ccfffef33d0a583e2547788?placeholderIfAbsent=true" }} style={styles.feedImage} />
        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fbf55619e37c367e8cc727d8fa59b5fd0a10dcd?placeholderIfAbsent=true" }} style={styles.feedImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 218,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  storeName: {
    fontFamily: "DM Sans",
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 8,
    gap: 8,
  },
  feedImage: {
    width: 105,
    height: 72,
    borderRadius: 4,
  },
});
