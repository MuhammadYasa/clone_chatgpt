import { useState } from "react";
import "./App.css";
import { sendMessageToOpenAI } from "./openai";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    /* mengirim pesan ke openai berupa inputan user */
    const response = await sendMessageToOpenAI(input);

    /* ...messages = menyimpan dan menampilkan pesan yg lama,  isUser true = user, isuser false = untuk bot */
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
    /* ketika pesan sudah di kirim, maka otomatis text input clean */
  };

  return (
    <div className="App">
      <div className="chat">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        {/* e = event, kemudian mendapatkan value dari nilai input */}
        <input
          placeholder="Ask Me Anything..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
