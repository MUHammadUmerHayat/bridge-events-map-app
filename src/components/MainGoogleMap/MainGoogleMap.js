import { default as React } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MainGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: 43.653226, lng: -79.383184 }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onClick={() => props.onMarkerClick(marker.key, true)}
        >
          {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClick(marker.key, false)}>
            <div>{marker.title}</div>
          </InfoWindow>
          )}
      </Marker>
    ))}
  </GoogleMap>
));

export default MainGoogleMap;
