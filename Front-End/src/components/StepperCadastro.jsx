// Em: src/components/StepperCadastro.jsx

import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMaskInput } from "react-imask";
import { PasswordInput } from "@/components/ui/password-input"; // Importa o Ver Senha
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Stepper } from "@/components/ui/Stepper.jsx";
import { cn } from "@/lib/utils"; // Importa o 'cn' para o medidor

const steps = ["Seu Perfil", "Seu Negócio"];

// --- COMPONENTE MEDIDOR DE FORÇA DA SENHA ---
function PasswordStrengthMeter({ password }) {
  const strength = useMemo(() => {
    let score = 0;
    if (!password) return score;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }, [password]);

  const getBarColor = (barIndex) => {
    if (strength > barIndex) {
      if (strength === 1) return "bg-red-500";
      if (strength === 2) return "bg-yellow-500";
      if (strength === 3) return "bg-blue-500";
      if (strength === 4) return "bg-green-500";
    }
    return "bg-zinc-700";
  };
  const strengthLabel = ["", "Muito Fraca", "Fraca", "Boa", "Forte"][strength];

  return (
    <div className="space-y-1">
      <div className="flex gap-2">
        <div className={cn("h-1 w-1/4 rounded-full", getBarColor(0))} />
        <div className={cn("h-1 w-1/4 rounded-full", getBarColor(1))} />
        <div className={cn("h-1 w-1/4 rounded-full", getBarColor(2))} />
        <div className={cn("h-1 w-1/4 rounded-full", getBarColor(3))} />
      </div>
      {strength > 0 && (
        <span className="text-xs text-gray-400">{strengthLabel}</span>
      )}
    </div>
  );
}

