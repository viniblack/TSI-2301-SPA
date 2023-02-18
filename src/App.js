import Noticia from "./components/new"
function App() {
  let noticias = [{
    image: "https://picsum.photos/200/200?grayscale",
    title: "Titulo 1",
    text: "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    image: "https://picsum.photos/200/200",
    title: "Titulo 2",
    text: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
  ]

  return (
    <div className="container">
      <Noticia image={noticias[0].image} title={noticias[0].title} text={noticias[0].text} />
      <Noticia image={noticias[1].image} title={noticias[1].title} text={noticias[1].text} />
    </div>
  );
}

export default App;
