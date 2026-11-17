// Camada de dados do Portal — agora um módulo (export/import).
// Na aula anterior isto era um script comum; mudou só o "export".

export const REDACOES = [
  { id: 1, tema: "Meio ambiente",       status: "corrigida",   nota: 920 },
  { id: 2, tema: "Tecnologia",          status: "em_correcao" },
  { id: 3, tema: "Educação",            status: "corrigida",   nota: 680 },
  { id: 4, tema: "Cidadania",           status: "corrigida",   nota: 800 },
  { id: 5, tema: "Saúde pública",       status: "em_correcao" },
  { id: 6, tema: "Trabalho e emprego",  status: "corrigida",   nota: 740 },
  { id: 7, tema: "Cultura digital",     status: "em_correcao" },
];

export function filtrarCorrigidas(lista) {
  return lista.filter(r => r.status === "corrigida");
}

export function extrairNotas(lista) {
  return lista.map(r => r.nota);
}

export function calcularMedia(lista) {
  const notas = extrairNotas(filtrarCorrigidas(lista));
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

export function redacaoDestaque(lista) {
  return lista.find(r => r.nota >= 900);
}
