import { useState, useMemo } from 'react';
import Map, { NavigationControl, Marker, Popup, MapProvider, FullscreenControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pin from './Pin.js';
import STORES from './ListStores.json';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
function ListStores() {
    const [popupInfo, setPopupInfo] = useState(null);
    const pins = useMemo(
        () =>
            STORES.map((store, index) => (
                <Marker
                    key={`marker-${index}`}
                    longitude={store.longitude}
                    latitude={store.latitude}
                    anchor="bottom"
                >
                    <Pin onClick={() => setPopupInfo(store)} />
                </Marker>
            )),
        []
    );
    return <MapProvider><Map
        initialViewState={{
            longitude: 105.75,
            latitude: 10.02,
            zoom: 11
        }}
        className="col-md-12"
        style={{ width: 'auto', height: '100vh', borderRadius: 4 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1Ijoibmd1eWVubmhhdHRhbiIsImEiOiJja3pkazA0bXkxbnppMm5vMW04Y2xjc2ZsIn0.pcnzXZfj_tRB6m1Ee5zqOQ"
    >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />

        {pins}

        {popupInfo && (
            <Popup
                anchor="top"
                longitude={Number(popupInfo.longitude)}
                latitude={Number(popupInfo.latitude)}
                closeOnClick={false}
                onClose={() => setPopupInfo(null)}
            >
                <div style={{ 'text-align': 'center' }}>
                    {popupInfo.store}

                </div>
                <img alt="anh cua hang" width="100%" src={popupInfo.image} />
            </Popup>
        )}
    </Map></MapProvider>;
}
export default ListStores