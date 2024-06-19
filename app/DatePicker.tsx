import React, { useEffect, useState } from "react";
import { View, Button, Platform, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ onGetDateValue, onOpenDatePicker }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  useEffect(() => {
    if (onOpenDatePicker) {
      setShow(true);
    }
  }, [onOpenDatePicker]);

  useEffect(() => {
    onGetDateValue(date);
  }, [date]);

  return (
    <View style={styles.container}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DatePicker;
