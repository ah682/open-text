"use strict";

const OPEN_TEXT = "https://www.opentext.com/uk";

const navigation = {
  why: {
    label: "Why OpenText",
    eyebrow: "Why OpenText",
    description: "Unlock data, connect people and processes, and fuel AI with trust.",
    overview: `${OPEN_TEXT}/why-opentext`,
    links: [
      ["Manage and connect data", "Unify data across your enterprise to reduce silos and risk.", `${OPEN_TEXT}/about/manage-connect-data`],
      ["AI-ready information", "Turn enterprise data into structured, accessible information.", `${OPEN_TEXT}/about/ai-ready-information`],
      ["Built-in security and compliance", "Protect information throughout its lifecycle.", `${OPEN_TEXT}/about/built-in-security-compliance`],
      ["Empowering people", "Help teams manage content, automate work and collaborate.", `${OPEN_TEXT}/about/empowering-people`],
      ["Deploy anywhere", "Choose sovereign, private, public cloud or on-premises.", `${OPEN_TEXT}/deployment`],
      ["AI leadership", "See information in new ways with OpenText Aviator AI.", `${OPEN_TEXT}/aviator-ai`],
    ],
  },
  products: {
    label: "Products",
    eyebrow: "OpenText products",
    description: "Explore a complete portfolio of secure information management solutions.",
    overview: `${OPEN_TEXT}/products/listing`,
    links: [
      ["Aviator AI", "AI that understands your business, data and goals.", `${OPEN_TEXT}/aviator-ai`],
      ["Business Network", "Secure B2B integration and supply-chain connectivity.", `${OPEN_TEXT}/products/business-network-cloud`],
      ["Content Management", "AI-ready content management and process automation.", `${OPEN_TEXT}/products/content-cloud`],
      ["Cybersecurity", "Integrated enterprise application, data and identity security.", `${OPEN_TEXT}/products/cybersecurity-cloud`],
      ["DevOps", "AI-driven automation, testing and software quality.", `${OPEN_TEXT}/products/devops-cloud`],
      ["Experience and Fax", "Connected communications and customer experiences.", `${OPEN_TEXT}/products/experience-cloud`],
      ["Legal Tech", "AI-powered eDiscovery and legal knowledge management.", `${OPEN_TEXT}/products/ediscovery-and-legal-solutions`],
      ["Observability and Service Management", "Clarity across IT operations and service delivery.", `${OPEN_TEXT}/products/observability-service-management-cloud`],
      ["APIs", "Build custom applications using proven OpenText technology.", `${OPEN_TEXT}/products/developer-cloud`],
    ],
  },
  solutions: {
    label: "Solutions",
    eyebrow: "OpenText solutions",
    description: "Secure information management meets trusted AI.",
    overview: `${OPEN_TEXT}/solutions`,
    links: [
      ["Trusted Data & AI", "A unified information framework for trusted data and AI.", `${OPEN_TEXT}/solutions/trusted-data-ai`],
      ["Information Reimagined", "Sharper insights from AI-driven information management.", "https://solutions.opentext.com/"],
      ["Artificial Intelligence", "Private, contextual AI for enterprise workflows.", `${OPEN_TEXT}/aviator-ai`],
      ["Industry solutions", "Purpose-built solutions for complex global industries.", `${OPEN_TEXT}/solutions/industry`],
      ["Enterprise applications", "Connect content to SAP, Microsoft and Salesforce.", `${OPEN_TEXT}/solutions/enterprise-applications`],
      ["Sovereign AI and cloud", "Local control, global scale and trusted AI.", `${OPEN_TEXT}/sovereign-ai-cloud`],
    ],
  },
  services: {
    label: "Services",
    eyebrow: "OpenText services",
    description: "Accelerate transformation with guidance from certified experts.",
    overview: `${OPEN_TEXT}/services`,
    links: [
      ["Professional Services", "Modernize information management with certified experts.", `${OPEN_TEXT}/professional-services`],
      ["Customer Success Services", "Meet business goals with expert guidance.", `${OPEN_TEXT}/customer-success-services`],
      ["Support Services", "Turn product support into a strategic advantage.", `${OPEN_TEXT}/support-services`],
      ["Managed Services", "Free internal teams with expert IT service management.", `${OPEN_TEXT}/managed-services`],
      ["Learning Services", "Training and adoption for every skill level.", `${OPEN_TEXT}/learning-services`],
      ["AI Services", "Expert help for strategy, readiness and deployment.", `${OPEN_TEXT}/professional-services/ai-services`],
    ],
  },
  partners: {
    label: "Partners",
    eyebrow: "OpenText partners",
    description: "Build value with a global ecosystem of trusted technology partners.",
    overview: `${OPEN_TEXT}/partners`,
    links: [
      ["Find a Partner", "Find the right skills and solution for transformation.", `${OPEN_TEXT}/partners/find-an-opentext-partner`],
      ["Cloud Partners", "Run OpenText solutions on leading cloud infrastructure.", `${OPEN_TEXT}/partners/cloud`],
      ["Enterprise Application Partners", "Connect OpenText with essential enterprise platforms.", `${OPEN_TEXT}/partners/enterprise-applications`],
      ["Partner Solutions", "Discover flexible offerings that extend OpenText.", `${OPEN_TEXT}/partners/solutions`],
      ["Resources for Partners", "Tools and programmes to support partner growth.", `${OPEN_TEXT}/partners/resources`],
      ["Become a Partner", "Join the OpenText global partner ecosystem.", `${OPEN_TEXT}/partners/become-a-partner`],
    ],
  },
  support: {
    label: "Support",
    eyebrow: "Customer support",
    description: "Resolve issues quickly and keep critical business flows running.",
    overview: `${OPEN_TEXT}/support`,
    links: [
      ["OpenText Support", "Expert product and service support.", `${OPEN_TEXT}/support`],
      ["Support portal", "Manage cases, downloads and licenses.", "https://my.opentext.com/"],
      ["Premium support", "Enhanced coverage for business-critical systems.", `${OPEN_TEXT}/support-services/premium-support`],
      ["Flexible credits", "Use support expertise when and where it is needed.", `${OPEN_TEXT}/support-services/flexible-credits`],
      ["Communities", "Connect with customers, experts and developers.", "https://community.opentext.com/"],
      ["Developer forums", "Technical conversations for OpenText developers.", "https://forums.opentext.com/"],
    ],
  },
  resources: {
    label: "Resources",
    eyebrow: "OpenText resources",
    description: "Research, customer stories, events and practical product guidance.",
    overview: `${OPEN_TEXT}/resources`,
    links: [
      ["Customer stories", "See how organizations succeed with OpenText.", `${OPEN_TEXT}/customers`],
      ["Resource library", "Explore briefs, reports, webinars and demos.", `${OPEN_TEXT}/resources`],
      ["Analyst reports", "Independent perspectives on OpenText solutions.", `${OPEN_TEXT}/about/analyst-reports`],
      ["Events & webinars", "Join OpenText experts online and around the world.", `${OPEN_TEXT}/events-and-webinars`],
      ["OpenText World", "The flagship information management conference.", `${OPEN_TEXT}/resources/opentext-world`],
      ["Blogs", "Ideas and guidance from OpenText leaders and experts.", "https://blogs.opentext.com/"],
    ],
  },
};

