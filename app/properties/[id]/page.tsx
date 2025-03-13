import FavoriteToggleButton from "@/components/card/favorite-toggle-button";
import PropertyRating from "@/components/card/property-rating";
import Amenities from "@/components/properties/amenities";
import BookingCalendar from "@/components/properties/booking/booking-calendar";
import BreadCrumbs from "@/components/properties/bread-crumbs";
import Description from "@/components/properties/description";
import ImageContainer from "@/components/properties/image-container";
import PropertyDetails from "@/components/properties/property-details";
// import { DynamicMap } from "@/components/properties/property-map";
import ShareButton from "@/components/properties/share-button";
import UserInfo from "@/components/properties/user-info";
import { Separator } from "@/components/ui/separator";
import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";

const PropertyDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const property = await fetchPropertyDetails(resolvedParams.id);

  if (!property) redirect("/");
  
  const { bedrooms, baths, guests, beds } = property;
  const details = { bedrooms, baths, guests, beds };
  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold">{property.tagline}</h1>
        <div className="flex items-center gap-x-4">
          <ShareButton propertyId={property.id} name={property.name} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <div className="flex gap-x-4 items-center">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ profileImage, firstName }} />
          <Separator className="mt-4" />
          <Description description={property.description} />
          <Amenities amenities={property.amenities} />
          {/* <DynamicMap countryCode={property.country} /> */}
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          <BookingCalendar />
        </div>
      </section>
    </section>
  );
};

export default PropertyDetailsPage;
