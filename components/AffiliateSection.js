import Button from "./Button";

export default function AffiliateSection() {
  const LOWES_LINK = "PEGAR_AQUI_LINK_LOWES";
  const FLOOR_DECOR_LINK = "PEGAR_AQUI_LINK_FLOOR_DECOR";

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