const testimonials = [
  {
    logo: "./assets/images/testimonials/verizon.png",
    logoAlt: "Verizon",
    quote: "We centralize and automate. We reduce human error and duplication of effort—and add tracking, reporting and trending. We manage compliance across platforms more productively, with higher business value.",
    name: "Christopher Mapes",
    role: "Technical Staff, IT Cloud Services, Verizon",
    href: `${OPEN_TEXT}/customers/verizon`,
  },
  {
    logo: "./assets/images/testimonials/directv.png",
    logoAlt: "DIRECTV",
    quote: "Now that we’ve integrated our systems and automated much of the manual work, we’ve made huge time savings. The access revalidation process, for example, is at least 50% faster.",
    name: "Juan Miguel Viedma",
    role: "Senior Analyst GRC Information Security, DIRECTV Latin America",
    href: `${OPEN_TEXT}/customers/directv-latin-america`,
  },
  {
    logo: "./assets/images/testimonials/bmo-harris.png",
    logoAlt: "BMO Harris Bank",
    quote: "BMO Harris Bank was able to save $5 million per year with ongoing reductions in the same ballpark due to reduced licensing, infrastructure and ongoing support cost.",
    name: "Todd Sesto",
    role: "Senior Technology Officer, BMO Harris Bank",
    href: `${OPEN_TEXT}/customers/bmo-harris-bank`,
  },
  {
    logo: "./assets/images/testimonials/consortium-clemenger.png",
    logoAlt: "The Consortium Clemenger",
    quote: "With OpenText Business Network Cloud Enterprise, we can release new capabilities to our clients within as little as two days—around 95% faster.",
    name: "Vishal Charan",
    role: "IT Director, The Consortium Clemenger",
    href: `${OPEN_TEXT}/customers/consortium-clemenger`,
  },
  {
    logo: "./assets/images/testimonials/world-vision.jpg",
    logoAlt: "World Vision",
    quote: "OpenText Service Management continuously improves our user experience, with a 15-point NPS increase and a 31 percent improvement in issue resolution time.",
    name: "Jerome Capili",
    role: "IT Director of Global Service Management, World Vision",
    href: `${OPEN_TEXT}/customers/world-vision-international`,
  },
  {
    logo: "./assets/images/testimonials/cooper-standard.png",
    logoAlt: "Cooper Standard",
    quote: "Thanks to OpenText, we can quickly locate historical production data that is essential for answering warranty questions in a business that offers lifetime product guarantees.",
    name: "José Gala-Garza",
    role: "Project Manager, ECM Architect and Data Integrator, Cooper Standard",
    href: `${OPEN_TEXT}/customers/cooper-standard`,
  },
];

