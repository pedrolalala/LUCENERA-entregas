import { useLocation, Link } from 'react-router-dom'
import { Search, Bell, Sun, Moon } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useTheme } from '@/components/theme-provider'

const routeNames: Record<string, string> = {
  '/': 'Dashboard',
  '/settings': 'Configurações',
  '/profile': 'Perfil',
}

export function AppHeader() {
  const location = useLocation()
  const currentPathName = routeNames[location.pathname] || 'Página'
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-md sm:px-6">
      <SidebarTrigger className="shrink-0" />

      <div className="flex flex-1 items-center gap-4 md:gap-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {location.pathname !== '/' && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentPathName}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="w-full flex-1 md:w-auto md:flex-none md:ml-auto max-w-sm relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar em todo o workspace..."
            className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[340px] focus-visible:ring-primary"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="active:scale-95 transition-transform"
            onClick={toggleTheme}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Alternar tema</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative active:scale-95 transition-transform"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-destructive"></span>
            <span className="sr-only">Notificações</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
