import React from "react";

function Video({ video }) {
  return (
    <div className="row">
      <div className="col-4">
        <img src={video.image} alt="random" className="rounded" />
      </div>
      <div className="col-7">
        <div className="my-2">
          <h3>{video.title}</h3>
          <span>{video.describe}</span>
        </div>
        <div>
          <button className="btn btn-sm btn-outline-primary me-1">
            Editar
          </button>
          <button className="btn btn-sm btn-outline-secondary me-1">
            Estatisticas
          </button>
          <button className="btn btn-sm btn-outline-success me-1">
            Comentarios
          </button>
          <button className="btn btn-sm btn-outline-warning me-1">Link</button>
          <button className="btn btn-sm btn-outline-danger me-1">
            Excluir
          </button>
        </div>
      </div>
      <div className="col-1 d-flex align-items-center">
        <button className="btn btn-lg">❤</button>
      </div>
    </div>
  );
}

export default Video;
