import { FC } from 'react';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import './mapComponent.scss';

const MapComponent: FC = () => {
  new Icon({
    iconSize: [50, 50],
  });

  return (
    <MapContainer
      center={[48.60265, 22.28147]}
      zoom={18}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[48.60265, 22.28147]}></Marker>
    </MapContainer>
  );
};

export default MapComponent;
