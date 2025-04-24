import type React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export type Role = 'A' | 'B' | 'listen' | null

interface RoleSelectionProps {
  role: Role
  setRole: React.Dispatch<React.SetStateAction<Role>>
}

export function RoleSelection({ role, setRole }: RoleSelectionProps) {
  return (
    <View>
      {!role ? (
        <>
          <Text className="text-white mb-2">Choose your character:</Text>
          <View className="flex-row gap-4 mb-4">
            <TouchableOpacity
              className="bg-blue-500 px-4 py-2 rounded-xl"
              onPress={() => setRole('A')}
            >
              <Text className="text-white font-semibold">Be A</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-purple-500 px-4 py-2 rounded-xl"
              onPress={() => setRole('B')}
            >
              <Text className="text-white font-semibold">Be B</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-green-500 px-4 py-2 rounded-xl"
              onPress={() => setRole('listen')}
            >
              <Text className="text-white font-semibold">Just Listen</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text className="text-white mb-2">
            You are playing as:{' '}
            {role === 'listen'
              ? 'Listening to the conversation'
              : `Character ${role}`}
          </Text>

          {role !== 'listen' && (
            <TouchableOpacity
              className="bg-yellow-500 px-4 py-2 rounded-xl mt-4"
              onPress={() => {
                if (role === 'A') {
                  setRole('B')
                } else if (role === 'B') {
                  setRole('A')
                }
              }}
            >
              <Text className="text-white font-semibold">Invert Roles</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  )
}
