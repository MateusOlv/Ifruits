import { ScrollView, StyleSheet, View } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import PremiumCards from "@/components/PremiumCards";
import LastStores from "@/components/LastStores";
import FeedSection from "@/components/FeedSection";
import StoreList from "@/components/StoreList";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <HomeHeader />
          <View style={styles.cardsSection}>
            <PremiumCards />
          </View>
          <View style={styles.storesSection}>
            <LastStores />
          </View>
          <FeedSection />
          <StoreList />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 80, // Space for bottom menu
  },
  cardsSection: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  storesSection: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
});
