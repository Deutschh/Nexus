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

export function Login() {
  return (
    // Container da página inteira
    <div className="w-full h-screen flex justify-between">


      {/* Container das Abas (z-10 para ficar sobre o fundo) */}
      <Tabs defaultValue="login" className="bg-slate-200/20 w-60/100 pr-16">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Entrar</TabsTrigger>
          <TabsTrigger value="cadastro">Cadastrar</TabsTrigger>
        </TabsList>
        
        {/* --- ABA DE LOGIN --- */}
        <TabsContent value="login">
          <Card className="bg-foreground/80 backdrop-blur-sm border-zinc-700 text-white">
            <CardHeader>
              <CardTitle>Bem-vindo de volta!</CardTitle>
              <CardDescription className="text-gray-400">
                Entre na sua conta para gerenciar seu negócio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-login">Email</Label>
                <Input id="email-login" type="email" placeholder="pedro@padaria.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-login">Senha</Label>
                <Input id="password-login" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Entrar</Button>
              <Button variant="link" size="sm" className="text-indigo-300">
                Esqueceu sua senha?
              </Button>
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