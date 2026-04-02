const WHATSAPP_BASE_URL = "https://wa.me/5512988051077";

const origemPagina = window.location.pathname.toLowerCase().includes("catalogo")
  ? "catalogo"
  : "home";

const catalogoSuplementos = [
  {
    id: 1,
    nome: "Whey Protein Concentrado",
    marca: "Dux Nutrition",
    peso: "900g",
    categoria: "proteina",
    descricao: "Auxilia no ganho de massa muscular.",
    preco: "R$ 199,90",
    imagem: "https://cdn.awsli.com.br/732/732538/produto/144599561/unit-rio---sem-sabor-6467ahq3xi.png",
  },
  {
    id: 2,
    nome: "Creatina Max Titanium 300g",
    marca: "MAX TITANIUM",
    peso: "300g",
    categoria: "creatina",
    descricao: "Creatina monohidratada pura",
    preco: "Consulte o valor",
    imagem: "https://images.tcdn.com.br/img/img_prod/996597/creatina_300g_pote_max_titanium_6940_1_27fd86d998d9077967d06165be82a759.png",
  },
  {
    id: 3,
    nome: "ZMA Testo Booster",
    marca: "INTEGRALMÉDICA",
    peso: "90 cápsulas", // Padrão desse pote da Integral
    categoria: "vitaminas",
    descricao: "Suporte hormonal, melhora na qualidade do sono e recuperação muscular.",
    preco: "Consulte o valor",
    imagem: "https://cdn.shopify.com/s/files/1/0742/9632/8446/files/zma-testo-booster-2199254.png?v=1771964603",
  },
  {
    id: 4,
    nome: "Whey Protein Isolate - ISO Triple Zero",
    marca: "INTEGRALMÉDICA",
    peso: "900g",
    categoria: "proteina",
    descricao: "Proteína isolada de alta pureza e rápida absorção. Baixo teor de hidratos e gorduras.",
    preco: "Consulte o valor",
    imagem: "https://cdn.shopify.com/s/files/1/0742/9632/8446/files/whey-protein-isolado-900g-9151573.png?v=1772816376"
  },
  {
    id: 5,
    nome: "Creatina Hardcore",
    marca: "INTEGRALMÉDICA",
    peso: "300g",
    categoria: "creatina",
    descricao: "100% pura. Aumenta a força, potência e acelera a recuperação muscular.",
    preco: "Consulte o valor",
    imagem: "https://nexodata.vteximg.com.br/arquivos/ids/208142/Creatina-em-Po-Hardcore-Integralmedica-300g---7896311708314---Posicao-1.png?v=638369630572630000"
  },
  {
    id: 6,
    nome: "Caffeinex 200",
    marca: "ATLHETICA NUTRITION",
    peso: "60 cápsulas",
    categoria: "termogenico",
    descricao: "200mg de cafeína. Energia e foco com dose equilibrada para o teu dia a dia.",
    preco: "Consulte o valor",
    imagem: "https://cdn.awsli.com.br/800x800/1253/1253915/produto/327970822/captura-de-tela-2023-10-20-163335-ac4ld0dtd7-removebg-preview-vbr4fot289.png"
  },
  {
    id: 7,
    nome: "Caffeinex 400",
    marca: "ATLHETICA NUTRITION",
    peso: "60 cápsulas",
    categoria: "termogenico",
    descricao: "400mg de cafeína. Energia extrema e foco máximo para treinos intensos.",
    preco: "Consulte o valor",
    imagem: "https://tfbrnp.vtexassets.com/arquivos/ids/163968-260-0/CAFFEINEX-400MG.png?v=638375580103100000"
  },
  {
    id: 8,
    nome: "Creatine Pure",
    marca: "dark labe",
    peso: "300g",
    categoria: "creatina",
    descricao: "Creatina 100% pura para um aumento de força explosiva e ganhos reais.",
    preco: "Consulte o valor",
    imagem: "https://darklabsuplementos.com.br/cdn/shop/files/creatina-dark-lab-300g-1.png?v=1766070680"
  }
  ,
  {
    id: 9,
    nome: "Colágeno Hidrolisado",
    marca: "DARK LAB",
    peso: "120 cápsulas",
    categoria: "vitamina",
    descricao: "Fortalece pele, cabelo, unhas e articulações. Enriquecido com Vitamina C.",
    preco: "Consulte o valor",
    imagem: "https://espacosauderio.com.br/wp-content/uploads/2023/08/Colageno-Hidrolisado-Tipo-2-Peptideos-Vitamina-C-e-Vitamina-A-Dark-Lab.png",
  },
  {
    id: 10,
    nome: "Dark Mass - Hipercalórico",
    marca: "DARK LAB",
    peso: "3kg",
    categoria: "hipercalorico",
    descricao: "Ganho de massa explosivo. Contém Whey, BCAA e Creatina na fórmula.",
    preco: "Consulte o valor",
    imagem: "https://darklabsuplementos.com.br/cdn/shop/files/hipercalorico-darkmass-dark-lab-1.webp?v=1774273610",
  },
  {
    id: 11,
    nome: "Glutamina Pure",
    marca: "BLACK SKULL",
    peso: "150g",
    categoria: "aminoacido",
    descricao: "Recuperação muscular ultra rápida e reforço total ao sistema imunológico.",
    preco: "Consulte o valor",
    imagem: "https://brasilfitsuplementos.com.br/wp-content/uploads/2023/01/COMBOS_BRASIL_FIT__3_-removebg-preview.png",
  },
  {
    id: 12,
    nome: "Whey 100% HD",
    marca: "BLACK SKULL",
    peso: "900g",
    categoria: "proteina",
    descricao: "Proteína de alto valor biológico com BCAA. Zero lactose e fácil digestão.",
    preco: "Consulte o valor",
    imagem: "https://dmvfarma.vtexassets.com/arquivos/ids/299770/3e30299b-827f-455e-a7cd-7712a67e1797.jpg?v=638974317547130000",
  },
  {
    id: 13,
    nome: "Multivitamínico Premium",
    marca: "DUX NUTRITION",
    peso: "90 cápsulas",
    categoria: "vitamina",
    descricao: "Complexo com 17 vitaminas e minerais para energia e imunidade máxima.",
    preco: "Consulte o valor",
    imagem: "https://bracodeferroscs.com.br/arquivos/produtos/MXiHRasG5YqVGBc235456.png",
  },
  {
    id: 14,
    nome: "Kimera Woman",
    marca: "IRIDIUM LABS",
    peso: "60 cápsulas",
    categoria: "termogenico",
    descricao: "Termogênico de elite para queima de gordura e energia focado no público feminino.",
    preco: "Consulte o valor",
    imagem: "https://cdn.awsli.com.br/2500x2500/2503/2503151/produto/275759869/kimera-thermo-60-comps-c9025ce6-rjbi92isy1.png",
  },
  {
    id: 15,
    nome: "Creatine Caveira Preta",
    marca: "BLACK SKULL",
    peso: "300g",
    categoria: "creatina",
    descricao: "Creatina 100% pura para auxílio no ganho de força, potência e massa muscular explosiva.",
    preco: "Consulte o valor",
    imagem: "https://hdsuplementosthe.com.br/wp-content/uploads/2025/04/142.png"
  },
  {
    id: 16,
    nome: "Creatina Monohidratada",
    marca: "DUX NUTRITION",
    peso: "300g",
    categoria: "creatina",
    descricao: "100% pura e monohidratada. Referência em pureza para ganho de força e explosão.",
    preco: "Consulte o valor",
    imagem: "https://cdn.awsli.com.br/600x700/1253/1253915/produto/210407122/61fb7pv3a7l-alli1tp9nk-removebg-preview-dq1p4iz0f7.png"
  },
  {
    id: 17,
    nome: "Whey Pro Max Titanium",
    marca: "MAX TITANIUM",
    peso: "1kg",
    categoria: "proteina",
    descricao: "Ideal para ganho de massa com alto teor de aminoácidos essenciais.",
    preco: "Consulte o valor",
    imagem: "https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/3d0a3824-2b1c-4999-94cc-ab6b8c6d1d2a___7f703c74741643a96d487ab5455d6805.webp"
  },
  {
    id: 18,
    nome: "Anabolic Mass 28500",
    marca: "PROFIT LABORATÓRIOS",
    peso: "3kg",
    categoria: "hipercalorico",
    descricao: "Fórmula anabólica completa com Whey, Albumina e Colágeno para ganho de peso rápido.",
    preco: "Consulte o valor",
    imagem: "https://acdn-us.mitiendanube.com/stores/004/339/075/products/anabolic_mass_3kg_chocolate-f0bbc2965ee4dbbb3e17301431436639-480-0.webp"
  },
  {
    id: 19,
    nome: "Creatine Monohydrate Power",
    marca: "PROFIT LABORATÓRIOS",
    peso: "300g",
    categoria: "creatina",
    descricao: "Aumento de força e resistência para treinos de alta intensidade.",
    preco: "Consulte o valor",
    imagem: "https://images.tcdn.com.br/img/img_prod/767774/creatine_monohydrate_power_150g_329_1_4429867ec4daf01446d93de33f2e1a61.png"
  },
  {
    id: 20,
    nome: "Hyper Whey Top Quality",
    marca: "PROFIT LABORATÓRIOS",
    peso: "900g",
    categoria: "proteina",
    descricao: "Blend de proteínas de alto valor biológico para recuperação muscular eficiente.",
    preco: "Consulte o valor",
    imagem: "https://images.tcdn.com.br/img/img_prod/767774/hyper_whey_refil_900g_393_variacao_1059_1_5bfe22420340704ff3ddf2c7025ebd10.png"
  }
].map((produto) => ({
  ...produto,
  destaque: [1, 5, 3, 10].includes(produto.id),
  destaqueOrdem: [1, 5, 3, 10].indexOf(produto.id),
}));

