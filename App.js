import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Main from './Components/Main/Main';
import Track from './Components/Track/Track';
import { useState, useEffect } from 'react';

export default function App() {
  const [page, setPage] = useState(1);
  const [n, setN] = useState(1);
  return (
    <View style={styles.container}>
      {page === 1 ? <Main setP={setPage} sc={n}/> :
       page === 2 ? <Track setP={setPage} setN={setN} n={n}/> : null}
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});