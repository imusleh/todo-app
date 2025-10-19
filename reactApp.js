document.addEventListener("DOMContentLoaded", function () {
  function QuoteDisplay() {
    const quotes = [
      "Stay focused and never give up.",
      "Your only limit is your mind.",
      "Each task done is one step forward.",
      "Way to go!"
    ];

    const [quote, setQuote] = React.useState(quotes[0]);
    const [fade, setFade] = React.useState(false);

    function showRandomQuote() {
      const random = Math.floor(Math.random() * quotes.length);
      setFade(false);
      setTimeout(() => {
        setQuote(quotes[random]);
        setFade(true);
      }, 100);
    }

    // Make this function accessible to your app.js
    window.showRandomQuote = showRandomQuote;

    React.useEffect(() => {
      setFade(true);
    }, []);

    return (
      <div
        style={{
          marginTop: "20px",
          fontStyle: "italic",
          padding: "10px",
          textAlign: "center",
          color: "#555",
          minHeight: "40px",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <p>"{quote}"</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("quote-section"));
  root.render(<QuoteDisplay />);
});
