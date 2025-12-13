import React from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <ScrollView className="flex-1 px-4 pt-4">
        <Text className="font-serif text-3xl font-bold text-typography-950 mb-6">Profile</Text>

        {/* User Header */}
        <View className="flex-row items-center bg-background-card p-4 rounded-3xl shadow-soft-1 mb-6">
          <View className="h-16 w-16 bg-secondary-100 rounded-full items-center justify-center mr-4">
             <Text className="font-serif text-2xl text-secondary-600">JD</Text>
          </View>
          <View>
            <Text className="font-serif text-xl font-bold text-typography-950">John Doe</Text>
            <Text className="font-body text-typography-500">john.doe@example.com</Text>
          </View>
        </View>

        {/* Settings Section */}
        <Text className="font-body font-bold text-typography-500 mb-3 ml-2 uppercase text-xs">Settings</Text>
        <View className="bg-background-card rounded-3xl p-2 shadow-soft-1 mb-6">
          {[
            { icon: 'user', label: 'Account Settings' },
            { icon: 'bell', label: 'Notifications' },
            { icon: 'lock', label: 'Privacy' },
            { icon: 'question-circle', label: 'Help & Support' },
          ].map((item, index) => (
            <Pressable 
              key={index} 
              className="flex-row items-center p-4 active:bg-background-subtle rounded-2xl"
            >
              <View className="w-8 items-center mr-4">
                <FontAwesome name={item.icon as any} size={20} color="#5856D6" />
              </View>
              <Text className="flex-1 font-body text-typography-950 text-lg">{item.label}</Text>
              <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
            </Pressable>
          ))}
        </View>

        <Pressable 
          onPress={() => router.replace('/auth')}
          className="bg-red-50 p-4 rounded-3xl items-center active:bg-red-100 mb-8"
        >
          <Text className="font-body font-bold text-red-500 text-lg">Sign Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}