<template>
  <div class="d-map">
    <Nav />

    <GMap
      ref="gMap"
      language="en"
      :cluster="{ options: { styles: clusterStyle } }"
      :center="{ lat: locations[0].lat, lng: locations[0].lng }"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative',
        styles: mapStyle,
      }"
      :zoom="6"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        :draggable="true"
        :clickable="true"
      >
        <GMapInfoWindow :options="{ maxWidth: 200, maxHeight: 200 }">
          <code class="d-infowindow">
            <h2>Cafe Today</h2>
            {{ location.lat }}, lng: {{ location.lng }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
      <GMapCircle :options="circleOptions" />
    </GMap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 11.566715,
          lng: 104.806473,
        },
        {
          lat: 11.578929,
          lng: 104.839361,
        },
        {
          lat: 11.534481,
          lng: 104.82963,
        },
      ],
      pins: {
        selected: '/assets/location-pin.png',
        notSelected:
          'https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png',
      },
      clusterStyle: [
        {
          url:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
      mapStyle: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }],
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }],
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }],
        },
      ],
    }
  },
  methods: {
    // toggleBounce() {
    //   if (marker.getAnimation() !== null) {
    //     marker.setAnimation(null)
    //   } else {
    //     marker.setAnimation(google.maps.Animation.BOUNCE)
    //   }
    // },
  },
}
</script>

<style>
.d-map {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.d-infowindow {
  background-color: gray;
}
.GMap__Wrapper {
  width: 100%;
  height: calc(100vh - 55px);
}
</style>
