import { useLoaderData } from "react-router-dom";

const Update = () => {
  const laodedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updateUser = { name, email };
    fetch(`http://localhost:5000/users/${laodedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2>Update user of {laodedUser?.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="1" defaultValue={laodedUser?.name} />
        <br />
        <input
          type="email"
          name="email"
          id="2"
          defaultValue={laodedUser?.email}
        />
        <br />
        <input type="submit" value="add-user" />
      </form>
    </div>
  );
};

export default Update;