/** Atualiza os ícones Lucide após renderizações dinâmicas. */
function atualizarIconesLucide() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

/**
 * Renderiza o catálogo principal com ordenação por produtos em destaque.
 * @param {Array} produtos
 */
function renderizarCatalogo(produtos = catalogoSuplementos) {
  const catalogGrid = document.querySelector(".catalog-grid, #catalog-grid");

  if (!catalogGrid) {
    return;
  }

  const produtosOrdenados = [...produtos].sort((a, b) => {
    const ordemA = a.destaque ? a.destaqueOrdem : Number.POSITIVE_INFINITY;
    const ordemB = b.destaque ? b.destaqueOrdem : Number.POSITIVE_INFINITY;

    if (ordemA !== ordemB) {
      return ordemA - ordemB;
    }

    return a.id - b.id;
  });

  catalogGrid.innerHTML = produtosOrdenados
    .map((produto, index) => {
      const destaqueClasse = produto.destaque ? "is-featured" : "";
      const seloTop = produto.destaque ? '<span class="product-top-badge">TOP</span>' : "";

      return `
            <article class="product-card product-card--enter js-filter-item ${destaqueClasse}" style="--card-delay: ${Math.min(index * 45, 360)}ms" data-category="${produto.categoria}" data-brand="${produto.marca.toLowerCase()}">
              ${seloTop}
              <div class="product-image-stage">
                <div class="product-image-wrap">
                  <img class="product-image" src="${produto.imagem}" alt="${produto.nome}" loading="lazy" decoding="async" />
                </div>
              </div>
              <div class="product-body">
                <div class="product-meta">
                  <span class="product-brand">${produto.marca}</span>
                  <span class="product-weight">${produto.peso}</span>
                </div>
                <h3>${produto.nome}</h3>
                <p class="product-desc">${produto.descricao}</p>
                <p class="price">${produto.preco}</p>
                <button class="buy-button js-whatsapp-buy" type="button" data-product="${produto.nome}" data-price="${produto.preco}">
                  <i data-lucide="shopping-cart" aria-hidden="true"></i>
                  Comprar pelo WhatsApp
                </button>
              </div>
            </article>`;
    })
    .join("");

  atualizarIconesLucide();
}

