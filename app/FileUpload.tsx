import React, { useEffect, useState } from "react";
import { Button, Image, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";

export const FileUpload = () => {
  const [file, setFile] = useState(null);
  console.log(file, "klsdjfljdskfljksfjsdkjfl");

  const handlePickFile = async () => {
    try {
      const picker = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Accept all types of files
      });

      if (picker?.["type"] === "success") {
        setFile(picker?.["uri"]);
      } else {
        console.log(picker);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Button title="Pick File" onPress={handlePickFile} />
      {file && <Image source={{ uri: file }} />}
    </View>
  );
};