// --- Formulário do Passo 1 ---
function FormularioPasso1({ onNext, formData, setFormData }) {
  const handleChange = (e) => {
    if (e.target.id === "password") {
      setFormData((prev) => ({ ...prev, password: e.target.value.trim() }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  return (
    <div className="space-y-4 mt-6 w-4/5 h-full p-1">
      <div className="flex flex-col gap-4 w-full ">
        <div className="w-full flex gap-x-8">
          <div className="space-y-2 w-30/100">
            <Label htmlFor="firstName" className="text-lg text-gray-500 font-sans">
              Primeiro Nome
            </Label>
            <Input
              id="firstName"
              placeholder="Ana"
              value={formData.firstName}
              onChange={handleChange}
              maxLength={50}
              className={
                " h-12 shadow-xl border-1 border-zinc-400/50 text-foreground text-lg"
              }
            />
          </div>
          <div className="space-y-2 w-53/100">
            <Label htmlFor="lastName" className="text-lg text-gray-500 font-sans">
              Sobrenome
            </Label>
            <Input
              id="lastName"
              placeholder="Silva Costa"
              value={formData.lastName}
              onChange={handleChange}
              maxLength={100}
              className={
                " h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"
              }
            />
          </div>
        </div>
      </div>
      <div className="space-y-2 w-3/5">
        <Label htmlFor="email" className="text-lg text-gray-500 font-sans">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="pedro@padaria.com"
          value={formData.email}
          onChange={handleChange}
          maxLength={100}
          className={
            "text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"
          }
        />
      </div>
      <div className="space-y-2 w-3/5">
        <Label htmlFor="password" className="text-lg text-gray-500 font-sans">
          Senha
        </Label>
        <PasswordInput
          id="password"
          value={formData.password}
          onChange={handleChange}
          maxLength={50}
          className={
            "text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground mb-2"
          }
        />
        {/* Medidor de Senha Adicionado */}
        <PasswordStrengthMeter password={formData.password} />
      </div>
      <div className="flex justify-end pr-24">
        <Button
          onClick={onNext}
          className="w-2/7 mt-4 rounded-2xl h-12 text-lg bg-indigo-600 border-2 border-indigo-600 text-white items-center justify-center flex font-sans font-semibold hover:bg-inherit
                hover:text-indigo-700 hover:border-indtext-indigo-700 cursor-pointer transition-all duration-700"
        >
          Continuar <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}

// --- Formulário do Passo 2 ---
function FormularioPasso2({ onPrev, onComplete, formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, businessType: value }));
  };

  const handleMaskedChange = (value, id) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Classe base do InputMask (para ficar igual ao seu Input)
  const inputMaskStyle = "flex w-full rounded-md border border-zinc-400/50 bg-background px-3 py-2 text-lg h-12 shadow-xl text-foreground";

  return (
    <div className="space-y-4 mt-6 w-5/7 h-full p-1 pr-8">
      <div className="flex flex-col gap-x-8 gap-y-4">
        {/* Nome do Negócio */}
        <div className="col-span-2 space-y-2 w-4/5">
          <Label
            htmlFor="businessName"
            className="text-lg text-gray-500 font-sans"
          >
            Nome do Negócio
          </Label>
          <Input
            id="businessName"
            placeholder="Padaria do Pedro"
            value={formData.businessName}
            onChange={handleChange}
            maxLength={100}
            className={
              "text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"
            }
          />
        </div>

        <div className="flex gap-x-16">
          {/* CEP */}
          <div className="space-y-2">
            <Label htmlFor="cep" className="text-lg text-gray-500 font-sans">
              CEP
            </Label>
            <IMaskInput
              mask="00000-000"
              id="cep"
              placeholder="00000-000"
              value={formData.cep}
              onAccept={(value) => handleMaskedChange(value, "cep")}
              className={inputMaskStyle}
            />
          </div>

          {/* Tipo de Negócio */}
          <div className="space-y-2">
            <Label
              htmlFor="tipo-negocio"
              className="text-lg text-gray-500 font-sans"
            >
              Tipo de Negócio
            </Label>
            <Select
              onValueChange={handleSelectChange}
              value={formData.businessType}
            >
              <SelectTrigger
                id="tipo-negocio"
                className={
                  "text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground cursor-pointer"
                }
              >
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className={"cursor-pointer"} value="padaria">
                  Padaria
                </SelectItem>
                <SelectItem className={"cursor-pointer"} value="restaurante">
                  Restaurante
                </SelectItem>
                <SelectItem className={"cursor-pointer"} value="cafe">
                  Café
                </SelectItem>
                <SelectItem className={"cursor-pointer"} value="outro">
                  Outro
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Telefone */}
        <div className="col-span-2 space-y-2 w-1/4">
          <Label
            htmlFor="phone"
            className="text-lg text-gray-500 font-sans"
          >
            Telefone Principal
          </Label>
          <IMaskInput
            mask="(00) 00000-0000"
            id="phone"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onAccept={(value) => handleMaskedChange(value, "phone")}
            className={inputMaskStyle}
          />
        </div>
      </div>

      {/* Container dos Botões */}
      <div className="flex justify-end gap-x-8 w-full mt-4">
        {/* Botão Voltar */}
        <Button
          onClick={onPrev}
          variant="outline"
          className="w-2/7 mt-4 rounded-2xl h-12 text-lg bg-slate-200/20 border-none shadow-none text-zinc-500 items-center justify-center flex font-sans font-semibold hover:bg-slate-200/20 hover:text-indigo-600 cursor-pointer transition-all duration-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
        </Button>

        {/* Botão Concluir */}
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
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  // ESTADO CENTRAL PARA GUARDAR TODOS OS DADOS
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    businessType: "",
    cep: "",
    phone: "",
  });

  // A FUNÇÃO DE CADASTRO ATUALIZADA (com fetch)
  const handleCadastro = async () => {
    // Validação de campos vazios
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.businessName ||
      !formData.businessType ||
      !formData.cep ||
      !formData.phone
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    // (Aparar (trim) os campos antes de enviar)
    const finalFormData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      password: formData.password, // A senha já foi aparada no 'onChange'
      businessName: formData.businessName.trim(),
      businessType: formData.businessType,
      cep: formData.cep.replace(/\D/g, ''), // Envia só os números do CEP
      phone: formData.phone.replace(/\D/g, ''), // Envia só os números do Telefone
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData), 
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Erro ao cadastrar.");
        return;
      }

      console.log("Cadastro realizado!", data.user);
      navigate("/planos");
    } catch (error) {
      console.error("Erro de rede:", error);
      alert(
        "Não foi possível conectar ao servidor. Verifique se o backend está rodando."
      );
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Renderiza o formulário do passo atual, passando o estado */}
      <div className="mt-4">
        {currentStep === 0 && (
          <FormularioPasso1
            onNext={() => setCurrentStep(1)}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentStep === 1 && (
          <FormularioPasso2
            onPrev={() => setCurrentStep(0)}
            onComplete={handleCadastro}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
}