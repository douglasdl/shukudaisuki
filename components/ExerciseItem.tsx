import type { Exercise } from '@/types/exercise'
import { ReactNode } from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface ExerciseItemProps {
  exercise: Exercise
  onSelect: (exercise: Exercise) => void
}

export function ExerciseItem({ exercise, onSelect }: ExerciseItemProps) {
  return (
    <TouchableOpacity
      className="bg-green-700 p-4 rounded-xl mb-3"
      onPress={() => onSelect(exercise)}
    >
      <Text className="text-white text-lg">{exercise.title}</Text>
    </TouchableOpacity>
  )
}
