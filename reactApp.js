function QuoteDisplay() {
  const quotes = [
    "Stay focused and never give up.",
    "Your only limit is your mind.",
    "Each task done is one step forward.",
    "Way to go!"
  ];
    const [quote, setQuote] = React.useState(quotes[0]);
    const[fade, setFade] = React.useState(false);

  // Function to show a random quote
    function showRandomQuote() {
        const random = Math.floor(Math.random() * quotes.length);
        setFade(false);
        setTimeout(() => {
            setQuote(quotes[random]);
            setFade(true);
        }, 100); // brief delay for fade effect
    }

    window.showRandomQuote = showRandomQuote; // Expose function globally

    React.useEffect(() => {
        setFade(true); // Initial fade-in
    }, []);
    return (
        <div
            style={{
                marginTop: '20px',
                fontStyle: 'italic',
                padding: '10px',
                textAlign: 'center',
                color: '#555',
                minHeight: '40px',
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
            }}
        >
         <p>"{quote}"</p>
        </div>
    );
}
// Render inside the quote-section div
const root = ReactDOM.createRoot(document.getElementById("quote-section"));
root.render(<QuoteDisplay />);