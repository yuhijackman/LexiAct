import React from 'react';
import { Text, View, Pressable } from 'react-native';

interface WordCardProps {
  word: string;
  definition: string;
  tags: string[];
  onPress?: () => void;
}

export default function WordCard({ word, definition, tags, onPress }: WordCardProps) {
  return (
    <Pressable 
      onPress={onPress}
      className="bg-background-card rounded-3xl p-4 shadow-soft-1 flex-row items-center gap-4 mb-3 mx-4 active:opacity-80"
    >
      <View className="h-12 w-12 rounded-full bg-secondary-100 items-center justify-center">
        <Text className="text-secondary-600 font-bold text-xl">{word.charAt(0).toUpperCase()}</Text>
      </View>
      <View className="flex-1">
        <Text className="font-body font-bold text-typography-950 text-lg">{word}</Text>
        <Text className="font-body text-sm text-typography-500" numberOfLines={1}>{definition}</Text>
      </View>
      <View className="flex-row gap-1">
        {tags.slice(0, 2).map((tag, index) => (
          <View key={index} className="bg-background-subtle px-2 py-1 rounded-full">
            <Text className="text-xs font-bold text-typography-500">{tag}</Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
}
