import { View, Text, Image, StyleSheet } from "react-native";

export default function StoreCard() {
  return (
    <View style={styles.container}>
      <View style={styles.storeInfo}>
        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e809cb0edef7c36f751b5d8fbebdfbd08c11fad0?placeholderIfAbsent=true" }} style={styles.storeImage} />
        <View style={styles.details}>
          <Text style={styles.storeName}>HortiFruti</Text>
          <View style={styles.ratingContainer}>
            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/706114abd526c65a3e68bf4bed7fae2ad59c0adc?placeholderIfAbsent=true" }} style={styles.starIcon} />
            <Text style={styles.ratingText}>4,6</Text>
            <Text style={styles.categoryText}>Mercado</Text>
            <Text style={styles.distanceText}>2,5 km</Text>
          </View>
          <View style={styles.deliveryInfo}>
            <Text style={styles.timeText}>30 - 50 min</Text>
            <Text style={styles.priceText}>R$ 6,00</Text>
          </View>
        </View>
      </View>
      <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8228961d11bb81f68b889bfb39bb9f7286e28984?placeholderIfAbsent=true" }} style={styles.menuIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 8,
    maxWidth: 363,
    width: "100%",
  },
  storeInfo: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 15,
  },
  storeImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginTop: 4,
  },
  details: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    fontFamily: "DM Sans",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  ratingText: {
    color: "#D9B600",
    fontSize: 12,
    fontWeight: "700",
  },
  categoryText: {
    color: "#7C7B7A",
    fontSize: 12,
  },
  distanceText: {
    color: "#7C7B7A",
    fontSize: 12,
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },
  timeText: {
    color: "#7C7B7A",
    fontSize: 12,
  },
  priceText: {
    color: "#39B54A",
    fontSize: 12,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
});
