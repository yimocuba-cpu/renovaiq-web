// components/PDFButton.js

import { jsPDF } from "jspdf";
import Button from "./Button";
import { formatSingle } from "../lib/formatCurrency";

export default function PDFButton({
  zipCode,
  bathTypeLabel,
  selectedTasks,
  selectedMaterials,
  tileType,
  bathroomSize,
  labor,
  materials,
  estimatedProjectCost,
  hiddenCosts,
}) {
  function generatePDF() {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "letter",
    });

    const marginLeft = 48;
    const marginRight = 48;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - marginLeft - marginRight;
    let y = 48;
    const lineHeight = 18;

    // ── Helpers ──────────────────────────────────────
    function addTitle(text) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(29, 78, 216);
      doc.text(text, marginLeft, y);
      y += lineHeight * 1.8;
    }

    function addSectionHeader(text) {
      y += 10;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(107, 114, 128);
      doc.setDrawColor(209, 213, 219);
      doc.line(marginLeft, y, pageWidth - marginRight, y);
      y += 14;
      doc.text(text.toUpperCase(), marginLeft, y);
      y += lineHeight * 1.2;
    }

    function addRow(label, value, highlight = false) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(55, 65, 81);

      if (highlight) {
        doc.setFillColor(239, 246, 255);
        doc.roundedRect(
          marginLeft - 6,
          y - 12,
          contentWidth + 12,
          20,
          3,
          3,
          "F"
        );
        doc.setFont("helvetica", "bold");
        doc.setTextColor(29, 78, 216);
      }

      doc.text(label, marginLeft, y);
      doc.text(value, pageWidth - marginRight, y, { align: "right" });
      y += lineHeight * 1.3;

      if (highlight) {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(55, 65, 81);
      }
    }

    function addItem(text) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(55, 65, 81);
      doc.text(`• ${text}`, marginLeft + 8, y);
      y += lineHeight * 1.1;
    }

    function addKeyValue(label, value) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(55, 65, 81);
      doc.text(label, marginLeft, y);

      doc.setFont("helvetica", "normal");
      doc.text(value, marginLeft + 120, y);
      y += lineHeight * 1.2;
    }

    // ── Title ─────────────────────────────────────────
    addTitle("Bathroom Remodel Estimate");

    // ── Section 1: Project Details ────────────────────
    addSectionHeader("Project Details");
    addKeyValue("ZIP Code:", zipCode || "-");
    addKeyValue("Bathroom Type:", bathTypeLabel || "-");
    if (tileType) addKeyValue("Tile Type:", tileType);
    if (bathroomSize) addKeyValue("Bathroom Size:", bathroomSize);

    // Labor tasks
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Labor Tasks Selected:", marginLeft, y);
    y += lineHeight;

    if (!selectedTasks?.length) {
      addItem("No labor tasks selected");
    } else {
      (selectedTasks || []).forEach((task) => addItem(task));
    }

    // Materials
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Materials Selected:", marginLeft, y);
    y += lineHeight;

    if (!selectedMaterials?.length) {
      addItem("No materials selected");
    } else {
      (selectedMaterials || []).forEach((mat) => addItem(mat));
    }

    // ── Section 2: Estimate ───────────────────────────
    addSectionHeader("Estimate");
    addRow("Labor", labor);
    addRow("Materials", materials);
    addRow("Estimated Project Cost", estimatedProjectCost, true);

    // ── Section 3: Additional Costs ───────────────────
    addSectionHeader("Additional Costs to Consider");

    (hiddenCosts || []).forEach((item) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(55, 65, 81);
      doc.text(item.title, marginLeft, y);

      doc.setFont("helvetica", "normal");
      doc.setTextColor(217, 119, 6);
      doc.text(
        `~${formatSingle(item.amount)}`,
        pageWidth - marginRight,
        y,
        { align: "right" }
      );

      y += lineHeight;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(107, 114, 128);

      const descLines = doc.splitTextToSize(
        item.description,
        contentWidth
      );
      doc.text(descLines, marginLeft, y);

      y += descLines.length * 13 + 6;
    });

    // ── Save ──────────────────────────────────────────
   doc.save("bathroom-remodel-estimate-usa.pdf");
  }

  return (
    <Button variant="pdf" onClick={generatePDF}>
      ⬇ Export PDF — Free
    </Button>
  );
}