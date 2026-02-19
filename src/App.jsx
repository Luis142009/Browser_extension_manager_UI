import { barradearriba as Barradearriba } from './components/barradearriba'
import { Filtro } from './components/filtro'
import { Cards } from './components/tablon'

const extensiones = [
  { id: 1, nombre: 'DevLens', icono: '/logo-devlens.svg', descripcion: 'Quickly inspect page layouts and visualize element boundaries.', activo: true },
  { id: 2, nombre: 'StyleSpy', icono: '/logo-style-spy.svg', descripcion: 'Instantly analyze and copy CSS from any webpage element.', activo: true },
  { id: 3, nombre: 'SpeedBoost', icono: '/logo-speed-boost.svg', descripcion: 'Optimizes browser resource usage to accelerate page loading.', activo: false },
  { id: 4, nombre: 'JSONWizard', icono: '/logo-json-wizard.svg', descripcion: 'Formats, validates, and prettifies JSON responses in-browser.', activo: true },
  { id: 5, nombre: 'TabMaster Pro', icono: '/logo-tab-master-pro.svg', descripcion: 'Organizes browser tabs into groups and sessions.', activo: true },
  { id: 6, nombre: 'ViewportBuddy', icono: '/logo-viewport-buddy.svg', descripcion: 'Simulates various screen resolutions directly within the browser.', activo: false },
  { id: 7, nombre: 'Markup Notes', icono: '/logo-markup-notes.svg', descripcion: 'Enables annotation and notes directly onto webpages for collaborative debugging.', activo: true },
  { id: 8, nombre: 'GridGuides', icono: '/logo-grid-guides.svg', descripcion: 'Overlay customizable grids and alignment guides on any webpage.', activo: false },
  { id: 9, nombre: 'Palette Picker', icono: '/logo-palette-picker.svg', descripcion: 'Instantly extracts color palettes from any webpage.', activo: true },
  { id: 10, nombre: 'LinkChecker', icono: '/logo-link-checker.svg', descripcion: 'Scans and highlights broken links on any page.', activo: true },
  { id: 11, nombre: 'DOM Snapshot', icono: '/logo-dom-snapshot.svg', descripcion: 'Capture and export DOM structures quickly.', activo: false },
  { id: 12, nombre: 'ConsolePlus', icono: '/logo-console-plus.svg', descripcion: 'Enhanced developer console with advanced filtering and logging.', activo: true },
]

export const App = () => {
  return (
    <>
      <Barradearriba />
      <Filtro />
      <Cards extensiones={extensiones} />
    </>
  )
}