const searchIndex = [
  ...Object.values(navigation).flatMap((group) => group.links.map(([title, description, href]) => ({ title, description, href }))),
  { title: "Customer stories", description: "Explore success stories from OpenText customers worldwide.", href: `${OPEN_TEXT}/customers` },
  { title: "OpenText World 2026", description: "Join OpenText World in Orlando this October.", href: `${OPEN_TEXT}/resources/opentext-world` },
  { title: "Get a demo", description: "See an OpenText product in action.", href: `${OPEN_TEXT}/demos` },
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function createExternalLink(href, className) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  if (className) link.className = className;
  return link;
}

function setupMegaMenu() {
  const panel = document.querySelector("#mega-menu");
  const title = panel?.querySelector("[data-mega-title]");
  const eyebrow = panel?.querySelector("[data-mega-eyebrow]");
  const description = panel?.querySelector("[data-mega-description]");
  const overview = panel?.querySelector("[data-mega-overview]");
  const links = panel?.querySelector("[data-mega-links]");
  const triggers = [...document.querySelectorAll(".nav-trigger")];
  if (!panel || !title || !eyebrow || !description || !overview || !links) return;

  let currentKey = null;

  const close = (restoreFocus = false) => {
    const active = triggers.find((trigger) => trigger.dataset.menu === currentKey);
    triggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
    panel.hidden = true;
    currentKey = null;
    if (restoreFocus) active?.focus();
  };

  const open = (key) => {
    const group = navigation[key];
    if (!group) return;
    currentKey = key;
    triggers.forEach((trigger) => trigger.setAttribute("aria-expanded", String(trigger.dataset.menu === key)));
    eyebrow.textContent = group.eyebrow;
    title.textContent = group.label;
    description.textContent = group.description;
    overview.href = group.overview;
    overview.firstChild.textContent = "View overview ";
    links.replaceChildren();
    group.links.forEach(([linkTitle, linkDescription, href]) => {
      const link = createExternalLink(href, "mega-link");
      const strong = document.createElement("strong");
      const detail = document.createElement("span");
      strong.textContent = `${linkTitle} →`;
      detail.textContent = linkDescription;
      link.append(strong, detail);
      links.append(link);
    });
    panel.hidden = false;
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const key = trigger.dataset.menu;
      if (currentKey === key && !panel.hidden) close();
      else open(key);
    });
  });

  document.addEventListener("click", (event) => {
    if (!panel.hidden && !event.target.closest(".site-header")) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) close(true);
  });
}

