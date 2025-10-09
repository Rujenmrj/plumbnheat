import { Button } from "../../components/ui/Button";

export default function CTASection() {
  return (
    <section className="bg-primary text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
      <p className="text-lg mb-6">
        Call us now for your free consultation and quote. We’re available 24/7
        for emergency plumbing.
      </p>
      <Button size="lg" variant="secondary">
        Request a Quote
      </Button>
    </section>
  );
}
