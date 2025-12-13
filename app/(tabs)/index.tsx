import { Link } from 'expo-router';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function TabOneScreen() {
  return (
    <ScrollView className="flex-1 bg-background-light p-4">
      <Text className="text-typography-950 text-2xl font-bold font-serif mb-6">My Vocabulary</Text>
      
      <Link href="/word/1" asChild>
        <View className="bg-background-card p-4 rounded-3xl shadow-soft-1 mb-4">
          <Text className="text-xl font-serif text-typography-950 mb-1">Serendipity</Text>
          <Text className="text-typography-500 text-sm" numberOfLines={1}>The occurrence and development of events by chance...</Text>
          <View className="flex-row mt-2">
            <View className="bg-primary-50 px-2 py-1 rounded-full mr-2">
               <Text className="text-xs text-primary-700 font-bold">noun</Text>
            </View>
          </View>
        </View>
      </Link>

    </ScrollView>
  );
}
