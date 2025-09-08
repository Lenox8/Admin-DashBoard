import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CircleDollarSign } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

const Sales = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl">
            <h1 className="text-lg ml-1.5 select-none sm:text-xl text-gray-800">
              Ultimos clientes
            </h1>
          </CardTitle>
          <CircleDollarSign className="ml-auto w-5 h-5" />
        </div>
        <CardDescription>Novos clientes nas ultimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 py-2 border-b">
          <Avatar className="w-8 h-8">
            <AvatarImage src={"https://avatars.githubusercontent.com/u/168176002?v=4"} className="w-8 h-8 rounded-full "/>
            <AvatarFallback>LX</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base sm:text-base font-semibold">Carl Johnson</p>
            <span className="text-[12px] text-gray-400 sm:text-sm mt-0.5">info@gmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 py-2 border-b">
          <Avatar className="w-8 h-8">
            <AvatarImage src={"https://github.com/evilrabbit.png"} className="w-8 h-8 rounded-full "/>
            <AvatarFallback>LX</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base sm:text-base font-semibold">Carl Johnson</p>
            <span className="text-[12px] text-gray-400 sm:text-sm mt-0.5">info@gmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 py-2 border-b">
          <Avatar className="w-8 h-8">
            <AvatarImage src={"https://github.com/shadcn.png"} className="w-8 h-8 rounded-full "/>
            <AvatarFallback>LX</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base sm:text-base font-semibold">Ryder Johnson</p>
            <span className="text-[12px] text-gray-400 sm:text-sm mt-0.5">info@gmail.com</span>
          </div>
        </article>

      </CardContent>
    </Card>
  );
};

export default Sales;
