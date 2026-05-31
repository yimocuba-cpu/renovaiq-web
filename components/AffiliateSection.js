import Button from "./Button";
import AFFILIATE_LINKS from "./affiliateLinks";

export default function AffiliateSection() {
  return (
    <section className="flex flex-col gap-3">
      <Button variant="affiliate" href={AFFILIATE_LINKS["amazon"]} ariaLabel="Shop on Amazon">
        Shop on Amazon
      </Button>

      <Button variant="affiliate" href={AFFILIATE_LINKS["wayfair"]} ariaLabel="Shop on Wayfair">
        Shop on Wayfair
      </Button>

      <Button variant="affiliate" href={AFFILIATE_LINKS["ace-decor"]} ariaLabel="Shop on Ace Decor">
        Shop on Ace Decor
      </Button>

      <Button variant="affiliate" href={AFFILIATE_LINKS["lowes"]} ariaLabel="Shop on Lowe&apos;s">
        Shop on Lowe&apos;s
      </Button>

      <Button variant="affiliate" href={AFFILIATE_LINKS["floor-decor"]} ariaLabel="Shop on Floor & Decor">
        Shop on Floor & Decor
      </Button>
    </section>
  );
}