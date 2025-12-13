import React, { useState } from 'react';
import { Text, View, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import WordCard from '@/components/WordCard';
import FAB from '@/components/FAB';
import { router } from 'expo-router';

const MOCK_WORDS = [
  { id: '1', word: 'Serendipity', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', tags: ['Noun', 'Positive'] },
  { id: '2', word: 'Ephemeral', definition: 'Lasting for a very short time.', tags: ['Adjective', 'Time'] },
  { id: '3', word: 'Luminous', definition: 'Full of or shedding light; bright or shining, especially in the dark.', tags: ['Adjective', 'Visual'] },
  { id: '4', word: 'Quintessential', definition: 'Representing the most perfect or typical example of a quality or class.', tags: ['Adjective', 'General'] },
  { id: '5', word: 'Mellifluous', definition: '(of a voice or words) sweet or musical; pleasant to hear.', tags: ['Adjective', 'Sound'] },
  { id: '6', word: 'Ineffable', definition: 'Too great or extreme to be expressed or described in words.', tags: ['Adjective', 'Abstract'] },
  { id: '7', word: 'Solitude', definition: 'The state or situation of being alone.', tags: ['Noun', 'State'] },
  { id: '8', word: 'Aurora', definition: 'A natural electrical phenomenon characterized by the appearance of streamers of reddish or greenish light in the sky.', tags: ['Noun', 'Nature'] },
  { id: '9', word: 'Petrichor', definition: 'A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.', tags: ['Noun', 'Smell'] },
  { id: '10', word: 'Sonorous', definition: '(of a person\'s voice or other sound) imposingly deep and full.', tags: ['Adjective', 'Sound'] },
];

export default function LexiconScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWords = MOCK_WORDS.filter(word => 
    word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-background-light">
      <View className="px-4 pt-4 pb-2">
        <Text className="font-serif text-3xl font-bold text-typography-950 mb-4">My Lexicon</Text>
        
        <View className="flex-row items-center bg-background-subtle rounded-2xl px-4 py-3 mb-4">
          <FontAwesome name="search" size={16} color="#8E8E93" className="mr-2" />
          <TextInput
            className="flex-1 font-body text-typography-950"
            placeholder="Search words..."
            placeholderTextColor="#8E8E93"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <FlatList
        data={filteredWords}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <WordCard 
            word={item.word} 
            definition={item.definition} 
            tags={item.tags}
            onPress={() => { 
                router.push({
                  pathname: '/word-detail',
                  params: { 
                    word: item.word,
                    definition: item.definition,
                    tags: item.tags.join(',')
                  }
                });
            }}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      <FAB onPress={() => router.push('/add-word')} />
    </SafeAreaView>
  );
}
