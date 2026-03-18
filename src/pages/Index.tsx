import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Clock, Folder, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const recentActivity = [
  {
    id: 1,
    name: 'Revisão de Design System',
    status: 'Em Progresso',
    date: 'Hoje, 14:30',
    type: 'Projeto',
  },
  {
    id: 2,
    name: 'Atualizar documentação da API',
    status: 'Concluído',
    date: 'Ontem, 09:15',
    type: 'Tarefa',
  },
  {
    id: 3,
    name: 'Reunião de Alinhamento Q3',
    status: 'Pendente',
    date: '12 Mar, 10:00',
    type: 'Evento',
  },
  {
    id: 4,
    name: 'Corrigir bug na tela de login',
    status: 'Concluído',
    date: '10 Mar, 16:45',
    type: 'Tarefa',
  },
]

export default function Index() {
  const currentDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Bem-vindo de volta! 👋
        </h1>
        <p className="text-muted-foreground capitalize">{currentDate}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tarefas Pendentes</CardTitle>
            <CheckSquareIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500 font-medium">+2%</span> em relação à semana passada
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
            <Folder className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <span className="text-muted-foreground">Estável</span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Gasto</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34h</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDownRight className="mr-1 h-3 w-3 text-rose-500" />
              <span className="text-rose-500 font-medium">-4h</span> em relação à semana passada
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Atividade Recente</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Suas últimas interações no workspace.
              </p>
            </div>
            <Button size="sm" variant="outline" className="active:scale-95 transition-transform">
              Ver todas
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === 'Concluído'
                            ? 'default'
                            : item.status === 'Em Progresso'
                              ? 'secondary'
                              : 'outline'
                        }
                        className={
                          item.status === 'Concluído'
                            ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                            : ''
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.date}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="active:scale-95">
                        Abrir
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-1 shadow-sm flex flex-col justify-center items-center text-center p-6 border-dashed border-2">
          <div className="mb-4 bg-muted rounded-full p-4">
            <img
              src="https://img.usecurling.com/p/200/200?q=desk%20illustration&color=gray&shape=hand-drawn"
              alt="Empty state illustration"
              className="w-24 h-24 object-cover mix-blend-multiply opacity-80 dark:mix-blend-screen"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Nenhum relatório novo</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Você está em dia com todas as suas pendências. Crie um novo item para começar.
          </p>
          <Button className="active:scale-95 transition-transform w-full">
            <Plus className="mr-2 h-4 w-4" /> Adicionar novo item
          </Button>
        </Card>
      </div>
    </div>
  )
}

function CheckSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}
