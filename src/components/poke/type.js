function Type(props) {
  return (
    <div className="col-5 ">
      <h4>Tipo</h4>
      {props.type.map((data, index) => (
        <p className="fs-4" key={index}>{data.type.name}</p>
      ))}
    </div>
  );
}

export default Type;
