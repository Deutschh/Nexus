// Em: src/components/StepperCadastro.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Stepper } from "@/components/ui/Stepper.jsx"; // Importa nosso novo Stepper

const steps = ["Seu Perfil", "Seu Negócio"];

// --- Formulário do Passo 1 ---
function FormularioPasso1({ onNext }) {
  // Seu código do Passo 1 (está perfeito, sem alterações)
  return (
    <div className="space-y-4 mt-6 w-4/5 h-full p-1">
      <div className="flex flex-col gap-4 w-full ">
        <div className="w-full flex gap-x-8">
          <div className="space-y-2 w-30/100">
            <Label htmlFor="nome" className="text-lg text-gray-500 font-sans">Primeiro Nome</Label>
            <Input id="nome" placeholder="Ana" className={" h-12 shadow-xl border-1 border-zinc-400/50 text-foreground text-lg"}/>
          </div>
          <div className="space-y-2 w-53/100">
            <Label htmlFor="sobrenome" className="text-lg text-gray-500 font-sans">Sobrenome</Label>
            <Input id="sobrenome" placeholder="Silva Costa" className={" h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
          </div>
        </div>
      </div>
      <div className="space-y-2 w-3/5">
        <Label htmlFor="email" className="text-lg text-gray-500 font-sans">Email</Label>
        <Input id="email" type="email" placeholder="pedro@padaria.com" className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
      </div>
      <div className="space-y-2 w-3/5">
        <Label htmlFor="senha" className="text-lg text-gray-500 font-sans">Senha</Label>
        <Input id="senha" type="password" className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
      </div>
      <div className="flex justify-end pr-24">
        <Button onClick={onNext} className="w-2/7 mt-4 rounded-2xl h-12 text-lg bg-indigo-600 border-2 border-indigo-600 text-white items-center justify-center flex font-sans font-semibold hover:bg-inherit
                hover:text-indigo-700 hover:border-indtext-indigo-700 cursor-pointer transition-all duration-700">
          Continuar <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// --- Formulário do Passo 2 (COM ESTILOS ATUALIZADOS) ---
function FormularioPasso2({ onPrev, onComplete }) {
  return (
    // Aplicando o mesmo layout 'w-4/5'
    <div className="space-y-4 mt-6 w-5/7 h-full p-1 pr-8">
      {/* O layout de grid é bom para este formulário, vamos mantê-lo */}
      <div className="flex flex-col gap-x-8 gap-y-4">
        
        {/* Nome do Negócio */}
        <div className="col-span-2 space-y-2 w-4/5">
          <Label htmlFor="nome-negocio" className="text-lg text-gray-500 font-sans">Nome do Negócio</Label>
          <Input id="nome-negocio" placeholder="Padaria do Pedro" className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
        </div>

        <div className="flex gap-x-16">


        {/* CEP */}
        <div className="space-y-2">
          <Label htmlFor="cep" className="text-lg text-gray-500 font-sans">CEP</Label>
          <Input id="cep" placeholder="00000-000" className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
        </div>

          <div className="space-y-2">
          <Label htmlFor="tipo-negocio" className="text-lg text-gray-500 font-sans">Tipo de Negócio</Label>
          <Select>
            {/* Aplicando o estilo do Input ao SelectTrigger */}
            <SelectTrigger id="tipo-negocio" className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground cursor-pointer"}>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className={'cursor-pointer'} value="padaria">Padaria</SelectItem>
              <SelectItem className={'cursor-pointer'} value="restaurante">Restaurante</SelectItem>
              <SelectItem className={'cursor-pointer'} value="cafe">Café</SelectItem>
              <SelectItem className={'cursor-pointer'} value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        </div>

        {/* Telefone */}
        <div className="col-span-2 space-y-2 w-1/4">
          <Label htmlFor="telefone" className="text-lg text-gray-500 font-sans">Telefone Principal</Label>
          <Input id="telefone" placeholder="(11) 99999-9999" className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
        </div>

      </div>

      {/* Container dos Botões */}
      {/* Mantive o layout de 2 botões, mas apliquei os estilos do Passo 1 */}
      <div className="flex justify-end gap-x-8 w-full mt-4">
        
        {/* Botão Voltar (Estilo "outline" consistente) */}
        <Button 
          onClick={onPrev} 
          variant="outline" 
          className="w-2/7 mt-4 rounded-2xl h-12 text-lg bg-slate-200/20 border-none shadow-none text-zinc-500 items-center justify-center flex font-sans font-semibold hover:bg-slate-200/20 hover:text-indigo-600 cursor-pointer transition-all duration-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
        </Button>
        
        {/* Botão Concluir (Estilo "principal" idêntico ao "Continuar") */}
        <Button 
          onClick={onComplete} 
          className="w-2/7 mt-4 rounded-2xl h-12 text-lg bg-indigo-600 border-2 border-indigo-600 text-white items-center justify-center flex font-sans font-semibold hover:bg-inherit hover:text-indigo-700 hover:border-indtext-indigo-700 cursor-pointer transition-all duration-700"
        >
          Concluir <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

      </div>
    </div>
  );
}

// --- Componente Principal do Wizard ---
export function StepperCadastro() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Passo 1, 1 = Passo 2
  const navigate = useNavigate();

  const handleCadastro = () => {
    // (Lógica de API para o back-end)
    console.log("Formulário completo enviado!");
    navigate("/planos"); // Redireciona para a página de Planos
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Renderiza o formulário do passo atual */}
      <div className="mt-4">
        {currentStep === 0 && (
          <FormularioPasso1 onNext={() => setCurrentStep(1)} />
        )}
        {currentStep === 1 && (
          <FormularioPasso2
            onPrev={() => setCurrentStep(0)}
            onComplete={handleCadastro}
          />
        )}
      </div>
    </div>
  );
}