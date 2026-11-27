# Estrutura, Copy & Direção de Animações — Landing Page GasCryo

## 1. Direção Visual & Arquitetura

- **Objetivo da Página (Modo Persuade B2B):** Converter decisores técnicos (gerentes de manutenção, compradores industriais, distribuidoras de gases e transportadoras criogênicas de todo o Brasil) em pedidos de **orçamento técnico via WhatsApp ou formulário**.
- **Identidade Visual:**
  - **Fundo Principal (Cryo Navy):** `#061022` | Superfícies elevadas `#0B1A33` | Profundo `#040B18`
  - **Fundo Editorial Alternado (Industrial Alloy):** `#F3F6FA` com tinta `#08162E` (cria contraste rítmico e leitura técnica confortável sem virar página genérica toda escura)
  - **Azul Industrial:** `#0E4FA8`
  - **Dourado / Âmbar Precisão (Acento da marca):** `#E5A910` (botões principais, linhas de progresso e detalhes da logo hexagonal)
  - **Tipografia:** `Archivo` (display e títulos técnicos, peso 700–800) + `Manrope` (corpo limpo e legível) + `JetBrains Mono` (exclusivamente para grandezas técnicas reais como `-196 °C`, `ONU 1951`, `CNPJ`).
- **Deploy:** 100% estático via Vite + React + TypeScript (`npm run build` → pasta `dist/`), pronto para **Cloudflare Pages** com zero configuração de servidor.

---

## 2. Mapa de Animações Sofisticadas (Motion + Hub de Animações + Lenis)

1. **Rolagem suave com Lenis (`lenis`)**: Deslizamento macio no mouse e navegação suave pelos links de âncora.
2. **Barra de progresso de leitura**: Linha dourada fina no topo conectada ao `useScroll` + `useSpring` do Motion.
3. **Header inteligente**: Some ao rolar para baixo (mais área útil) e reaparece com fundo translúcido ao subir.
4. **Título que sobe linha por linha (máscara editorial)**: Entrada coreografada das linhas do H1 no Hero com curva exponencial.
5. **Foto que revela com `clip-path` + leve zoom-out**: Abertura arquitetônica da fotografia principal do tanque criogênico.
6. **Abas de soluções com pílula deslizante (`layoutId`)**: Troca suave entre os 4 pilares técnicos (Tanques, Reformas, Aquecedor de CO₂ e Manutenção) com transição animada de imagem e ficha técnica.
7. **Slider interativo Antes e Depois**: Comparação arrastável (mouse, toque e setas do teclado) da **Reforma de Cabine Criogênica**.
8. **Spotlight que segue o mouse**: Reflexo metálico sutil acompanhando o cursor sobre superfícies escuras.
9. **Linha do tempo que se desenha na rolagem**: Trilha vertical dourada que preenche o processo técnico de 5 etapas conforme o visitante rola a página.
10. **Botão magnético + texto que rola no hover**: CTA principal com micro-atração física ao ponteiro e rolagem vertical do rótulo.
11. **Acordeão de FAQ animado**: Abertura/fechamento em física de mola com rotação do sinal `+` para `×`.
12. **Botão flutuante do WhatsApp com pulso e balão**: Aparece discretamente com balão "Solicitar orçamento técnico" após alguns segundos.
13. **Acessibilidade**: Respeita `prefers-reduced-motion` em todo o site.

---

## 3. Estrutura Seção por Seção & Copy Completa

### Seção 1 — Navegação (Header)
- **Logo:** Hexágono dourado concêntrico + `GASCRYO` (`equipamentos industriais criogênicos`)
- **Links:** `Soluções` · `Antes e Depois` · `Processo` · `Gases` · `Dúvidas`
- **CTA Header:** `Orçamento Técnico`

