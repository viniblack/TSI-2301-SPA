function Text(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <p>
                {props.text}
            </p>
        </>
    )
}

export default Text