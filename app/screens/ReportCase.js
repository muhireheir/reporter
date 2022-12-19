import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import DocumentPicker from 'react-native-document-picker';
import { grobalStyles } from '../utils/styles';
import colors from '../utils/colors';
import MI from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import uuid from 'react-native-uuid';
import RNFS from 'react-native-fs';
import Spinner from 'react-native-loading-spinner-overlay';


const ReportCase = () => {

  const [attachments, setAttachments] = useState([]);
  const [isLoading,setLoading] = useState(false);

  const uploadImage = async (form) => {
    try {
      setLoading(true)
      const url = "https://api.cloudinary.com/v1_1/umuhire-heritier/auto/upload";
      const { data } = await axios.post(url, form, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setAttachments([...attachments, data]);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setLoading(false)
    }
  }
  const pickDocument = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.images]
      })
      const form = new FormData();
      form.append('file', file[0]);
      form.append('public_id', uuid.v4());
      form.append('upload_preset', 'ml_default');
      console.log(file[0]);
      uploadImage(form);
      const blob = await RNFS.readFile(file[0].uri, 'base64');
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <View style={grobalStyles.container}>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
      />
      <Text style={{ ...grobalStyles.textBlack, ...grobalStyles.textLg, ...grobalStyles.textBold, marginBottom: 10 }}>Describe the incident</Text>
      <TextInput style={grobalStyles.textArea} placeholderTextColor={colors.BLACK} placeholder={"Describle the incident"} multiline={true} numberOfLines={10} textAlignVertical="top" />
      <TouchableOpacity onPress={pickDocument} style={grobalStyles.filePicker}>
        <View style={{ display: 'flex', width: "100%", padding: 10, flexDirection: 'row', alignItems: "center" }}>
          <MI name='attachment' size={30} color={colors.PRIMARY} />
          <Text style={{ ...grobalStyles.textLg, color: colors.PRIMARY, ...grobalStyles.textBold, marginLeft: 15 }}>Add Evedince</Text>
        </View>
      </TouchableOpacity>
      <View style={{marginTop:10,display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>
      {
        attachments.map(({secure_url,asset_id,type})=>(<Image key={asset_id} style={{width:"49%",height:100,marginTop:5}} source={{uri:secure_url}}/>))
      }
      </View>


      {attachments[0] && ( <TouchableOpacity  style={grobalStyles.button_primary}>
        <View style={{ display: 'flex', width: "100%", padding: 10, flexDirection: 'row', alignItems: "center",justifyContent:'center' }}>
          <Text style={{ ...grobalStyles.textLg, color: colors.WHITE, ...grobalStyles.textBold}}>Send</Text>
        </View>
      </TouchableOpacity>)}
      
    </View>
  )
}

export default ReportCase