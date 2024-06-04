import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold text-black dark:text-white">{`User ID: ${id}`}</Text>
      <TextLink href="/" className="text-center text-black dark:text-white">👈 Go Home</TextLink>
    </View>
  )
}
