import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {Header} from '../../components/Header';
import {LibraryFolder} from './LibraryFolder';
import {LibraryHeader} from './LibraryHeader';
import {LibraryVideoItem} from './LibraryVideoItem';
import {Playlists} from './Playlists';

export const LibraryScreen = () => {
  const [listVideo, setListVideo] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=react&type=video&key=AIzaSyB_CxzJp0WG9pI2Ojt1jV12BQDkyAABrQw`,
    );

    const data = await response.json();
    setListVideo(data.items);
  };
  return (
    <>
      <Header />
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <LibraryHeader />
          <FlatList
            horizontal={true}
            data={listVideo}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <LibraryVideoItem
                  thumbnail={item.snippet.thumbnails.high.url}
                  title={item.snippet.title}
                  channel={item.snippet.channelTitle}
                  videoId={item.id.videoId}
                />
              );
            }}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 12,
              backgroundColor: 'white',
            }}
          />
          <LibraryFolder />
          <Playlists />
        </View>
      </ScrollView>
    </>
  );
};

const listVideos = [
  {
    id: 1,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/d82b/565c/a4eb0ed2b1c9a215e5f4fe755f641ee9?Expires=1668384000&Signature=AoS0d-93KVCTZF1RpffoHXUm0RwmySbiJLQwfPgiBsQwuRaxHmaXlhlhzu~qXQwXyjEpDGl8VD88kglDQ0uC57-g~knZu3oNnayhQyFit8Ic3PvRDVJ56hq75RXtWubDYMiM3aJxrAX1163JVmge2qKA7w6bE1LnJBQuAXYjeb0CNr4HIursSaRQBySFEeYwKBvrRUhmeO7dgsDHJEtxhmaqEUfZe3bKhMoPjei5hNZp0skqNHGILhVxXFkjO9GPhxEampZrajO490g7U5xjz3iSNR7sgKFAR6sbwlN3g9L660qINwN~K4vgObWZuf0cwB5cYls2vwmEZXrlst0N4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Heart Touching Nasheed #Shorts',
    channel: 'An Naffe',
  },

  {
    id: 2,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/d82b/565c/a4eb0ed2b1c9a215e5f4fe755f641ee9?Expires=1668384000&Signature=AoS0d-93KVCTZF1RpffoHXUm0RwmySbiJLQwfPgiBsQwuRaxHmaXlhlhzu~qXQwXyjEpDGl8VD88kglDQ0uC57-g~knZu3oNnayhQyFit8Ic3PvRDVJ56hq75RXtWubDYMiM3aJxrAX1163JVmge2qKA7w6bE1LnJBQuAXYjeb0CNr4HIursSaRQBySFEeYwKBvrRUhmeO7dgsDHJEtxhmaqEUfZe3bKhMoPjei5hNZp0skqNHGILhVxXFkjO9GPhxEampZrajO490g7U5xjz3iSNR7sgKFAR6sbwlN3g9L660qINwN~K4vgObWZuf0cwB5cYls2vwmEZXrlst0N4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Heart Touching Nasheed #Shorts',
    channel: 'An Naffe',
  },
  {
    id: 3,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/d82b/565c/a4eb0ed2b1c9a215e5f4fe755f641ee9?Expires=1668384000&Signature=AoS0d-93KVCTZF1RpffoHXUm0RwmySbiJLQwfPgiBsQwuRaxHmaXlhlhzu~qXQwXyjEpDGl8VD88kglDQ0uC57-g~knZu3oNnayhQyFit8Ic3PvRDVJ56hq75RXtWubDYMiM3aJxrAX1163JVmge2qKA7w6bE1LnJBQuAXYjeb0CNr4HIursSaRQBySFEeYwKBvrRUhmeO7dgsDHJEtxhmaqEUfZe3bKhMoPjei5hNZp0skqNHGILhVxXFkjO9GPhxEampZrajO490g7U5xjz3iSNR7sgKFAR6sbwlN3g9L660qINwN~K4vgObWZuf0cwB5cYls2vwmEZXrlst0N4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Heart Touching Nasheed #Shorts',
    channel: 'An Naffe',
  },
  {
    id: 4,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/d82b/565c/a4eb0ed2b1c9a215e5f4fe755f641ee9?Expires=1668384000&Signature=AoS0d-93KVCTZF1RpffoHXUm0RwmySbiJLQwfPgiBsQwuRaxHmaXlhlhzu~qXQwXyjEpDGl8VD88kglDQ0uC57-g~knZu3oNnayhQyFit8Ic3PvRDVJ56hq75RXtWubDYMiM3aJxrAX1163JVmge2qKA7w6bE1LnJBQuAXYjeb0CNr4HIursSaRQBySFEeYwKBvrRUhmeO7dgsDHJEtxhmaqEUfZe3bKhMoPjei5hNZp0skqNHGILhVxXFkjO9GPhxEampZrajO490g7U5xjz3iSNR7sgKFAR6sbwlN3g9L660qINwN~K4vgObWZuf0cwB5cYls2vwmEZXrlst0N4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Heart Touching Nasheed #Shorts',
    channel: 'An Naffe',
  },
  {
    id: 5,
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/d82b/565c/a4eb0ed2b1c9a215e5f4fe755f641ee9?Expires=1668384000&Signature=AoS0d-93KVCTZF1RpffoHXUm0RwmySbiJLQwfPgiBsQwuRaxHmaXlhlhzu~qXQwXyjEpDGl8VD88kglDQ0uC57-g~knZu3oNnayhQyFit8Ic3PvRDVJ56hq75RXtWubDYMiM3aJxrAX1163JVmge2qKA7w6bE1LnJBQuAXYjeb0CNr4HIursSaRQBySFEeYwKBvrRUhmeO7dgsDHJEtxhmaqEUfZe3bKhMoPjei5hNZp0skqNHGILhVxXFkjO9GPhxEampZrajO490g7U5xjz3iSNR7sgKFAR6sbwlN3g9L660qINwN~K4vgObWZuf0cwB5cYls2vwmEZXrlst0N4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Heart Touching Nasheed #Shorts',
    channel: 'An Naffe',
  },
];
