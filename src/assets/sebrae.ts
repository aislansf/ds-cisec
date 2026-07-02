// Marca oficial SEBRAE-CE — fonte única para uso em toda a aplicação.
// Usa pointers .asset.json (CDN) das versões oficiais (cor, branco, preto).
import cor from "./marca/sebrae-cor.svg.asset.json";
import white from "./marca/sebrae-white.svg.asset.json";
import black from "./marca/sebrae-black.svg.asset.json";

export const sebraeCor: string = cor.url;
export const sebraeWhite: string = white.url;
export const sebraeBlack: string = black.url;