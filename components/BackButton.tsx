import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface BackButtonProps extends TouchableOpacityProps {
  title?: string
}

export function BackButton({ title = 'Back to Exercises', ...rest }: BackButtonProps) {
  return (
    <TouchableOpacity
      className="mt-6 bg-gray-700 py-3 rounded-xl"
      {...rest}
    >
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  )
}