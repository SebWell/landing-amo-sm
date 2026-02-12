import { useState } from "react";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const ChevronDown = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}><polyline points="6 9 12 15 18 9"/></svg>
);
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
const Info = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
);

const c = {
  fg: "hsl(0 0% 3.9%)",
  muted: "hsl(0 0% 45.1%)",
  mutedBg: "hsl(0 0% 96.1%)",
  border: "hsl(0 0% 89.8%)",
  bg: "hsl(0 0% 100%)",
  accent: "hsl(0 0% 9%)",
};

const s = {
  root: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: c.fg, background: c.bg, minHeight: "100vh",
    fontSize: 14, lineHeight: 1.6, WebkitFontSmoothing: "antialiased",
  },
  muted: { color: c.muted },
  card: { background: c.bg, border: `1px solid ${c.border}`, borderRadius: 8 },
  badge: {
    display: "inline-flex", alignItems: "center", borderRadius: 9999,
    border: `1px solid ${c.border}`, padding: "2px 10px",
    fontSize: 12, fontWeight: 500, color: c.muted,
  },
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: c.accent, color: "hsl(0 0% 98%)",
    padding: "10px 20px", borderRadius: 6, fontSize: 14, fontWeight: 500,
    border: "none", cursor: "pointer", textDecoration: "none",
  },
  btnOutline: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "transparent", color: c.fg,
    padding: "10px 20px", borderRadius: 6, fontSize: 14, fontWeight: 500,
    border: `1px solid ${c.border}`, cursor: "pointer", textDecoration: "none",
  },
  sep: { height: 1, background: c.border, border: "none", margin: "40px 0" },
  h2: { fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", margin: 0 },
};

// ── MISSIONS PAR PHASE ──
const phases = [
  {
    id: "01",
    title: "Montage & faisabilité",
    desc: "Cadrage du projet, faisabilité réglementaire et financière, sécurisation avant engagement foncier.",
    missions: [
      "Analyse du PLU, des servitudes et des risques (PPRI, PPRT, aléas retrait-gonflement des argiles)",
      "Étude d'adéquation programme / foncier / bilan prévisionnel",
      "Modélisation volumétrique sous SketchUp : vérification des gabarits, des prospects et de l'insertion urbaine",
      "Montage du Permis de Construire : constitution du dossier, échanges instructeur, suivi d'instruction",
      "Cadrage des contraintes techniques : accès, réseaux, mitoyenneté, pollution des sols, amiante",
      "Note de synthèse faisabilité avec grille de risques et estimation budgétaire",
    ],
    livrables: "Note de faisabilité, grille de risques, budget estimatif, planning macro",
  },
  {
    id: "02",
    title: "Études & conception",
    desc: "Suivi des études APS / APD / PRO en lien avec la maîtrise d'œuvre. Cohérence technique et économique à chaque jalon.",
    missions: [
      "Pilotage des réunions de conception avec architecte et BET (structure, fluides, acoustique, thermique)",
      "Vérification de conformité des études aux exigences du programme et du PC",
      "Suivi de l'évolution du budget prévisionnel au fil des phases d'études",
      "Mise au point du cahier des charges technique et des prescriptions générales",
      "Assistance à l'obtention des autorisations administratives complémentaires",
    ],
    livrables: "CR de conception, suivi budget études, tableau de conformité programme",
  },
  {
    id: "03",
    title: "Consultation & appel d'offres",
    desc: "Constitution du DCE, organisation des consultations, analyse et négociation. Des marchés clairs, des prix tenus, des entreprises fiables.",
    missions: [
      "Vérification du DCE avant lancement : CCTP, DPGF, plans, RC, CCAP, annexes techniques",
      "Présélection des entreprises : capacités, références, assurances, santé financière",
      "Organisation des consultations en lien avec la maîtrise d'œuvre",
      "Analyse des offres : dépouillement, grille multicritères, recherche de variantes économiques",
      "Assistance aux négociations et recommandation motivée pour le choix des entreprises",
      "Mise au point des marchés de travaux et vérification des pièces contractuelles",
    ],
    livrables: "DCE vérifié, rapport d'analyse des offres, tableau comparatif, avis motivé",
  },
  {
    id: "04",
    title: "Suivi d'exécution",
    desc: "Gestion opérationnelle du programme en phase travaux. Suivi technique, financier et administratif, anticipation des dérives.",
    missions: [
      "Réunion de lancement chantier et mise en place des process de suivi",
      "Vérification des situations de travaux, contrôle des avenants, suivi budgétaire temps réel",
      "Relances contractuelles, suivi des délais, gestion des ordres de service",
      "Animation des comités de pilotage et rédaction des comptes-rendus",
      "Reporting mensuel : avancement physique, financier, commercial, points de vigilance",
      "Suivi des assurances chantier (TRC, DO, CNR) et des obligations contractuelles",
    ],
    livrables: "Reporting mensuel, tableau de bord budgétaire, CR de pilotage",
  },
  {
    id: "05",
    title: "Volet commercial & pièces notaire",
    desc: "Coordination entre production technique et commercialisation. Concordance des pièces, gestion des TMA.",
    missions: [
      "Montage des pièces commerciales : plans de vente, notices descriptives, tableaux de surfaces",
      "Vérification et retouche des plans de vente sous SketchUp si nécessaire (3D, agencements, cotations)",
      "Vérification de la concordance pièces notaire / pièces marché / plans architecte",
      "Gestion des TMA : réception des demandes, reformulation, chiffrage, validation client, mise à jour plans",
      "Suivi des accords et refus, mise à jour des fiches modificatives acquéreurs",
      "Dépôt et suivi des pièces notaire",
    ],
    livrables: "Pièces commerciales vérifiées, fiches TMA, tableau de suivi concordance",
  },
  {
    id: "06",
    title: "Livraison, OPR & garanties",
    desc: "Préparation et assistance à la réception. Levée des réserves. Pilotage de la GPA jusqu'à clôture de l'opération.",
    missions: [
      "Préparation et assistance aux Opérations Préalables à la Réception (OPR)",
      "Visites de pré-livraison et contrôle de conformité aux prescriptions du marché",
      "États des lieux de livraison logements et parties communes",
      "Suivi de la levée des réserves, relances entreprises",
      "Pilotage de la GPA : désordres signalés, relances, suivi jusqu'à clôture",
      "Assistance à la constitution du DOE et des pièces de fin d'opération",
    ],
    livrables: "PV d'OPR, tableau de suivi des réserves, rapport GPA, checklist DOE",
  },
];

