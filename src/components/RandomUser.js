import { useContext } from "react";
import UserContext  from "../UserContext";

export default function RandomUser() {
  const randomUser = useContext(UserContext);

  return randomUser ? (
    <div>
      <h1>Random User</h1>
      {`${randomUser.name.first} ${randomUser.name.last}`}
      <br />
      {`${randomUser.email}`}
      <br />
      {`${randomUser.registered.date}`}
      <br />
      {`${randomUser.location.street.name} ${randomUser.location.street.number} ${randomUser.location.city} ${randomUser.location.state} ${randomUser.location.country}`}
      <br />
      {`${randomUser.phone}`}
      <br />
      <img src={randomUser.picture.medium} alt={randomUser.name.first} />
    </div>
  ) : (
    <h1> Carregando </h1>
  );
}