/**
 * Renderiza o bloco de Top 3 produtos em destaque na home.
 * @param {Array} produtos
 */
function renderizarTop3Home(produtos = catalogoSuplementos) {
  const top3Grid = document.querySelector("#home-top3-grid");

  if (!top3Grid) {
    return;
  }

  const produtosTop3 = [...produtos]
    .filter((produto) => produto.destaque)
    .sort((a, b) => a.destaqueOrdem - b.destaqueOrdem)
    .slice(0, 3);

  top3Grid.innerHTML = produtosTop3
    .map((produto, index) => {
      const rank = index + 1;
      const rankLabel = `TOP ${rank}`;

      return `
            <article class="product-card top3-card js-filter-item" data-category="${produto.categoria}">
              <span class="product-badge" aria-label="${rankLabel}">${rankLabel}</span>
              <div class="top3-image-stage">
                <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy" decoding="async" />
              </div>
              <div class="product-body top3-body">
                <div class="product-meta">
                  <span class="product-brand">${produto.marca}</span>
                  <span class="product-weight">${produto.peso}</span>
                </div>
                <h3>${produto.nome}</h3>
                <p class="product-desc">${produto.descricao}</p>
                <p class="price">${produto.preco}</p>
                <button class="buy-button js-whatsapp-buy" type="button" data-product="${produto.nome}" data-price="${produto.preco}">
                  <i data-lucide="shopping-cart" aria-hidden="true"></i>
                  Comprar pelo WhatsApp
                </button>
              </div>
            </article>`;
    })
    .join("");

  atualizarIconesLucide();
}

