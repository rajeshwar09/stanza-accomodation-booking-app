import LoadingCards from "@/components/card/loading-cards";
import CategoriesList from "@/components/home/categories-list";
import PropertiesContainer from "@/components/home/properties-container";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ search?: string; category?: string }>;
}) {
  const params = await searchParams;

  return (
    <section>
      <CategoriesList category={params?.category} search={params?.search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={params?.category}
          search={params?.search}
        />
      </Suspense>
    </section>
  );
}
