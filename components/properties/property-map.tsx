"use client";

import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import { findCountryByCode } from "@/utils/countries";
import { icon } from "leaflet";
import Title from "./title";
import CountryFlagAndName from "../card/country-flag-and-name";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

type PropertyMapProps = {
  countryCode: string;
};

const PropertyMap = ({ countryCode }: PropertyMapProps) => {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = findCountryByCode(countryCode)?.location as [number, number];

  return (
    <div className="mt-4">
      <div className="mb-4">
        <Title text="Where you will be staying" />
        <CountryFlagAndName countryCode={countryCode} />
      </div>
      <MapContainer
        scrollWheelZoom={false}
        zoomControl={false}
        zoom={7}
        center={location || defaultLocation}
        className="h-[50vh] rounded-lg relative z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <Marker
          position={location || defaultLocation}
          icon={markerIcon}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default PropertyMap;

export const DynamicMap = dynamic(
  () => import('@/components/properties/property-map'), {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />
  }
)