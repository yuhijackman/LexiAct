import React from 'react';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Haptics from 'expo-haptics';

interface FABProps {
  onPress: () => void;
}

export default function FAB({ onPress }: FABProps) {
  return (
    <Pressable 
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onPress();
      }}
      className="absolute bottom-6 right-6 h-14 w-14 bg-primary rounded-full items-center justify-center shadow-float active:scale-95"
    >
      <FontAwesome name="plus" size={24} color="white" />
    </Pressable>
  );
}
