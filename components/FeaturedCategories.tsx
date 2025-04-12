import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function FeaturedCategories() {
  const categories = [
    { id: 1, name: "Frutas da Estação", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed6662b45834c956298fed3de81e117ff7605a7c?placeholderIfAbsent=true" },
    { id: 2, name: "Mercado", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/690aad26d1e74ae630bca96741cff66d8bb2cd41?placeholderIfAbsent=true" },
    { id: 3, name: "Frutas Exóticas", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae313bf5689af86b4d8c6df5f9763e26bed87ddb?placeholderIfAbsent=true" },
    { id: 4, name: "Promoções", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e04cc862f7ed3876e7b4c1b8b14050152965a931?placeholderIfAbsent=true" },
    { id: 5, name: "Kit Detox", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true" },
    { id: 6, name: "Kit Vitamina C", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryItem}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: category.image }}
                style={styles.categoryImage}
              />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    width: 94,
    marginRight: 12,
    alignItems: "center",
  },
  imageContainer: {
    width: 94,
    height: 94,
    borderRadius: 8,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryName: {
    marginTop: 16,
    fontFamily: "DM Sans",
    fontSize: 12,
    color: "#7C7B7A",
    fontWeight: "500",
    textAlign: "center",
  },
});
