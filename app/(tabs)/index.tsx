import { StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background-light dark:bg-background-dark">
      <Text className="text-typography-950 dark:text-typography-50 text-2xl font-bold">Tab One</Text>
      <View className="my-4 h-px w-4/5 bg-typography-200 dark:bg-typography-700" />
      <Text className="text-primary-500 font-serif text-lg">Primary Color (Serif Font)</Text>
      <Text className="text-secondary-500 font-body text-lg">Secondary Color (Body Font)</Text>
      <Text className="text-tertiary-500 font-rounded text-lg">Tertiary Color (Rounded Font)</Text>
      <Text className="text-typography-950 text-lg">Typography 950</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Original styles, kept for reference but largely replaced by Tailwind classes
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
