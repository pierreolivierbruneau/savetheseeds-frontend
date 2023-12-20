import { MapContainer, TileLayer, Polygon, Rectangle, Popup, Circle, Polyline, Marker, useMapEvents, MapConsumer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import icon from "./Marker";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

function Map() {

  const { token } = useSelector((state) => state.user.value);

  const center = [43.705836896399994, 7.260651102906279]
  const center1 = [43.08399379118767, 5.932892008428375]
  const center2 = [43.28894741645583, 5.39491390945662]
  const center3 = [43.554710332836414, 7.018404673047523]

  const latitude = 43.66922946632716;
  const longitude = 7.2139079502649235;

  const polygon = [
    [
      [43.85026517039784, 7.452355869610164],
      [43.69662044797769, 7.560715532049445],
      [43.11894607648215, 6.1648365026287895],
    ],

    [
      [43.3441193381045, 6.6702304422581165],
      [43.030182487541, 6.166669888802283],
      [43.41783330612997, 5.301400658762429],
    ],
  ]
  const rectangle = [
    [44.8098755196583, 6.904082913427415],
    [43.79345263697241, 5.229380791000217],
  ]


  const multiPolyline = [

    [
      [43.747590156668394, 5.513841201961662],
      [43.56033366797934, 5.459000649524677],
      [43.42192996440685, 6.423914968253879],
      [43.79186727778059, 7.16983260191406],
      [43.747590156668394, 5.513841201961662],
    ],

  ]



  const [place, setPlace] = useState([])



  const redOptions = { color: 'red' }
  const greenOptions = { color: 'green' }
  const fillBlueOptions = { fillColor: 'blue' }
  const purpleOptions = { color: 'purple' }

  const addToArr = async (coords) => {
    try {

      setPlace((prev) => [...prev, coords]);

      const response = await fetch("http://localhost:3000/pointgps/savepointgps", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          latitude: coords.lat,
          longitude: coords.lng,
          token: token,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la requête POST : ${response.status}`);
      }
      const data = await response.json();
      console.log("Réponse du backend :", data);
    } catch (error) {
      console.error("Erreur :", error);

    }
  };



  useEffect(() => {
    console.log(token);
    fetch("http://localhost:3000/pointgps/displaypointgps", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPlace(data.value)
      })
  }, []);



  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "calc(100vh - 180px)", width: "100vw", position: "relative" }}
      whenReady={(map) => {
        // quand la map est rdy, stock dans map les méthodes de leaflets dispo
        console.log(map);
        // utilise la reconnaissance d'un click pour stock dans e les infos
        map.target.on("click", function (e) {
          // extraits les clés lat & lng de l'objet e.latlng
          const { lat, lng } = e.latlng;
          addToArr({ lat, lng });
          // place le marker sur la map grace aux coords extraites
          L.marker([lat, lng], { icon }).addTo(map.target);

          // Ajouter dans un useState ou en BDD

          // console.log("lat", lat)
          // console.log("lng", lng)

        });
      }}>
      <div style={{ position: "absolute", height: "200px", width: "400px", backgroundColor: "#ffffffc4", padding: "15px", zIndex: 1000, bottom: 0, right: "10px", borderRadius: "20px" }}>

        <ul>
          <li style={{ color: "red" }}>
            Zone où il est interdit de planter
          </li>
          <li style={{ color: "green" }}>
            Zone où planter des pommier pour son altitude, son climat favorable, la réduction des maladies et l'eau de qualité
          </li>
          <li style={{ color: "blue" }}>
            Zone ou planter des rosacées pour son microclimat, la résistance au sel et la pollinisation
          </li>
          <li style={{ color: "purple" }}>
            Zone ou planter des Lauracées
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

      {place.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lng]} />

      ))}

      <Polygon pathOptions={fillBlueOptions} positions={polygon} />
      <Rectangle bounds={rectangle} pathOptions={greenOptions} />
      <Polyline pathOptions={purpleOptions} positions={multiPolyline} />
      <Circle center={center} pathOptions={redOptions} radius={3000} >
        <Popup>zone ou planter ou il est interdit de planter</Popup>
      </Circle>
      <Circle center={center1} pathOptions={redOptions} radius={5000} >
        <Popup>zone ou planter ou il est interdit de planter</Popup>
      </Circle>
      <Circle center={center2} pathOptions={redOptions} radius={5000} >
        <Popup>zone ou planter ou il est interdit de planter</Popup>
      </Circle>
      <Circle center={center3} pathOptions={redOptions} radius={5000} >
        <Popup>zone ou planter ou il est interdit de planter</Popup>
      </Circle>

    </MapContainer>
  );
}

export default Map;
