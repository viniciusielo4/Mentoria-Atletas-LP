import { useState, useEffect, useRef } from "react";

const fadeInStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: #0d0d0d;
    color: #f0ebe1;
    margin: 0;
    overflow-x: hidden;
  }

  .font-display { font-family: 'Cormorant Garamond', serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes pulse-ring {
    0% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.08); opacity: 0.1; }
    100% { transform: scale(1); opacity: 0.4; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
  .animate-float { animation: float 4s ease-in-out infinite; }

  .gold-text {
    background: linear-gradient(135deg, #c9a96e 0%, #e8d5a3 40%, #c9a96e 70%, #a0784a 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }

  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(201, 169, 110, 0.12);
  }

  .divider {
    width: 60px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c9a96e, transparent);
    margin: 0 auto;
  }

  .noise-bg::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    pointer-events: none;
    z-index: 0;
  }

  .step-line::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2rem;
    width: 1px;
    height: 2rem;
    background: linear-gradient(to bottom, #c9a96e44, transparent);
  }

  .cta-btn {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .cta-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #c9a96e, #a0784a);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .cta-btn:hover::before { opacity: 0.15; }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
`;

const steps = [
  {
    num: "01",
    title: "Quatro encontros online",
    desc: "Sessões individuais via Google Meet com duração de 1 hora cada, no seu ritmo e conforto.",
  },
  {
    num: "02",
    title: "Anamnese & Avaliação",
    desc: "No primeiro encontro, realizamos uma avaliação completa das suas habilidades psicológicas.",
  },
  {
    num: "03",
    title: "Estratégias personalizadas",
    desc: "Definimos juntos as estratégias mentais mais eficazes para a sua modalidade e objetivos.",
  },
  {
    num: "04",
    title: "Suporte via WhatsApp",
    desc: "Acesso direto durante todo o mês para tirar dúvidas e manter a evolução constante.",
  },
  {
    num: "05",
    title: "Ebook personalizado",
    desc: "Material exclusivo criado de acordo com o seu perfil, necessidades e metas.",
  },
  {
    num: "06",
    title: "Avaliação & Feedback",
    desc: "Análise do que funcionou e do que pode ser aprimorado para continuar crescendo.",
  },
  {
    num: "07",
    title: "Áudio de visualização",
    desc: "Gravação exclusiva com visualização da prova-alvo ou prática de mindfulness.",
  },
  {
    num: "08",
    title: "Curadoria de conteúdo",
    desc: "Indicações de livros, vídeos, filmes e séries para aprofundar sua preparação mental.",
  },
  {
    num: "09",
    title: "Orientação parental",
    desc: "Para adolescentes ou quando necessário, inclusão de 1 sessão de orientação parental no esporte.",
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="card-hover"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        border: "1px solid rgba(201,169,110,0.15)",
        borderRadius: "16px",
        padding: "28px 24px",
      }}
    >
      <div
        className="font-display"
        style={{
          fontSize: "2.8rem",
          lineHeight: 1,
          color: "rgba(201,169,110,0.25)",
          marginBottom: "12px",
          letterSpacing: "-0.02em",
        }}
      >
        {step.num}
      </div>
      <h3
        className="font-display"
        style={{ fontSize: "1.15rem", fontWeight: 600, color: "#f0ebe1", marginBottom: "8px", lineHeight: 1.3 }}
      >
        {step.title}
      </h3>
      <p style={{ fontSize: "0.88rem", color: "rgba(240,235,225,0.6)", lineHeight: 1.7, margin: 0 }}>
        {step.desc}
      </p>
    </div>
  );
}

export default function MentoriaPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{fadeInStyle}</style>
      <div className="noise-bg" style={{ minHeight: "100vh", position: "relative", backgroundColor: "#0a0a0a" }}>

        {/* Ambient orbs */}
        <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)", top: "-100px", right: "-100px" }} />
        <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(160,120,74,0.05) 0%, transparent 70%)", bottom: "20%", left: "-80px" }} />

        {/* HERO */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px 60px", textAlign: "center", zIndex: 1 }}>

          {/* Badge */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.1s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(201,169,110,0.3)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "40px",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c9a96e",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a96e", display: "inline-block", animation: "pulse-ring 2s ease infinite" }} />
            Psicologia do Esporte: Ana Cristina
          </div>

          <h1
            className="font-display"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.25s",
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "8px",
              color: "#f0ebe1",
            }}
          >
            Mentoria Mental
          </h1>
          <h1
            className="font-display gold-text"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.35s",
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "32px",
            }}
          >
            para Atletas
          </h1>

          <p
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.45s",
              maxWidth: "520px",
              fontSize: "1.05rem",
              color: "rgba(240,235,225,0.65)",
              lineHeight: 1.75,
              marginBottom: "56px",
            }}
          >
            Desenvolva sua mente para performar no seu melhor nível — com acompanhamento individualizado, estratégias validadas e suporte contínuo durante 1 mês.
          </p>

          {/* Price Card */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
              transition: "all 0.8s ease 0.55s",
              background: "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(160,120,74,0.06) 100%)",
              border: "1px solid rgba(201,169,110,0.3)",
              borderRadius: "20px",
              padding: "40px 48px",
              maxWidth: "440px",
              width: "100%",
              marginBottom: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent)" }} />

            <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "8px", fontWeight: 500 }}>
              Mentoria Online — 1 Mês
            </p>

            <div className="font-display" style={{ fontSize: "3.5rem", fontWeight: 300, color: "#f0ebe1", lineHeight: 1, marginBottom: "4px" }}>
              R$ 850
              <span style={{ fontSize: "1.5rem", color: "rgba(240,235,225,0.5)" }}>,00</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(240,235,225,0.5)", marginBottom: "24px" }}>
              via PIX
            </p>

            <div className="divider" style={{ marginBottom: "20px" }} />

            <p style={{ fontSize: "0.85rem", color: "rgba(240,235,225,0.6)", marginBottom: 0 }}>
              Ou parcelado via cartão de crédito pelo link do{" "}
              <span style={{ color: "#c9a96e" }}>Mercado Pago</span>
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5548991124127"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.7s ease 0.7s",
              display: "inline-block",
              padding: "16px 40px",
              background: "linear-gradient(135deg, #c9a96e 0%, #a0784a 100%)",
              color: "#0a0a0a",
              borderRadius: "100px",
              fontWeight: 500,
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(201,169,110,0.25)",
              zIndex: 1,
            }}
          >
            Quero começar minha mentoria
          </a>

          {/* scroll indicator */}
          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4 }}>
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Como funciona</span>
            <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, #c9a96e, transparent)" }} />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ position: "relative", zIndex: 1, padding: "100px 24px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "72px" }}>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>
                O que está incluído
              </p>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ebe1", lineHeight: 1.15 }}
              >
                Como funciona a
                <br />
                <em className="gold-text" style={{ fontStyle: "italic" }}>sua transformação</em>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {steps.map((step, i) => (
                <StepCard key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* FOR WHOM */}
        <section style={{ position: "relative", zIndex: 1, padding: "80px 24px" }}>
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(201,169,110,0.15)",
              borderRadius: "24px",
              padding: "64px 48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)" }} />

            <div className="animate-float" style={{ fontSize: "3rem", marginBottom: "24px" }}>🏅</div>

            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ebe1", lineHeight: 1.2, marginBottom: "20px" }}
            >
              Para atletas que querem ir
              <em className="gold-text" style={{ fontStyle: "italic", display: "block" }}>além do físico</em>
            </h2>

            <p style={{ fontSize: "0.95rem", color: "rgba(240,235,225,0.6)", lineHeight: 1.8, marginBottom: "40px" }}>
              A performance começa na mente. Trabalharemos juntos para desenvolver foco, controle emocional, confiança e resiliência — as habilidades que separam atletas bons de atletas extraordinários.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {["Foco em competição", "Controle da ansiedade", "Confiança mental", "Resiliência", "Visualização", "Mindfulness"].map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    border: "1px solid rgba(201,169,110,0.25)",
                    borderRadius: "100px",
                    fontSize: "0.78rem",
                    color: "rgba(240,235,225,0.65)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ position: "relative", zIndex: 1, padding: "80px 24px 120px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "16px" }}>
              Comece agora
            </p>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ebe1", lineHeight: 1.15, marginBottom: "16px" }}
            >
              Pronto para elevar sua
              <em className="gold-text" style={{ fontStyle: "italic", display: "block" }}>performance mental?</em>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(240,235,225,0.5)", marginBottom: "40px", lineHeight: 1.7 }}>
              Entre em contato e dê o primeiro passo rumo à sua melhor versão.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "center" }}>
              <a
                href="https://wa.me/5548991124127"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                style={{
                  display: "inline-block",
                  padding: "18px 48px",
                  background: "linear-gradient(135deg, #c9a96e 0%, #a0784a 100%)",
                  color: "#0a0a0a",
                  borderRadius: "100px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  letterSpacing: "0.03em",
                  textDecoration: "none",
                  boxShadow: "0 12px 40px rgba(201,169,110,0.3)",
                  width: "100%",
                  maxWidth: "340px",
                  textAlign: "center",
                }}
              >
                Falar pelo WhatsApp
              </a>
              <p style={{ fontSize: "0.78rem", color: "rgba(240,235,225,0.35)", margin: 0 }}>
                Mentoria Online — R$ 850,00 PIX ou parcelado
              </p>
            </div>
          </div>
        </section>

        {/* Frase de impacto */}
    <section style={{ position: "relative", zIndex: 1, padding: "40px 24px 60px", textAlign: "center" }}>
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
     <p
      className="font-display"
      style={{
        fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
        fontStyle: "italic",
        fontWeight: 300,
        color: "rgba(240,235,225,0.35)",
        lineHeight: 1.6,
        letterSpacing: "0.01em",
        margin: 0,
      }}
    >
      "A mente desiste mil vezes antes do corpo.
      <br />
      <span style={{ color: "rgba(201,169,110,0.6)" }}>É ela que você deve treinar.</span>"
    </p>
  </div>
</section>

        {/* FOOTER */}
        <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(240,235,225,0.25)", margin: 0 }}>
            © 2026 · Psicologia do Esporte · Mentoria para Atletas
          </p>
        </footer>

      </div>
    </>
  );
}
