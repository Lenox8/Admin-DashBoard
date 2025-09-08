import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Box,
  Home,
  LogOut,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import { TooltipProvider, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
const Sidebar = () => {
  return (
    <>
      <div className="flex w-full flex-col bg:muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
          <nav className="flex flex-col items-center gap-4 px-2 py-2">
            <TooltipProvider>
              <Link
                href="#"
                className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary rounded-full text-primary-foreground"
              >
                <Package className="W-4 h-4" />
                <span className="sr-only">Dashboard Avatar</span>
              </Link>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Home className="W-7 h-7 mt-5" />
                    <span className="sr-only">Inicio</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Inicio</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ShoppingBag className="W-7 h-7 mt-5" />
                    <span className="sr-only">Pedidos</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Pedidos</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/clientes"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Users className="W-7 h-7 mt-5" />
                    <span className="sr-only">Clientes</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Clientes</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Box className="W-7 h-7 mt-5" />
                    <span className="sr-only">Produtos</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Produtos</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors "
                  >
                    <Settings2 className="W-7 h-7 mt-4" />
                    <span className="sr-only">Definições</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Definições</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>

          <nav className="mt-auto flex flex-col items-center justify-center gap-4 px-2 py-5">
            <TooltipProvider>
               <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors "
                  >
                    <LogOut className="W-7 h-7 text-red-500" />
                    <span className="sr-only">Sair</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Sair</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>

        <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="mt-2 mb-3 sm:hidden"
                  size="icon"
                  variant="outline"
                >
                  <PanelBottom className="w-5 h-5" />
                  <span className="sr-only">Abrir / fechar menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="sm:max-w-xs" side="left">
                <SheetHeader>
                  <SheetTitle><h1 className="text-lg sm:text-xl ">Menu</h1></SheetTitle>
                </SheetHeader>
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href=""
                    className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2 ml-2"
                    prefetch={false}
                  >
                    <Package className="h-5 w-5 transition-all " />
                    <span className="sr-only">Logo do Projecto</span>
                  </Link>

                  <Link
                    href=""
                    className="flex items-center gap-4 px-2.5 text-lg font-medium text-muted-foreground hover:text-foreground  p-2.5"
                    prefetch={false}
                  >
                    <Home className="h-5 w-5 transition-all" />
                    Inicio
                  </Link>

                  <Link
                    href="/pedidos"
                    className="flex items-center gap-4 px-2.5 text-lg font-medium text-muted-foreground hover:text-foreground  p-2.5"
                    prefetch={false}
                  >
                    <ShoppingBag className="h-5 w-5 transition-all" />
                    Pedidos
                  </Link>

                  <Link
                    href="/clientes"
                    className="flex items-center gap-4 px-2.5 text-lg font-medium text-muted-foreground hover:text-foreground  p-2.5"
                    prefetch={false}
                  >
                    <Users className="h-5 w-5 transition-all" />
                    Clientes
                  </Link>

                  <Link
                    href="/produtos"
                    className="flex items-center gap-4 px-2.5 text-lg font-medium text-muted-foreground hover:text-foreground  p-2.5"
                    prefetch={false}
                  >
                    <Box className="h-5 w-5 transition-all" />
                    Produtos
                  </Link>

                  <Link
                    href=""
                    className="flex items-center gap-4 px-2.5 text-lg font-medium text-muted-foreground hover:text-foreground p-2.5"
                    prefetch={false}
                  >
                    <Settings2 className="h-5 w-5 transition-all" />
                    Definições
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <h2>Menu</h2>
          </header>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
