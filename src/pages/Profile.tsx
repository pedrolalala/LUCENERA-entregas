import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Mail, Calendar, Edit3, Github, Twitter } from 'lucide-react'

export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div className="relative rounded-xl overflow-hidden h-48 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        {/* Cover Photo Placeholder */}
        <img
          src="https://img.usecurling.com/p/1200/400?q=abstract%20gradient&color=blue"
          alt="Cover"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
      </div>

      <div className="px-4 sm:px-6 -mt-20 flex flex-col sm:flex-row gap-6 items-start sm:items-end relative z-10">
        <Avatar className="w-32 h-32 border-4 border-background shadow-md">
          <AvatarImage
            src="https://img.usecurling.com/ppl/large?gender=female&seed=1"
            alt="Ana Silva"
          />
          <AvatarFallback className="text-4xl">AS</AvatarFallback>
        </Avatar>

        <div className="flex-1 pb-2">
          <h1 className="text-3xl font-bold">Ana Silva</h1>
          <p className="text-muted-foreground font-medium flex items-center gap-2 mt-1">
            Desenvolvedora Front-end Pleno
            <Badge variant="secondary" className="font-normal">
              Frontend Team
            </Badge>
          </p>
        </div>

        <div className="flex gap-3 pb-2 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none active:scale-95">
            <Edit3 className="w-4 h-4 mr-2" /> Editar Perfil
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Sobre</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Desenvolvedora Front-end apaixonada por criar interfaces de usuário incríveis e
                experiências fluidas. Especialista em React e ecossistema JavaScript.
              </p>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3" /> São Paulo, Brasil
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-3" /> ana@exemplo.com.br
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-3" /> Membro desde Jan 2024
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Habilidades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Figma', 'UI/UX'].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Estatísticas Pessoais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="space-y-1 p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold">142</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Tarefas
                  </p>
                </div>
                <div className="space-y-1 p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Projetos
                  </p>
                </div>
                <div className="space-y-1 p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold">89%</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Entrega
                  </p>
                </div>
                <div className="space-y-1 p-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Avaliação
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-dashed">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <img
                src="https://img.usecurling.com/i?q=activity&color=gray&shape=outline"
                alt="No activity"
                className="w-16 h-16 mb-4 opacity-50"
              />
              <h3 className="font-semibold text-lg">Histórico de Contribuições</h3>
              <p className="text-muted-foreground text-sm max-w-sm mt-1">
                O gráfico detalhado de contribuições estará disponível na próxima atualização do
                sistema.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
