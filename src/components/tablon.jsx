import '../stylesheets/estilocards.css'

export const Cards = ({ extensiones }) => {
  return (
    <div className="cards__grid">
      {extensiones.map((ext) => (
        <div className="card" key={ext.id}>
          <div className="card__header">
            <img src={ext.icono} className="card__icon" alt={ext.nombre} />
            <div>
              <h3 className="card__nombre">{ext.nombre}</h3>
              <p className="card__descripcion">{ext.descripcion}</p>
            </div>
          </div>
          <div className="card__footer">
            <button className="card__remove">Remove</button>
            <label className="toggle">
              <input type="checkbox" defaultChecked={ext.activo} />
              <span className="toggle__slider"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}