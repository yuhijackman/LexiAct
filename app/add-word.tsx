import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function AddWordScreen() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [tags, setTags] = useState('');

  const handleSave = () => {
    // Save word logic
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <Stack.Screen options={{ 
        presentation: 'modal', 
        title: 'Add New Word',
        headerLeft: () => <Pressable onPress={() => router.back()}><Text className="text-primary text-lg">Cancel</Text></Pressable>,
        headerRight: () => <Pressable onPress={handleSave}><Text className="text-primary font-bold text-lg">Save</Text></Pressable>,
      }} />

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
        <ScrollView className="flex-1 p-4">
          
          <View className="bg-background-card p-4 rounded-3xl shadow-soft-1 mb-6">
            <Text className="font-body font-bold text-typography-500 text-xs uppercase mb-2 ml-1">Target Word</Text>
            <TextInput
              className="font-serif text-2xl text-typography-950 border-b border-background-subtle pb-2 mb-4"
              placeholder="e.g. Serendipity"
              value={word}
              onChangeText={setWord}
              autoFocus
            />

            <Text className="font-body font-bold text-typography-500 text-xs uppercase mb-2 ml-1">Definition</Text>
            <TextInput
              className="font-body text-lg text-typography-950 min-h-[80px]"
              placeholder="What does it mean?"
              multiline
              textAlignVertical="top"
              value={definition}
              onChangeText={setDefinition}
            />
          </View>

          <View className="bg-background-card p-4 rounded-3xl shadow-soft-1 mb-6">
            <Text className="font-body font-bold text-typography-500 text-xs uppercase mb-2 ml-1">Tags</Text>
            <TextInput
              className="font-body text-lg text-typography-950"
              placeholder="e.g. Noun, Academic (comma separated)"
              value={tags}
              onChangeText={setTags}
            />
          </View>

          <View className="bg-background-card p-4 rounded-3xl shadow-soft-1 mb-6 opacity-50">
             <View className="flex-row items-center justify-between mb-2">
                <Text className="font-body font-bold text-typography-500 text-xs uppercase ml-1">AI Suggestions (Coming Soon)</Text>
                <FontAwesome name="magic" size={16} color="#5856D6" />
             </View>
             <View className="h-20 bg-background-subtle rounded-xl items-center justify-center">
                <Text className="text-typography-400 text-sm">Auto-generated examples & phonetics</Text>
             </View>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
