# PRD - Agente de Preparação para Reuniões de Vendas

## 1. Introdução/Visão Geral

O Agente de Preparação para Reuniões de Vendas é uma solução de AI projetada para automatizar e otimizar o processo de pesquisa e preparação que os SDRs (Sales Development Representatives) júnior realizam antes de reuniões de descoberta inicial com leads. 

**Problema que resolve:** Atualmente, os SDRs enfrentam dois desafios principais: a falta de informações estruturadas sobre a empresa do lead antes da reunião e o tempo insuficiente para realizar pesquisas manuais detalhadas. Isso resulta em reuniões menos produtivas e oportunidades perdidas.

**Objetivo:** Fornecer um briefing completo e estruturado sobre a empresa e o lead em questão de minutos, usando apenas o email corporativo como entrada, permitindo que os SDRs cheguem às reuniões bem preparados e confiantes.

## 2. Objetivos

1. **Automatizar a pesquisa de leads:** Reduzir o tempo manual de pesquisa de empresas e contatos de horas para minutos
2. **Padronizar a qualidade da preparação:** Garantir que todos os SDRs tenham acesso ao mesmo nível de informações estruturadas
3. **Melhorar a eficácia das discovery calls:** Fornecer insights acionáveis que levem a conversas mais direcionadas e produtivas
4. **Simplificar o processo:** Requerer apenas um email corporativo como entrada para gerar um briefing completo

## 3. Histórias do Usuário

**História Principal:**
Como um SDR júnior, eu quero inserir o email corporativo de um lead e receber automaticamente um briefing completo sobre a empresa e a pessoa, para que eu possa me preparar adequadamente para a reunião de descoberta inicial sem gastar horas pesquisando manualmente.

**Histórias Secundárias:**
- Como um SDR júnior, eu quero entender o setor e tamanho da empresa do meu lead, para que eu possa personalizar minha abordagem de vendas
- Como um SDR júnior, eu quero saber sobre notícias recentes da empresa, para que eu possa usar essas informações como ice breakers na conversa
- Como um SDR júnior, eu quero conhecer o cargo e histórico do lead, para que eu possa adaptar meu pitch ao nível de senioridade da pessoa
- Como um SDR júnior, eu quero receber perguntas sugeridas para a reunião, para que eu possa conduzir uma discovery call mais estruturada

## 4. Requisitos Funcionais

### 4.1 Entrada de Dados
1. O sistema deve aceitar um email corporativo como única entrada obrigatória
2. O sistema deve validar se o email fornecido é um email corporativo válido
3. O sistema deve extrair o domínio da empresa a partir do email

### 4.2 Coleta de Informações da Empresa (via Firecrawl)
4. O sistema deve coletar informações sobre o setor de atuação da empresa
5. O sistema deve determinar o tamanho aproximado da empresa (número de funcionários)
6. O sistema deve buscar notícias recentes e eventos relevantes da empresa
7. O sistema deve extrair informações do site corporativo da empresa

### 4.3 Coleta de Informações do Lead (via Apollo.io)
8. O sistema deve identificar o cargo e nível de senioridade do lead
9. O sistema deve coletar informações sobre o histórico profissional e experiência do lead
10. O sistema deve buscar dados de contato e perfil profissional

### 4.4 Processamento e Análise
11. O sistema deve analisar e correlacionar as informações coletadas
12. O sistema deve identificar insights relevantes para uma discovery call
13. O sistema deve gerar talking points personalizados baseados nas informações

### 4.5 Geração de Saída
14. O sistema deve produzir um resumo executivo estruturado da empresa e lead
15. O sistema deve gerar talking points específicos para a conversa
16. O sistema deve sugerir perguntas estratégicas para fazer durante a reunião
17. O sistema deve criar um briefing completo com contexto e insights acionáveis
18. O sistema deve apresentar todas as informações de forma clara e organizada

### 4.6 Interface e Interação
19. O sistema deve ser acessível através do chat do Mastra CLI (`mastra dev`)
20. O sistema deve fornecer respostas em português brasileiro
21. O sistema deve permitir perguntas de follow-up sobre as informações coletadas

