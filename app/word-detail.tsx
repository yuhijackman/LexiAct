import React from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams, Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function WordDetailModal() {
  const params = useLocalSearchParams();
  const { word, definition, tags } = params;

  return (
    <SafeAreaView className="flex-1 bg-background-light">
       <Stack.Screen options={{ 
        presentation: 'modal', 
        title: 'Word Details',
        headerLeft: () => <Pressable onPress={() => router.back()}><Text className="text-primary text-lg">Close</Text></Pressable>,
        headerRight: () => <Pressable onPress={() => {/* Edit */}}><Text className="text-primary text-lg">Edit</Text></Pressable>,
      }} />

      <ScrollView className="flex-1 p-6">
        <View className="bg-background-card rounded-3xl p-8 shadow-soft-2 items-center mb-6">
          <View className="h-20 w-20 rounded-full bg-secondary-100 items-center justify-center mb-4">
            <Text className="text-secondary-600 font-bold text-4xl">{(word as string)?.[0]}</Text>
          </View>
          <Text className="font-serif text-4xl font-bold text-typography-950 mb-2 text-center">{word}</Text>
          <View className="flex-row gap-2 flex-wrap justify-center">
            {(tags as string)?.split(',').map((tag, index) => (
              <View key={index} className="bg-background-subtle px-3 py-1 rounded-full">
                <Text className="text-xs font-bold text-typography-500">{tag.trim()}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="bg-background-card rounded-3xl p-6 shadow-soft-1 mb-6">
          <Text className="font-body font-bold text-typography-500 text-xs uppercase mb-2">Definition</Text>
          <Text className="font-body text-lg text-typography-950 leading-relaxed">{definition}</Text>
        </View>

        <View className="bg-background-card rounded-3xl p-6 shadow-soft-1 mb-6">
           <Text className="font-body font-bold text-typography-500 text-xs uppercase mb-2">Examples</Text>
           <View className="bg-background-subtle p-4 rounded-2xl">
             <Text className="font-body italic text-typography-700">"This is a placeholder example sentence for {word}."</Text>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
