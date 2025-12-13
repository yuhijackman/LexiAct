import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function AuthScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-light items-center justify-center px-6">
      <Stack.Screen options={{ headerShown: false }} />
      
      <View className="items-center mb-12">
         <View className="h-24 w-24 bg-primary rounded-3xl items-center justify-center mb-4 shadow-float">
            <FontAwesome name="book" size={48} color="white" />
         </View>
         <Text className="font-serif text-4xl font-bold text-typography-950 text-center">LexiAct</Text>
         <Text className="font-body text-typography-500 text-center mt-2 text-lg">Master vocabulary through active use.</Text>
      </View>

      <Pressable 
        onPress={() => router.replace('/(tabs)')}
        className="w-full bg-black py-4 rounded-4xl shadow-soft-2 mb-4 flex-row justify-center items-center gap-2 active:scale-95"
      >
        <FontAwesome name="apple" size={24} color="white" />
        <Text className="font-body font-bold text-white text-lg">Continue with Apple</Text>
      </Pressable>

      <Pressable 
        onPress={() => router.replace('/(tabs)')}
        className="w-full bg-white py-4 rounded-4xl shadow-soft-2 mb-8 flex-row justify-center items-center gap-2 border border-gray-200 active:scale-95"
      >
        <FontAwesome name="google" size={24} color="black" />
        <Text className="font-body font-bold text-typography-950 text-lg">Continue with Google</Text>
      </Pressable>

      <Text className="font-body text-typography-400 text-xs text-center px-8">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </SafeAreaView>
  );
}
