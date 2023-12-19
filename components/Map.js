import { MapContainer, TileLayer, Polygon, Rectangle, Popup, Marker, useMapEvents, MapConsumer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import icon from "./Marker";
import L from "leaflet";

function Map() {

  const latitude = 43.66922946632716;
  const longitude = 7.2139079502649235;

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
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "calc(100vh - 180px)", width: "100vw", position: "relative" }}
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
      <div style={{ position: "absolute", height: "150px", width: "300px", backgroundColor: "#ffffffc4", padding: "15px", zIndex: 1000, bottom: 0, right: "10px", borderRadius: "20px" }}>

        <ul>
          <li style={{ color: "red" }}>
                      Zone où planter
          </li>
          <li style={{ color: "green" }}>
            Zone où il est interdit de planter
          </li>
          <li>
            <img src="https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png"></img>la ou j'ai planter
          </li>
        </ul>
      </div>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polygon pathOptions={redOptions} positions={polyline} />
      <Rectangle bounds={rectangle} pathOptions={greenOptions} />

    </MapContainer>
  );
}

export default Map;
