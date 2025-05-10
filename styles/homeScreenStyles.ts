import { StyleSheet } from 'react-native';

const homeScreenStyles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: '#fff',
    marginTop:55
  },
  header:{
    padding: 20,
    alignItems:"center",
  },
  welcome:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle:{
    fontSize: 16,
    color: '#666',
    marginTop:5
  },
  card:{
    flex:1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow:"hidden",
    elevation:4
  },
  image:{
    width: '100%',
    height: 150,
  },
  typeText:{
    color: "white",
    fontSize: 12,
  },
  typeBadge:{
    position:"absolute",
    top:10,
    left:10,
    backgroundColor:"#007aff",
    padding:5,
    borderRadius:5
  },
  row:{
    justifyContent: 'space-between',
  },
  title:{
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    padding:10
  },
  details:{
    fontSize: 12,
    color: '#666',
    paddingHorizontal:10,
    paddingBottom:10
  },
  bookmark:{
    position:"absolute",
    top:10,
    right:10,
    backgroundColor:"#ff2d55",
    padding:5,
    borderRadius:5
  },
  bookmarkText:{
    color:"white",
    fontSize:12
  }
});

export default homeScreenStyles;