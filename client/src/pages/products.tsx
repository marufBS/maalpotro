import DefaultLayout from "@/layouts/default";

export default function ProductsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-3xl font-bold">Products</h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