function setupMobileMenu() {
  const menu = document.querySelector("#mobile-menu");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");
  if (!menu || !toggle || !nav) return;

  Object.values(navigation).forEach((group) => {
    const details = document.createElement("details");
    details.className = "mobile-nav-group";
    const summary = document.createElement("summary");
    summary.textContent = group.label;
    const links = document.createElement("div");
    links.className = "mobile-nav-links";

    const overview = createExternalLink(group.overview);
    overview.textContent = `${group.label} overview`;
    links.append(overview);
    group.links.slice(0, 6).forEach(([title, , href]) => {
      const link = createExternalLink(href);
      link.textContent = title;
      links.append(link);
    });
    details.append(summary, links);
    nav.append(details);
  });

  const close = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  };

  toggle.addEventListener("click", () => {
    const shouldOpen = menu.hidden;
    menu.hidden = !shouldOpen;
    toggle.setAttribute("aria-expanded", String(shouldOpen));
    toggle.setAttribute("aria-label", shouldOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("menu-open", shouldOpen);
    if (shouldOpen) menu.querySelector("summary")?.focus();
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      close();
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
    if (event.matches) close();
  });
}

function setupDialogs() {
  const searchDialog = document.querySelector("[data-search-dialog]");
  const regionsDialog = document.querySelector("[data-regions-dialog]");

  const openDialog = (dialog) => {
    if (!dialog) return;
    dialog.showModal();
    document.body.classList.add("dialog-open");
  };

  const closeDialog = (dialog) => {
    if (!dialog?.open) return;
    dialog.close();
    document.body.classList.remove("dialog-open");
  };

  document.querySelector("[data-open-search]")?.addEventListener("click", () => {
    openDialog(searchDialog);
    window.setTimeout(() => searchDialog?.querySelector("input")?.focus(), 0);
  });
  document.querySelector("[data-open-regions]")?.addEventListener("click", () => openDialog(regionsDialog));

  [searchDialog, regionsDialog].forEach((dialog) => {
    if (!dialog) return;
    dialog.querySelector("[data-close-dialog]")?.addEventListener("click", () => closeDialog(dialog));
    dialog.addEventListener("cancel", () => document.body.classList.remove("dialog-open"));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
  });
}

function setupSearch() {
  const form = document.querySelector("[data-search-form]");
  const input = form?.querySelector("input");
  const status = document.querySelector("[data-search-status]");
  const list = document.querySelector("[data-search-results]");
  if (!form || !input || !status || !list) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim().toLocaleLowerCase("en-GB");
    list.replaceChildren();
    if (query.length < 2) {
      status.textContent = "Enter at least two characters to search.";
      return;
    }

    const matches = searchIndex
      .filter(({ title, description }) => `${title} ${description}`.toLocaleLowerCase("en-GB").includes(query))
      .filter((item, index, items) => items.findIndex((candidate) => candidate.title === item.title) === index)
      .slice(0, 8);

    status.textContent = matches.length ? `${matches.length} result${matches.length === 1 ? "" : "s"} for “${input.value.trim()}”.` : `No local presentation results for “${input.value.trim()}”.`;
    matches.forEach(({ title, description, href }) => {
      const item = document.createElement("li");
      const link = createExternalLink(href);
      const strong = document.createElement("strong");
      const detail = document.createElement("span");
      strong.textContent = `${title} →`;
      detail.textContent = description;
      link.append(strong, document.createElement("br"), detail);
      item.append(link);
      list.append(item);
    });
  });
}

function setupMarquee() {
  const track = document.querySelector("[data-logo-track]");
  const toggle = document.querySelector("[data-marquee-toggle]");
  const list = track?.querySelector(".logo-list");
  if (!track || !toggle || !list) return;

  const clone = list.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  clone.querySelectorAll("img").forEach((image) => image.setAttribute("alt", ""));
  track.append(clone);

  const setPaused = (paused) => {
    track.classList.toggle("is-paused", paused);
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.setAttribute("aria-label", paused ? "Play customer logo animation" : "Pause customer logo animation");
  };

  if (prefersReducedMotion.matches) setPaused(true);
  toggle.addEventListener("click", () => setPaused(toggle.getAttribute("aria-pressed") !== "true"));
}

