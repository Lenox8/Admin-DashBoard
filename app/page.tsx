import ChartOverView from "@/components/chart/ChartOverView";
import Sales from "@/components/sales/Sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, UsersRound } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="sm:ml-15 p-4">
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total de vendas
                </CardTitle>
                <DollarSign className="ml-auto w-4 h-4" />
              </div>

              <CardDescription>
                Total de vendas em 90 dias
              </CardDescription>

              <CardContent className="text-base sm:text-lg font-bold">
                <p>R$ 40.0000</p>
              </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Novos Clientes
                </CardTitle>
                <UsersRound className="ml-auto w-4 h-4" />
              </div>

              <CardDescription>
                Novos  Clientes em 90 dias
              </CardDescription>

              <CardContent className="text-base sm:text-lg font-bold">
                <p>233</p>
              </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Pedidos Hoje
                </CardTitle>
                <Percent className="ml-auto w-4 h-4" />
              </div>

              <CardDescription>
               Total de pedidos hoje
              </CardDescription>

              <CardContent className="text-base sm:text-lg font-bold">
                <p>56</p>
              </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total de Pedidos
                </CardTitle>
                <BadgeDollarSign className="ml-auto w-4 h-4" />
              </div>

              <CardDescription>
               Total de pedidos em 30dias
              </CardDescription>

              <CardContent className="text-base sm:text-lg font-bold">
                <p>1205</p>
              </CardContent>
            </CardHeader>
          </Card>
        </section>

        <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverView />
          <Sales />
        </section>

      </main>
    </>
  );
}
