import { MapContainer, TileLayer, Polygon, Rectangle, Popup, Marker, useMapEvents, MapConsumer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {  useState } from 'react';
import icon from "./Marker";
import L from "leaflet";

function Map() {

  const latitude = 51.505;
  const longitude = -0.09;

  const polyline = [
    [
    [43.6479594905745, 7.208245272085059],
    [43.66744687167811, 7.230609345325904],
    [43.683676162803856, 7.196566431264706],
  ],

  [
    [43.689769097513064, 7.239135193367816],
    [43.69633461618219, 7.281424997110655],
    [43.7266044622628, 7.2541545195247314],
  ],
  ]
  const rectangle = [
    [43.742709102769744, 7.180482878493162],
    [43.68207804444842, 7.191297443856154],
  ]

  const redOptions = { color: 'red' }
  const greenOptions = { color: 'green' }
  const fillBlueOptions = { fillColor: 'blue' }


  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "100vh", width: "100vw" }}    
    whenReady={(map) => {
      // quand la map est rdy, stock dans map les méthodes de leaflets dispo
        console.log(map);
        // utilise la reconnaissance d'un click pour stock dans e les infos
        map.target.on("click", function (e) {
          // extraits les clés lat & lng de l'objet e.latlng
          const { lat, lng } = e.latlng;
          // place le marker sur la map grace aux coords extraites
          L.marker([lat, lng], { icon }).addTo(map.target);

          
          // Ajouter dans un useState ou en BDD

          console.log("lat", lat)
          console.log("lng", lng)

        });
      }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={rectangle[0]} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Polygon pathOptions={redOptions} positions={polyline} />
      <Rectangle bounds={rectangle} pathOptions={greenOptions} />
      
    </MapContainer>
  );
}

export default Map;
