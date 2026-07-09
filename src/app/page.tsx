"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"sdk" | "properties" | "docker">("sdk");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute -top-[300px] left-1/4 w-[600px] h-[600px] rounded-full bg-orange-600/20 blur-[150px]" />
        <div className="absolute -top-[250px] right-1/4 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[130px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-zinc-900/60">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="p-2 bg-orange-500/10 rounded-xl border border-orange-500/20 group-hover:border-orange-500/40 transition">
            <svg className="w-5.5 h-5.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <span className="font-bold tracking-tight text-white text-lg">DeOlho</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition">Recursos</a>
          <a href="#workflow" className="hover:text-white transition">Como Funciona</a>
          <a href="#ai" className="hover:text-white transition">Inteligência Artificial</a>
          <Link href="/docs" className="hover:text-white transition">Documentação</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/docs" 
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-orange-600 px-4 text-xs font-semibold text-white shadow hover:bg-orange-500 transition duration-200"
          >
            Começar Agora
          </Link>
          <a 
            href="https://github.com/gontww/deolho" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800 rounded-xl transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16 text-center space-y-8">

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Tenha os olhos no erro antes que o seu cliente sinta.
        </h1>

        <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
          Monitoramento de exceções extremamente leve, assíncrono com Virtual Threads e alimentado por inteligência artificial agnóstica para diagnosticar bugs de imediato.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            href="/docs" 
            className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-xl bg-orange-600 hover:bg-orange-500 px-6 font-semibold text-white shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition duration-200"
          >
            Ver Documentação
          </Link>
          <a 
            href="https://github.com/gontww/deolho" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-6 font-semibold text-zinc-200 hover:text-white transition duration-200"
          >
            Acessar no GitHub
          </a>
        </div>
      </section>

      {/* Mock UI Preview */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-3 shadow-2xl backdrop-blur-sm relative group overflow-hidden">
          {/* Decorative Window dots */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-zinc-900">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] text-zinc-500 font-mono ml-2">deolho-dashboard-preview.png</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 min-h-[360px] font-mono text-xs">
            {/* Sdk Error event */}
            <div className="md:col-span-5 bg-zinc-950 border border-zinc-900/60 rounded-xl p-4 space-y-4">
              <div className="flex justify-between items-center text-[10px] text-rose-400 font-bold tracking-wider uppercase border-b border-zinc-900 pb-2">
                <span>[LOG] EXCEÇÃO INTERCEPTADA</span>
                <span className="animate-ping w-2 h-2 rounded-full bg-rose-500" />
              </div>
              <div className="space-y-1.5 text-zinc-400">
                <p className="text-zinc-300 font-bold">java.lang.NullPointerException: Cannot invoke &quot;String.trim()&quot; because &quot;value&quot; is null</p>
                <p className="text-[11px] text-zinc-500">at com.exemplo.service.OrderService.process(OrderService.java:45)</p>
                <p className="text-[11px] text-zinc-500">at com.exemplo.controller.OrderController.create(OrderController.java:23)</p>
              </div>
              <div className="pt-2 border-t border-zinc-900 text-[10px] text-zinc-500 space-y-1">
                <p>💡 <span className="text-zinc-400 font-semibold">Aplicação:</span> CheckoutService</p>
                <p>⚙️ <span className="text-zinc-400 font-semibold">Ambiente:</span> Produção</p>
                <p>⚡ <span className="text-zinc-400 font-semibold">Thread:</span> VirtualThread-14352</p>
              </div>
            </div>

            {/* AI Diagnostics Response */}
            <div className="md:col-span-7 bg-zinc-950 border border-zinc-900/60 rounded-xl p-4 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold tracking-wider uppercase border-b border-zinc-900 pb-2 mb-3">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Análise de IA (Gemini 1.5 Flash)</span>
                </div>
                <div className="space-y-3 text-zinc-300 text-[11px]">
                  <p>🔎 <strong className="text-zinc-100">Causa:</strong> Variável <code className="bg-zinc-900 px-1 py-0.5 rounded text-orange-300">value</code> recebida no payload do carrinho estava nula no momento do cálculo do frete.</p>
                  <p>🛠️ <strong className="text-zinc-100">Solução:</strong> Adicionar uma validação <code className="bg-zinc-900 px-1 py-0.5 rounded text-orange-300">Optional.ofNullable()</code> ou uma anotação <code className="bg-zinc-900 px-1 py-0.5 rounded text-orange-300">@NotNull</code> no DTO.</p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-900">
                <span className="text-[10px] text-zinc-500 block mb-1">Código Sugerido:</span>
                <pre className="bg-zinc-900/60 p-2.5 rounded font-mono text-[10px] text-orange-300">
{`if (dto.getValue() == null) {
    throw new InvalidOrderException("Valor não pode ser nulo");
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 py-12 border-t border-zinc-900">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simples, Rápido e Desacoplado.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Tudo o que você precisa para monitorar erros corporativos sem a complexidade ou taxas mensais dos APMs tradicionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition duration-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-base">Virtual Threads</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Fila em memória executando em threads virtuais leves do Java 21. Nunca impacta a resposta da sua aplicação de produção.
            </p>
          </div>

          {/* Card 2 */}
          <div id="ai" className="scroll-mt-24 bg-zinc-900/30 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition duration-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-base">IA Multi-Provider</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Suporte nativo HTTP (sem libs proprietárias) para Google Gemini, Anthropic Claude, OpenAI e endpoints locais (Ollama).
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition duration-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-base">SDK Plug-and-Play</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Integração via @ControllerAdvice com capturas de erros automáticas ou manuais, além de integração rápida com Logback Appender.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition duration-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-base">Autohospedado</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Banco de dados local SQLite e conteinerização Docker. Não envie seus logs sensíveis para nuvens de terceiros de graça.
            </p>
          </div>
        </div>
      </section>

      {/* Code / Workflow Section */}
      <section id="workflow" className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Pronto para rodar em 3 passos</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Comece a monitorar sua aplicação Spring Boot em menos de 2 minutos. Escolha o passo para visualizar as configurações padrão.
            </p>

            <div className="space-y-2">
              <button 
                onClick={() => setActiveTab("sdk")}
                className={`w-full text-left px-4 py-3 rounded-xl border transition flex items-center gap-3 ${activeTab === "sdk" ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-transparent border-zinc-900 text-zinc-400 hover:text-zinc-200"}`}
              >
                <span className="font-bold text-xs bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">1</span>
                <span className="text-sm font-semibold">Importe a Dependência SDK</span>
              </button>

              <button 
                onClick={() => setActiveTab("properties")}
                className={`w-full text-left px-4 py-3 rounded-xl border transition flex items-center gap-3 ${activeTab === "properties" ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-transparent border-zinc-900 text-zinc-400 hover:text-zinc-200"}`}
              >
                <span className="font-bold text-xs bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">2</span>
                <span className="text-sm font-semibold">Configure o application.properties</span>
              </button>

              <button 
                onClick={() => setActiveTab("docker")}
                className={`w-full text-left px-4 py-3 rounded-xl border transition flex items-center gap-3 ${activeTab === "docker" ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-transparent border-zinc-900 text-zinc-400 hover:text-zinc-200"}`}
              >
                <span className="font-bold text-xs bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">3</span>
                <span className="text-sm font-semibold">Suba o Servidor via Docker</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-4 min-h-[280px] flex flex-col justify-center">
            {activeTab === "sdk" && (
              <div className="space-y-3">
                <span className="text-xs text-zinc-500 block">Adicione no seu pom.xml:</span>
                <pre className="bg-zinc-950 p-4 rounded-xl font-mono text-[11px] text-orange-300 overflow-x-auto">
{`<dependency>
    <groupId>com.deolho</groupId>
    <artifactId>deolho-client</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>`}
                </pre>
              </div>
            )}

            {activeTab === "properties" && (
              <div className="space-y-3">
                <span className="text-xs text-zinc-500 block">Configure no cliente:</span>
                <pre className="bg-zinc-950 p-4 rounded-xl font-mono text-[11px] text-orange-300 overflow-x-auto">
{`deolho.enabled=true
deolho.application-name=CheckoutService
deolho.api-url=http://localhost:8888/events`}
                </pre>
              </div>
            )}

            {activeTab === "docker" && (
              <div className="space-y-3">
                <span className="text-xs text-zinc-500 block">Execute o contêiner do painel:</span>
                <pre className="bg-zinc-950 p-4 rounded-xl font-mono text-[11px] text-orange-300 overflow-x-auto">
{`docker run -d -p 8888:8888 \\
  -v ./deolho.db:/app/deolho.db \\
  gontww/deolho:latest`}
                </pre>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-orange-950/40 to-amber-950/20 border border-orange-500/20 rounded-3xl p-10 space-y-6 relative overflow-hidden">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Pronto para ficar de olho nos seus bugs?</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            Consulte a documentação completa para aprender sobre filtros avançados, configurações dinâmicas de IA e envio via logback appender.
          </p>
          <div className="pt-2">
            <Link 
              href="/docs" 
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white hover:bg-zinc-100 px-6 font-semibold text-zinc-950 transition duration-200"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto px-6 py-10 border-t border-zinc-900/60 text-center sm:flex sm:items-center sm:justify-between text-xs text-zinc-500 space-y-4 sm:space-y-0">
        <div>
          Desenvolvido por <a href="http://www.gont.com.br" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition">Augusto Gontijo</a>
        </div>
        <div>
          DeOlho © 2026. Licenciado sob AGPL-3.0.
        </div>
      </footer>
    </div>
  );
}
