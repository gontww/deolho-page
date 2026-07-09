"use client";

import React, { useState } from "react";
import Link from "next/link";

type DocSection = 
  | "introducao"
  | "arquitetura"
  | "instalacao-servidor"
  | "config-dinamicas"
  | "instalacao-sdk"
  | "captura-automatica"
  | "captura-manual"
  | "logback-appender"
  | "provedores-ia";

interface SectionInfo {
  id: DocSection;
  title: string;
  category: string;
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<DocSection>("introducao");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sections: SectionInfo[] = [
    { id: "introducao", title: "O que é o DeOlho?", category: "Começando" },
    { id: "arquitetura", title: "Arquitetura e Fluxo", category: "Começando" },
    { id: "instalacao-servidor", title: "Subir o Painel (Docker/JAR)", category: "Servidor DeOlho" },
    { id: "config-dinamicas", title: "Configurações Gerais", category: "Servidor DeOlho" },
    { id: "instalacao-sdk", title: "Instalação do SDK Cliente", category: "SDK Java (Cliente)" },
    { id: "captura-automatica", title: "Captura Automática", category: "SDK Java (Cliente)" },
    { id: "captura-manual", title: "Captura Manual", category: "SDK Java (Cliente)" },
    { id: "logback-appender", title: "Logback Appender", category: "SDK Java (Cliente)" },
    { id: "provedores-ia", title: "Modelos de IA (Gemini, Claude...)", category: "Inteligência Artificial" },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = Array.from(new Set(sections.map(s => s.category)));

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur sticky top-0 z-50 w-full">
        <Link href="/" className="flex items-center gap-2">
          <svg className="w-6 h-6 text-orange-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="font-bold tracking-tight text-white">DeOlho <span className="text-xs text-zinc-500 font-normal ml-1">v0.1.0</span></span>
        </Link>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-zinc-400 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 border-r border-zinc-900 bg-zinc-950/80 backdrop-blur-md px-6 py-6 transition-transform duration-300 md:translate-x-0 md:static md:flex md:flex-col md:h-screen overflow-y-auto
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <Link href="/" className="hidden md:flex items-center gap-3 mb-8 hover:opacity-85 transition">
          <div className="p-2 bg-orange-500/10 rounded-xl border border-orange-500/20">
            <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white text-lg">DeOlho</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Docs v0.1.0-beta</span>
          </div>
        </Link>

        <nav className="space-y-6">
          {categories.map(category => (
            <div key={category} className="space-y-2">
              <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider px-3">{category}</h3>
              <ul className="space-y-1">
                {sections
                  .filter(s => s.category === category)
                  .map(section => {
                    const isActive = activeSection === section.id;
                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => {
                            setActiveSection(section.id);
                            setMobileMenuOpen(false);
                          }}
                          className={`
                            w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 flex items-center justify-between group
                            ${isActive 
                              ? "bg-orange-500/10 text-orange-400 border-l-2 border-orange-500 font-medium" 
                              : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"}
                          `}
                        >
                          <span>{section.title}</span>
                          <svg className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? "text-orange-400 opacity-100" : "text-zinc-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-6 py-8 md:px-12 md:py-12 max-w-4xl mx-auto w-full">
        {/* Top bar elements */}
        <div className="flex justify-between items-center pb-6 mb-8 border-b border-zinc-900">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white transition">Início</Link>
            <span>/</span>
            <span>Documentação</span>
            <span>/</span>
            <span className="text-zinc-200">{sections.find(s => s.id === activeSection)?.category}</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/gontww/deolho" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-xs bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Dynamic Section Contents */}
        <div className="space-y-8">

          {/* 1. INTRODUÇÃO */}
          {activeSection === "introducao" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Visão Geral
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">O que é o DeOlho?</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 2 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                O <strong>DeOlho</strong> é uma solução moderna e extremamente leve para monitoramento de erros e exceções em tempo real em ecossistemas Java, construída nativamente para o <strong>Spring Boot 3</strong> e baseada em <strong>Java 21</strong>.
              </p>

              <p className="text-zinc-300 leading-relaxed">
                Ao contrário de ferramentas pesadas ou APMs que consomem muita CPU e memória, o DeOlho foi desenhado com foco em simplicidade, processamento assíncrono não-bloqueante e integrabilidade com Inteligência Artificial para diagnosticar causas de falhas no exato momento em que ocorrem.
              </p>

              <div className="bg-orange-950/20 border border-orange-500/20 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Por que usar o DeOlho?</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
                  <li><strong>Fila de Alta Performance:</strong> Utiliza Java 21 Virtual Threads para nunca travar ou atrasar a resposta da sua aplicação principal.</li>
                  <li><strong>Diagnóstico com IA:</strong> Integração agnóstica a modelos como GPT-4, Gemini e Claude para analisar o stacktrace e sugerir a solução do erro de imediato.</li>
                  <li><strong>Base de Conhecimento Local:</strong> Salva erros em banco de dados local SQLite, ideal para ambientes internos de desenvolvimento e homologação.</li>
                  <li><strong>Notificações Inteligentes:</strong> Alerta via Webhooks sempre que um erro novo ou grave surgir.</li>
                </ul>
              </div>
            </div>
          )}

          {/* 2. ARQUITETURA */}
          {activeSection === "arquitetura" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Funcionamento
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">Arquitetura e Fluxo</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 3 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                O DeOlho é separado em duas partes fundamentais: o **Servidor (Painel de Gerenciamento)** e o **SDK Cliente (Logback/Spring Boot)**. O fluxo é totalmente assíncrono:
              </p>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Diagrama de Fluxo de Dados</h3>
                <pre className="font-mono text-xs text-orange-300 overflow-x-auto whitespace-pre p-4 bg-zinc-950 rounded-lg">
{`Aplicação Cliente (Java SDK) 
  ↓ (Intercepção automática ou Logback Appender)
  ↓ HTTP POST /events
Servidor DeOlho (Recebe evento)
  ↓
QueueManager (Fila em Memória / Virtual Threads)
  ├─→ PersistWorker ──→ SQLite Database (Salva Erro)
  ├─→ AiWorker ──────→ Agnostic HTTP Calls ──→ OpenAI / Gemini / Claude (Gera Análise)
  ├─→ NotifyWorker ──→ Webhook Trigger (Discord/Slack/Teams)
  └─→ MetricsWorker ─→ Agrupa contadores de estatísticas`}
                </pre>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Os 4 Workers Internos</h3>
                <ol className="space-y-3 text-zinc-300 text-sm list-decimal list-inside">
                  <li><strong>PersistWorker:</strong> Salva a ocorrência no banco SQLite e incrementa contadores de duplicação caso o mesmo erro ocorra consecutivamente.</li>
                  <li><strong>AiWorker:</strong> Caso o erro ocorra pela primeira vez, envia o stacktrace e metadados para a IA configurada extrair resumo, causa, solução técnica, severidade e categoria.</li>
                  <li><strong>NotificationWorker:</strong> Se o sistema de notificações estiver ativo, envia um resumo formatado em JSON para o Webhook externo.</li>
                  <li><strong>MetricsWorker:</strong> Consolida os dados e agrupa as falhas por hora, gerando a timeline do painel web.</li>
                </ol>
              </div>
            </div>
          )}

          {/* 3. INSTALAÇÃO DO SERVIDOR */}
          {activeSection === "instalacao-servidor" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Deploy
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">Subir o Servidor DeOlho</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 3 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                Você pode executar o servidor central do DeOlho utilizando Docker (recomendado para inicializar automaticamente com a máquina) ou rodar diretamente o arquivo JAR executável.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Opção A: Docker Compose (Recomendado)</h3>
                <p className="text-zinc-300 text-sm">
                  Crie um arquivo `docker-compose.yml` e defina as políticas de reinício para garantir que o serviço inicie junto ao sistema operacional:
                </p>

                <div className="relative group">
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleCopy(dockerComposeCode, "docker-comp")}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-700 active:scale-95 transition"
                    >
                      {copiedId === "docker-comp" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl font-mono text-xs text-zinc-300 overflow-x-auto whitespace-pre-wrap">
                    {dockerComposeCode}
                  </pre>
                </div>
                <p className="text-zinc-400 text-xs">Execute o comando para subir em background: <code>docker compose up -d</code></p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Opção B: Execução Manual (JAR)</h3>
                <p className="text-zinc-300 text-sm">
                  Caso tenha o Java 21 instalado localmente, execute o JAR compilado da release diretamente:
                </p>
                <div className="relative group">
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleCopy("java -jar deolho-0.1.0-SNAPSHOT.jar", "run-jar")}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-700 active:scale-95 transition"
                    >
                      {copiedId === "run-jar" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl font-mono text-xs text-zinc-300 overflow-x-auto">
                    {`java -jar deolho-0.1.0-SNAPSHOT.jar`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* 4. CONFIGURAÇÕES DINÂMICAS */}
          {activeSection === "config-dinamicas" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Parâmetros
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">Configurações Gerais</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 2 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                O DeOlho gerencia todas as suas variáveis de forma dinâmica direto no banco de dados SQLite. Isso significa que você pode ajustar chaves de API, modelos de inteligência artificial ou portas de rede sem precisar reconfigurar propriedades de arquivo ou reiniciar a aplicação (exceto na porta).
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Tabela de Parâmetros</h3>
                <div className="overflow-x-auto border border-zinc-900 rounded-xl">
                  <table className="w-full text-left border-collapse text-sm text-zinc-300">
                    <thead className="bg-zinc-900 text-zinc-100 font-semibold border-b border-zinc-800">
                      <tr>
                        <th className="p-3">Chave</th>
                        <th className="p-3">Descrição</th>
                        <th className="p-3">Padrão</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900 bg-zinc-950/40">
                      <tr>
                        <td className="p-3 font-mono text-orange-400">server.port</td>
                        <td className="p-3">Porta TCP em que o painel web e a API de recepção escutam (exige reinício).</td>
                        <td className="p-3">8888</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-orange-400">ai.enabled</td>
                        <td className="p-3">Ativa ou desativa a análise inteligente de stacktraces.</td>
                        <td className="p-3">true</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-orange-400">ai.provider</td>
                        <td className="p-3">Provedor a ser utilizado (<code>OPENAI</code>, <code>GEMINI</code>, <code>CLAUDE</code>, <code>OPENAI_COMPATIBLE</code>, <code>HEURISTIC</code>).</td>
                        <td className="p-3">OPENAI</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-orange-400">ai.language</td>
                        <td className="p-3">Idioma no qual a IA deve detalhar o resumo, causa e solução (ex: <code>pt-BR</code>, <code>en-US</code>).</td>
                        <td className="p-3">pt-BR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 5. INSTALAÇÃO DO SDK CLIENTE */}
          {activeSection === "instalacao-sdk" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  SDK Setup
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">Instalação do SDK Cliente</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 2 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                Para que sua aplicação Java consiga reportar erros automaticamente ao servidor central do DeOlho, você deve importar o módulo do cliente.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Maven (pom.xml)</h3>
                <div className="relative group">
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleCopy(mavenCode, "maven")}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-700 active:scale-95 transition"
                    >
                      {copiedId === "maven" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl font-mono text-xs text-zinc-300 overflow-x-auto">
                    {mavenCode}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Gradle (build.gradle)</h3>
                <div className="relative group">
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleCopy(gradleCode, "gradle")}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-700 active:scale-95 transition"
                    >
                      {copiedId === "gradle" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl font-mono text-xs text-zinc-300 overflow-x-auto">
                    {gradleCode}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* 6. CAPTURA AUTOMÁTICA */}
          {activeSection === "captura-automatica" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Autoconfig
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">Captura Automática (Spring Boot)</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 2 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                Ao adicionar o SDK ao classpath, a Auto-configuração do Spring Boot ativa automaticamente um interceptador global de exceções (utilizando <code>@ControllerAdvice</code>). 
              </p>

              <p className="text-zinc-300 leading-relaxed">
                Qualquer exceção não tratada disparada nos seus endpoints REST será capturada e enviada ao DeOlho antes de retornar a resposta ao usuário.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Configuração (application.properties ou application.yml)</h3>
                <p className="text-zinc-300 text-sm">Configure as chaves no seu projeto cliente para indicar onde o servidor do DeOlho está executando:</p>
                <div className="relative group">
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleCopy(clientPropertiesCode, "client-prop")}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-700 active:scale-95 transition"
                    >
                      {copiedId === "client-prop" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl font-mono text-xs text-zinc-300 overflow-x-auto">
                    {clientPropertiesCode}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* 7. CAPTURA MANUAL */}
          {activeSection === "captura-manual" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Manual SDK
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">Captura Manual de Erros</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 2 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                Se você já trata exceções em blocos <code>try-catch</code> e não quer relançar o erro, você pode notificar o painel do DeOlho de forma programática.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Exemplo Prático de Código Java</h3>
                <div className="relative group">
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleCopy(javaManualCaptureCode, "manual-cap")}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-700 active:scale-95 transition"
                    >
                      {copiedId === "manual-cap" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl font-mono text-xs text-zinc-300 overflow-x-auto">
                    {javaManualCaptureCode}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* 8. LOGBACK APPENDER */}
          {activeSection === "logback-appender" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Appenders
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">Configurar Logback Appender</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 2 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                Você pode capturar automaticamente qualquer erro gerado pela sua biblioteca de logs (ex: logs contendo erro emitidos por bibliotecas de terceiros) adicionando o <code>DeOlhoLogbackAppender</code> nas configurações de logging.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Configuração (logback-spring.xml)</h3>
                <div className="relative group">
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleCopy(logbackXmlCode, "logback")}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-700 active:scale-95 transition"
                    >
                      {copiedId === "logback" ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl font-mono text-xs text-zinc-300 overflow-x-auto">
                    {logbackXmlCode}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* 9. PROVEDORES DE IA */}
          {activeSection === "provedores-ia" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  Modelos de IA
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">Configurando Provedores de IA</h1>
                <p className="text-zinc-400 text-sm">Tempo de leitura: 3 min</p>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                O DeOlho realiza requisições diretas via HTTP, sem wrappers externos pesados. Você pode configurar as seguintes inteligências artificiais na aba de configurações do painel:
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-zinc-200">1. Google Gemini (Recomendado)</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
                  <li><strong>Provedor:</strong> Selecione <code>GEMINI</code></li>
                  <li><strong>Modelo:</strong> Em branco para usar o padrão <code>gemini-1.5-flash</code> ou digite um específico (ex: <code>gemini-1.5-pro</code>).</li>
                  <li><strong>API Key:</strong> Informe sua chave obtida no Google AI Studio.</li>
                </ul>

                <h3 className="text-lg font-bold text-zinc-200">2. Anthropic Claude</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
                  <li><strong>Provedor:</strong> Selecione <code>CLAUDE</code></li>
                  <li><strong>Modelo:</strong> Em branco para usar o padrão <code>claude-3-5-sonnet-20241022</code>.</li>
                  <li><strong>API Key:</strong> Informe sua chave oficial da Anthropic Console.</li>
                </ul>

                <h3 className="text-lg font-bold text-zinc-200">3. OpenAI</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
                  <li><strong>Provedor:</strong> Selecione <code>OPENAI</code></li>
                  <li><strong>Modelo:</strong> Padrão <code>gpt-4o-mini</code>.</li>
                  <li><strong>API Key:</strong> Informe sua API Key oficial da OpenAI.</li>
                </ul>

                <h3 className="text-lg font-bold text-zinc-200">4. LLMs Locais (Ollama, LM Studio)</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
                  <li><strong>Provedor:</strong> Selecione <code>Compatível com OpenAI</code></li>
                  <li><strong>Modelo:</strong> O nome do seu modelo local (ex: <code>llama3</code>, <code>mistral</code>).</li>
                  <li><strong>Base URL:</strong> O endereço do seu endpoint local (ex: <code>http://localhost:11434/v1</code>).</li>
                </ul>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

// Code snippets variables for clean syntax
const dockerComposeCode = `version: '3.8'

services:
  deolho-server:
    image: openjdk:21-slim
    container_name: deolho-server
    volumes:
      - ./deolho.db:/app/deolho.db
      - ./deolho-0.1.0-SNAPSHOT.jar:/app/deolho.jar
    working_dir: /app
    ports:
      - "8888:8888"
    command: java -jar deolho.jar
    restart: unless-stopped`;

const mavenCode = `<dependency>
    <groupId>com.deolho</groupId>
    <artifactId>deolho-client</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>`;

const gradleCode = `dependencies {
    implementation("com.deolho:deolho-client:0.1.0-SNAPSHOT")
}`;

const clientPropertiesCode = `# Habilita o monitoramento automático de exceções
deolho.enabled=true

# Nome legível do seu serviço para agrupamento no painel
deolho.application-name=MinhaAplicacaoSpring

# URL de envio dos eventos (porta padrão 8888)
deolho.api-url=http://localhost:8888/events`;

const javaManualCaptureCode = `import com.deolho.client.DeOlhoClient;

try {
    // Código crítico de integração externa
    minhaIntegracao.executar();
} catch (MinhaExcecaoException e) {
    // Registra o erro de forma programática no painel
    DeOlhoClient.capture(e);
    
    // Tratamento ou fallback do erro local
    log.warn("Falha na integração: {}", e.getMessage());
}`;

const logbackXmlCode = `<configuration>
    <appender name="DEOLHO" class="com.deolho.client.DeOlhoLogbackAppender">
        <apiUrl>http://localhost:8888/events</apiUrl>
        <applicationName>MinhaAplicacao</applicationName>
    </appender>

    <root level="INFO">
        <appender-ref ref="CONSOLE" />
        <appender-ref ref="DEOLHO" />
    </root>
</configuration>`;
