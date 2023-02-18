import Image from './image.js'
import Text from './text.js'

function Noticia(props) {

    return (
        <div className="row mt-4">
            <div className="col-2">
                <Image image={props.image}/>
            </div>
            <div className="col-10">
                <Text title={props.title} text={props.text}/>
            </div>
        </div>
    );
}

export default Noticia;