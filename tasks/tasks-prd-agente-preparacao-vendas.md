# Tasks - Agente de Preparação para Reuniões de Vendas (DEMO)

## Arquivos Relevantes (Simplificado)

- `src/mastra/index.ts` - Configuração principal do Mastra
- `src/mastra/agents/index.ts` - Exportação do agente de vendas
- `src/mastra/tools/index.ts` - Ferramentas Firecrawl e Apollo
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

- [ ] Implementar ferramenta Firecrawl simples em `src/mastra/tools/firecrawl-tool.ts`. Exemplo: `src/mastra/tools/weather-tool.ts`
- [ ] Implementar ferramenta Apollo básica em `src/mastra/tools/apollo-tool.ts`. Exemplo: `src/mastra/tools/weather-tool.ts`

### 3. Criar Agente

#### 3.1 Implementar agente de vendas

- [ ] Criar agente em `src/mastra/agents/meeting-prep-agent.ts` com instruções em PT-BR. Exemplo: `src/mastra/agents/weather-agent.ts`
- [ ] Configurar ferramentas no agente. Exemplo: `src/mastra/agents/weather-agent.ts`
- [ ] Criar workflow em `src/mastra/workflows/meeting-prep-workflow.ts`. Exemplo: `src/mastra/workflows/weather-workflow.ts`
- [ ] Registrar agente no `src/mastra/index.ts`. Remover toda a configuração de weather-agent.

## Nota para Demo

**Objetivo:** Funcionalidade básica em ~20 minutos para demonstração. Sem testes, sem validações complexas, sem tratamento elaborado de erros. Apenas o essencial para mostrar o agente funcionando!
