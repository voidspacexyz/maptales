

document.addEventListener("DOMContentLoaded", async () => {
  var gpxList;
  const baseUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:8000"
      : "https://blog.voidspace.xyz/maptales";

  const map = L.map("map").setView([0, 0], 2);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxNativeZoom: 19,
    maxZoom: 35,
  }).addTo(map);

  try {
    const response = await fetch("gpx-list.json");
    if (response.ok) {
      gpxList = await response.json();
      const existingLi = document.querySelector("#gpx-selector li:first-child");

      gpxList.forEach((gpx) => {
        const option = document.createElement("li");
        const aTag = document.createElement("a");
        aTag.className = "dropdown-item";
        aTag.href = "#";
        aTag.value = gpx.file;
        aTag.textContent = gpx.name;
        option.appendChild(aTag);
        existingLi.parentNode.appendChild(option);
      });

      existingLi.remove();
    }

    document
      .getElementById("gpx-selector")
      .addEventListener("click", async (event) => {
        const selectedFile = event.target.closest("a")?.value;
        if (!selectedFile) return;

        // Clear existing map layers before loading new GPX data
        map.eachLayer((layer) => {
          if (!(layer instanceof L.TileLayer)) {
            map.removeLayer(layer);
          }
        });

        const gpxUrl = `${baseUrl}/${selectedFile}`; // Assuming baseUrl points to the data directory
        var lastSlashIndex = selectedFile.lastIndexOf("/");
        // Extract the directory path by slicing the string up to the last slash
        var directoryPath = selectedFile.slice(0, lastSlashIndex + 1);
        
        fetch(gpxUrl)
          .then((response) => response.text())
          .then((gpxData) => {
            const parser = new DOMParser();
            const gpx = parser.parseFromString(gpxData, "text/xml");

            const hypertextContainer = document.getElementById("hypertext-container");
            
            // Find the corresponding description in the JSON data
            const description = gpxList.find((gpxItem) => gpxItem.file === selectedFile)?.description;
    
            if (description) {
              hypertextContainer.textContent = description;
            } else {
              hypertextContainer.textContent = "No description available";
            }
            // Add waypoints
            const waypoints = gpx.getElementsByTagName("wpt");
            const firstWaypoint = waypoints[0];
            Array.from(waypoints).forEach((wpt) => {
              const lat = parseFloat(wpt.getAttribute("lat"));
              const lon = parseFloat(wpt.getAttribute("lon"));
              const firstLat = parseFloat(firstWaypoint.getAttribute("lat"));
              const firstLon = parseFloat(firstWaypoint.getAttribute("lon"));

              const type = wpt.getElementsByTagName("name")[0].textContent;
              var desc;
              if (wpt.getElementsByTagName("link")[0]){
                desc = directoryPath + wpt.getElementsByTagName("link")[0].attributes.href.textContent;;
              } else {
                desc = type
              }
              

              let popupContent = "";
              var customIcon = "";
              const pictureIcons = L.AwesomeMarkers.icon({
                  icon: 'camera',
                  markerColor: 'blue',
                  prefix: 'fa'
              })
              const audioIcon = L.AwesomeMarkers.icon({
                  icon: 'microphone',
                  markerColor: 'green',
                  prefix: 'fa'
                })
              const videoIcon = L.AwesomeMarkers.icon({
                  icon: 'video',
                  markerColor: 'red',
                  prefix: 'fa'
                })
              const defaultIcon = L.AwesomeMarkers.icon({
                  icon: 'point',
                  markerColor: 'yellow',
                  prefix: 'fa'
                })

              if (type.includes("Picture")) {
                popupContent = `<img src="${desc}" style="width:200px">`;
                customIcon = pictureIcons
              } else if (type.includes("Voice recording")) {
                popupContent = `<audio controls><source src="${desc}" type="audio/ogg"></audio>`;
                customIcon = audioIcon
              } else if (type === "video") {
                popupContent = `<video width="200" controls><source src="${desc}" type="video/webm"></video>`;
                customIcon = videoIcon
              } else {
                popupContent = `${desc}`;
                customIcon = defaultIcon
              }
              

              L.marker([lat, lon], { icon: customIcon }).bindPopup(popupContent).addTo(map);
              map.setView([firstLat, firstLon], 18);
            });

            // Add track
            const track = gpx.getElementsByTagName("trkseg")[0];
            const points = Array.from(track.getElementsByTagName("trkpt")).map(
              (trkpt) => [
                parseFloat(trkpt.getAttribute("lat")),
                parseFloat(trkpt.getAttribute("lon")),
              ],
            );

            L.polyline(points, { color: "blue" }).addTo(map);
          });
      });
  } catch (error) {
    console.error("Error:", error);
  }
});
