import { View, Text, Image, StyleSheet } from "react-native";

export default function StoreList() {
  const stores = [
    {
      id: 1,
      name: "HortiFruti",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e809cb0edef7c36f751b5d8fbebdfbd08c11fad0?placeholderIfAbsent=true",
      rating: "4.6",
      category: "Mercado",
      distance: "2.5 km",
      time: "30 - 50 min",
      delivery: "R$ 6,00",
    },
    {
      id: 2,
      name: "Hortifruti Santo Antônio",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b16c56373f115acbeea0bffebe4e90310208b09?placeholderIfAbsent=true",
      rating: "4.6",
      category: "Hortifruti",
      distance: "1.2 km",
      time: "40 - 50 min",
      delivery: "Entrega grátis",
      hasCoupon: true,
    },
    {
      id: 3,
      name: "Novo Hortifruti",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0545c9a74cd021392c547898d56fce4ef82f780c?placeholderIfAbsent=true",
      rating: "3.3",
      category: "Hortifruti",
      distance: "1.2 km",
      time: "40 - 50 min",
      delivery: "R$ 7,00",
    },
    {
      id: 4,
      name: "Hortifruti Bom Preço",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8874707e5bb2d045d80f50380fcecbe6560f64bc?placeholderIfAbsent=true",
      rating: "4.6",
      category: "Hortifruti",
      distance: "5 km",
      time: "40 - 50 min",
      delivery: "Entrega grátis",
    },
    {
      id: 5,
      name: "Ultrabox",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/074abd9bc7c1c0c51cd4748777bed1ad992c834e?placeholderIfAbsent=true",
      rating: "4.6",
      category: "Mercado",
      distance: "1.9 km",
      time: "40 - 50 min",
      delivery: "R$ 7,00",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lojas</Text>
      {stores.map((store) => (
        <View key={store.id} style={styles.storeItem}>
          <View style={styles.storeContent}>
            <Image source={{ uri: store.image }} style={styles.storeImage} />
            <View style={styles.storeDetails}>
              <Text style={styles.storeName}>{store.name}</Text>
              <View style={styles.ratingContainer}>
                <Image
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/706114abd526c65a3e68bf4bed7fae2ad59c0adc?placeholderIfAbsent=true",
                  }}
                  style={styles.starIcon}
                />
                <Text style={styles.ratingText}>{store.rating}</Text>
                <Text style={styles.categoryText}>{store.category}</Text>
                <Text style={styles.distanceText}>{store.distance}</Text>
              </View>
              <View style={styles.deliveryContainer}>
                <Text style={styles.timeText}>{store.time}</Text>
                <Text style={styles.deliveryText}>{store.delivery}</Text>
              </View>
              {store.hasCoupon && (
                <View style={styles.couponContainer}>
                  <View style={styles.couponIcon} />
                  <Text style={styles.couponText}>
                    Cupom de R$ 5 disponível
                  </Text>
                </View>
              )}
            </View>
          </View>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8228961d11bb81f68b889bfb39bb9f7286e28984?placeholderIfAbsent=true",
            }}
            style={styles.menuIcon}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    fontFamily: "DM Sans",
    marginBottom: 16,
  },
  storeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
    paddingRight: 8,
  },
  storeContent: {
    flexDirection: "row",
    gap: 15,
  },
  storeImage: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginTop: 4,
  },
  storeDetails: {
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
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },
  timeText: {
    color: "#7C7B7A",
    fontSize: 12,
  },
  deliveryText: {
    color: "#39B54A",
    fontSize: 12,
  },
  couponContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
    backgroundColor: "#EBF3F8",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  couponIcon: {
    width: 16,
    height: 16,
    backgroundColor: "#3E6E97",
    borderRadius: 8,
  },
  couponText: {
    color: "#3E6E97",
    fontSize: 12,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
});
