'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, AudioLines, CalendarDays, Check, Drum, Guitar, Home, Instagram, Menu, Music2, Piano, Sparkles, X } from 'lucide-react';

const instagram = 'https://www.instagram.com/jh.martins1/';
const instrumentos = [
  { name: 'Violão', family: 'CORDAS', icon: Guitar, text: 'Dos primeiros acordes às suas músicas favoritas. Um instrumento para levar a música com você.', tone: 'orange' },
  { name: 'Guitarra', family: 'CORDAS', icon: Guitar, text: 'Encontre seu timbre e explore riffs, solos e os estilos que fazem você querer tocar.', tone: 'teal' },
  { name: 'Piano', family: 'TECLAS', icon: Piano, text: 'Descubra melodias, harmonias e novas formas de se expressar, uma tecla de cada vez.', tone: 'yellow' },
  { name: 'Bateria', family: 'PERCUSSÃO', icon: Drum, text: 'Sinta o ritmo, desenvolva sua coordenação e dê vida às batidas das suas músicas favoritas.', tone: 'lavender' },
  { name: 'Baixo', family: 'CORDAS', icon: Guitar, text: 'Conecte ritmo e harmonia. Aprenda as linhas de baixo que dão personalidade a cada música.', tone: 'teal' },
  { name: 'Teclado', family: 'TECLAS', icon: Piano, text: 'Um universo de sons ao seu alcance. Explore acordes, melodias e acompanhamentos.', tone: 'lavender' },
  { name: 'Ukulele', family: 'CORDAS', icon: Guitar, text: 'Pequeno no tamanho, cheio de possibilidades. Comece com acordes e canções que você adora.', tone: 'orange' },
  { name: 'Flauta doce', family: 'SOPRO', icon: Music2, text: 'Transforme o sopro em melodia e descubra a música de um jeito leve e acessível.', tone: 'yellow' },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const instrument = instrumentos.find((item) => item.name === selected);

  useEffect(() => {
    if (selected) {
      detailRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'center',
      });
    }
  }, [selected]);

  return (
    <>
      <a className="skipLink" href="#conteudo">Pular para o conteúdo</a>
      <header className="topbar" id="inicio">
        <div className="container headerInner">
          <a className="brand" href="#inicio" aria-label="Tocaê — início">
            <Image src="/logo-tocae.png" alt="" width={52} height={52} priority />
            <span className="brandWords">Tocaê<span>ESCOLA DE MÚSICA</span></span>
          </a>
          <nav className={menuOpen ? 'navigation isOpen' : 'navigation'} aria-label="Navegação principal">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>A Tocaê</a>
            <a href="#instrumentos" onClick={() => setMenuOpen(false)}>Instrumentos</a>
            <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          </nav>
          <a className="headerCta" href="#contato">Vamos conversar <ArrowUpRight size={17} /></a>
          <button className="menuToggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroText">
              <span className="eyebrow"><span className="statusDot" /> SUA CASA. SEU RITMO. SUA MÚSICA.</span>
              <h1>A vida fica<br />melhor com<br /><em>música.</em><span className="headingStar" aria-hidden="true">✳</span></h1>
              <p>Aulas de música que vão até você. Aprenda seu instrumento favorito, no seu tempo e no conforto da sua casa.</p>
              <div className="heroActions">
                <a className="button buttonOrange" href="#instrumentos">Encontre seu instrumento <ArrowUpRight size={19} /></a>
                <a className="textLink" href="#como-funciona">Como funciona <ArrowDown size={16} /></a>
              </div>
              <div className="heroNote"><span className="noteIcon"><Music2 size={18} /></span><span>Começando do zero? <strong>Seu lugar é aqui.</strong></span></div>
            </div>
            <div className="heroVisual">
              <div className="vinyl" aria-hidden="true"><span>tocaê<br /><Music2 size={18} /></span></div>
              <div className="photoFrame">
                <Image src="/aula-violao.png" alt="Pessoa tocando um violão acústico no aconchego de casa" fill priority sizes="(max-width: 760px) 90vw, 46vw" />
                <div className="photoCaption"><span>AUMENTE O SOM DA SUA VIDA</span><AudioLines size={36} strokeWidth={1.4} /></div>
              </div>
              <div className="musicSticker" aria-hidden="true"><span>mais música,</span><strong>mais você.</strong><Sparkles size={24} /></div>
              <div className="homeBadge"><span><Home size={22} /></span><div>O melhor lugar para aprender?<strong>A sua casa.</strong></div><ArrowUpRight size={20} /></div>
              <span className="visualFootnote">APERTE O PLAY EM UMA NOVA HISTÓRIA.</span>
            </div>
          </div>
          <div className="heroBottom container"><span>A música é para todo mundo. Inclusive você.</span><a href="#sobre" aria-label="Conheça a Tocaê"><ArrowDown size={18} /></a><span>DESDE O PRIMEIRO ACORDE.</span></div>
        </section>

        <div className="musicStrip" aria-label="Aulas presenciais, no seu ritmo e para todas as idades">
          <span>Aulas presenciais</span><span aria-hidden="true">✳</span><span>No seu ritmo</span><span aria-hidden="true">✳</span><span>Para todas as idades</span><span aria-hidden="true">✳</span><span>Do seu jeito</span><span aria-hidden="true">✳</span>
        </div>

        <section className="aboutSection" id="sobre">
          <div className="container">
            <div className="sectionIntro"><div><span className="eyebrow">PRAZER, SOMOS A TOCAÊ</span><h2>Menos complicação.<br /><em>Mais som na sua vida.</em></h2></div><p>A gente acredita que aprender música deve fazer parte da vida. Por isso, levamos aulas particulares e personalizadas até a sua casa. Você traz a vontade. A gente ajuda com os primeiros acordes.</p></div>
            <div className="benefits">
              <article><span className="benefitIcon"><Home size={25} /></span><span className="smallIndex">01 / CONFORTO</span><h3>Seu espaço vira{' '}<br />sala de música.</h3><p>Sem trânsito, sem correria. O professor vai até você no horário combinado.</p></article>
              <article><span className="benefitIcon"><CalendarDays size={25} /></span><span className="smallIndex">02 / LIBERDADE</span><h3>Uma aula que{' '}<br />combina com você.</h3><p>Seu nível, seus objetivos e as músicas que você gosta. Cada aula tem o seu ritmo.</p></article>
              <article><span className="benefitIcon"><Music2 size={25} /></span><span className="smallIndex">03 / POSSIBILIDADES</span><h3>A vontade de tocar{' '}<br />já é um começo.</h3><p>Ainda não tem instrumento? Tudo bem. Converse com a gente sobre como começar.</p></article>
            </div>
          </div>
        </section>

        <section className="instrumentsSection" id="instrumentos">
          <div className="container">
            <div className="sectionIntro"><div><span className="eyebrow">QUAL É O SEU SOM?</span><h2>Um instrumento.<br /><em>Infinitas possibilidades.</em></h2></div><p>Do primeiro acorde àquela música que você sempre quis tocar. Escolha um instrumento e descubra por onde começar.</p></div>
            <div className="instrumentGrid">
              {instrumentos.map(({ name, family, icon: Icon, tone }, index) => (
                <button className={`instrumentCard ${tone} ${selected === name ? 'selected' : ''}`} key={name} type="button" onClick={() => setSelected(selected === name ? null : name)} aria-expanded={selected === name} aria-controls="instrument-detail">
                  <span className="instrumentTop"><span>{family}</span><span>0{index + 1}</span></span>
                  <span className="instrumentArt" aria-hidden="true"><span className="artOrbit" /><Icon size={95} strokeWidth={1.15} /></span>
                  <span className="instrumentBottom"><strong>{name}</strong><span className="instrumentArrow">{selected === name ? <X size={19} /> : <ArrowUpRight size={21} />}</span></span>
                </button>
              ))}
            </div>
            <div id="instrument-detail" ref={detailRef} className={instrument ? 'instrumentDetail visible' : 'instrumentDetail'} aria-live="polite">
              {instrument && <><div><span className="eyebrow">SEU PRÓXIMO PASSO</span><h3>Vamos de {instrument.name.toLowerCase()}?</h3><p>{instrument.text}</p></div><a className="button buttonNavy" href="#contato">Quero saber sobre as aulas <ArrowUpRight size={19} /></a></>}
            </div>
            <p className="instrumentHint"><Sparkles size={17} /> Não sabe qual escolher? <a href="#contato">A gente te ajuda a descobrir. <ArrowUpRight size={14} /></a></p>
          </div>
        </section>

        <section className="howSection" id="como-funciona">
          <div className="container howGrid">
            <div className="howIntro"><span className="eyebrow">É MAIS SIMPLES DO QUE PARECE</span><h2>Seu primeiro acorde<br />está <em>mais perto.</em></h2><p>Você não precisa saber nada de música para começar. Só precisa dar o primeiro passo.</p><a className="button buttonOrange" href="#contato">Bora começar? <ArrowUpRight size={19} /></a><div className="soundWave" aria-hidden="true">{Array.from({ length: 31 }, (_, i) => <span key={i} style={{ height: `${18 + Math.abs(Math.sin(i * .7)) * 72}px` }} />)}</div></div>
            <div className="steps">
              <article><span className="stepNumber">01</span><div><span className="smallIndex">DESCUBRA</span><h3>Escolha seu instrumento</h3><p>Conte para a gente o que você quer aprender e se já teve alguma experiência com música.</p></div><Music2 size={22} /></article>
              <article><span className="stepNumber">02</span><div><span className="smallIndex">COMBINE</span><h3>Encontre o seu horário</h3><p>Converse com a gente para consultar a disponibilidade e combinar o melhor momento para sua aula.</p></div><CalendarDays size={22} /></article>
              <article><span className="stepNumber">03</span><div><span className="smallIndex">TOQUE</span><h3>Abra a porta para a música</h3><p>No dia combinado, o professor vai até você. A partir daí, é aprender e curtir cada conquista.</p></div><Home size={22} /></article>
            </div>
          </div>
        </section>

        <section className="contactSection" id="contato">
          <div className="container contactInner"><div><span className="eyebrow">TODA GRANDE HISTÓRIA TEM UM COMEÇO</span><h2>A sua pode começar<br />com um <em>“oi”.</em><span aria-hidden="true">✳</span></h2><p>Fale com a gente pelo Instagram. Tire suas dúvidas,<br className="desktopBreak" /> conheça as aulas e encontre o seu som.</p><a className="button buttonNavy" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /> Vamos conversar <ArrowUpRight size={20} /></a><span className="contactNote"><Check size={15} /> Do primeiro acorde em diante, estamos com você.</span></div><div className="contactRecord" aria-hidden="true"><div className="recordLabel"><Music2 size={42} /><strong>Tocaê</strong><span>FEITO PARA O SEU RITMO</span></div></div></div>
        </section>
      </main>

      <footer><div className="container"><div className="footerTop"><a className="brand" href="#inicio"><Image src="/logo-tocae.png" alt="Logo Tocaê" width={48} height={48} /><span className="brandWords">Tocaê<span>ESCOLA DE MÚSICA</span></span></a><p>Música para aprender.<br /><span>Liberdade para ser você.</span></p><a className="footerSocial" href={instagram} target="_blank" rel="noopener noreferrer">Encontre a gente <Instagram size={20} /><ArrowUpRight size={17} /></a></div><div className="footerBottom"><span>© 2026 Tocaê. Todos os direitos reservados.</span><a href="/privacidade">Política de Privacidade</a><span>Feito com ritmo, afeto e música. <Music2 size={13} /></span></div></div></footer>
    </>
  );
}
