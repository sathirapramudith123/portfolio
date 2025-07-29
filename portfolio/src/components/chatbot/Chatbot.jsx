import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your portfolio assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    
    // Simulate bot response after delay
    setTimeout(() => {
      const responses = [
        "I'm a simple chatbot. You can customize my responses!",
        "The creator of this portfolio can program me to answer specific questions.",
        "Check out the projects section to see more work.",
        "For real inquiries, please use the contact form."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Portfolio Assistant</h3>
            <button onClick={toggleChatbot} className="close-btn">
              <FaTimes />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage} className="send-btn">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      ) : (
        <button onClick={toggleChatbot} className="chatbot-toggle">
          <FaRobot size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;