// MyMap.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  const position = [51.505, -0.09]; // Default position

  return (
    <MapContainer center={position} zoom={13} style={{ width: '100%', height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Your Marker Popup</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
