import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function LastStores() {
  const stores = [
    { id: 1, name: "Hortifruti", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a3575abe081751dd00e5ad8d222b30d63e1658a?placeholderIfAbsent=true" },
    { id: 2, name: "Hortifruti\nDelivery", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8164ea2798e869c29c58d5aa4530d17239267d15?placeholderIfAbsent=true" },
    { id: 3, name: "Hortifruti\nd'Casa", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4001b179db6a110342064d6512722dd6822d1c97?placeholderIfAbsent=true" },
    { id: 4, name: "Hortifruti\nEsperança", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/439efa57592eee3628778b53b0c02517084bd721?placeholderIfAbsent=true" },
    { id: 5, name: "HortiFruti\ndo Bairro", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d47ed693280c53e063ca3c19e5f8e4cf5936b4f0?placeholderIfAbsent=true" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Últimas lojas</Text>
        <Text style={styles.viewMore}>Ver mais</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {stores.map((store) => (
          <View key={store.id} style={styles.storeItem}>
            <Image source={{ uri: store.image }} style={styles.storeImage} />
            <Text style={styles.storeName}>{store.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
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
  scrollView: {
    flexDirection: "row",
  },
  storeItem: {
    alignItems: "center",
    marginRight: 16,
    width: 64,
  },
  storeImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  storeName: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 12,
    color: "#7C7B7A",
    fontFamily: "DM Sans",
    fontWeight: "500",
  },
});
