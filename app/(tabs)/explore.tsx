import karinaImg from '@/assets/images/karina.png';
import { Image, SafeAreaView, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView className='bg-green-900 h-screen'>
      <View className='px-4 pb-14 items-center h-full justify-between'>
        <Text className='text-purple-500 text-4xl font-bold w-full'>Karina Sensei</Text>
        <Text className='text-white text-2xl text-justify'>
          過去4年間、トリニティミライ・インターナショナルで教鞭をとり、生徒たちと楽しいゲームを通して、学んだり、笑ったりと一緒に楽しく過ごしています。
          英検の指導は、子どもたちが将来に向けてわくわくするような準備ができるだけでなく、世界中の人々と話すことに自信を持てるようになる、重要な英語スキルを身につけるための素晴らしい機会です。この英検対策レッスンが、そのような素敵な機会になることを願っています。
        </Text>
        <Image source={karinaImg} alt='Karina' className='h-80 aspect-square' />
      </View>
    </SafeAreaView>
  );
}