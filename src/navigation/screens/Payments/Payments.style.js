import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: '#103B66',
    width: '100%',
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  optionName: {
    fontSize: 24,
    color: '#103B66',
    width: '100%',
    padding: 10,
    paddingLeft: 25,
  },
  button: {
    padding: 10,
    height: 50,
    backgroundColor: '#E0FFF6',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#00C48C',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
  },
});
