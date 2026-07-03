// Marca oficial CISEC-CE — fonte única para uso em toda a aplicação.
// Usa pointers .asset.json (CDN) das versões oficiais (cor, branco, preto).
import cor from "./marca/cisec-cor.svg.asset.json";
import white from "./marca/cisec-white.svg.asset.json";
import black from "./marca/cisec-black.svg.asset.json";

export const cisecCor: string = cor.url;
export const cisecWhite: string = white.url;
export const cisecBlack: string = black.url;