function Dimensions(props) {
  return (
    <div className="col-5">
      <h4>Altura</h4>
      <p className="fs-4">{props.height} cm</p>
      <h4>Largura</h4>
      <p className="fs-4">{props.weight} cm </p>
    </div>
  );
}

export default Dimensions;
