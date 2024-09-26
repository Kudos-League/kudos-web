import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { Typography } from "@mui/material";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
}

const ChatDetails = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const newMessage: Message = {
      id: Math.random().toString(),
      text: "Hello, how are you?",
      sender: "other",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: Math.random().toString(),
        text: input,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={item.sender === "user" ? styles.userMessage : styles.otherMessage}
    >
      <Typography variant="body1">{item.text}</Typography>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // Removed the inverted prop
        contentContainerStyle={{ paddingBottom: 16 }} // To add padding at the bottom
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingHorizontal: 20,
    width: "100%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#9c9bc1",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default ChatDetails;
