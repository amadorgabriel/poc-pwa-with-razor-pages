# Objetivo

Analisar a viabilidade de desenvolver um PWA com tecnologias delimitadas, sendo portanto, um web app construído com .NET 6 retornando para o client-side html baseadas em razor pages.

# Justificativa

O Cliente gostaria de delimitar a stack da aplicação dado questões de manutenção póstuma ao desenvolvimento e entrega da solução. Para isso é necessário analisar a viabilidade de funcionalidades adicionadas ao backlog contruído para prover prover contenção de possíveis problemas futuros. 

# Propostas Avaliadas

1. Relembrando conceitos
    1. Como funciona Web App .Net com razor?
    2. É possível contruir um PWA com SSR?
    3. É possível contruir um PWA com .Net Core 6 e Razor Pages?
2. Construção de um PWA
    1. Persistir dados em cache através do SW
    2. Configuração e habilitação do service-worker.js
    3. Configurar A2HS (Add to home screen)  
    4. Listar dados de uma API em tela via js
    5. Listar dados de uma API em tela via c#

# Premissas

1. A aplicação deve se orientar com a stack web app .Net 6 com razor pages
2. A aplicação deve funcionar modo offline.

# Avaliação das Propostas

1. **Relembrando conceitos**
    
    Depois de recordar os fundamentos básicos da construção de um PWA com a stack definida, levantamos nossas especulações iniciais sobre a viabilidade do cenário proposto. Até então foi possível re-ambientar com as tecnologias, entretanto, ainda não testado em código teste. 
    
2. **Construção de um PWA**
    1. É possível persistir dados em cache com o `service-worker.js` se o mesmo estiver no client-side configurado como script na `wwwroot` folder e acionado a partir de uma tag script;
    2. Não há particularidades na configuração e habilitação, dessa vez não utilizei libs ou abstrações. Foram feitas com a API nativa;
    3. Não há particularidades ou limitações em configurar o A2HS;
    4. Foram listados dados de forma client-side com a fetch API;
    5. Foram listados dados de forma server-side com o HTTP Client do C#.

# Resultados Obtidos

Após relembrar os conceitos fundamentais para se desenvolver uma aplicação com a stack definida foi feita uma análise teórica-prática das propostas levantadas e em seguida, validada com equipe interna. Depois dessas etapas foram elencadas as seguintes conclusões:

Não são reconhecidas viabilidades da construção de um PWA baseado na razor syntax uma vez que a mesma se baseia em renderizações server side. 

O Service worker atua na camada do client side, interceptando requests e responses do navegador e tratando-as, desse modo a renderização no servidor não possibilita a interceptação das rotas acionadas pela camada do backend que retorna o conteúdo estático em formato HTML.

O cenário no repositório faz uso da api do service worker pelo dado do client cacheando assets, requisições e entre outros.

# Envolvidos

- Gabriel Rodrigues (Técnico de Programação / Desenvolvedor Frontend)

<p style="text-align: center">Feito com 💜 por Gabriel Rodrigues </p>