/** Abre o WhatsApp com mensagem codificada e com proteção de segurança na nova aba. */
function abrirWhatsAppComMensagem(message) {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

/** Aplica efeito de header compacto durante scroll. */
function configurarHeaderScroll() {
  const siteHeader = document.querySelector(".site-header");

  const handleHeaderScroll = () => {
    if (!siteHeader) {
      return;
    }

    const shouldShrink = window.scrollY > 18;
    siteHeader.classList.toggle("is-scrolled", shouldShrink);
  };

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();
}

/** Configura links diretos para abertura do WhatsApp via data attribute. */
function configurarLinksDiretosWhatsApp() {
  const directWhatsappLinks = document.querySelectorAll(".js-whatsapp-direct");

  directWhatsappLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const customMessage =
        link.dataset.whatsappMessage ||
        "Olá! Vim pelo site da I.M. Suplementos e quero atendimento.";
      abrirWhatsAppComMensagem(customMessage);
    });
  });
}

/** Controla abertura e fechamento do menu mobile. */
function configurarMenuMobile() {
  const mobileMenuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");

  if (!mobileMenuButton || !mobileMenu) {
    return;
  }

  mobileMenuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedToggle = mobileMenuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      mobileMenu.classList.remove("is-open");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    }
  });
}

/** Dispara evento de analytics para cliques de WhatsApp de produto. */
function registrarClickWhatsappProduto(productName) {
  if (typeof gtag === "function") {
    gtag("event", "click_whatsapp", {
      produto_nome: productName,
      origem: origemPagina,
    });
  }
}

/** Gerencia clique nos botões de compra e monta a mensagem contextual do produto. */
function configurarCompraPorWhatsApp() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".js-whatsapp-buy");

    if (!button) {
      return;
    }

    const productName = button.dataset.product || "Produto";
    const productPrice = button.dataset.price || "a consultar";

    registrarClickWhatsappProduto(productName);

    const message = `Olá! Vim pelo site da I.M. Suplementos e tenho interesse no produto ${productName} no valor de ${productPrice}.`;
    abrirWhatsAppComMensagem(message);
  });
}

/** Normaliza texto para comparações de busca e filtros. */
const normalizarTexto = (texto = "") =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

