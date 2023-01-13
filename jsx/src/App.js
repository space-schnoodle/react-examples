function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly={false}
        maxLength={3}
        spellCheck
        style={{ backgroundColor: "green" }}
      />
    </div>
  );
}
export default App;
