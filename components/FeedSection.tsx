import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function FeedSection() {
  const feeds = [
    {
      id: 1,
      storeName: "Hortifruti Esperança",
      storeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdbd33047fd4d1afa87d7bf501b15ccd92ce6cc9?placeholderIfAbsent=true",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/0e92cc5dcfb3c6a69ccfffef33d0a583e2547788?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/0fbf55619e37c367e8cc727d8fa59b5fd0a10dcd?placeholderIfAbsent=true"],
    },
    {
      id: 2,
      storeName: "Hortifruti Delivery",
      storeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e3df66b5666ba5ac3b2b153a494b808e30a2ae6?placeholderIfAbsent=true",
      images: ["https://cdn.builder.io/api/v1/image/assets/TEMP/918892b3dde6f81f2798d15611f1c4ec50cff06b?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/9e11c00ffa113dcb2d0c8da335afdcfa51c5237a?placeholderIfAbsent=true"],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Feed</Text>
        <Text style={styles.viewMore}>Ver mais</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.feedsContainer}
      >
        {feeds.map((feed) => (
          <View key={feed.id} style={styles.feedItem}>
            <View style={styles.storeInfo}>
              <Image
                source={{ uri: feed.storeImage }}
                style={styles.storeImage}
              />
              <Text style={styles.storeName}>{feed.storeName}</Text>
            </View>
            <View style={styles.imagesContainer}>
              {feed.images.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={styles.feedImage}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    fontFamily: "DM Sans",
  },
  viewMore: {
    fontSize: 12,
    color: "#39B54A",
    fontFamily: "DM Sans",
    fontWeight: "700",
  },
  feedsContainer: {
    marginTop: 16,
  },
  feedItem: {
    width: 218,
    marginRight: 16,
  },
  storeInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  storeImage: {
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
  imagesContainer: {
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
