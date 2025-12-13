import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MOCK_REVIEW_WORDS = [
  { id: '1', word: 'Serendipity', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', example: 'The lottery win was a pure serendipity.' },
  { id: '2', word: 'Ephemeral', definition: 'Lasting for a very short time.', example: 'Fashions are ephemeral, changing with every season.' },
];

export default function QuickReviewScreen() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentWord = MOCK_REVIEW_WORDS[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < MOCK_REVIEW_WORDS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finish review
      router.back();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <Stack.Screen options={{ title: 'Quick Review' }} />
      
      <View className="flex-1 items-center justify-center p-6">
        <Pressable 
          onPress={() => setIsFlipped(!isFlipped)}
          className="w-full aspect-[3/4] bg-background-card rounded-3xl shadow-soft-2 items-center justify-center p-6"
        >
          {!isFlipped ? (
            <>
              <Text className="font-serif text-4xl font-bold text-typography-950 text-center">{currentWord.word}</Text>
              <Text className="font-body text-typography-400 mt-4">Tap to flip</Text>
            </>
          ) : (
            <>
              <Text className="font-serif text-2xl font-bold text-typography-950 mb-4 text-center">{currentWord.word}</Text>
              <View className="w-full h-px bg-background-subtle mb-4" />
              <Text className="font-body text-lg text-typography-700 text-center mb-4">{currentWord.definition}</Text>
              <Text className="font-body italic text-typography-500 text-center">"{currentWord.example}"</Text>
            </>
          )}
        </Pressable>
      </View>

      {isFlipped && (
        <View className="flex-row justify-around p-6 pb-10">
          <Pressable onPress={handleNext} className="bg-red-100 px-6 py-3 rounded-full"><Text className="text-red-600 font-bold">Again</Text></Pressable>
          <Pressable onPress={handleNext} className="bg-orange-100 px-6 py-3 rounded-full"><Text className="text-orange-600 font-bold">Hard</Text></Pressable>
          <Pressable onPress={handleNext} className="bg-blue-100 px-6 py-3 rounded-full"><Text className="text-blue-600 font-bold">Good</Text></Pressable>
          <Pressable onPress={handleNext} className="bg-green-100 px-6 py-3 rounded-full"><Text className="text-green-600 font-bold">Easy</Text></Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
