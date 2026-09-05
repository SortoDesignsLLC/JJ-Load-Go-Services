import { useEffect, useRef } from "react";

/** Rough outline of the Northern Virginia service area (lat, lng). */
const AREA: [number, number][] = [
  [39.32, -77.72],
  [39.15, -77.46],
  [38.99, -77.25],
  [38.97, -77.04],
  [38.79, -77.04],
  [38.71, -77.15],
  [38.55, -77.28],
  [38.52, -77.55],
  [38.7, -77.75],
  [38.95, -77.85],
  [39.11, -77.83],
];

export default function ServiceAreaMap() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !ref.current) return;

      map = L.map(ref.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap &copy; CARTO",
        maxZoom: 18,
      }).addTo(map);

      const area = L.polygon(AREA, {
        color: "#16a34a",
        weight: 2,
        fillColor: "#86efac",
        fillOpacity: 0.45,
      }).addTo(map);

      map.fitBounds(area.getBounds(), { padding: [16, 16] });
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Map of the Northern Virginia service area highlighted in green"
      className="h-[320px] w-full sm:h-[420px] lg:h-[480px]"
    />
  );
}
