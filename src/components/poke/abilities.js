function Abilities(props) {
  return (
    <div className="col-5">
      <h4>Habilidades</h4>
      {props.abilities.map((data, index) => (
        <p className="fs-4" key={index}> {data.ability.name}</p>
      ))}
    </div>
  );
}

export default Abilities;