### Seção 2 — Hero
- **H1:** `Engenharia criogênica sob medida para a indústria brasileira.`
- **Subtítulo:** `Fabricação, reforma completa e manutenção especializada de tanques criogênicos estacionários, rodoviários e aquecedores de CO₂. Rigor técnico em cada solda, com atendimento em todo o Brasil.`
- **CTA Primário (Magnético):** `Solicitar orçamento técnico`
- **CTA Secundário:** `Ver reforma antes e depois`
- **Faixa de especificações verificadas (base do hero):**
  - `Atuação`: Todo o Brasil (base em Jarinu/SP)
  - `Gases`: O₂ · N₂ · Argônio · CO₂
  - `Controle`: 100% testado contra microvazamento

### Seção 3 — Soluções & Equipamentos (Abas Interativas)
- **H2:** `Fabricação, reforma e manutenção no mesmo padrão de segurança.`
- **Subtítulo:** `Cada projeto é executado conforme as especificações operacionais da sua planta ou frota.`
- **Aba 1 — Tanques Estacionários e Rodoviários:**
  - Projetos sob medida para armazenagem e transporte seguro de gases liquefeitos em temperaturas extremamente baixas.
  - Escopo: Fabricação de tanques estacionários e rodoviários; cabines, carrocerias e estruturas metálicas; tubulações e adequação operacional; fornecimento de peças e componentes industriais.
- **Aba 2 — Reforma Completa de Tanques:**
  - Recuperação integral da estrutura, do isolamento térmico e do acabamento industrial para prolongar a vida útil do ativo.
  - Escopo: Reforma estrutural completa; isolamento térmico em poliuretano e alumínio; pintura industrial de alta resistência e durabilidade; inspeção técnica e controle rigoroso de qualidade.
- **Aba 3 — Aquecedor de CO₂ em Aço Inox:**
  - Equipamento fabricado sob medida conforme especificações técnicas de vazão e processo de cada cliente.
  - Escopo: Fabricação sob medida em aço inox; serpentina interna dimensionada para o processo; acabamento industrial de alta durabilidade; segurança e confiabilidade operacional contínua.
- **Aba 4 — Manutenção e Testes de Segurança:**
  - Intervenções preventivas e corretivas conduzidas por equipe especializada em caldeiraria e soldagem criogênica.
  - Escopo: Manutenção preventiva e corretiva; teste de microvazamento de alta precisão; soldagem industrial TIG e MIG/MAG em aço inox e ligas; inspeção técnica especializada e liberação segura.

### Seção 4 — Prova Visual: Reforma de Cabine Criogênica (Slider Antes & Depois)
- **H2:** `Reforma de cabine criogênica na prática.`
- **Texto:** `Arraste o comparador para observar a recuperação estrutural, tubulações, válvulas, instrumentação e pintura técnica de uma cabine criogênica restaurada para operação de alta exigência.`
- **Etiquetas no slider:** `Antes da reforma` / `Depois da GasCryo`
- **Itens executados na reforma:**
  - Reforma estrutural e substituição de componentes desgastados
  - Recuperação térmica e vedação de linhas criogênicas
  - Pintura técnica industrial resistente à condensação e intempéries
  - Teste de microvazamento e validação completa antes da entrega

### Seção 5 — Processo Técnico (Linha do Tempo Desenhada no Scroll)
- **H2:** `Cinco etapas entre a inspeção inicial e o equipamento liberado.`
- **Etapa 01 — Avaliação e Diagnóstico Técnico:** Análise detalhada da integridade estrutural, isolamento térmico, tubulações e especificações do projeto.
- **Etapa 02 — Caldeiraria e Soldagem Especializada:** Execução estrutural e soldagem TIG e MIG/MAG em aço inox e ligas industriais com precisão dimensional.
- **Etapa 03 — Isolamento e Recuperação Térmica:** Aplicação e recomposição de isolamento térmico em poliuretano e revestimento em alumínio para mínima perda evaporativa.
- **Etapa 04 — Teste de Microvazamento e Inspeção:** Verificação rigorosa de estanqueidade e segurança operacional — 100% dos equipamentos testados antes do acabamento final.
- **Etapa 05 — Pintura Industrial e Entrega Nacional:** Pintura técnica de alta resistência, inspeção final e coordenação de entrega para operações em todo o Brasil.

