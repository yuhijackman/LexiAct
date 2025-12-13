import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function StudySelectorScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <View className="px-4 pt-8">
        <Text className="font-serif text-3xl font-bold text-typography-950 mb-2">Ready to learn?</Text>
        <Text className="font-body text-typography-500 text-lg mb-8">Choose your practice mode for today.</Text>

        <View className="gap-4">
          <Pressable 
            onPress={() => router.push('/study/quick-review')}
            className="bg-background-card rounded-3xl p-6 shadow-soft-2 active:scale-95"
          >
            <View className="flex-row items-center justify-between mb-2">
              <View className="bg-primary-100 p-3 rounded-full">
                <FontAwesome name="bolt" size={24} color="#34C759" />
              </View>
              <Text className="text-typography-400 font-bold text-xs">5 MIN</Text>
            </View>
            <Text className="font-serif text-xl font-bold text-typography-950 mb-1">Quick Review</Text>
            <Text className="font-body text-typography-500">Flashcards to refresh your memory.</Text>
          </Pressable>

          <Pressable 
            onPress={() => router.push('/study/deep-study')}
            className="bg-background-card rounded-3xl p-6 shadow-soft-2 active:scale-95"
          >
            <View className="flex-row items-center justify-between mb-2">
              <View className="bg-secondary-100 p-3 rounded-full">
                <FontAwesome name="pencil" size={24} color="#5856D6" />
              </View>
              <Text className="text-typography-400 font-bold text-xs">15 MIN</Text>
            </View>
            <Text className="font-serif text-xl font-bold text-typography-950 mb-1">Deep Study</Text>
            <Text className="font-body text-typography-500">Master words by using them in context.</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
