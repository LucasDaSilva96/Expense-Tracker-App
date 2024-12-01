import { View, Text, Image, StyleSheet } from 'react-native';
import { useAuth } from '@/providers/AuthProvider';
import { placeholderAvatar } from '@/constants/variables';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const HomeHeader = () => {
  const { user } = useAuth();

  // TODO: Implement notification logic
  const [hasNotice, setHasNotice] = useState(true);

  if (!user) {
    return null;
  }
  return (
    <View style={style.header}>
      <View style={style.userContainer}>
        <Image
          source={{ uri: user.avatar || placeholderAvatar }}
          style={style.image}
        />
        <View className='gap-1'>
          <Text className='font-bold'>Hello</Text>
          <Text className='text-lightGrey font-light'>{`${user.first_name} ${user.last_name}`}</Text>
        </View>
      </View>

      <View style={style.noticeContainer}>
        <Ionicons name='notifications-outline' size={26} color='black' />
        {hasNotice && <View style={style.noticeBox} />}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 15,
    objectFit: 'cover',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  noticeContainer: {
    position: 'relative',
    flexDirection: 'row',
  },
  noticeBox: {
    position: 'absolute',
    top: 1,
    right: 1,
    height: 11,
    width: 11,
    backgroundColor: '#0666EB',
    borderRadius: 999,
  },
});

export default HomeHeader;
