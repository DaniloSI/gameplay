import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { GuildProps } from '../../components/Guild';

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export default function Guilds({ handleGuildSelect }: Props) {
  const guilds = ['1', '2', '3', '4', '5', '6', '7', '8']
    .map(id => ({
      id,
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    }));

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 103 }}
        ListHeaderComponent={<ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  )
}
