# Tasks - Agente de Preparação para Reuniões de Vendas

## Arquivos Relevantes

- `src/mastra/index.ts` - Arquivo principal do Mastra onde será registrado o agente e configurações centrais
- `src/mastra/agents/index.ts` - Definição e exportação do agente de preparação de vendas
- `src/mastra/agents/sales-prep-agent.ts` - Implementação completa do agente com instruções e configurações
- `src/mastra/tools/index.ts` - Exportação centralizada de todas as ferramentas personalizadas
- `src/mastra/tools/firecrawl-tool.ts` - Ferramenta para integração com Firecrawl API
- `src/mastra/tools/apollo-tool.ts` - Ferramenta para integração com Apollo.io API
- `src/lib/utils/email-validator.ts` - Utilitário para validação de emails corporativos
- `src/lib/utils/domain-extractor.ts` - Utilitário para extração de domínio de emails
- `src/lib/utils/briefing-formatter.ts` - Formatação e estruturação do briefing final
- `src/lib/types/sales-types.ts` - Definições de tipos TypeScript para dados de vendas
- `.env.example` - Arquivo de exemplo com variáveis de ambiente necessárias
- `package.json` - Dependências do projeto incluindo @mastra/core e SDKs de APIs
- `src/mastra/tools/firecrawl-tool.test.ts` - Testes unitários para ferramenta Firecrawl
- `src/mastra/tools/apollo-tool.test.ts` - Testes unitários para ferramenta Apollo.io
- `src/lib/utils/email-validator.test.ts` - Testes para validação de emails

## Tarefas Detalhadas

### 1. Configuração e Setup do Projeto Mastra

#### 1.1 Inicializar projeto Mastra
- [ ] Executar `npx create-mastra@latest` para criar projeto base
- [ ] Configurar estrutura de diretórios seguindo convenções do Mastra
- [ ] Instalar dependências adicionais necessárias

#### 1.2 Configurar dependências e pacotes
- [ ] Instalar `@mastra/core@latest` 
- [ ] Instalar SDK do modelo de AI (ex: `@ai-sdk/openai`)
- [ ] Instalar bibliotecas para APIs externas (Firecrawl, Apollo.io)
- [ ] Instalar dependências de desenvolvimento e teste

#### 1.3 Configurar variáveis de ambiente
- [ ] Criar arquivo `.env.example` com todas as chaves necessárias
- [ ] Documentar variáveis: `OPENAI_API_KEY`, `FIRECRAWL_API_KEY`, `APOLLO_API_KEY`
- [ ] Criar arquivo `.env` local para desenvolvimento
- [ ] Adicionar `.env` ao `.gitignore`

#### 1.4 Configurar arquivos base do projeto
- [ ] Criar `src/mastra/index.ts` com configuração base do Mastra
- [ ] Configurar TypeScript com tipos apropriados
- [ ] Configurar scripts de desenvolvimento no `package.json`

### 2. Implementação das Ferramentas (Tools) de Integração

#### 2.1 Criar ferramenta Firecrawl
- [ ] Implementar `src/mastra/tools/firecrawl-tool.ts`
- [ ] Definir schema Zod para parâmetros de entrada (URL da empresa)
- [ ] Implementar função `execute` para chamar API do Firecrawl
- [ ] Extrair informações específicas: setor, tamanho, notícias, dados corporativos
- [ ] Implementar tratamento de erros e timeouts

#### 2.2 Criar ferramenta Apollo.io
- [ ] Implementar `src/mastra/tools/apollo-tool.ts`
- [ ] Definir schema Zod para parâmetros (email do lead)
- [ ] Implementar função `execute` para buscar dados do lead via Apollo API
- [ ] Extrair: cargo, senioridade, histórico profissional, dados de contato
- [ ] Implementar tratamento de rate limits e erros da API

#### 2.3 Integrar ferramentas no sistema
- [ ] Criar `src/mastra/tools/index.ts` para exportação centralizada
- [ ] Registrar ferramentas no agente principal
- [ ] Testar individualmente cada ferramenta
- [ ] Validar schemas e tipos de retorno

### 3. Criação do Agente Principal de Preparação de Vendas

