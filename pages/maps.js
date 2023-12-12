import dynamic from "next/dynamic";

const MapComponent = dynamic(
    () => {
      return import("../components/Map");
    },
    { ssr: false }
  );

function Maps() {
  return <MapComponent />;
}

export default Maps;


// pageProps