const iaModules = [
  { title: "Analyse réglementaire automatisée", desc: "Extraction PLU, croisement servitudes et risques — synthèse exploitable en quelques heures au lieu de plusieurs jours." },
  { title: "Reporting programme automatique", desc: "Avancement physique, financier, commercial — généré chaque semaine à partir de vos données. Vous relisez, vous ne produisez plus." },
  { title: "Base documentaire interrogeable", desc: "CCTP, CR chantier, études géotech, rapports SPS — posez la question en français, obtenez la réponse avec la source." },
  { title: "Suivi contractuel automatisé", desc: "Relances entreprises, alertes retard, suivi des avenants et OS. Intervention uniquement sur les exceptions." },
  { title: "Dashboard multi-programmes", desc: "Vue consolidée temps réel sur l'ensemble de vos opérations. Un écran au lieu de dix fichiers Excel." },
];

const packs = [
  {
    name: "Renfort ponctuel",
    price: "Sur devis",
    desc: "Mission ciblée sur une phase ou un sujet précis : appel d'offres, montage PC, livraison, audit.",
    includes: ["Intervention à la carte", "Facturation au réel", "Idéal pour un surcroît d'activité ou un déblocage"],
  },
  {
    name: "Convention de programme",
    price: "Sur devis",
    desc: "Engagement par phase avec livrables définis, du montage à la GPA ou sur les phases de votre choix.",
    includes: ["Budget fixe et prévisible", "Livrables contractuels par phase", "Modules IA inclus ou en option"],
    highlight: true,
  },
  {
    name: "Accompagnement continu",
    price: "Sur devis",
    desc: "Suivi de plusieurs programmes en parallèle, reporting automatisé, priorisation flexible.",
    includes: ["Disponibilité garantie", "Reporting automatisé multi-programmes", "Ajustable mois par mois"],
  },
];

