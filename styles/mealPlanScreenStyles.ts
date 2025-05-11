import { StyleSheet } from 'react-native';

const meatPlanScreenStyles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: '#fff',
    paddingTop:10,
    marginTop:50
  },
  
  header:{
    flexDirection:"row",
    alignItems:'center',
    padding:15,
    marginBottom:10
  },
  headerImage:{
    width: 120,
    height: 120,
    borderRadius:15,
    marginRight:15
  },
  headerText:{
    flex:1,
    paddingRight:10
  },
  unlockText:{
    fontSize:17,
    fontWeight:'bold',
    color:'#333'
  },
  createText:{
    fontSize:14,
    marginVertical:4,
    color:'#666'
  },
  collageContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    position:'relative',
    marginBottom:20
  },
  collageImage:{
    width:'48%',
    height:180,
    borderRadius:15,
  },
  recipesBadge:{
    position:'absolute',
    top:10,
    right:10,
    backgroundColor:'#ffd700',
    paddingVertical:3,
    paddingHorizontal:8,
    borderRadius:10,
  },
  recipesBadgeText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:12
  },
  planCard:{
    flexDirection:'row',
    padding:15,
    backgroundColor:'#fff',
    borderRadius:15,
    elevation:5,
    marginHorizontal: 15,
    alignItems:'center'
  },
  planImage:{
    width:90,
    height:90,
    borderRadius:10,
  },
  planInfo:{
    flex:1,
    marginLeft:15,

  },
  planName:{
    fontSize:18,
    fontWeight:'600',
    color:'#333'
  },
  planCount:{
    fontSize:14,
    color:'#666'
  },
  mealTitle:{
    fontSize:26,
    fontWeight:'bold',
    color:'#333',
    paddingHorizontal:15,
    marginBottom:15
  },
  startButton:{
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

export default meatPlanScreenStyles;