import { StyleSheet } from 'react-native';

const dishDetailsScreenStyles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: '#fff',
  },
  image:{
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    textAlign:'center',
  },
  section:{
    padding:20

  },
  sectionTitle:{
    fontSize:22,
    fontWeight:'600',
    color:'#ff2d55',
    marginBottom:10
  },
  sectionInfo:{
    fontSize: 16,
    color: '#666',
    marginBottom:5
  },
  step:{
    marginBottom:15
  },
  stepNumber:{
    fontSize:15,
    fontWeight:'bold',
    color:'#007aff',
  },
  stepText:{
    fontSize:15,
    color:'#666',
  },
  startbutton:{
    backgroundColor:'#ff2d55',
    padding:15,
    borderRadius:25,
    margin:20,
    alignItems:"center"
  },
  startButtonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  }
});

export default dishDetailsScreenStyles;