import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-page max-w-2xl">
        <h1 className="text-5xl sm:text-6xl">We could not find that page</h1>
        <p className="mt-5 text-lg text-muted">The link may be out of date. You can head back to the homepage or browse our services.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">Back to home</Button>
          <Button href="/services" variant="secondary" size="lg">Our services</Button>
        </div>
      </div>
    </section>
  );
}
