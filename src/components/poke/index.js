import Image from "./image.js";
import Name from "./name.js";
import Type from "./type.js";
import Dimensions from "./dimensions.js";
import Abilities from "./abilities.js";

function Pokemon(props) {
  return (
    <div className="row">
      {console.log(props)}
      <Image image={props.image} />

      <div className="col-5 d-flex align-items-center">
        <div className="row">
          <Name name={props.name} />
          <Type type={props.type} />
          <Dimensions height={props.height} weight={props.weight} />
          <Abilities abilities={props.abilities} />
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
