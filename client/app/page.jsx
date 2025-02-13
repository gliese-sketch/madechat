"use client";
import { useEffect, useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { Messages, Inputs, SignUp } from "@/components";
import { io } from "socket.io-client";

const socket = io(
  "https://bug-free-space-fishstick-jj4q6gx9rg9q2j66v-8000.app.github.dev/"
);

export default function Home() {
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("new_message", (msg) => {
      setMessages((prevState) => [...prevState, msg]);
    });
  }, []);

  return (
    <HeroUIProvider>
      {user ? (
        <div className="container mx-auto">
          <Messages messages={messages} id={socket.id} />
          <Inputs socket={socket} name={user} setMessages={setMessages} />
        </div>
      ) : (
        <SignUp setUser={setUser} socket={socket} />
      )}
    </HeroUIProvider>
  );
}
