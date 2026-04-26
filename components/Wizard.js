"use client";

import { useState } from "react";
import bathTypes from "../data/bathTypes";
import laborBaseRates from "../data/laborBaseRates";
import materialsRules from "../data/materialsRules";
import { calculateLabor } from "../lib/calculateLabor";
import { calculateMaterials } from "../lib/calculateMaterials";
import { calculateTotal } from "../lib/calculateTotal";
import StepCard from "./StepCard";
import ResultCard from "./ResultCard";
import HiddenCosts from "./HiddenCosts";
import PDFButton from "./PDFButton";
import CTAForm from "./CTAForm";
import Button from "./Button";

const TILE_TYPES = [
  { id: "ceramic", label: "Ceramic Tile" },
  { id: "porcelain", label: "Porcelain Tile" },
  { id: "marble", label: "Marble Tile" },
];

const BATH_SIZES = [
  { id: "medium", label: "Medium" },
  { id: "extra_large", label: "Extra Large" },
];

export default function Wizard() {
  const [zipCode, setZipCode] = useState("");
  const [bathType, setBathType] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [tileType, setTileType] = useState("");
  const [bathroomSize, setBathroomSize] = useState("");
  const [resultado, setResultado] = useState(null);
  const [errores, setErrores] = useState({});
  const [showLeadForm, setShowLeadForm] = useState(false);

  function handleBathTypeChange(value) {
    setBathType(value);
    setSelectedTasks([]);
    setSelectedMaterials([]);
    setTileType("");
    setBathroomSize("");
    setResultado(null);
    setErrores({});
    setShowLeadForm(false);
  }

  function toggleTask(id) {
    setSelectedTasks((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
  }

  function toggleMaterial(id) {
    setSelectedMaterials((prev) =>
      prev.includes(id)
        ? prev.filter((materialId) => materialId !== id)
        : [...prev, id]
    );
  }

  function handleCancel() {
    setZipCode("");
    setBathType("");
    setSelectedTasks([]);
    setSelectedMaterials([]);
    setTileType("");
    setBathroomSize("");
    setResultado(null);
    setErrores({});
    setShowLeadForm(false);
  }

  function handleCalculate() {
    const nuevosErrores = {};

    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
      nuevosErrores.zipCode = "Please enter a valid 5-digit ZIP code.";
    }

    if (!bathType) {
      nuevosErrores.bathType = "Please select a bathroom type.";
    }

    if (selectedTasks.length === 0) {
      nuevosErrores.tasks = "Please select at least one labor task.";
    }

    if (selectedMaterials.length === 0) {
      nuevosErrores.materials = "Please select at least one material.";
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});

    const laborResult = calculateLabor(bathType, selectedTasks, zipCode);
    if (laborResult.error) {
      setErrores({ general: laborResult.error });
      return;
    }

    const materialsResult = calculateMaterials(bathType, selectedMaterials);
    if (materialsResult.error) {
      setErrores({ general: materialsResult.error });
      return;
    }

    const total = calculateTotal(
      laborResult.laborLow,
      laborResult.laborHigh,
      materialsResult.materialsTotal
    );

    setResultado({
      ...total,
      laborLow: laborResult.laborLow,
      laborHigh: laborResult.laborHigh,
      materialsTotal: materialsResult.materialsTotal,
      selectedTasks: laborBaseRates[bathType].tasks
        .filter((task) => selectedTasks.includes(task.id))
        .map((task) => task.label),
      selectedMaterials: materialsRules[bathType].items
        .filter((material) => selectedMaterials.includes(material.id))
        .map((material) => material.label),
      tileTypeLabel: TILE_TYPES.find((tile) => tile.id === tileType)?.label || "",
      bathroomSizeLabel:
        BATH_SIZES.find((size) => size.id === bathroomSize)?.label || "",
      bathTypeLabel: bathTypes.find((bathroom) => bathroom.id === bathType)?.label || "",
      zipCode,
    });

    setShowLeadForm(true);

    setTimeout(() => {
      document.getElementById("resultado")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const tareasActuales = bathType ? laborBaseRates[bathType]?.tasks || [] : [];
  const materialesActuales = bathType ? materialsRules[bathType]?.items || [] : [];

  return (
    <div className="flex flex-col gap-5">
      {/* BLOQUE 1: LABOR */}
      <StepCard
        stepNumber={1}
        title="Labor"
        hint="Enter your location and select the work you need done."
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            ZIP Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
            placeholder="e.g. 33601"
            className={`border rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition
              ${
                errores.zipCode
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
              }`}
          />
          {errores.zipCode && <p className="text-xs text-red-500">{errores.zipCode}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            Bathroom Type <span className="text-red-500">*</span>
          </label>
          <select
            value={bathType}
            onChange={(e) => handleBathTypeChange(e.target.value)}
            className={`border rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-1 transition appearance-none
              ${
                errores.bathType
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-[#1D4ED8] focus:ring-[#1D4ED8]"
              }`}
          >
            <option value="">— Select bathroom type —</option>
            {bathTypes.map((bathroom) => (
              <option key={bathroom.id} value={bathroom.id}>
                {bathroom.label}
              </option>
            ))}
          </select>
          {errores.bathType && <p className="text-xs text-red-500">{errores.bathType}</p>}
        </div>

        {bathType && (
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              Select the work you need <span className="text-red-500">*</span>
            </label>
            {errores.tasks && <p className="text-xs text-red-500">{errores.tasks}</p>}

            {tareasActuales.map((task) => (
              <label
                key={task.id}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition
                  ${
                    task.conditional === "pre1980"
                      ? "border-dashed border-amber-400 bg-amber-50"
                      : selectedTasks.includes(task.id)
                        ? "border-[#1D4ED8] bg-[#EFF6FF]"
                        : "border-gray-200 hover:border-[#1D4ED8] hover:bg-[#EFF6FF]"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task.id)}
                  onChange={() => toggleTask(task.id)}
                  className="w-4 h-4 accent-[#1D4ED8] shrink-0"
                />
                <span
                  className={`text-sm font-medium ${
                    task.conditional === "pre1980" ? "text-amber-700" : "text-gray-900"
                  }`}
                >
                  {task.label}
                </span>
                {task.conditional === "pre1980" && (
                  <span className="ml-auto text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                    Pre-1980
                  </span>
                )}
              </label>
            ))}
          </div>
        )}
      </StepCard>

      {/* BLOQUE 2: MATERIALS */}
      {bathType && (
        <StepCard
          stepNumber={2}
          title="Materials"
          hint="Select the materials you plan to include in your remodel."
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              Select your materials <span className="text-red-500">*</span>
            </label>
            {errores.materials && <p className="text-xs text-red-500">{errores.materials}</p>}

            {materialesActuales.map((item) => (
              <label
                key={item.id}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition
                  ${
                    selectedMaterials.includes(item.id)
                      ? "border-[#1D4ED8] bg-[#EFF6FF]"
                      : "border-gray-200 hover:border-[#1D4ED8] hover:bg-[#EFF6FF]"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(item.id)}
                  onChange={() => toggleMaterial(item.id)}
                  className="w-4 h-4 accent-[#1D4ED8] shrink-0"
                />
                <span className="text-sm font-medium text-gray-900">{item.label}</span>
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
              Tile Type <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <select
              value={tileType}
              onChange={(e) => setTileType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition appearance-none"
            >
              <option value="">— Select tile type —</option>
              {TILE_TYPES.map((tile) => (
                <option key={tile.id} value={tile.id}>
                  {tile.label}
                </option>
              ))}
            </select>
          </div>

          {bathType === "master_bathroom" && (
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                Bathroom Size <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <select
                value={bathroomSize}
                onChange={(e) => setBathroomSize(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition appearance-none"
              >
                <option value="">— Select size —</option>
                {BATH_SIZES.map((size) => (
                  <option key={size.id} value={size.id}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </StepCard>
      )}

      {errores.general && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errores.general}
        </div>
      )}

      <div className="flex gap-3">
        <div className="flex-1">
          <Button variant="primary" onClick={handleCalculate}>
            Calculate
          </Button>
        </div>
        <div className="flex-1">
          <Button variant="cancel" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>

      {resultado && (
        <div id="resultado" className="flex flex-col gap-4">
          <ResultCard
            laborLow={resultado.laborLow}
            laborHigh={resultado.laborHigh}
            materialsTotal={resultado.materialsTotal}
          />

          <HiddenCosts costs={resultado.hiddenCosts || []} />

          <PDFButton
            zipCode={resultado.zipCode}
            bathTypeLabel={resultado.bathTypeLabel}
            selectedTasks={resultado.selectedTasks}
            selectedMaterials={resultado.selectedMaterials}
            tileType={resultado.tileTypeLabel}
            bathroomSize={resultado.bathroomSizeLabel}
            labor={resultado.labor}
            materials={resultado.materials}
            estimatedProjectCost={resultado.estimatedProjectCost}
            hiddenCosts={resultado.hiddenCosts}
          />

          {showLeadForm && (
            <CTAForm
              estimate={resultado}
              onCancel={() => setShowLeadForm(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}