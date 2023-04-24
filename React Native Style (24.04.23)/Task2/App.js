import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerMenu}>
        <View style={styles.toggleMenuNotification}>
          <Image style={styles.toggleMenu} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/56/56763.png' }} />
          <Image style={styles.notification} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3239/3239958.png' }} />
        </View>
        <View style={styles.headerTitleDescription}>
          <Text style={styles.headerTitle}>Hello, Shea Levis</Text>
          <Text style={styles.headerDescriptopn}>Well come to your Home</Text>
        </View>
      </View>
      <View style={styles.weatherCard}>
        <View style={styles.weatherIconText}>
          <Image style={styles.weatherIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5903/5903939.png' }} />
          <Text style={styles.weatherText}>Cloudly</Text>
        </View>
        <View style={styles.weatherDateTemperature}>
          <Text style={styles.date}>10 January 2022</Text>
          <Text style={styles.temperature}>27°</Text>
        </View>
      </View>
      <View style={styles.rooms}>
        <View style={styles.roomTextIcon}>
          <Text style={styles.roomText}>Your Rooms</Text>
          <Image style={styles.roomIcon} source={{ uri: 'https://icon-library.com/images/add-icon-png/add-icon-png-10.jpg' }} />
        </View>
        <View style={styles.roomCard}>
          <View>
            <Text style={styles.roomTitle}>Living Room</Text>
            <Text style={styles.roomDevices}>7 Devices</Text>
          </View>
          <View>
            <Image style={styles.swithcIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/37/37474.png' }} />
          </View>
        </View>
        <View style={styles.roomCard}>
          <View>
            <Text style={styles.roomTitle}>Bed Room</Text>
            <Text style={styles.roomDevices}>3 Devices</Text>
          </View>
          <View>
            <Image style={styles.swithcIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/37/37474.png' }} />
          </View>
        </View>
        <View style={styles.roomCard}>
          <View>
            <Text style={styles.roomTitle}>Both Room</Text>
            <Text style={styles.roomDevices}>5 Devices</Text>
          </View>
          <View>
            <Image style={styles.swithcIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/37/37474.png' }} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 30
  },
  headerMenu: {
    flex: 1
  },
  toggleMenuNotification: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  toggleMenu: {
    width: 15,
    height: 15
  },
  notification: {
    width: 15,
    height: 15
  },
  headerTitleDescription: {
    flex: 2,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: 600
  },
  headerDescriptopn: {
    fontSize: 14,
    fontWeight: 400
  },
  weatherCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3298FB',
    borderRadius: 10,
    padding: 20
  },
  weatherIconText: {
    flex: 1,
    justifyContent: 'center'
  },
  weatherIcon: {
    width: 130,
    height: 50,
    resizeMode: 'contain',
  },
  weatherText: {
    fontSize: 17,
    fontWeight: 500,
    color: 'white',
    marginTop: 12,
    textAlign: 'center'
  },
  weatherDateTemperature: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  temperature: {
    color: 'white',
    fontSize: 25,
    fontWeight: 700,
    marginTop: 10
  },
  rooms: {
    flex: 5,
    marginTop: 20
  },
  roomTextIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  roomText: {
    fontSize: 23,
    fontWeight: 600,

  },
  roomIcon: {
    paddingTop: 10,
    width: 25,
    height: 25
  },
  roomCard: {
    backgroundColor: '#FFF0F1',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 15
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: 600
  },
  roomDevices: {
    fontSize: 13,
    fontWeight: 400
  },
  swithcIcon: {
    resizeMode: 'contain',
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
