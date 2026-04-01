const WHATSAPP_BASE_URL = "https://wa.me/5512988051077";

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

const directWhatsappLinks = document.querySelectorAll(".js-whatsapp-direct");

directWhatsappLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const customMessage =
      link.dataset.whatsappMessage ||
      "Ola, vim pelo site da I.M. Suplementos e quero atendimento.";
    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(customMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
});

const mobileMenuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (mobileMenuButton && mobileMenu) {
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

const buyButtons = document.querySelectorAll(".js-whatsapp-buy");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product || "Produto";
    const productPrice = button.dataset.price || "a consultar";

    const message = `Ola, vim pelo site da I.M. Suplementos e tenho interesse no produto ${productName} no valor de ${productPrice}.`;
    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
});

const filterButtons = document.querySelectorAll(".js-category-filter");
const filterItems = document.querySelectorAll(".js-filter-item");
const hideTimers = new Map();

const hideItem = (item) => {
  if (item.hidden) {
    return;
  }

  clearTimeout(hideTimers.get(item));
  item.classList.add("is-hiding");

  const timer = setTimeout(() => {
    item.hidden = true;
  }, 220);

  hideTimers.set(item, timer);
};

const showItem = (item) => {
  clearTimeout(hideTimers.get(item));
  item.hidden = false;

  requestAnimationFrame(() => {
    item.classList.remove("is-hiding");
  });
};

const applyFilter = (filterValue) => {
  filterItems.forEach((item) => {
    const itemCategory = item.dataset.category;
    const shouldShow = filterValue === "all" || itemCategory === filterValue;

    if (shouldShow) {
      showItem(item);
      return;
    }

    hideItem(item);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter || "all";

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
    });

    applyFilter(selectedFilter);
  });
});

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
} else {
  revealTargets.forEach((target) => {
    target.classList.add("is-visible");
  });
}