function setupCapabilityCards() {
  document.querySelectorAll(".capability-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a") || (window.matchMedia("(hover: hover)").matches && window.innerWidth >= 1024)) return;
      card.classList.toggle("is-flipped");
    });
    card.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target === card) {
        event.preventDefault();
        card.classList.toggle("is-flipped");
      }
      if (event.key === "Escape") card.classList.remove("is-flipped");
    });
  });
}

function setupTestimonials() {
  const stage = document.querySelector(".testimonial-stage");
  const logo = document.querySelector("[data-testimonial-logo]");
  const quote = document.querySelector("[data-testimonial-quote]");
  const name = document.querySelector("[data-testimonial-name]");
  const role = document.querySelector("[data-testimonial-role]");
  const link = document.querySelector("[data-testimonial-link]");
  const dots = document.querySelector("[data-testimonial-dots]");
  const toggle = document.querySelector("[data-testimonial-toggle]");
  if (!stage || !logo || !quote || !name || !role || !link || !dots || !toggle) return;

  let index = 0;
  let paused = prefersReducedMotion.matches;
  let timer = null;

  const render = (nextIndex) => {
    index = (nextIndex + testimonials.length) % testimonials.length;
    const item = testimonials[index];
    stage.classList.add("is-changing");
    window.setTimeout(() => {
      logo.src = item.logo;
      logo.alt = item.logoAlt;
      quote.textContent = item.quote;
      name.textContent = item.name;
      role.textContent = item.role;
      link.href = item.href;
      [...dots.children].forEach((dot, dotIndex) => dot.setAttribute("aria-current", String(dotIndex === index)));
      stage.classList.remove("is-changing");
    }, prefersReducedMotion.matches ? 0 : 170);
  };

  const schedule = () => {
    window.clearInterval(timer);
    if (!paused) timer = window.setInterval(() => render(index + 1), 7000);
  };

  const setPaused = (nextPaused) => {
    paused = nextPaused;
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.setAttribute("aria-label", paused ? "Play testimonial carousel" : "Pause testimonial carousel");
    schedule();
  };

  testimonials.forEach((item, dotIndex) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show testimonial from ${item.logoAlt}`);
    dot.setAttribute("aria-current", String(dotIndex === 0));
    dot.addEventListener("click", () => {
      render(dotIndex);
      schedule();
    });
    dots.append(dot);
  });

  toggle.addEventListener("click", () => setPaused(!paused));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearInterval(timer);
    else schedule();
  });
  setPaused(paused);
}

function setupStorySlider() {
  const track = document.querySelector("[data-story-track]");
  const previous = document.querySelector("[data-story-prev]");
  const next = document.querySelector("[data-story-next]");
  if (!track || !previous || !next) return;

  const step = () => {
    const card = track.querySelector(".story-card");
    return card ? card.getBoundingClientRect().width + 32 : 287;
  };

  const updateControls = () => {
    const max = track.scrollWidth - track.clientWidth;
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
  };

  previous.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  track.addEventListener("scroll", updateControls, { passive: true });
  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") track.scrollBy({ left: -step(), behavior: "smooth" });
    if (event.key === "ArrowRight") track.scrollBy({ left: step(), behavior: "smooth" });
  });
  window.addEventListener("resize", updateControls, { passive: true });
  updateControls();
}

function setupFooterAccordion() {
  const mobileQuery = window.matchMedia("(max-width: 767px)");
  document.querySelectorAll(".footer-directory details").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (!mobileQuery.matches || !details.open) return;
      document.querySelectorAll(".footer-directory details").forEach((other) => {
        if (other !== details) other.open = false;
      });
    });
  });
}

setupMegaMenu();
setupMobileMenu();
setupDialogs();
setupSearch();
setupMarquee();
setupCapabilityCards();
setupTestimonials();
setupStorySlider();
setupFooterAccordion();
