import { BackButton } from '@/components/BackButton'
import { ExerciseItem } from '@/components/ExerciseItem'
import { RoleSelection } from '@/components/RoleSelection'
import type { Exercise } from '@/types/exercise'
import { handlePlayAudio } from '@/utils/audioUtils'
import { exercises } from '@/utils/exercises'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function HomeScreen() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  )
  const [role, setRole] = useState<'A' | 'B' | 'listen' | null>(null)

  useEffect(() => {
    if (role === 'listen' && selectedExercise) {
      let currentLine = 0

      const playNextLine = () => {
        if (currentLine < selectedExercise.conversation.length) {
          const line = selectedExercise.conversation[currentLine]
          handlePlayAudio(line.text)
          currentLine++

          // aguarda 3 segundos antes de tocar a próxima fala
          setTimeout(playNextLine, 3000)
        }
      }

      playNextLine()
    }
  }, [role, selectedExercise])

  return (
    <SafeAreaView className="bg-green-900 h-screen">
      <ScrollView className="px-4 pt-4 mb-16">
        <Text className="text-white text-4xl font-bold mb-1 uppercase">
          Shukudaisuki!
        </Text>
        <Text className="text-white text-base mb-2">英語をもっと楽しく！</Text>

        {!selectedExercise ? (
          <>
            <Text className="text-white mb-2">Choose an exercise:</Text>
            {exercises.map(exercise => (
              <ExerciseItem
                key={exercise.id}
                exercise={exercise}
                onSelect={setSelectedExercise}
              />
            ))}
          </>
        ) : (
          <>
            <Text className="text-white text-xl font-semibold mb-2">
              {selectedExercise.title}
            </Text>

            <RoleSelection role={role} setRole={setRole} />

            {role && (
              <>
                <Text className="text-white">
                  {role === 'listen'
                    ? 'You are listening to the conversation:'
                    : `You are playing as: Character ${role}`}
                </Text>

                <Text className="text-white mb-2">Conversation:</Text>
                {selectedExercise.conversation.map((line, index) => (
                  <View key={index} className="mb-3">
                    <Text className="text-white text-lg">
                      {role !== 'listen' && line.speaker === role
                        ? 'You: '
                        : `${line.speaker}: `}
                      {line.text}
                    </Text>

                    {role === 'listen' || line.speaker !== role ? (
                      <TouchableOpacity
                        onPress={() => handlePlayAudio(line.text)}
                      >
                        <Ionicons
                          name="volume-high-outline"
                          size={24}
                          color="white"
                        />
                      </TouchableOpacity>
                    ) : null}

                    <View className="flex-row flex-wrap mt-2">
                      {line.text.split(' ').map((word, i) => (
                        <TouchableOpacity
                          key={i}
                          className="bg-green-600 px-2 py-1 rounded-lg mr-2 mb-2"
                          onPress={() => handlePlayAudio(word)}
                        >
                          <Text className="text-white">{word}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                ))}
              </>
            )}

            <BackButton
              onPress={() => {
                setSelectedExercise(null)
                setRole(null)
              }}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
