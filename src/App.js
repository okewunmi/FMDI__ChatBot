import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="header"></div>
      <df-messenger
        intent="WELCOME"
        chat-title="eDokita"
        agent-id="aeea0270-e438-4c0f-9ab8-6a2c4964458f"
        language-code="en"
      ></df-messenger>
    </div>
  );
}

export default App;
