import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CarbonIQ.css";

const CarbonIQ = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const chatWindowRef = useRef(null);
  const isAtBottom = useRef(true); // Tracks if we're at the bottom of the chat window

  // Function to scroll the chat window to the bottom when new messages arrive
  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = chatWindowRef.current;
      // Check if we're at the bottom
      if (scrollHeight - scrollTop === clientHeight) {
        chatWindowRef.current.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };

  // Function to detect if the user manually scrolls up
  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = chatWindowRef.current;
    // If the user has scrolled up, we set isAtBottom to false to stop auto-scrolling
    isAtBottom.current = scrollHeight - scrollTop === clientHeight;
  };

  useEffect(() => {
    // If the user is at the bottom, scroll to the bottom when a new message arrives
    if (isAtBottom.current) {
      scrollToBottom();
    }
  }, [messages]); // Trigger this effect when messages change

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput },
    ]);
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userInput,
          context: "Carbon Cloud is a cloud-based company focused on reducing carbon emissions.",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from the server");
      }

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "CarbonIQ", text: data.answer },
      ]);
    } catch (error) {
      setError("Error: " + error.message);
    } finally {
      setIsLoading(false);
      setUserInput("");
    }
  };

  return (
    <div className="bigwrapper">
      <div className="carboniq-wrapper">
        <div className="carboniq-container">
          <header className="header">
            {/* <Link className="headback">Back</Link>   */}
            <h1 className="headcarbonIQ">CarbonIQ</h1>
          </header>

          <main className="chat-section">
            <div
              ref={chatWindowRef}
              className="chat-window"
              onScroll={handleScroll}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender === "user" ? "user" : "CarbonIQ"}`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && <div className="message CarbonIQ loading">...</div>}
              {error && <div className="error">{error}</div>}
            </div>

            <div className="input-area">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Send a message..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="input-field"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !userInput.trim()}
                className="send-button"
              >
                {isLoading ? "..." : "Send"}
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CarbonIQ;
