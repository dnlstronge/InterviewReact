function App() {
  const [userData, setUserData] = React.useState({});

  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <h2>User Data</h2>

      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Website:</strong> {userData.website}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

