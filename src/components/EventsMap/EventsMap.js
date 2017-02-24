import React from 'react';
import MainGoogleMap from '../MainGoogleMap/MainGoogleMap';

export default function EventsMap({markers, currentLocation, handleMarkerClick}) {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <MainGoogleMap
        containerElement={<div style={{ height: '600px' }} />}
        mapElement={<div style={{ height: '600px' }} />}
        markers={markers}
        currentLocation={currentLocation}
        onMarkerClick={handleMarkerClick}
      />
    </div>
  );
}

EventsMap.propTypes = {
  markers: React.PropTypes.array,
  currentLocation: React.PropTypes.object,
  handleMarkerClick: React.PropTypes.func,
};
