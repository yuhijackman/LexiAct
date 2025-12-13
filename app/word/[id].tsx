import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock Data
const MOCK_WORD = {
  id: '1',
  targetWord: 'Serendipity',
  definition: 'The occurrence and development of events by chance in a happy or beneficial way.',
  exampleSentences: [
    'The discovery of penicillin was a stroke of serendipity.',
    'We met by pure serendipity at the coffee shop.'
  ],
  tags: ['noun', 'positive', 'literary']
};

export default function WordDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // State
  const [isEditing, setIsEditing] = useState(false);
  const [wordData, setWordData] = useState(MOCK_WORD);
  
  // Handlers
  const handleSave = () => {
    // Ideally validation here
    setIsEditing(false);
    // Persist changes would go here
    Alert.alert("Success", "Word updated successfully!");
  };

  const handleCancel = () => {
    // Revert changes
    setWordData(MOCK_WORD); // In a real app, this would be the data from the DB
    setIsEditing(false);
  };

  return (
    <View className="flex-1 bg-background-light">
      <Stack.Screen 
        options={{
          headerTitle: isEditing ? 'Edit Word' : 'Word Detail',
          headerRight: () => (
            <TouchableOpacity 
              onPress={isEditing ? handleSave : () => setIsEditing(true)}
              className="mr-2"
            >
              <Text className="text-primary-500 font-bold text-lg">
                {isEditing ? 'Save' : 'Edit'}
              </Text>
            </TouchableOpacity>
          ),
          headerLeft: isEditing ? () => (
             <TouchableOpacity onPress={handleCancel} className="ml-2">
              <Text className="text-typography-500 text-lg">Cancel</Text>
            </TouchableOpacity>
          ) : undefined
        }} 
      />

      <ScrollView className="flex-1 px-4 py-6">
        {/* Card Container */}
        <View className="bg-background-card rounded-3xl p-6 shadow-soft-1 mb-6">
          
          {/* Target Word */}
          <View className="mb-6">
            <Text className="text-typography-500 text-sm font-bold uppercase tracking-wider mb-2">Word</Text>
            {isEditing ? (
              <TextInput
                className="text-3xl font-serif text-typography-950 border-b border-typography-200 py-2"
                value={wordData.targetWord}
                onChangeText={(text) => setWordData({...wordData, targetWord: text})}
                autoCapitalize="none"
              />
            ) : (
              <Text className="text-3xl font-serif text-typography-950">{wordData.targetWord}</Text>
            )}
          </View>

          {/* Definition */}
          <View className="mb-6">
            <Text className="text-typography-500 text-sm font-bold uppercase tracking-wider mb-2">Definition</Text>
            {isEditing ? (
              <TextInput
                className="text-lg font-body text-typography-950 border-b border-typography-200 py-2 leading-relaxed"
                value={wordData.definition}
                onChangeText={(text) => setWordData({...wordData, definition: text})}
                multiline
              />
            ) : (
              <Text className="text-lg font-body text-typography-700 leading-relaxed">{wordData.definition}</Text>
            )}
          </View>

          {/* Tags */}
          <View className="mb-6">
            <Text className="text-typography-500 text-sm font-bold uppercase tracking-wider mb-2">Tags</Text>
             {isEditing ? (
              <TextInput
                className="text-base font-body text-typography-950 border-b border-typography-200 py-2"
                value={wordData.tags.join(', ')}
                onChangeText={(text) => setWordData({...wordData, tags: text.split(',').map(t => t.trim())})}
                placeholder="Comma separated tags"
              />
            ) : (
              <View className="flex-row flex-wrap gap-2">
                {wordData.tags.map((tag, index) => (
                  <View key={index} className="bg-primary-50 px-3 py-1 rounded-full">
                    <Text className="text-primary-700 text-sm font-medium">{tag}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

        </View>

        {/* Examples Section */}
        <View className="bg-background-card rounded-3xl p-6 shadow-soft-1 mb-20">
           <Text className="text-typography-500 text-sm font-bold uppercase tracking-wider mb-4">Example Sentences</Text>
           {wordData.exampleSentences.map((sentence, index) => (
             <View key={index} className="mb-4 last:mb-0">
               {isEditing ? (
                 <TextInput
                    className="text-base font-body text-typography-950 border-b border-typography-200 py-2 leading-relaxed"
                    value={sentence}
                    onChangeText={(text) => {
                      const newExamples = [...wordData.exampleSentences];
                      newExamples[index] = text;
                      setWordData({...wordData, exampleSentences: newExamples});
                    }}
                    multiline
                 />
               ) : (
                 <View className="flex-row">
                   <View className="w-1 h-full bg-primary-200 rounded-full mr-3" />
                   <Text className="text-base font-body text-typography-800 italic leading-relaxed flex-1">
                     "{sentence}"
                   </Text>
                 </View>
               )}
             </View>
           ))}
        </View>

      </ScrollView>
    </View>
  );
}
