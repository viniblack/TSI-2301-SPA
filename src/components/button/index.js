function Button(props) {
  return (
    <div>
      <button onClick={props.click} className={props.class}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