const faqs = [
  {
    q: "AMO ou MOD — quelle différence concrète ?",
    a: "En AMO, je conseille et j'assiste — vous restez décisionnaire et signataire de tous les actes (marchés, ordres de service, réception). En MOD, j'agis par mandat en votre nom avec une assurance décennale dédiée. Les deux sont possibles selon votre besoin.",
  },
  {
    q: "Comment intervenez-vous en pratique ?",
    a: "Je m'intègre dans vos équipes comme un collaborateur opérationnel. J'ai travaillé comme ça pendant 17 ans chez Nexity, Cardinal et en consulting — je connais le fonctionnement interne d'un promoteur. Je travaille avec vos outils, je participe à vos réunions, j'utilise vos process.",
  },
  {
    q: "Les modules IA fonctionnent avec nos logiciels existants ?",
    a: "Oui. Je travaille à partir des données que vous avez déjà — fichiers Excel, PDF, emails, logiciels métier (SCI5, Gr Immo, Primpromo…). Les outils que je développe (workflows N8N, bases Supabase/Baserow, interfaces Weweb) se branchent sur votre existant. Pas de migration, opérationnel en quelques jours.",
  },
  {
    q: "C'est finançable ?",
    a: "Les modules IA sont éligibles au programme IA Booster France 2030 de Bpifrance (50% de prise en charge) et au Pack IA France Num (jusqu'à 80%, plafond 18 500 €). Le montage du dossier est inclus dans la prestation.",
  },
  {
    q: "On peut commencer par un seul programme ?",
    a: "C'est ce que je recommande. On identifie le programme le plus pertinent, on définit un périmètre clair, et vous jugez sur les résultats avant d'aller plus loin.",
  },
];


