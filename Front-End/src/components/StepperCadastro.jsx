// Em: src/components/StepperCadastro.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Stepper } from "./ui/Stepper"; // Corrigi o caminho para ./ui/Stepper.jsx

const steps = ["Seu Perfil", "Seu Negócio"];

// --- Formulário do Passo 1 ---
function FormularioPasso1({ onNext, formData, setFormData }) {
  
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
  return (
    <div className="space-y-4 mt-6 w-4/5 h-full p-1">
      <div className="flex flex-col gap-4 w-full ">
        <div className="w-full flex gap-x-8">
          <div className="space-y-2 w-30/100">
            <Label htmlFor="firstName" className="text-lg text-gray-500 font-sans">Primeiro Nome</Label>
            <Input id="firstName" placeholder="Ana" value={formData.firstName} onChange={handleChange} className={" h-12 shadow-xl border-1 border-zinc-400/50 text-foreground text-lg"}/>
          </div>
          <div className="space-y-2 w-53/100">
            <Label htmlFor="lastName" className="text-lg text-gray-500 font-sans">Sobrenome</Label>
            <Input id="lastName" placeholder="Silva Costa" value={formData.lastName} onChange={handleChange} className={" h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
          </div>
        </div>
      </div>
      <div className="space-y-2 w-3/5">
        <Label htmlFor="email" className="text-lg text-gray-500 font-sans">Email</Label>
        <Input id="email" type="email" placeholder="pedro@padaria.com" value={formData.email} onChange={handleChange} className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
      </div>
      <div className="space-y-2 w-3/5">
        <Label htmlFor="password" className="text-lg text-gray-500 font-sans">Senha</Label>
        <Input id="password" type="password" value={formData.password} onChange={handleChange} className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
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

// --- Formulário do Passo 2 ---
function FormularioPasso2({ onPrev, onComplete, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, businessType: value }));
  };

  return (
    <div className="space-y-4 mt-6 w-4/5 h-full p-1">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        
        <div className="col-span-2 space-y-2">
          <Label htmlFor="businessName" className="text-lg text-gray-500 font-sans">Nome do Negócio</Label>
          <Input id="businessName" placeholder="Padaria do Pedro" value={formData.businessName} onChange={handleChange} className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessType" className="text-lg text-gray-500 font-sans">Tipo de Negócio</Label>
          <Select onValueChange={handleSelectChange} value={formData.businessType}>
            <SelectTrigger id="businessType" className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="padaria">Padaria</SelectItem>
              <SelectItem value="restaurante">Restaurante</SelectItem>
              <SelectItem value="cafe">Café</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent> {/* <-- AQUI ESTÁ A CORREÇÃO */}
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cep" className="text-lg text-gray-500 font-sans">CEP</Label>
          <Input id="cep" placeholder="00000-000" value={formData.cep} onChange={handleChange} className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
        </div>

        <div className="col-span-2 space-y-2">
          <Label htmlFor="phone" className="text-lg text-gray-500 font-sans">Telefone Principal</Label>
          <Input id="phone" placeholder="(11) 99999-9999" value={formData.phone} onChange={handleChange} className={"text-lg h-12 shadow-xl border-1 border-zinc-400/50 text-foreground"}/>
        </div>

      </div>

      <div className="flex justify-between w-full mt-4">
        <Button 
          onClick={onPrev} 
          variant="outline" 
          className="w-2/7 mt-4 rounded-2xl h-12 text-lg border-2 border-zinc-400 text-zinc-400 items-center justify-center flex font-sans font-semibold hover:bg-zinc-700 hover:text-white transition-all duration-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
        </Button>
        
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
    phone: ""
  });

  // A FUNÇÃO DE CADASTRO ATUALIZADA (com fetch)
  const handleCadastro = async () => {
    try {
      // 1. Envia os dados para a URL do seu backend
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Erro ao cadastrar.');
        return;
      }

      // Sucesso!
      console.log('Cadastro realizado!', data.user);
      navigate("/planos"); 

    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Não foi possível conectar ao servidor. Verifique se o backend está rodando.');
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