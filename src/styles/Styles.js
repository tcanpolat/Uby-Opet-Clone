import { StyleSheet,Dimensions } from 'react-native';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const colorBlue='#0271cd';
const colorOrange='#e0bc18';
const textColor='#fff';

export const styles = StyleSheet.create({
    homeContainer:{
       flex:1,
       backgroundColor:colorBlue
    },
    homeTop:{
        flex:4,
        backgroundColor:colorBlue,
        height:deviceHeight/2,
    },
    homeTopImage:{
        resizeMode:'cover',
        width:deviceWidth,
        height:deviceHeight/2,
    },
    landing:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeBottomContainer:{
        flex:3,
        height:deviceHeight/2,
        margin:10
    },
    homeBottom:{
        flex:1,
        height:deviceHeight/2,
        flexDirection:'row'
    },
    homeBottomSection1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:'rgba(255, 255, 255, 0.2)',
        borderBottomWidth:1,
        borderBottomColor:'rgba(255, 255, 255, 0.2)',
        padding:10
    },
    homeBottomSection2:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'rgba(255, 255, 255, 0.2)',
        padding:10
    },
    homeBottomSection3:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:'rgba(255, 255, 255, 0.2)',
        padding:10
    },
    homeBottomSection4:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    homeBottomText:{
        color:'#fff',
        fontSize:20,
        textTransform:'uppercase',
        fontWeight:'600',
        paddingBottom:5
    },
    homeBottomTextDetail:{
        color:'#fff',
        fontSize:30,
        textTransform:'uppercase',
        fontWeight:'400'
    },
    homeFooter:{
        height:60,
        width:deviceWidth,
        borderTopWidth:1,
        borderTopColor:'rgba(255, 255, 255, 0.2)',
        justifyContent:'center',
        padding:10 ,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:colorBlue       
    },
    homeFooterButton:{
        height:60,
        width:deviceWidth-20,
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'space-between'
             
    },
    homeFooterText:{
        fontSize:26,
        color:textColor
    },
    kampanyaContainer:{
        flex:1,
        backgroundColor:"#ebebed",
        width:deviceWidth,
        padding:15
    },
    kampanyaSection:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    kampanyaImage:{
        resizeMode:'stretch',
        width:'100%',
        height:240,
        borderRadius:5
    },
    kampanyaText:{
        fontSize:24,
        color:'#000',
        letterSpacing:1,
        fontWeight:'700',
    },
    kampanyaTextDetail:{
        fontSize:20,
        color:'#c1c1c1',
        marginBottom:20
    },
    kampanyaDetayButton:{
        alignItems:'center',
        justifyContent:'center',
        height:60,
        backgroundColor:colorBlue,
        borderRadius:25,
        width:'100%',
        marginBottom:30
    },
    kampanyaDetayButtonText:{
        fontSize:22,
        color:'#fff',
        letterSpacing:1,
        fontWeight:'600'
    },
    iletisimContainer:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#c1c1c1'
    },
    iletisimButton:{
        height:80,
        width:'80%',
        flexDirection:'row',
        backgroundColor:colorBlue,
        justifyContent:'space-between',
        padding:10,
        margin:10,
        borderRadius:50,
        borderWidth:2,
        borderColor:'#ffff'
    },
    iletisimIconSection:{
       height:60,
       width:60,
       backgroundColor:colorOrange,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:40,
       borderWidth:1,
       borderColor:'#fff'

    },
    iletisimButtonTextSection:{
        flex:1,
        margin:0,
        justifyContent:'center',
        marginLeft:10
    },
    iletisimButtonText:{
        fontSize:24,
        color:'#fff'
    }

   
  });