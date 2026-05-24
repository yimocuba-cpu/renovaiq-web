import Button from "./Button";

export default function AffiliateSection() {
  // TODO: Replace with actual Lowes affiliate link when affiliate program is approved
  const LOWES_LINK = "#";
  // TODO: Replace with actual Floor & Decor affiliate link when affiliate program is approved
  const FLOOR_DECOR_LINK = "#";

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