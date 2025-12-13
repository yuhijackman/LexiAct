import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';

export default function DeepStudyScreen() {
  const [sentence, setSentence] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const targetWord = "Luminous";

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <Stack.Screen options={{ title: 'Deep Study' }} />
      
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
        <View className="flex-1 p-6">
          <Text className="font-body text-typography-500 text-center mb-2">Make a sentence using</Text>
          <Text className="font-serif text-4xl font-bold text-typography-950 text-center mb-8">{targetWord}</Text>

          <TextInput
            className="bg-background-card p-4 rounded-2xl text-lg font-body text-typography-950 min-h-[150px] shadow-soft-1"
            placeholder="Type your sentence here..."
            multiline
            textAlignVertical="top"
            value={sentence}
            onChangeText={setSentence}
          />
        </View>

        <View className="p-6">
          <Pressable 
            onPress={handleSubmit}
            className="w-full bg-primary py-4 rounded-4xl shadow-float active:scale-95 items-center"
          >
            <Text className="font-body font-bold text-white text-lg">Submit Sentence</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      {showFeedback && (
        <View className="absolute inset-0 bg-black/50 items-center justify-center p-6">
          <View className="bg-background-card w-full rounded-3xl p-6 items-center">
            <Text className="font-serif text-2xl font-bold text-typography-950 mb-4">Self Assessment</Text>
            <Text className="font-body text-center text-typography-700 mb-6">
              Did you use "{targetWord}" correctly in your sentence?
            </Text>
            <View className="flex-row gap-4 w-full">
              <Pressable 
                onPress={() => router.back()} 
                className="flex-1 bg-background-subtle py-3 rounded-full items-center"
              >
                <Text className="font-body font-bold text-typography-500">No, retry</Text>
              </Pressable>
              <Pressable 
                onPress={() => router.back()} 
                className="flex-1 bg-primary py-3 rounded-full items-center"
              >
                <Text className="font-body font-bold text-white">Yes, I did!</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
