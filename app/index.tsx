import { StyleSheet, Text , View} from 'react-native';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href="/home" asChild>
        <Text style={styles.title}>Entrar</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