### Seção 6 — Gases Atendidos & Abrangência Nacional
- **H2:** `Equipamentos preparados para temperaturas extremas e atendimento em todo o país.`
- **Tabela Técnica de Gases:**
  - `O₂` Oxigênio Líquido (`-183 °C`) — Aplicações industriais, siderúrgicas, corte térmico e gases especiais.
  - `N₂` Nitrogênio Líquido (`-196 °C`) — Inertização, resfriamento industrial, conservação e indústria alimentícia.
  - `Ar` Argônio Líquido (`-186 °C · ONU 1951`) — Soldagem de alta pureza, metalurgia e processos químicos.
  - `CO₂` Dióxido de Carbono (`-78,5 °C` / liquefeito sob pressão) — Aquecedores de CO₂ em aço inox sob medida, bebidas e processos industriais.
- **Bloco Logístico:** Base operacional em **Jarinu/SP** (eixo estratégico da Região Metropolitana de Jundiaí) com logística e suporte técnico preparados para atender indústrias, distribuidoras de gases e transportadoras em **todo o território nacional**.

### Seção 7 — Dúvidas Frequentes (FAQ Acordeão)
1. **A GasCryo atende empresas fora de São Paulo?** Sim. Nossa base industrial fica em Jarinu/SP, em localização estratégica próxima a Jundiaí e às principais rodovias paulistas, mas fabricamos, reformamos e prestamos suporte técnico para clientes em todo o Brasil.
2. **Vocês trabalham tanto com tanques estacionários quanto rodoviários?** Sim. Executamos fabricação sob medida, reforma completa, manutenção preventiva/corretiva e reforma de cabines tanto para tanques estacionários quanto para caminhões e carretas criogênicas.
3. **O Aquecedor de CO₂ pode ser fabricado conforme nosso projeto?** Sim. Cada Aquecedor de CO₂ em aço inox é fabricado sob medida de acordo com as especificações operacionais e dimensões necessárias para o processo do cliente.
4. **Quais testes são realizados antes da entrega de um tanque reformado?** Todo equipamento passa por inspeção técnica especializada, teste de microvazamento e controle rigoroso de qualidade para garantir estanqueidade, integridade térmica e segurança operacional.
5. **Vocês fazem recuperação de isolamento térmico e pintura industrial?** Sim. Realizamos recuperação e isolamento térmico em poliuretano e alumínio, além de pintura técnica industrial de alta resistência e durabilidade.
6. **Como solicito uma avaliação técnica ou orçamento?** Basta preencher o formulário abaixo ou clicar no botão do WhatsApp `(11) 91363-0927` informando o tipo de equipamento, capacidade aproximada e o serviço desejado. Nossa equipe técnica retorna com a orientação adequada.

### Seção 8 — Orçamento Técnico & Rodapé
- **H2:** `Solicite uma avaliação técnica com a equipe GasCryo.`
- **Texto:** `Informe os dados do seu equipamento ou projeto. Ao enviar, sua solicitação abre diretamente no nosso WhatsApp técnico pronta para atendimento, ou se preferir envie por e-mail.`
- **Formulário rápido:** Nome / Empresa, Cidade / Estado, Tipo de demanda (`Fabricação sob medida`, `Reforma completa de tanque`, `Reforma de cabine criogênica`, `Aquecedor de CO₂ em inox`, `Manutenção e teste de microvazamento`), Descrição breve.
- **Contatos diretos:** WhatsApp `(11) 91363-0927`, E-mail `gascryo1@gmail.com`, Instagram `@gascryo`.
- **Rodapé institucional:** Razão Social `Gultiere Alves Santos de Melo - ME`, CNPJ `60.078.834/0001-41`, Estrada Municipal Rubens de Almeida Pupo, Chácaras Canaã — Jarinu/SP · CEP `13246-692`.
