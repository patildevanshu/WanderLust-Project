if (typeof mapToken !== "undefined" && mapToken && mapToken !== "undefined" && mapToken.trim() !== "") {
  try {
    mapboxgl.accessToken = mapToken;

    const coordinates = (typeof listing !== "undefined" && listing && listing.geometry && Array.isArray(listing.geometry.coordinates) && listing.geometry.coordinates.length >= 2)
      ? listing.geometry.coordinates
      : [77.209, 28.6139]; // Default coordinates

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom: 9,
    });

    // Add navigation controls (zoom in/out) - helpful for mobile devices
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    new mapboxgl.Marker({ color: "#fe424d" })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h6>${listing.title || 'Location'}</h6><p>Exact location provided after booking!</p>`
        )
      )
      .addTo(map);
  } catch (e) {
    console.warn("Mapbox initialization error:", e);
  }
} else {
  const mapContainer = document.getElementById("map");
  if (mapContainer) {
    mapContainer.innerHTML = '<div class="d-flex flex-column align-items-center justify-content-center h-100 bg-light text-muted p-4 text-center rounded border"><i class="fa-solid fa-map-location-dot fs-2 mb-2 text-danger"></i><span>Map preview is unavailable or Mapbox token is not configured.</span></div>';
  }
}
