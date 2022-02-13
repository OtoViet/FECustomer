import { useState, useMemo, useRef } from 'react';
import Map, { NavigationControl, Marker, Popup, MapProvider, FullscreenControl, GeolocateControl, useControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pin from './Pin.js';
import STORES from './ListStores.json';
import mapboxgl from 'mapbox-gl';
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = "pk.eyJ1Ijoibmd1eWVubmhhdHRhbiIsImEiOiJja3pkazA0bXkxbnppMm5vMW04Y2xjc2ZsIn0.pcnzXZfj_tRB6m1Ee5zqOQ"
function ListStores() {
    const directions = useRef(null);
    function ChangeLocation() {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            directions.current.setOrigin([longitude, latitude]);
        });
    }
    function DirectionsControl(props) {
        directions.current =new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            language: 'vi',
            unit: 'metric',
            placeholderOrigin: 'Nhập địa chỉ của bạn',
            placeholderDestination: 'Nhập địa chỉ đến',
            controls: {
                // inputs: false,
                profileSwitcher: false,
            }
        });
        useControl(() => directions.current, {
            position: props.position
        });
        return null;
    }
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
                    <Pin onClick={() => {
                        directions.current.setDestination([store.longitude,store.latitude]);setPopupInfo(store)}} 
                    />
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
        style={{ width: 'auto', height: '80vh', borderRadius: 4 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={mapboxgl.accessToken}
    >
        <GeolocateControl position="top-right" trackUserLocation={true} onTrackUserLocationStart={ChangeLocation} />
        <FullscreenControl position="top-right" />
        <NavigationControl position="top-right" />
        <DirectionsControl position="top-left" />

        {pins}

        {popupInfo && (
            <Popup
                anchor="top"
                longitude={Number(popupInfo.longitude)}
                latitude={Number(popupInfo.latitude)}
                closeOnClick={false}
                onClose={() => setPopupInfo(null)}
            >
                <div style={{ 'textAlign': 'center' }}>
                    {popupInfo.store}

                </div>
                <img alt="anh cua hang" width="100%" src={popupInfo.image} />
            </Popup>
        )}
    </Map></MapProvider>;
}
export default ListStores