/** Normaliza nomes de categorias para chaves de filtro consistentes. */
const normalizarCategoria = (label) => {
  const texto = normalizarTexto(label);

  if (texto === "todos" || texto === "all") {
    return "all";
  }

  if (texto.includes("proteina")) {
    return "proteina";
  }

  if (texto.includes("creatina")) {
    return "creatina";
  }

  if (texto.includes("vitamina")) {
    return "vitamina";
  }

  if (texto.includes("acessorio")) {
    return "acessorio";
  }

  if (texto.includes("termogenico")) {
    return "termogenico";
  }

  if (texto.includes("hipercalorico")) {
    return "hipercalorico";
  }

  if (texto.includes("aminoacido")) {
    return "aminoacido";
  }

  return texto;
};

let categoriaAtivaCatalogo = "all";
let marcaAtivaCatalogo = "all";
let termoBuscaCatalogo = "";

/** Filtra o catálogo por categoria, marca e termo de busca e renderiza o resultado. */
const aplicarFiltrosCatalogo = () => {
  const produtosFiltrados = catalogoSuplementos.filter((produto) => {
    const categoriaProduto = normalizarCategoria(produto.categoria);
    const categoriaFiltro = normalizarCategoria(categoriaAtivaCatalogo);
    const categoriaCorreta =
      categoriaFiltro === "all" ||
      categoriaProduto === categoriaFiltro ||
      categoriaProduto.includes(categoriaFiltro) ||
      categoriaFiltro.includes(categoriaProduto);

    const marcaCorreta =
      marcaAtivaCatalogo === "all" ||
      normalizarTexto(produto.marca).includes(normalizarTexto(marcaAtivaCatalogo));

    const conteudoPesquisa = normalizarTexto(
      `${produto.nome} ${produto.marca} ${produto.peso || ""} ${produto.descricao}`
    );
    const termoCorreto = conteudoPesquisa.includes(termoBuscaCatalogo);

    return categoriaCorreta && marcaCorreta && termoCorreto;
  });

  renderizarCatalogo(produtosFiltrados);
};

/** Configura listeners de filtro do catálogo (categoria, busca e marca). */
function configurarFiltrosCatalogo() {
  const categoryCards = document.querySelectorAll(".category-card");
  const catalogSearchInput = document.querySelector("#catalog-search");
  const catalogBrandSelect = document.querySelector("#catalog-brand-filter");

  categoryCards.forEach((button) => {
    button.addEventListener("click", () => {
      categoryCards.forEach((card) => card.classList.remove("is-active"));
      button.classList.add("is-active");

      const rawCategory = button.dataset.category || button.dataset.filter || button.textContent || "todos";

      if (typeof gtag === "function") {
        gtag("event", "filtro_categoria", {
          categoria_clicada: rawCategory.trim(),
        });
      }

      categoriaAtivaCatalogo = normalizarCategoria(rawCategory);
      aplicarFiltrosCatalogo();
    });
  });

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", (event) => {
      termoBuscaCatalogo = normalizarTexto(event.target.value);
      aplicarFiltrosCatalogo();
    });
  }

  if (catalogBrandSelect) {
    catalogBrandSelect.addEventListener("change", (event) => {
      marcaAtivaCatalogo = normalizarTexto(event.target.value || "all");
      aplicarFiltrosCatalogo();
    });
  }
}

/** Configura animações de revelação com IntersectionObserver respeitando acessibilidade. */
function configurarAnimacoesDeRevelacao() {
  const revealTargets = document.querySelectorAll(
    ".section-heading, .advantage-card, .subscription-card, .product-card, .contact-content, .instagram-content, .stat-tile, .metric-card"
  );

  const supportsReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!supportsReducedMotion && revealTargets.length > 0) {
    revealTargets.forEach((target) => {
      target.classList.add("reveal-on-scroll");
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
    return;
  }

  revealTargets.forEach((target) => {
    target.classList.add("is-visible");
  });
}

/** Inicializa todas as interações da página. */
function init() {
  renderizarCatalogo(catalogoSuplementos);
  renderizarTop3Home(catalogoSuplementos);
  configurarHeaderScroll();
  configurarLinksDiretosWhatsApp();
  configurarMenuMobile();
  configurarCompraPorWhatsApp();
  configurarFiltrosCatalogo();
  configurarAnimacoesDeRevelacao();
}

init();

