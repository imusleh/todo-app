function ClockDisplay() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[time.getDay()];

  return (
    <div style={{
      textAlign: "center",
      padding: "15px",
      backgroundColor: "#f4f4f4",
      borderRadius: "10px",
      marginTop: "20px",
      fontSize: "1.2rem",
      color: "#333"
    }}>
      <p>{dayName}</p>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("clock-section"));
root.render(<ClockDisplay />);
