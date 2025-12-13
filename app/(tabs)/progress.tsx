import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ProgressScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <ScrollView className="flex-1 px-4 pt-4">
        <Text className="font-serif text-3xl font-bold text-typography-950 mb-6">My Progress</Text>

        {/* Summary Cards */}
        <View className="flex-row gap-4 mb-6">
          <View className="flex-1 bg-background-card p-4 rounded-3xl shadow-soft-1 items-center">
            <Text className="font-serif text-3xl font-bold text-primary mb-1">342</Text>
            <Text className="font-body text-xs text-typography-500 font-bold uppercase">Words Studied</Text>
          </View>
          <View className="flex-1 bg-background-card p-4 rounded-3xl shadow-soft-1 items-center">
            <Text className="font-serif text-3xl font-bold text-secondary mb-1">87</Text>
            <Text className="font-body text-xs text-typography-500 font-bold uppercase">Words Mastered</Text>
          </View>
        </View>

        {/* Chart Placeholder */}
        <View className="bg-background-card p-6 rounded-3xl shadow-soft-1 mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="font-serif text-xl font-bold text-typography-950">Activity</Text>
            <Text className="font-body text-sm text-typography-500">Last 7 Days</Text>
          </View>
          <View className="h-40 bg-background-subtle rounded-xl items-center justify-center">
            <Text className="font-body text-typography-400">Chart Placeholder</Text>
          </View>
        </View>

        {/* Mastery Breakdown */}
        <Text className="font-serif text-xl font-bold text-typography-950 mb-4">Mastery by Tag</Text>
        <View className="gap-3 mb-8">
          {[
            { label: 'Academic', percent: 65, color: 'bg-blue-500' },
            { label: 'Business', percent: 40, color: 'bg-purple-500' },
            { label: 'Casual', percent: 85, color: 'bg-green-500' },
          ].map((item, index) => (
            <View key={index} className="bg-background-card p-4 rounded-2xl shadow-soft-1">
              <View className="flex-row justify-between mb-2">
                <Text className="font-body font-bold text-typography-950">{item.label}</Text>
                <Text className="font-body font-bold text-typography-500">{item.percent}%</Text>
              </View>
              <View className="h-2 bg-background-subtle rounded-full overflow-hidden">
                <View className={`h-full ${item.color}`} style={{ width: `${item.percent}%` }} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}