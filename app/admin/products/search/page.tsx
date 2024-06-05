import { prisma } from "@/src/lib/prisma";
import Heading from "../../../../components/ui/Heading";
import ProductsTable from "@/components/products/ProductsTable";
import ProducSearchForm from "@/components/products/ProductSearchForm";
async function searchProduct(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}
export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProduct(searchParams.search);
  return (
    <>
      <Heading>Resultados de busqueda: {searchParams.search}</Heading>
      <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
        <ProducSearchForm />
      </div>
      {products.length ? (
        <ProductsTable products={products} />
      ) : (
        <p className="text-center text-lg">No hay resultados</p>
      )}
    </>
  );
}
