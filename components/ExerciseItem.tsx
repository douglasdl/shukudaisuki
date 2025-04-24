import { TouchableOpacity, Text } from 'react-native'
import { Exercise } from '@/types/exercise'
import { ReactNode } from 'react'

interface ExerciseItemProps {
  exercise: Exercise;
  onSelect: (exercise: Exercise) => void;
}

export function ExerciseItem({ exercise, onSelect }: ExerciseItemProps) {
  return (
    <TouchableOpacity
      className="bg-green-700 p-4 rounded-xl mb-3"
      onPress={() => onSelect(exercise)}
    >
      <Text className="text-white text-lg">{exercise.title}</Text>
    </TouchableOpacity>
  );
}
