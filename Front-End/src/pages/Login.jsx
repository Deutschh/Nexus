// Em: src/pages/Login.jsx

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Iridescence from "../components/Iridescence.jsx"; // Fundo animado
import { CadastroWizard } from "../components/CadastroWizard.jsx"; // Nosso wizard!
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox.jsx";

export function Login() {
  return (
    // Container da página inteira
    <div className="w-full h-screen flex justify-between bg-slate-200 relative ">
      <Link to="/Home">
        <div className="text-4xl p-4 font-display text-foreground absolute">
          ZenFlow
        </div>
      </Link>
      {/* Container das Abas (z-10 para ficar sobre o fundo) */}
      <Tabs
        defaultValue="login"
        className="bg-slate-200/20 w-60/100 pr-16 pl-12 flex my-auto bg-paink-400 flex-col h-2/3"
      >
        <TabsList className="w-2/5 bg-raed-400 h-1/13">
          <TabsTrigger
            className={
              "font-sans text-lg text-gray-500 font-semibold shadow-black/30 drop-shadow-black hover:bg-slate-300/70 transition-all duration-700 cursor-pointer"
            }
            value="login"
          >
            Entrar
          </TabsTrigger>
          <TabsTrigger
            className={
              "font-sans text-lg text-gray-500 font-semibold shadow-black/30 drop-shadow-black hover:bg-slate-300/70 transition-all duration-700 ml-2 cursor-pointer"
            }
            value="cadastro"
          >
            Cadastrar
          </TabsTrigger>
        </TabsList>

        {/* --- ABA DE LOGIN --- */}
        <TabsContent value="login">
          <Card className="bg-slate-200/20 h-11/12 text-foreground font-sans border-none shadow-none pl-3">
            <CardHeader>
              <CardTitle className={"text-2xl text-foreground"}>
                Bem-vindo de volta!
              </CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Faça Login para acessar o Dashboard e muito mais.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email-login"
                  className="text-lg text-gray-500 font-sans"
                >
                  Email
                </Label>
                <Input
                  id="email-login"
                  type="email"
                  className={"w-1/2 h-12 shadow-xl border-1 border-zinc-400/50"}
                  placeholder="padariadaAna@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password-login"
                  className="text-lg text-gray-500 font-sans"
                >
                  Senha
                </Label>
                <Input
                  id="password-login"
                  className={"w-1/2 h-12 shadow-xl border-1 border-zinc-400/50"}
                  type="password"
                />
              </div>
            </CardContent>
            <div className="text-gray-500 font-semibold w-1/2 bg-reda-600 pl-16 text-lg mt-2   flex">
              <Checkbox className={"border-gray-500 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600 mr-2 w-5 h-5 mt-1"} /> Mantenha-me conectado
            </div>
            <CardFooter className="flex flex-col gap-3 w-1/2 mt-2 ">
              <Button
                className="w-2/5 rounded-2xl h-12 text-lg bg-indigo-600 border-2 border-indigo-600 text-white items-center justify-center flex font-sans font-semibold hover:bg-inherit
             hover:text-indigo-700 hover:border-indtext-indigo-700 cursor-pointer transition-all duration-700"
              >
                Entrar
              </Button>
              <Button
                variant="link"
                size="sm"
                className="text-gray-400 decoration-none cursor-pointer"
              >
                Esqueceu sua senha?
              </Button>
              <div className="flex bg-read-400 w-2/3 h-8 justify-between mt-2">
                <div className="w-41/100 bg-zinc-400/50 h-0.5 my-auto"></div>
                <div className="text-xl w-1/12 my-auto font-sans mb-2 text-gray-600 font-semibold">
                  ou
                </div>
                <div className="w-41/100 bg-zinc-400/50 h-0.5 my-auto"></div>
              </div>
              <div className="w-2/3 mt-1 h-12 border border-zinc-400 flex items-center justify-center hover:bg-zinc-500/25 transition-all duration-500 cursor-pointer">
                Fazer login com Google
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* --- ABA DE CADASTRO --- */}
        <TabsContent value="cadastro">
          <Card className="bg-foreground/80 backdrop-blur-sm border-zinc-700 text-white">
            <CardHeader>
              <CardTitle>Crie sua conta</CardTitle>
              <CardDescription className="text-gray-400">
                Siga os passos para começar a usar o ZenFlow.
              </CardDescription>
            </CardHeader>
            <CardContent className="min-h-[350px]">
              {/* O WIZARD ENTRA AQUI! */}
              <CadastroWizard />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {/* Fundo Animado (igual ao da Home) */}
      <div className="w-40/100 inset-0 z-0 shadow-[0px_0px_30px_rgba(0,0,0,1)]">
        <Iridescence
          color={[0.5, 0.6, 0.8]}
          mouseReact={true}
          amplitude={0.05}
          speed={0.8}
        />
      </div>
    </div>
  );
}
