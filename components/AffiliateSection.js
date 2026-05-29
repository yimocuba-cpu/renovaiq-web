import Button from "./Button";

export default function AffiliateSection() {
  const LOWES_LINK = "https://www.lowes.com/c/Bathroom-ideas-inspiration-Bathroom";
  const FLOOR_DECOR_LINK = "https://www.flooranddecor.com/bath";

  return (
    <section className="flex flex-col gap-3">
      <Button variant="affiliate" href={LOWES_LINK}>
        Shop at Lowe&apos;s
      </Button>

      <Button variant="affiliate" href={FLOOR_DECOR_LINK}>
        Shop at Floor & Decor
      </Button>
    </section>
  );
}