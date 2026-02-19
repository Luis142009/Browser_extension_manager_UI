import '../stylesheets/estilofiltro.css'

export const Filtro = () => {
  return (
    <div className="filtro">
      <h2 className="filtro__titulo">Extensions List</h2>
      <div className="filtro__botones">
        <button className="filtro__btn filtro__btn--activo">All</button>
        <button className="filtro__btn">Active</button>
        <button className="filtro__btn">Inactive</button>
      </div>
    </div>
  )
}