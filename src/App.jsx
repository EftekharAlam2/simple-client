import "./App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((data) => console.log(data));

    form.reset();
  };

  return (
    <>
      <h1>Simple Website</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="1" />
        <br />
        <input type="email" name="email" id="2" />
        <br />
        <input type="submit" value="add-user" />
      </form>
    </>
  );
}

export default App;