export default function OffreAMO() {
  const [openPhase, setOpenPhase] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showIA, setShowIA] = useState(false);

  return (
    <div style={s.root}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 24px" }}>

        {/* ──── HERO ──── */}
        <div style={{ marginBottom: 48 }}>
          <span style={s.badge}>Promotion immobilière · Résidentiel, commerces & coworking</span>
          <h1 style={{
            fontSize: 28, fontWeight: 600, margin: "16px 0 12px",
            letterSpacing: "-0.025em", lineHeight: 1.25,
          }}>
            Sébastien Mignot<br />
            <span style={{ fontWeight: 400, fontSize: 22, ...s.muted }}>Assistance à Maîtrise d'Ouvrage</span>
          </h1>
          <p style={{ ...s.muted, fontSize: 15, margin: "0 0 16px", maxWidth: 540, lineHeight: 1.7 }}>
            Conseil et assistance opérationnelle aux promoteurs immobiliers,
            du montage d'opération à la levée des dernières réserves.
            Intervention en renfort d'équipe, en remplacement provisoire
            ou sur programme complet.
          </p>
          <p style={{ fontSize: 13, margin: "0 0 24px", maxWidth: 540, lineHeight: 1.7, ...s.muted }}>
            +17 ans d'expérience en gestion de programmes résidentiels · +500 logements,
            2 500 m² de commerces et 1 500 m² d'activités livrés · Projets de 1 à 30 M€.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <a href="mailto:sebastien.mignot@gmail.com?subject=Prise%20de%20contact%20AMO" style={s.btnPrimary}>Prendre contact <ArrowRight /></a>
            <a href="#missions" style={s.btnOutline}>Voir les missions</a>
          </div>
        </div>

        {/* ──── EXPERIENCE ──── */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {[
              { val: "+17 ans", label: "en promotion immobilière — résidentiel, commerces et coworking" },
              { val: "+500 logts", label: "livrés + 2 500 m² commerces + 1 500 m² activités" },
              { val: "1 à 30 M€", label: "maîtrise budgétaire avec écart < 3% au budget référence" },
            ].map((item, i) => (
              <div key={i} style={{ ...s.card, padding: "14px 12px" }}>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 4 }}>
                  {item.val}
                </div>
                <div style={{ fontSize: 12, ...s.muted, lineHeight: 1.4 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ──── PARCOURS ──── */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ ...s.card, padding: 20, background: c.mutedBg }}>
            <div style={{ fontSize: 13, lineHeight: 1.8, ...s.muted }}>
              <p style={{ margin: "0 0 10px" }}>
                Responsable de programmes senior avec plus de 17 ans d'expérience chez des promoteurs
                de premier plan : <strong style={{ fontWeight: 500, color: c.fg }}>Nexity</strong> (Nantes, 2012-2016),
                <strong style={{ fontWeight: 500, color: c.fg }}> Groupe Cardinal</strong> (Paris, 2017-2020),
                puis <strong style={{ fontWeight: 500, color: c.fg }}>consultant indépendant</strong> (UK & NL, 2020-2023).
                Expérience complète de toutes les phases : faisabilité, coordination MOE,
                montage technique et financier, PC, conception, DCE, consultation et négociation
                des marchés, suivi d'exécution, volet commercial, livraison, GPA.
              </p>
              <p style={{ margin: "0 0 10px" }}>
                Opérations notables : <strong style={{ fontWeight: 500, color: c.fg }}>Le Quartz à Nantes</strong> (Pyramides
                d'Or 2014), <strong style={{ fontWeight: 500, color: c.fg }}>L'Avant-Scène à La Baule</strong>.
                Travaux complexes : fondations spéciales, chaufferies collectives, réhabilitation
                de bâtiments patrimoniaux.
              </p>
              <p style={{ margin: 0 }}>
                Double compétence développée ces dernières années en outils digitaux
                et automatisation (IA, workflows, bases de données) pour répondre
                aux défis opérationnels des promoteurs. Maîtrise avancée de SketchUp
                pour les études de faisabilité volumétriques, la vérification
                des plans de vente et la modélisation 3D de projet.
                Master 2 Management Immobilier (EFAB Paris).
              </p>
            </div>
          </div>
        </div>

        <hr style={s.sep} />

        {/* ──── MISSIONS ──── */}
        <div id="missions" style={{ marginBottom: 48 }}>
          <h2 style={{ ...s.h2, marginBottom: 4 }}>Périmètre d'intervention</h2>
          <p style={{ ...s.muted, fontSize: 13, marginBottom: 20, lineHeight: 1.7 }}>
            Chaque phase est activable indépendamment — en renfort ponctuel,
            sur un programme complet, ou sur des missions spécifiques.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {phases.map((phase, i) => {
              const isOpen = openPhase === i;
              return (
                <div key={i} style={{ ...s.card, overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenPhase(isOpen ? null : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 16px", border: "none", background: "transparent",
                      cursor: "pointer", fontFamily: "inherit", textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{
                        width: 24, height: 24, borderRadius: 6,
                        background: c.mutedBg, display: "flex", alignItems: "center",
                        justifyContent: "center", fontSize: 12, fontWeight: 600,
                        color: c.muted, flexShrink: 0,
                      }}>{phase.id}</span>
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{phase.title}</span>
                    </div>
                    <span style={{ flexShrink: 0 }}><ChevronDown open={isOpen} /></span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${c.border}` }}>
                      <p style={{ fontSize: 13, lineHeight: 1.7, margin: "14px 0 14px", ...s.muted }}>
                        {phase.desc}
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {phase.missions.map((m, j) => (
                          <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, lineHeight: 1.5 }}>
                            <span style={{ marginTop: 2, flexShrink: 0, ...s.muted }}><Check /></span>
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 14, padding: "10px 12px", background: c.mutedBg, borderRadius: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 500, ...s.muted }}>Livrables : </span>
                        <span style={{ fontSize: 12 }}>{phase.livrables}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ──── MODULES IA ──── */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <h2 style={s.h2}>Automatisation & IA</h2>
            <span style={{ ...s.badge, fontSize: 11 }}>En complément</span>
          </div>
          <p style={{ ...s.muted, fontSize: 13, marginBottom: 20, maxWidth: 540, lineHeight: 1.7 }}>
            Des outils opérationnels déployés sur vos données et vos process existants.
            Conçus avec les technologies que je maîtrise au quotidien : IA (Claude),
            workflows (N8N), bases de données (Supabase, Baserow), interfaces sur mesure (Weweb).
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {iaModules.map((mod, i) => (
              <div key={i} style={{ ...s.card, padding: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{mod.title}</div>
                <div style={{ fontSize: 13, ...s.muted, lineHeight: 1.6 }}>{mod.desc}</div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 12, ...s.card, padding: 16, background: c.mutedBg,
          }}>
            <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>
              Financements publics disponibles
            </div>
            <div style={{ fontSize: 13, ...s.muted, lineHeight: 1.7 }}>
              <strong style={{ fontWeight: 500, color: c.fg }}>IA Booster France 2030</strong> (Bpifrance, 50%)
              et <strong style={{ fontWeight: 500, color: c.fg }}>Pack IA France Num</strong> (80%, plafond 18 500 €).
              Montage du dossier inclus dans la prestation.
            </div>
          </div>
        </div>

        <hr style={s.sep} />

        {/* ──── FORMULES ──── */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ ...s.h2, marginBottom: 16 }}>Formules d'intervention</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {packs.map((p, i) => (
              <div key={i} style={{
                ...s.card, padding: 18,
                ...(p.highlight ? { borderColor: c.fg, borderWidth: 2 } : {}),
              }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 600 }}>{p.name}</span>
                    {p.highlight && <span style={{ ...s.badge, fontSize: 11 }}>Recommandé</span>}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{p.price}</span>
                </div>
                <div style={{ fontSize: 13, ...s.muted, marginBottom: 10 }}>{p.desc}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {p.includes.map((item, j) => (
                    <div key={j} style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      fontSize: 13, lineHeight: 1.5,
                    }}>
                      <span style={{ marginTop: 1, flexShrink: 0, ...s.muted }}><Check /></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ──── FAQ ──── */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ ...s.h2, marginBottom: 16 }}>Questions fréquentes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ ...s.card, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px", border: "none", background: "transparent",
                    cursor: "pointer", fontFamily: "inherit", textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 500, paddingRight: 16 }}>{faq.q}</span>
                  <span style={{ flexShrink: 0 }}><ChevronDown open={openFaq === i} /></span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: "0 16px 14px", fontSize: 13, ...s.muted, lineHeight: 1.7,
                    borderTop: `1px solid hsl(0 0% 95%)`, paddingTop: 14,
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <hr style={s.sep} />

        {/* ──── CTA ──── */}
        <div id="contact" style={{ ...s.card, padding: 24, textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6, letterSpacing: "-0.01em" }}>
            Échangeons sur votre besoin
          </h2>
          <p style={{ ...s.muted, fontSize: 13, marginBottom: 20, maxWidth: 440, margin: "0 auto 20px" }}>
            Premier échange de 45 minutes pour comprendre votre organisation,
            identifier les missions pertinentes et définir un périmètre d'intervention.
          </p>
          <a href="mailto:sebastien.mignot@gmail.com?subject=Prise%20de%20contact%20AMO" style={s.btnPrimary}>
            Prendre contact <ArrowRight />
          </a>
          <div style={{
            marginTop: 16, display: "flex", justifyContent: "center",
            gap: 16, flexWrap: "wrap", fontSize: 13, ...s.muted,
          }}>
            <span>06 14 57 28 38</span>
            <span>sebastien.mignot@gmail.com</span>
            <span>Arradon (56)</span>
          </div>
        </div>

        {/* ──── CADRE JURIDIQUE ──── */}
        <details style={{ marginBottom: 32 }}>
          <summary style={{
            fontSize: 13, fontWeight: 500, ...s.muted, cursor: "pointer",
            padding: "8px 0", listStyle: "none",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <Info /> Cadre juridique & assurance
          </summary>
          <div style={{
            ...s.card, padding: 16, marginTop: 8, fontSize: 13,
            ...s.muted, lineHeight: 1.7,
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16, marginBottom: 16,
            }}>
              {[
                ["Statut", "AMO strict"],
                ["Responsabilité", "Obligation de moyens"],
                ["Assurance", "RC Professionnelle"],
                ["Structure", "Auto-entrepreneur"],
              ].map(([label, value], i) => (
                <div key={i}>
                  <div style={{
                    fontSize: 11, fontWeight: 500, textTransform: "uppercase",
                    letterSpacing: "0.05em", marginBottom: 2,
                  }}>{label}</div>
                  <div style={{ fontSize: 13, color: c.fg, fontWeight: 500 }}>{value}</div>
                </div>
              ))}
            </div>
            <p style={{ margin: "0 0 12px" }}>
              Mission de conseil et d'assistance au sens de la loi MOP.
              Le maître d'ouvrage reste seul décisionnaire et signataire.
              Pas de signature de marchés, pas de direction de travaux, pas de maîtrise d'œuvre.
            </p>
            <p style={{ margin: 0, fontSize: 12 }}>
              Convention de Maîtrise d'Ouvrage Déléguée (MOD) avec assurance décennale
              possible sur demande pour les missions nécessitant pouvoir de représentation.
            </p>
          </div>
        </details>

        {/* ──── FOOTER ──── */}
        <div style={{
          textAlign: "center", fontSize: 12, ...s.muted,
          paddingBottom: 24, lineHeight: 1.7,
        }}>
          Sébastien Mignot — Auto-entrepreneur — SIRET [en cours d'immatriculation]
          <br />
          RC Professionnelle n°[contrat] — [Nom assureur]
        </div>
      </div>
    </div>
  );
}
