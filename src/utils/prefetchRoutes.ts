// Prefetch lazy route chunks on hover/focus to speed up navigation.
// Each entry returns the same dynamic import used in App.tsx so Vite
// reuses the chunk that React.lazy will eventually request.
const loaders: Record<string, () => Promise<unknown>> = {
  "/fundamentos": () => import("@/pages/FundamentosPage"),
  "/tokens": () => import("@/pages/TokensPage"),
  "/componentes": () => import("@/pages/ComponentesPage"),
  "/templates": () => import("@/pages/TemplatesPage"),
  "/marca": () => import("@/pages/MarcaPage"),
  "/conteudo": () => import("@/pages/ConteudoPage"),
  "/acessibilidade": () => import("@/pages/AcessibilidadePage"),
  "/templates/dashboard-institucional": () => import("@/pages/DashboardInstitucionalPage"),
  "/templates/dashboard-bi": () => import("@/pages/DashboardBIPage"),
  "/templates/tela-listagem": () => import("@/pages/TelaListagemPage"),
  "/templates/tela-formulario": () => import("@/pages/TelaFormularioPage"),
  "/templates/pagina-autenticacao": () => import("@/pages/PaginaAutenticacaoPage"),
  "/templates/cadastro": () => import("@/pages/CadastroPage"),
  "/templates/autenticacao-2fa": () => import("@/pages/TwoFactorPage"),
  "/templates/pagina-erro": () => import("@/pages/ErrorPageTemplate"),
  "/templates/farol-estrategico": () => import("@/pages/FarolEstrategicoPage"),
};

const prefetched = new Set<string>();
const PREFETCH_DELAY = 120; // ms — debounce rapid hover/focus events
let pendingTimer: ReturnType<typeof setTimeout> | null = null;
let pendingRoute: string | null = null;

function runPrefetch(route: string) {
  if (prefetched.has(route)) return;
  const loader = loaders[route];
  if (!loader) return;
  prefetched.add(route);
  loader().catch(() => prefetched.delete(route));
}

export function prefetchRoute(path: string) {
  if (!path) return;
  const route = path.split("#")[0];
  if (!route || prefetched.has(route)) return;
  if (!loaders[route]) return;
  // Debounce: only the last hovered route within the window actually fetches.
  if (pendingTimer) clearTimeout(pendingTimer);
  pendingRoute = route;
  pendingTimer = setTimeout(() => {
    pendingTimer = null;
    const r = pendingRoute;
    pendingRoute = null;
    if (r) runPrefetch(r);
  }, PREFETCH_DELAY);
}

export function cancelPendingPrefetch() {
  if (pendingTimer) {
    clearTimeout(pendingTimer);
    pendingTimer = null;
    pendingRoute = null;
  }
}