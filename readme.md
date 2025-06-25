# Demo: Construindo um Agente Preparador de Reunião

Este repositório contém o código para o projeto de demonstração "Construindo um Agente Preparador de Reunião", apresentado no Meetup do Cursor em Belo Horizonte.

## Sobre o Projeto

O objetivo deste projeto é demonstrar como construir um agente de IA capaz de se preparar para uma reunião.

O agente receberá um email e usará a internet para pesquisar informações relevantes, resumi-las e preparar um briefing para o usuário.

## Tecnologias Utilizadas

- **Cursor:** O editor de código "AI-first" utilizado para desenvolver este projeto.
- **Mastra:** Uma estrutura para construir agentes e fluxos de trabalho de IA.
- **Firecrawl:** Uma ferramenta para extrair e converter qualquer site em dados estruturados.
- **Apollo.io:** Uma ferramenta para extrair informações de um lead.

## Evento

Esta demonstração foi criada para o **Cursor Meetup em Belo Horizonte** organizado pela [Pingback](https://pingback.com/).

## Prompts Utilizados Pré-demostração

### Prompt 1

```
Use o @create-prd.mdc 

O que queremos construir:
Um agente de AI, utilizando o framework mastra/core (https://mastra.ai/en/docs/agents/overview), para profissionais de times de vendas se preparem para uma primeira reunião com um lead.

O input será o email corporativo. Com base nele, iremos extrair informações da empresa com Firecrawl e informações do lead com Apollo.io. Ambas serão tools do nosso agente (https://mastra.ai/en/docs/agents/using-tools-and-mcp)

Não iremos construir nenhuma interface, porque o mastra já oferece um chat com o agente para testarmos (https://mastra.ai/en/docs/local-dev/mastra-dev)

Não iremos salvar nenhum informação e nem fazer integrações com CRM. Apenas deixar o agente fazer o seu trabalho e mostrar para o usuário.
```

### Prompt 2

```
Agora, pegue o PRD e crie as nossas tasks usando @generate-tasks.mdc 
```

### Prompt 3

```
Vamos executar a tarefa 1.1 e utilize @process-task-list.mdc
```

## Solução Final

O código final e a solução completa apresentada na demonstração podem ser encontrados na seguinte branch: [https://github.com/pepeladeira/cursor-meetup-demo/tree/final-solution](https://github.com/pepeladeira/cursor-meetup-demo/tree/final-solution).