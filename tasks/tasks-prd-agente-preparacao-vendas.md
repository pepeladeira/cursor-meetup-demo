# Tasks - Agente de Preparação para Reuniões de Vendas (DEMO)

## Arquivos Relevantes (Simplificado)

- `src/mastra/index.ts` - Configuração principal do Mastra
- `src/mastra/agents/index.ts` - Exportação do agente de vendas
- `src/mastra/agents/meeting-prep-agent.ts` - Definição do agente de preparação de vendas
- `src/mastra/workflows/meeting-prep-workflow.ts` - Workflow para orquestrar o agente de vendas
- `src/mastra/tools/index.ts` - Ferramentas Firecrawl e Apollo
- `src/mastra/tools/firecrawl-tool.ts` - Ferramenta para extrair conteúdo de websites com Firecrawl
- `src/mastra/tools/apollo-tool.ts` - Ferramenta para buscar informações de leads com Apollo.io
- `.env` - Variáveis de ambiente das APIs
- `package.json` - Dependências necessárias

## Tarefas Simplificadas para Demo

### 1. Setup Básico ✅

#### 1.1 Configurar ambiente

- [x] Executar `npx create-mastra@latest` para criar projeto base
- [x] Instalar dependências extras: `npm install @mendable/firecrawl-js axios`
- [x] Configurar variáveis de ambiente no `.env`

### 2. Implementar Ferramentas

#### 2.1 Criar ferramentas básicas

- [x] Implementar ferramenta Firecrawl simples em `src/mastra/tools/firecrawl-tool.ts`. Exemplo: `src/mastra/tools/weather-tool.ts`
- [x] Implementar ferramenta Apollo básica em `src/mastra/tools/apollo-tool.ts`. Utilizar a API do Apollo.io para buscar informações de leads e contatos (`const APOLLO_API_BASE_URL = "https://api.apollo.io/api/v1/people/match";`). Exemplo: `src/mastra/tools/weather-tool.ts`.

### 3. Criar Agente

#### 3.1 Implementar agente de vendas

- [x] Criar agente em `src/mastra/agents/meeting-prep-agent.ts` com instruções em PT-BR. Exemplo: `src/mastra/agents/weather-agent.ts`
- [x] Configurar ferramentas no agente. Exemplo: `src/mastra/agents/weather-agent.ts`
- [x] Criar workflow em `src/mastra/workflows/meeting-prep-workflow.ts`. Exemplo: `src/mastra/workflows/weather-workflow.ts`
- [x] Registrar agente no `src/mastra/index.ts`. Remover toda a configuração de weather-agent.

## Nota para Demo

**Objetivo:** Funcionalidade básica em ~20 minutos para demonstração. Sem testes, sem validações complexas, sem tratamento elaborado de erros. Apenas o essencial para mostrar o agente funcionando!
