import ServiceCarousels from "./ServiceCarousels";

export default function ServiceSection() {
  return (
    <section className="py-20 bg-[#F9F9FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12">
          Services we offer
        </h2>

        <ServiceCarousels />
      </div>
    </section>
  );
}
