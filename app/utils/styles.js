import {
    StyleSheet,Dimensions
  } from 'react-native';

  import colors from './colors'

const {height} = Dimensions.get('window')
export const grobalStyles = StyleSheet.create({
    card:{
        width:'49%',
        height:90,
        borderRadius:10,
        marginTop:10,
        padding:10
    },
    dashboardCard:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        gap:10,
        paddingHorizontal:5
    },
    totalReports:{
        backgroundColor:colors.PINK
    },
    underReview:{
        backgroundColor:colors.PRIMARY
    },
    confirmed:{
        backgroundColor:colors.ORANGE
    },
    rejected:{
        backgroundColor:colors.BLUE
    },
    textBold:{
        fontWeight:'bold'
    },
    textBlack:{
        color:colors.BLACK
    },
    container:{
        padding:10
    },
    textLg:{
        fontSize:16
    },
    textXl:{
        fontSize:20
    },
    tableRow:{
        width:'100%',
        height:93,
        borderBottomColor:colors.GREY,
        borderBottomWidth:1,
    },
    textSm:{
        fontSize:13
    },
    header:{
        height:50,
        elevation:20,
        backgroundColor:colors.PRIMARY,
        padding:10,
    },
    fab:{
        width:60,
        height:60,
        borderRadius:60,
        backgroundColor:colors.PRIMARY,
        zIndex:100,
        position:"absolute",
        right:20,
        marginTop:(height/1.3),
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textArea:{
        borderColor:colors.GREY,
        borderWidth:1,
        display:'flex',
        justifyContent:'flex-start',
        color:colors.BLACK,
        borderRadius:10,
        padding:20
    },
    filePicker:{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: 50,
            borderRadius: 5,
            elevation:0,
            marginTop: 3,
            borderColor:colors.PRIMARY,
            borderWidth:0.5,
            marginTop:10
    },
    button_primary:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 5,
        elevation:0,
        marginTop: 3,
        borderColor:colors.PRIMARY,
        borderWidth:0.5,
        marginTop:10,
        backgroundColor:colors.PRIMARY
},
main:{
    flex:1,
    backgroundColor:colors.PRIMARY,
},
logoContainer:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    width:"100%",
},
button_border_white:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 5,
    elevation:0,
    marginTop: 3,
    borderColor:colors.WHITE,
    borderWidth:0.5,
    marginTop:10,
},
button_bg_white:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 5,
    elevation:0,
    marginTop: 3,
    borderColor:colors.WHITE,
    borderWidth:0.5,
    marginTop:10,
    backgroundColor:colors.WHITE
}
  });