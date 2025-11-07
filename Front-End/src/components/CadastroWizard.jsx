// Em: src/components/CadastroWizard.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Variantes da animação de slide
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export function CadastroWizard() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  const handleNextStep = () => {
    setDirection(1);
    setStep(2);
  };

  const handlePrevStep = () => {
    setDirection(-1);
    setStep(1);
  };

  const handleCadastro = () => {
    console.log("Formulário completo enviado!");
    navigate("/planos");
  };

  return (
    <div className="flex flex-col h-full">
      {/* 1. Barra de Progresso */}
      <div className="w-full bg-zinc-700 rounded-full h-2 mb-6">
        <motion.div
          className="bg-indigo-600 h-2 rounded-full"
          animate={{ width: step === 1 ? "50%" : "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* 2. Container dos Passos (COM A CORREÇÃO) */}
      <div className="relative flex-grow overflow-hidden min-h-[300px]">
        <AnimatePresence initial={false} custom={direction}>
          {step === 1 && (
            <motion.div
              key={1}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}
              className="absolute w-full"
            >
              {/* --- PASSO 1: CONTEÚDO --- */}
              <h3 className="text-lg font-semibold text-white mb-4">Passo 1: Crie sua Conta</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Primeiro Nome</Label>
                  <Input id="nome" placeholder="Pedro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sobrenome">Sobrenome</Label>
                  <Input id="sobrenome" placeholder="Silva" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="pedro@padaria.com" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="senha">Senha</Label>
                  <Input id="senha" type="password" />
                </div>
              </div>
              <Button onClick={handleNextStep} className="w-full mt-6">
                Continuar <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key={2}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}
              className="absolute w-full"
            >
              {/* --- PASSO 2: CONTEÚDO --- */}
              <h3 className="text-lg font-semibold text-white mb-4">Passo 2: Fale sobre seu Negócio</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="nome-negocio">Nome do Negócio</Label>
                  <Input id="nome-negocio" placeholder="Padaria do Pedro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tipo-negocio">Tipo de Negócio</Label>
                  <Select>
                    <SelectTrigger id="tipo-negocio">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="padaria">Padaria</SelectItem>
                      <SelectItem value="restaurante">Restaurante</SelectItem>
                      <SelectItem value="cafe">Café</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>
                 <div className="col-span-2 space-y-2">
                  <Label htmlFor="telefone">Telefone Principal</Label>
                  <Input id="telefone" placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div className="flex gap-4 w-full mt-6">
                <Button onClick={handlePrevStep} variant="outline" className="w-1/3">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
                </Button>
                <Button onClick={handleCadastro} className="w-2/3">
                  Concluir Cadastro
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}