// Em: src/components/ui/Stepper.jsx

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils"; // (Vem do shadcn)

// Props:
// steps = ["Sua Conta", "Seu Negócio"]
// currentStep = 0 (para o primeiro passo), 1 (para o segundo)
export function Stepper({ steps, currentStep }) {
  return (
    <div className="flex w-70/100 items-center justify-between">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "size-10 rounded-full flex items-center justify-center transition-all duration-1000",
                  isCompleted
                    ? "bg-indigo-600 text-white"
                    : isActive
                    ? "border-2 border-indigo-600 bg-slate-200/20 text-indigo-600"
                    : "border-2 border-zinc-500 bg-slate-200/20 text-zinc-500"
                )}
              >
                {isCompleted ? (
                  <Check className="size-5" />
                ) : (
                  <span className="font-semibold">{index + 1}</span>
                )}
              </div>
              <div
                className={cn(
                  "mt-2 text-sm font-semibold text-center",
                  isCompleted || isActive ? "text-indigo-600" : "text-zinc-500"
                )}
              >
                {step}
              </div>
            </div>
            {/* Linha de conexão (não renderiza no último item) */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-1 transition-all duration-1000 mx-4 rounded-full",
                  isCompleted ? "bg-indigo-600" : "bg-zinc-400"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}