// Marca oficial CISEC — fonte única para uso em toda a aplicação.
// Fontes: Manual de Marca CISEC (Escola de Saúde Pública do Ceará), v4/2026.
import cor from "./marca/cisec-cor.svg.asset.json";
import white from "./marca/cisec-white.svg.asset.json";
import black from "./marca/cisec-black.svg.asset.json";
import horizontalCor from "./marca/cisec-horizontal-cor.png.asset.json";
import horizontalWhite from "./marca/cisec-horizontal-white.png.asset.json";
import completaCor from "./marca/cisec-completa-cor.png.asset.json";
import completaLinhaCor from "./marca/cisec-completa-linha-cor.png.asset.json";
import simboloLaranja from "./marca/cisec-simbolo-laranja.png.asset.json";
import simboloPreto from "./marca/cisec-simbolo-preto.png.asset.json";
import simboloBranco from "./marca/cisec-simbolo-branco.png.asset.json";

// Aliases legados (mantidos para compatibilidade com imports existentes)
export const cisecCor: string = horizontalCor.url;
export const cisecWhite: string = horizontalWhite.url;
export const cisecBlack: string = cor.url;

// Marca horizontal (assinatura principal)
export const cisecHorizontalCor: string = horizontalCor.url;
export const cisecHorizontalWhite: string = horizontalWhite.url;

// Versões compostas com nome institucional
export const cisecCompletaCor: string = completaCor.url;
export const cisecCompletaLinhaCor: string = completaLinhaCor.url;

// Símbolos isolados
export const cisecSimboloLaranja: string = simboloLaranja.url;
export const cisecSimboloPreto: string = simboloPreto.url;
export const cisecSimboloBranco: string = simboloBranco.url;

// Legado SVG (mantido para uso alternativo)
export const cisecCorSvg: string = cor.url;
export const cisecWhiteSvg: string = white.url;
export const cisecBlackSvg: string = black.url;