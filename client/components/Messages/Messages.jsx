import Chat from "./Chat";

function Messages({ messages, id }) {
  console.log(id);
  return (
    <div className="h-[85vh] max-h-[85vh] flex flex-col gap-1 p-5 md:px-14">
      {messages.map((message, idx) => (
        <Chat key={idx} message={message} self={message.user.id === id} />
      ))}
    </div>
  );
}

export default Messages;