#### 3.1 Implementar agente base
- [ ] Criar `src/mastra/agents/sales-prep-agent.ts`
- [ ] Configurar modelo de AI (OpenAI GPT-4 ou similar)
- [ ] Definir nome e identificação do agente
- [ ] Configurar `maxSteps` para permitir múltiplas chamadas de ferramentas

#### 3.2 Criar instruções do agente
- [ ] Escrever instruções detalhadas em português brasileiro
- [ ] Definir comportamento: receber email, validar, coletar dados, gerar briefing
- [ ] Especificar formato de saída conforme estrutura do PRD
- [ ] Incluir diretrizes para tom profissional mas acessível

#### 3.3 Configurar ferramentas no agente
- [ ] Habilitar ferramenta Firecrawl no agente
- [ ] Habilitar ferramenta Apollo.io no agente
- [ ] Configurar ordem lógica de execução das ferramentas
- [ ] Testar integração entre agente e ferramentas

#### 3.4 Registrar agente no Mastra
- [ ] Exportar agente em `src/mastra/agents/index.ts`
- [ ] Registrar no arquivo principal `src/mastra/index.ts`
- [ ] Configurar para disponibilidade via `mastra dev`

### 4. Desenvolvimento da Lógica de Processamento e Análise

#### 4.1 Criar utilitários de validação
- [ ] Implementar `src/lib/utils/email-validator.ts`
- [ ] Validar formato de email corporativo
- [ ] Rejeitar emails de provedores públicos (Gmail, Yahoo, etc.)
- [ ] Implementar `src/lib/utils/domain-extractor.ts` para extrair domínio

#### 4.2 Implementar formatação de briefing
- [ ] Criar `src/lib/utils/briefing-formatter.ts`
- [ ] Implementar template de briefing conforme especificação do PRD
- [ ] Estruturar seções: empresa, notícias, perfil do lead, talking points, perguntas
- [ ] Gerar insights correlacionando dados da empresa e do lead

#### 4.3 Criar tipos TypeScript
- [ ] Definir `src/lib/types/sales-types.ts`
- [ ] Tipos para dados da empresa (setor, tamanho, notícias)
- [ ] Tipos para dados do lead (cargo, senioridade, histórico)
- [ ] Tipos para briefing estruturado e talking points

#### 4.4 Implementar lógica de análise
- [ ] Algoritmo para correlacionar dados empresa-lead
- [ ] Geração de talking points personalizados
- [ ] Sugestão de perguntas estratégicas baseadas no perfil
- [ ] Identificação de insights relevantes para discovery calls

### 5. Implementação de Tratamento de Erros e Validações

#### 5.1 Validações de entrada
- [ ] Validar formato do email de entrada
- [ ] Verificar se é email corporativo (não público)
- [ ] Extrair e validar domínio da empresa
- [ ] Retornar mensagens de erro claras para usuário

#### 5.2 Tratamento de falhas de API
- [ ] Implementar fallbacks quando Firecrawl API falhar
- [ ] Tratar erros de rate limit do Apollo.io
- [ ] Lidar com timeouts e conexões instáveis
- [ ] Continuar processamento mesmo com falha parcial de dados

#### 5.3 Casos extremos e edge cases
- [ ] Tratar empresas com pouca presença online
- [ ] Lidar com domínios não reconhecidos ou inválidos
- [ ] Processar leads com informações limitadas no Apollo
- [ ] Tratar setores sensíveis com avisos apropriados

#### 5.4 Mensagens de erro amigáveis
- [ ] Criar mensagens de erro em português brasileiro
- [ ] Explicar limitações quando dados não estão disponíveis
- [ ] Sugerir ações alternativas quando possível
- [ ] Manter tom profissional mas empático

## Notas de Implementação

- **Ordem de execução:** Seguir a sequência das tarefas para evitar dependências não resolvidas
- **Testes:** Implementar testes unitários para ferramentas críticas (Firecrawl e Apollo.io)
- **Configuração:** Certificar-se de que todas as chaves de API estão configuradas antes de testar
- **Documentação:** Manter `.env.example` atualizado com todas as variáveis necessárias
- **Performance:** Considerar timeouts apropriados para chamadas de API externas (max 2 minutos conforme PRD) 