// Em: src/components/ui/password-input.jsx

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input"; // Importa seu input normal
import { cn } from "@/lib/utils"; // Importa o utilitário do shadcn

// Este é um novo componente de Input que tem o "olho"
const PasswordInput = React.forwardRef(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)} // Adiciona padding à direita
        ref={ref}
        {...props}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 flex items-center justify-center h-full w-10 text-gray-500 hover:text-indigo-500 transition-all duration-500 cursor-pointer"
        aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
      >
        {showPassword ? (
          <EyeOff className="w-5 h-5" />
        ) : (
          <Eye className="w-5 h-5" />
        )}
      </button>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };