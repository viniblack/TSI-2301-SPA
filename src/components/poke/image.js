function Image(props) {
  return (
    <div className="col-5">
      <img className="w-75" src={props.image} />
    </div>
  );
}

export default Image;