## 5. Não-Objetivos (Fora do Escopo)

- **Desenvolvimento de interface web ou mobile:** O agente utilizará apenas o chat nativo do Mastra
- **Integração com CRMs:** Não haverá sincronização ou salvamento de dados em sistemas externos
- **Armazenamento persistente:** As informações não serão salvas após a sessão
- **Análise de métricas de performance:** Não incluirá tracking de conversões ou eficácia
- **Funcionalidades de CRM:** Não gerenciará pipeline, follow-ups ou tarefas
- **Integração com calendários:** Não agendará ou gerenciará reuniões
- **Análise de concorrentes:** Não focará em análise competitiva detalhada
- **Recomendações de pricing:** Não sugerirá estratégias de precificação

## 6. Considerações Técnicas

### 6.1 Framework e Arquitetura
- **Framework:** Utilizar @mastra/core para criação do agente
- **Modelo de AI:** Configurar com modelo apropriado (ex: OpenAI GPT-4)
- **Tools:** Implementar Firecrawl e Apollo.io como tools do agente

### 6.2 Integrações Necessárias
- **Firecrawl API:** Para extração de informações de websites corporativos
- **Apollo.io API:** Para busca de informações de leads e contatos
- **Configuração de ambiente:** Variáveis de ambiente para chaves de API

### 6.3 Tratamento de Erros
- Implementar fallbacks para quando APIs externas falharem
- Tratar casos onde informações não estão disponíveis
- Validação robusta de entrada de dados

## 7. Considerações de Design

### 7.1 Estrutura da Resposta
O briefing gerado deve seguir uma estrutura consistente:
```
## BRIEFING - [Nome da Empresa]

### INFORMAÇÕES DA EMPRESA
- Setor: 
- Tamanho: 
- Localização: 

### NOTÍCIAS E EVENTOS RECENTES
- [Lista de notícias relevantes]

### PERFIL DO LEAD
- Nome: 
- Cargo: 
- Senioridade: 
- Histórico: 

### TALKING POINTS
- [Pontos de conversa personalizados]

### PERGUNTAS SUGERIDAS
- [Perguntas estratégicas para discovery]

### INSIGHTS E CONTEXTO
- [Análises e correlações relevantes]
```

### 7.2 Tom e Linguagem
- Linguagem profissional mas acessível para SDRs júnior
- Foco em informações acionáveis
- Destacar insights mais relevantes
- Usar formatação clara e organizada

## 8. Questões Abertas

1. **Limite de Rate das APIs:** Qual será o limite de uso das APIs do Firecrawl e Apollo.io?
2. **Qualidade dos dados:** Como o agente deve proceder quando as informações coletadas são limitadas ou inconsistentes?
3. **Empresas internacionais:** Como tratar empresas com presença global mas domínio local?
4. **Setores regulamentados:** Há necessidade de avisos especiais para setores como saúde ou governo?
5. **Personalização:** Os SDRs poderão configurar quais tipos de informação priorizar?
6. **Tempo de resposta:** Qual é o tempo máximo aceitável para gerar um briefing completo?

## 9. Critérios de Aceitação

### Critério Principal
- ✅ O agente deve gerar um briefing completo e estruturado usando apenas um email corporativo como entrada

### Critérios Técnicos
- ✅ Integração funcional com Firecrawl para coleta de informações da empresa
- ✅ Integração funcional com Apollo.io para informações do lead
- ✅ Implementação como agente Mastra acessível via `mastra dev`
- ✅ Tratamento adequado de casos extremos e erros de API

### Critérios de Qualidade
- ✅ Briefing inclui informações sobre setor, tamanho da empresa e notícias recentes
- ✅ Briefing inclui cargo, senioridade e histórico do lead
- ✅ Geração de talking points personalizados
- ✅ Sugestão de perguntas estratégicas para discovery calls
- ✅ Resposta em português brasileiro bem estruturada

### Critérios de Usabilidade
- ✅ Tempo de resposta inferior a 2 minutos para casos típicos
- ✅ Tratamento gracioso de erros com mensagens claras
- ✅ Capacidade de responder perguntas de follow-up sobre o briefing gerado 