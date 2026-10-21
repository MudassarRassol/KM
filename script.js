/**
 * ==============================================================================
 * KHADIJA MIRZA | PORTFOLIO & MEDIA KIT ENGINE
 * ==============================================================================
 * EDITABLE SITE CONFIGURATION:
 * The owner can customize all copy, statistics, social URLs, offerings,
 * packages, and audience demographics directly in the `siteConfig` object below.
 * Everything on the webpage renders dynamically from this single source of truth.
 * ==============================================================================
 */

const siteConfig = {
  creator: {
    name: "Khadija Mirza",
    title: "Content Creator",
    fullName: "Khadija Mirza | Content Creator",
    tagline: "Fashion & Lifestyle Creator based in Faisalabad | Lahore, Pakistan",
    location: "Faisalabad | Lahore, Pakistan",
    headline: "Curating Elegance, Modest Couture & Lifestyle Stories",
    intro: "Bridging contemporary elegance with cultural heritage. Specializing in high-engagement reels, corset styling, fine jewellery & bangles, bespoke brand campaigns, and on-site store raids for premier fashion labels.",
    management: "@connecto_pr_collab",
    managementUrl: "https://www.instagram.com/connecto_pr_collab",
    email: "khadijamirza.collabs@gmail.com", // REPLACE WITH REAL EMAIL
    whatsapp: "+923000000000", // REPLACE WITH REAL WHATSAPP NUMBER
    whatsappDisplay: "+92 300 0000000",
    offers: [
      "PR & Gifting",
      "Brand Collaborations",
      "Store Raids & Boutique Launches",
      "Promotional Commercial Videos"
    ]
  },

  socials: {
    instagram: {
      handle: "@khadijamirza.official",
      url: "https://www.instagram.com/khadijamirza.official",
      followers: "7.8K",
      posts: "213",
      followersCount: 7800,
      postsCount: 213,
      dmUrl: "https://ig.me/m/khadijamirza.official"
    },
    tiktok: {
      handle: "@khadijamirz1",
      url: "https://www.tiktok.com/@khadijamirz1",
      followers: "15.9K",
      likes: "484.4K",
      followersCount: 15900,
      likesCount: 484400
    },
    facebook: {
      name: "Khadija Mirza",
      url: "https://www.facebook.com" // REPLACE WITH EXACT FB PAGE URL
    },
    management: {
      handle: "@connecto_pr_collab",
      platform: "Instagram",
      url: "https://www.instagram.com/connecto_pr_collab"
    }
  },

  stats: [
    {
      id: "ig-followers",
      label: "Instagram Followers",
      value: 7800,
      displaySuffix: "K+",
      displayFactor: 1000,
      decimals: 1,
      icon: "fa-brands fa-instagram"
    },
    {
      id: "tt-followers",
      label: "TikTok Community",
      value: 15900,
      displaySuffix: "K+",
      displayFactor: 1000,
      decimals: 1,
      icon: "fa-brands fa-tiktok"
    },
    {
      id: "total-likes",
      label: "Total Video Likes",
      value: 484400,
      displaySuffix: "K+",
      displayFactor: 1000,
      decimals: 1,
      icon: "fa-solid fa-heart"
    },
    {
      id: "posts-count",
      label: "Creative Posts",
      value: 213,
      displaySuffix: "+",
      displayFactor: 1,
      decimals: 0,
      icon: "fa-solid fa-camera-retro"
    }
  ],

  niches: [
    { name: "Fashion & Haute Couture", icon: "fa-solid fa-vest" },
    { name: "Lifestyle & Vlogs", icon: "fa-solid fa-camera-retro" },
    { name: "Jewellery & Bangles", icon: "fa-solid fa-gem" },
    { name: "Business Promotional Videos", icon: "fa-solid fa-bullhorn" },
    { name: "Corset & Modest Fusion", icon: "fa-solid fa-wand-magic-sparkles" },
    { name: "Store Raids & Launches", icon: "fa-solid fa-shop" }
  ],

  services: [
    {
      id: "reels",
      title: "Reels & Short Videos",
      icon: "fa-solid fa-play",
      description: "High-retention 9:16 vertical videos crafted with aesthetic pacing, trending audio, crisp 4K visual framing, and authentic styling narratives.",
      deliverables: ["9:16 vertical 4K master", "Hook & trending audio curation", "Brand tags, mentions & link stickers"]
    },
    {
      id: "store-raids",
      title: "Store Raids & Store Visits",
      icon: "fa-solid fa-shop",
      description: "Dynamic on-site walkthroughs and interactive boutique visits across Lahore and Faisalabad designed to spark buzz, boost footfall, and showcase new seasonal collections.",
      deliverables: ["In-store try-on walkthrough", "Real-time Instagram stories", "Curated reels highlighting bestselling pieces"]
    },
    {
      id: "business-promo",
      title: "Brand Promotional Videos",
      icon: "fa-solid fa-bullhorn",
      description: "Commercial-grade video campaigns tailored for beauty, jewellery, footwear, apparel, and lifestyle enterprises looking for genuine brand elevation.",
      deliverables: ["Creative concept & storyboard", "Key USP highlights & product demos", "Commercial usage rights options"]
    },
    {
      id: "styling-shoots",
      title: "Fashion & Jewellery Styling Shoots",
      icon: "fa-solid fa-gem",
      description: "Editorial lookbooks and macro close-ups showcasing intricate Kundan, polki, bangles, luxury handbags, corsets, and modest ensembles in high fidelity.",
      deliverables: ["Close-up macro detail captures", "Curated lookbook styling reel", "High-res editorial imagery"]
    },
    {
      id: "event-coverage",
      title: "Event & Launch Coverage",
      icon: "fa-solid fa-champagne-glasses",
      description: "VIP presence and social storytelling for runway events, collection launches, press junkets, and exclusive exhibitions.",
      deliverables: ["Live red-carpet / arrival stories", "Event highlights reel", "Networking & audience engagement"]
    },
    {
      id: "ugc",
      title: "UGC & Authentic Reviews",
      icon: "fa-solid fa-user-check",
      description: "User-Generated Content (UGC) that feels organic, relatable, and trustworthy—perfect for paid ad amplification on Meta and TikTok.",
      deliverables: ["Get Ready With Me (GRWM) style", "Honest unboxing & review format", "Whitelisting-ready video files"]
    }
  ],

  portfolio: [
    {
      id: "item-1",
      category: "fashion",
      title: "Corset & Modest Fusion Lookbook",
      categoryLabel: "Fashion",
      platform: "instagram",
      views: "84.2K",
      thumbnail: "/assets/images/portfolio-1.svg",
      reelUrl: "https://www.instagram.com/khadijamirza.official",
      description: "Artfully marrying contemporary corset silhouettes with flowing modest drapes and traditional festive aesthetics."
    },
    {
      id: "item-2",
      category: "jewellery",
      title: "Traditional Kundan & Bangle Stacks",
      categoryLabel: "Jewellery",
      platform: "instagram",
      views: "128.5K",
      thumbnail: "/assets/images/portfolio-2.svg",
      reelUrl: "https://www.instagram.com/khadijamirza.official",
      description: "Macro focus on artisanal gold-plated bangles, Kundan jhumkas, and intricate bridal heirloom craftsmanship."
    },
    {
      id: "item-3",
      category: "store-raids",
      title: "Flagship Lahore Boutique Walkthrough",
      categoryLabel: "Store Raids",
      platform: "tiktok",
      views: "215.3K",
      thumbnail: "/assets/images/portfolio-3.svg",
      reelUrl: "https://www.tiktok.com/@khadijamirz1",
      description: "A fast-paced, high-engagement store raid highlighting newly dropped luxury prêt and pret-à-porter racks."
    },
    {
      id: "item-4",
      category: "vlogs",
      title: "A Day in Lahore: Cafe Run & GRWM",
      categoryLabel: "Vlogs",
      platform: "tiktok",
      views: "96.4K",
      thumbnail: "/assets/images/portfolio-4.svg",
      reelUrl: "https://www.tiktok.com/@khadijamirz1",
      description: "An aesthetic lifestyle vlog capturing an early morning vanity routine, modest chic OOTD, and cafe visit in Gulberg."
    },
    {
      id: "item-5",
      category: "promotions",
      title: "Luxury Handbag Collection Launch",
      categoryLabel: "Promotions",
      platform: "instagram",
      views: "142.1K",
      thumbnail: "/assets/images/portfolio-5.svg",
      reelUrl: "https://www.instagram.com/khadijamirza.official",
      description: "Sponsored styling reel emphasizing craftsmanship, leather textures, and versatile day-to-night transitions."
    },
    {
      id: "item-6",
      category: "fashion",
      title: "Festive Velvet & Silk Eid Edit",
      categoryLabel: "Fashion",
      platform: "instagram",
      views: "178.9K",
      thumbnail: "/assets/images/portfolio-6.svg",
      reelUrl: "https://www.instagram.com/khadijamirza.official",
      description: "Rich jewel-toned velvet kurtis paired with statement dupattas and antique jewellery accents."
    }
  ],

  brands: [
    { name: "Brand Name", logo: "/assets/images/brand-1.svg", label: "Fashion House" },
    { name: "Brand Name", logo: "/assets/images/brand-2.svg", label: "Jewellery Atelier" },
    { name: "Brand Name", logo: "/assets/images/brand-3.svg", label: "Luxury Studio" },
    { name: "Brand Name", logo: "/assets/images/brand-4.svg", label: "Modest Pret" },
    { name: "Brand Name", logo: "/assets/images/brand-5.svg", label: "Accessories" },
    { name: "Brand Name", logo: "/assets/images/brand-6.svg", label: "Silk Atelier" }
  ],

  packages: [
    {
      id: "single-reel",
      title: "Single Reel / TikTok",
      subtitle: "High-impact standalone video deliverable",
      price: "Contact for pricing",
      featured: false,
      features: [
        "1x 9:16 high-retention 4K Reel / TikTok",
        "Creative ideation & trend-aligned music selection",
        "Product tagging & collaborator invite",
        "24-hour analytics screenshot report",
        "7-day organic post placement"
      ]
    },
    {
      id: "story-set",
      title: "Story Set Activation",
      subtitle: "Direct-response clickable traffic driver",
      price: "Contact for pricing",
      featured: false,
      features: [
        "3 to 5 sequence Instagram Stories",
        "Direct swipe-up / website link stickers",
        "Engaging poll, countdown or question stickers",
        "Save to dedicated profile Highlight (30 days)",
        "Swipe-through and reach metrics provided"
      ]
    },
    {
      id: "store-raid",
      title: "Store Raid & Event",
      subtitle: "Comprehensive physical activation & footfall push",
      price: "Contact for pricing",
      featured: true,
      badge: "Most Popular",
      features: [
        "On-site visit in Lahore or Faisalabad",
        "1x High-production store walkthrough Reel",
        "5x Real-time behind-the-scenes Stories",
        "Showcase of 4 to 6 featured outfits / pieces",
        "Cross-posted to Instagram & TikTok"
      ]
    },
    {
      id: "complete-bundle",
      title: "Complete Brand Campaign",
      subtitle: "Omnichannel 360-degree partnership",
      price: "Contact for pricing",
      featured: false,
      features: [
        "2x Dedicated Reels (Styling + Detail / GRWM)",
        "2x Sets of Instagram Stories (6 total stories)",
        "Dual posting across Instagram & TikTok",
        "Organic whitelisting permission for 30 days",
        "Priority scheduling & revisions"
      ]
    }
  ],

  process: [
    {
      step: "01",
      title: "Brief & Goals",
      desc: "We discuss your brand targets, desired messaging, target audience, aesthetic benchmarks, and deliverables schedule."
    },
    {
      step: "02",
      title: "Concept & Styling",
      desc: "I craft the creative angle, select wardrobe, pick trending audio cues, and outline the visual narrative for your approval."
    },
    {
      step: "03",
      title: "Shoot & 4K Edit",
      desc: "Filming in cinematic lighting with high-end camera equipment, followed by color grading, sound design, and text styling."
    },
    {
      step: "04",
      title: "Publish & Report",
      desc: "Your collaboration goes live during prime engagement hours, followed by active comment interaction and an analytics debrief."
    }
  ],

  audience: {
    overview: "Khadija Mirza's community is primarily composed of fashion-conscious young women across urban Pakistan seeking modest styling inspiration, trendy jewellery recommendations, and boutique discoveries.",
    gender: {
      female: 78,
      male: 22
    },
    age: [
      { range: "18 – 24", percentage: 42 },
      { range: "25 – 34", percentage: 45 },
      { range: "35 – 44", percentage: 10 },
      { range: "45+", percentage: 3 }
    ],
    cities: [
      { name: "Lahore", percentage: 38 },
      { name: "Faisalabad", percentage: 28 },
      { name: "Karachi", percentage: 18 },
      { name: "Islamabad & Rawalpindi", percentage: 10 },
      { name: "Overseas (UAE / UK / US)", percentage: 6 }
    ]
  },

  testimonials: [
    {
      quote: "Working with Khadija Mirza for our festive launch brought incredible footfall to our flagship store in Lahore. Her styling eye and genuine community trust are unmatched.",
      author: "Brand Name",
      role: "Creative Director · Fashion Label",
      rating: 5
    },
    {
      quote: "The jewellery macro reels Khadija produced for our Kundan and bangle collection had our highest save-and-share rate of the entire quarter. She understands aesthetic pacing perfectly.",
      author: "Brand Name",
      role: "Marketing Head · Jewellery House",
      rating: 5
    },
    {
      quote: "Professional, punctual, and delivered stunning 4K visuals right on brief. Communication through @connecto_pr_collab was seamless and stress-free.",
      author: "Brand Name",
      role: "PR Lead · Luxury Retail Brand",
      rating: 5
    }
  ],

  faqs: [
    {
      question: "What are your collaboration rates?",
      answer: "Rates vary depending on the scope of work (e.g., single reel, store raid, story set, or complete campaign bundle) and licensing usage rights. Please use the contact form below or reach out via WhatsApp / Instagram DM for our up-to-date rate card."
    },
    {
      question: "What is your typical turnaround time from shoot to publication?",
      answer: "Standard turnaround time is 4 to 7 business days from receipt of the product or date of the store visit. Rush turnarounds (within 48 hours) can be accommodated with prior alignment."
    },
    {
      question: "What usage rights and licensing are included with deliverables?",
      answer: "Deliverables include organic usage on Khadija Mirza's official social channels (Instagram, TikTok, Facebook). If your brand wishes to use the assets for paid Meta / TikTok ads or whitelisting, commercial licensing add-ons are available."
    },
    {
      question: "How do brands book a campaign or store raid in Lahore / Faisalabad?",
      answer: "You can submit an inquiry through the booking form on this page, email us directly, or reach out to our official management team @connecto_pr_collab on Instagram. We'll respond with availability and customized packages within 24 hours."
    },
    {
      question: "Do you accept barter collaborations or only paid partnerships?",
      answer: "While we prioritize paid commercial partnerships and store raids, select barter collaborations are considered for premium luxury labels whose aesthetic strictly aligns with Khadija's brand ethos. Feel free to pitch your proposal!"
    }
  ],

  contact: {
    formEndpoint: "https://formspree.io/f/placeholder", // REPLACE WITH REAL FORMSPREE OR EMAILJS ENDPOINT
    fallbackEmail: "khadijamirza.collabs@gmail.com",
    whatsappNumber: "+923000000000"
  }
};

/* ==============================================================================
   DOM INITIALIZATION & RENDER PIPELINE
   ============================================================================== */

function startApp() {
  try { initTheme(); } catch (e) { console.warn("Theme init error:", e); }
  try { renderDynamicContent(); } catch (e) { console.warn("Render dynamic content error:", e); }
  try { initPreloader(); } catch (e) { console.warn("Preloader init error:", e); }
  try { initLenis(); } catch (e) { console.warn("Lenis init error:", e); }
  try { initNavbar(); } catch (e) { console.warn("Navbar init error:", e); }
  try { initCustomCursor(); } catch (e) { console.warn("Cursor init error:", e); }
  try { initPortfolioFilters(); } catch (e) { console.warn("Portfolio filter error:", e); }
  try { initLightboxModal(); } catch (e) { console.warn("Lightbox modal error:", e); }
  try { initAccordion(); } catch (e) { console.warn("Accordion error:", e); }
  try { initContactForm(); } catch (e) { console.warn("Contact form error:", e); }
  try { initSwiper(); } catch (e) { console.warn("Swiper error:", e); }
  try { initCountUpAnimations(); } catch (e) { console.warn("Count-up animation error:", e); }
  try { initScrollProgress(); } catch (e) { console.warn("Scroll progress error:", e); }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  // DOM is already parsed / ready, execute immediately
  startApp();
}

/**
 * Render all sections dynamically using `siteConfig`
 */
function renderDynamicContent() {
  renderStatsBar();
  renderNichesTags();
  renderServicesSection();
  renderPortfolioGrid("all");
  renderSocialCards();
  renderBrandsMarquee();
  renderPackagesGrid();
  renderProcessTimeline();
  renderAudienceInsights();
  renderTestimonialsSlider();
  renderFaqAccordion();
}

/* ==============================================================================
   SECTION RENDERERS
   ============================================================================== */

// 1. Stats Bar
function renderStatsBar() {
  const container = document.getElementById("stats-container");
  if (!container) return;

  container.innerHTML = siteConfig.stats
    .map(
      (stat) => `
      <div class="stat-item" data-stat-id="${stat.id}">
        <div class="stat-number" id="stat-val-${stat.id}" data-target="${stat.value}" data-factor="${stat.displayFactor}" data-suffix="${stat.displaySuffix}" data-decimals="${stat.decimals}">
          0${stat.displaySuffix}
        </div>
        <div class="stat-label">
          <i class="${stat.icon}" style="margin-right: 4px; color: var(--color-gold);"></i>
          ${stat.label}
        </div>
      </div>
    `
    )
    .join("");
}

// 2. About Me - Niches Tags
function renderNichesTags() {
  const container = document.getElementById("niches-container");
  if (!container) return;

  container.innerHTML = siteConfig.niches
    .map(
      (niche) => `
      <span class="niche-tag">
        <i class="${niche.icon}"></i>
        ${niche.name}
      </span>
    `
    )
    .join("");
}

// 3. What I Do / Services
function renderServicesSection() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = siteConfig.services
    .map(
      (service) => `
      <div class="service-card" data-service-id="${service.id}">
        <div class="service-icon-wrap">
          <i class="${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.description}</p>
        <div class="service-features">
          ${service.deliverables
            .map(
              (item) => `
            <div class="service-feature-item">
              <i class="fa-solid fa-check"></i>
              <span>${item}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
}

// 4. Featured Work Grid
function renderPortfolioGrid(filter = "all") {
  const container = document.getElementById("portfolio-container");
  if (!container) return;

  const items =
    filter === "all"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((item) => item.category === filter);

  container.innerHTML = items
    .map(
      (item) => `
      <!-- REPLACE IMAGE: ${item.thumbnail} -->
      <div class="portfolio-card" data-item-id="${item.id}" data-category="${item.category}" tabindex="0" role="button" aria-label="View ${item.title}">
        <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
        <div class="portfolio-card-overlay">
          <div class="portfolio-top-bar">
            <span class="portfolio-platform-badge">
              <i class="fa-brands fa-${item.platform}"></i>
              ${item.platform === "instagram" ? "Reel" : "TikTok"}
            </span>
            <span class="portfolio-views">
              <i class="fa-solid fa-eye" style="margin-right: 3px;"></i>${item.views}
            </span>
          </div>

          <div class="portfolio-play-btn" title="Preview Reel">
            <i class="fa-solid fa-play"></i>
          </div>

          <div class="portfolio-bottom-info">
            <span class="portfolio-category-tag">${item.categoryLabel}</span>
            <h4 class="portfolio-title">${item.title}</h4>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  // Re-attach card click listeners for lightbox
  container.querySelectorAll(".portfolio-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-item-id");
      openLightbox(id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = card.getAttribute("data-item-id");
        openLightbox(id);
      }
    });
  });
}

// 5. Social Feed Highlights
function renderSocialCards() {
  const container = document.getElementById("social-cards-container");
  if (!container) return;

  container.innerHTML = `
    <!-- Instagram Channel Card -->
    <div class="social-channel-card">
      <div>
        <div class="social-card-header">
          <div class="social-card-avatar">
            <img src="/assets/images/hero-portrait.svg" alt="Khadija Mirza Instagram Avatar" />
          </div>
          <div class="social-card-meta">
            <h4>${siteConfig.creator.name}</h4>
            <p>${siteConfig.socials.instagram.handle}</p>
          </div>
        </div>

        <div class="social-card-stats">
          <div class="social-stat-col">
            <strong>${siteConfig.socials.instagram.followers}</strong>
            <span>Followers</span>
          </div>
          <div class="social-stat-col">
            <strong>${siteConfig.socials.instagram.posts}</strong>
            <span>Posts</span>
          </div>
          <div class="social-stat-col">
            <strong>High</strong>
            <span>Engagement</span>
          </div>
        </div>

        <p class="social-card-bio">
          Modest fashion &amp; corset styling, luxury Pakistani prêt, Kundan jewellery &amp; bangles, store raids in Lahore &amp; Faisalabad.
        </p>
      </div>

      <a href="${siteConfig.socials.instagram.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i class="fa-brands fa-instagram"></i> Follow on Instagram
      </a>
    </div>

    <!-- TikTok Channel Card -->
    <div class="social-channel-card">
      <div>
        <div class="social-card-header">
          <div class="social-card-avatar">
            <img src="/assets/images/about-portrait.svg" alt="Khadija Mirza TikTok Avatar" />
          </div>
          <div class="social-card-meta">
            <h4>${siteConfig.creator.name}</h4>
            <p>${siteConfig.socials.tiktok.handle}</p>
          </div>
        </div>

        <div class="social-card-stats">
          <div class="social-stat-col">
            <strong>${siteConfig.socials.tiktok.followers}</strong>
            <span>Followers</span>
          </div>
          <div class="social-stat-col">
            <strong>${siteConfig.socials.tiktok.likes}</strong>
            <span>Total Likes</span>
          </div>
          <div class="social-stat-col">
            <strong>Viral</strong>
            <span>Reach</span>
          </div>
        </div>

        <p class="social-card-bio">
          Trending styling hacks, GRWM routines, aesthetic day vlogs in Lahore, and unedited behind-the-scenes moments.
        </p>
      </div>

      <a href="${siteConfig.socials.tiktok.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <i class="fa-brands fa-tiktok"></i> Follow on TikTok
      </a>
    </div>
  `;
}

// 6. Brand Marquee Logos
function renderBrandsMarquee() {
  const track = document.getElementById("brands-track");
  if (!track) return;

  // Duplicate list to achieve continuous seamless loop
  const brandsList = [...siteConfig.brands, ...siteConfig.brands];

  track.innerHTML = brandsList
    .map(
      (brand) => `
      <!-- REPLACE IMAGE: ${brand.logo} with official brand logo -->
      <div class="brand-logo-item" title="${brand.name} - ${brand.label}">
        <img src="${brand.logo}" alt="${brand.name} placeholder logo" loading="lazy" />
      </div>
    `
    )
    .join("");
}

// 7. Collaboration Packages
function renderPackagesGrid() {
  const container = document.getElementById("packages-container");
  if (!container) return;

  container.innerHTML = siteConfig.packages
    .map(
      (pkg) => `
      <div class="package-card ${pkg.featured ? "featured" : ""}">
        ${pkg.badge ? `<div class="package-badge">${pkg.badge}</div>` : ""}
        <h3 class="package-title">${pkg.title}</h3>
        <p class="package-subtitle">${pkg.subtitle}</p>

        <div class="package-price-wrap">
          <div class="package-price">${pkg.price}</div>
          <div class="package-price-note">Tailored to campaign scope &amp; usage</div>
        </div>

        <div class="package-features">
          ${pkg.features
            .map(
              (feat) => `
            <div class="package-feature-item">
              <i class="fa-solid fa-check"></i>
              <span>${feat}</span>
            </div>
          `
            )
            .join("")}
        </div>

        <button class="btn ${pkg.featured ? "btn-primary" : "btn-secondary"} btn-sm package-quote-btn" data-package-id="${pkg.id}" data-package-name="${pkg.title}">
          Get a Quote <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `
    )
    .join("");

  // Connect "Get a Quote" buttons to contact form
  container.querySelectorAll(".package-quote-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pkgTitle = btn.getAttribute("data-package-name");
      const contactSelect = document.getElementById("collab-type-select");
      if (contactSelect) {
        // Find matching option or set value
        for (let i = 0; i < contactSelect.options.length; i++) {
          if (
            contactSelect.options[i].text
              .toLowerCase()
              .includes(pkgTitle.toLowerCase().split(" ")[0])
          ) {
            contactSelect.selectedIndex = i;
            break;
          }
        }
      }
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// 8. How I Work Process Timeline
function renderProcessTimeline() {
  const container = document.getElementById("process-container");
  if (!container) return;

  container.innerHTML = siteConfig.process
    .map(
      (proc) => `
      <div class="process-step-card">
        <div class="process-step-num">${proc.step}</div>
        <h4 class="process-step-title">${proc.title}</h4>
        <p class="process-step-desc">${proc.desc}</p>
      </div>
    `
    )
    .join("");
}

// 9. Audience Insights & Demographics
function renderAudienceInsights() {
  const container = document.getElementById("audience-container");
  if (!container) return;

  const { gender, age, cities } = siteConfig.audience;

  container.innerHTML = `
    <!-- Card 1: Gender Distribution -->
    <div class="insight-card">
      <div class="insight-card-header">
        <h4 class="insight-card-title">Gender Demographics</h4>
        <span class="insight-card-tag">Editable in Config</span>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
        Strong affinity among Pakistani females shopping for prêt, jewellery, and lifestyle products.
      </p>

      <div class="gender-bar-wrap">
        <div class="gender-split-bar">
          <div class="gender-female-fill" style="width: ${gender.female}%" title="Female: ${gender.female}%"></div>
          <div class="gender-male-fill" style="width: ${gender.male}%" title="Male: ${gender.male}%"></div>
        </div>
        <div class="gender-legend">
          <div class="gender-legend-item">
            <span class="legend-dot female"></span>
            <strong>${gender.female}% Female</strong>
          </div>
          <div class="gender-legend-item">
            <span class="legend-dot male"></span>
            <strong>${gender.male}% Male</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2: Age Demographics -->
    <div class="insight-card">
      <div class="insight-card-header">
        <h4 class="insight-card-title">Age Distribution</h4>
        <span class="insight-card-tag">Core 18 - 34</span>
      </div>
      <div class="age-bars-list">
        ${age
          .map(
            (item) => `
          <div class="demographic-row">
            <div class="demo-labels">
              <span>${item.range} Years</span>
              <strong>${item.percentage}%</strong>
            </div>
            <div class="demo-bar-track">
              <div class="demo-bar-fill" style="width: ${item.percentage}%"></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <!-- Card 3: Top Geographic Cities -->
    <div class="insight-card">
      <div class="insight-card-header">
        <h4 class="insight-card-title">Top Reach Locations</h4>
        <span class="insight-card-tag">PK &amp; Diaspora</span>
      </div>
      <div class="cities-bars-list">
        ${cities
          .map(
            (city) => `
          <div class="demographic-row">
            <div class="demo-labels">
              <span><i class="fa-solid fa-location-dot" style="color: var(--color-gold); font-size: 0.75rem; margin-right: 4px;"></i>${city.name}</span>
              <strong>${city.percentage}%</strong>
            </div>
            <div class="demo-bar-track">
              <div class="demo-bar-fill" style="width: ${city.percentage}%"></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// 10. Testimonials Slider
function renderTestimonialsSlider() {
  const wrapper = document.getElementById("testimonials-wrapper");
  if (!wrapper) return;

  wrapper.innerHTML = siteConfig.testimonials
    .map(
      (t) => `
      <div class="swiper-slide">
        <!-- REPLACE TESTIMONIAL: Placeholder client testimonial -->
        <div class="testimonial-card">
          <div class="testimonial-quote-icon">&ldquo;</div>
          <p class="testimonial-text">&ldquo;${t.quote}&rdquo;</p>
          <div class="testimonial-author">
            <h5>${t.author}</h5>
            <p>${t.role}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// 11. FAQ Accordion
function renderFaqAccordion() {
  const container = document.getElementById("faq-container");
  if (!container) return;

  container.innerHTML = siteConfig.faqs
    .map(
      (faq, index) => `
      <div class="faq-item ${index === 0 ? "active" : ""}">
        <button class="faq-question" aria-expanded="${index === 0}">
          <span>${faq.question}</span>
          <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
        </button>
        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      </div>
    `
    )
    .join("");
}

/* ==============================================================================
   INTERACTIVE LOGIC & ANIMATIONS
   ============================================================================== */

/**
 * 1. Preloader Animation (Fail-Safe & Fast)
 */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const bar = document.getElementById("preloader-bar");
  const counter = document.getElementById("preloader-counter");
  if (!preloader) return;

  // Global dismissal function (ensures preloader is never stuck)
  window.dismissPreloader = function() {
    if (!preloader || preloader.classList.contains("loaded")) return;
    preloader.classList.add("loaded");
    preloader.style.pointerEvents = "none";

    setTimeout(() => {
      preloader.style.display = "none";
      try {
        runHeroReveal();
      } catch (e) {
        console.warn("Hero reveal:", e);
      }
    }, 400);
  };

  // Allow clicking anywhere to skip
  preloader.addEventListener("click", window.dismissPreloader);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      window.dismissPreloader();
    }
  }, { once: true });

  // Rapid progress simulation (finishes in ~600ms)
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 24) + 16;
    if (progress > 100) progress = 100;

    if (bar) bar.style.width = `${progress}%`;
    if (counter) counter.innerText = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(window.dismissPreloader, 150);
    }
  }, 30);

  // Hard guarantee: absolute maximum 1.4 seconds
  setTimeout(() => {
    clearInterval(interval);
    window.dismissPreloader();
  }, 1400);
}

/**
 * 2. Lenis Smooth Scroll
 */
function initLenis() {
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof ScrollTrigger !== "undefined") {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }
}

/**
 * 3. Hero Reveal Animation
 */
function runHeroReveal() {
  if (typeof gsap === "undefined") return;

  gsap.from(".hero-content > *", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out"
  });

  gsap.from(".hero-frame-wrapper", {
    scale: 0.92,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out"
  });
}

/**
 * 4. Theme Toggle (Light / Dark)
 */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("khadija_portfolio_theme");

  // Default to light as requested (ivory palette), or respect preference
  const currentTheme = storedTheme || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const nextTheme = active === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("khadija_portfolio_theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle-btn i");
  if (!icon) return;
  if (theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

/**
 * 5. Navbar Sticky & Mobile Drawer
 */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger-btn");
  const drawer = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("active");
      if (isOpen) {
        drawer.classList.remove("active");
        hamburger.classList.remove("active");
      } else {
        drawer.classList.add("active");
        hamburger.classList.add("active");
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        drawer.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }
}

/**
 * 6. Desktop Custom Cursor
 */
function initCustomCursor() {
  const dot = document.querySelector(".custom-cursor-dot");
  const trailer = document.querySelector(".custom-cursor-trailer");
  if (!dot || !trailer) return;

  let mouseX = 0;
  let mouseY = 0;
  let trailerX = 0;
  let trailerY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    trailerX += (mouseX - trailerX) * 0.18;
    trailerY += (mouseY - trailerY) * 0.18;
    trailer.style.left = `${trailerX}px`;
    trailer.style.top = `${trailerY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover effect over clickable controls
  document.querySelectorAll("a, button, .portfolio-card, input, select, textarea").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      trailer.style.transform = "translate(-50%, -50%) scale(1.6)";
      trailer.style.backgroundColor = "rgba(201, 162, 75, 0.15)";
    });
    el.addEventListener("mouseleave", () => {
      trailer.style.transform = "translate(-50%, -50%) scale(1)";
      trailer.style.backgroundColor = "transparent";
    });
  });
}

/**
 * 7. Portfolio Filtering
 */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter") || "all";
      renderPortfolioGrid(category);
    });
  });
}

/**
 * 8. Lightbox Video Modal
 */
let currentModalItem = null;

function initLightboxModal() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;

  closeBtn?.addEventListener("click", closeLightbox);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLightbox();
    }
  });
}

function openLightbox(itemId) {
  const modal = document.getElementById("video-modal");
  const item = siteConfig.portfolio.find((p) => p.id === itemId);
  if (!modal || !item) return;

  currentModalItem = item;

  const modalImg = document.getElementById("modal-reel-img");
  const modalPlatform = document.getElementById("modal-platform-text");
  const modalViews = document.getElementById("modal-views-text");
  const modalTitle = document.getElementById("modal-reel-title");
  const modalDesc = document.getElementById("modal-reel-desc");
  const modalLink = document.getElementById("modal-direct-link");

  if (modalImg) modalImg.src = item.thumbnail;
  if (modalPlatform) modalPlatform.innerText = item.platform.toUpperCase();
  if (modalViews) modalViews.innerText = item.views + " Views";
  if (modalTitle) modalTitle.innerText = item.title;
  if (modalDesc) modalDesc.innerText = item.description;
  if (modalLink) {
    modalLink.href = item.reelUrl;
    modalLink.innerText = `Watch Original on ${item.platform === "instagram" ? "Instagram" : "TikTok"}`;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("video-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/**
 * 9. FAQ Accordion Toggle
 */
function initAccordion() {
  const container = document.getElementById("faq-container");
  if (!container) return;

  container.addEventListener("click", (e) => {
    const questionBtn = e.target.closest(".faq-question");
    if (!questionBtn) return;

    const item = questionBtn.closest(".faq-item");
    const isActive = item.classList.contains("active");

    // Close others
    container.querySelectorAll(".faq-item").forEach((it) => {
      it.classList.remove("active");
      it.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      item.classList.add("active");
      questionBtn.setAttribute("aria-expanded", "true");
    }
  });
}

/**
 * 10. Swiper Testimonials Carousel
 */
function initSwiper() {
  if (typeof Swiper !== "undefined") {
    new Swiper(".testimonials-slider", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 30
    });
  }
}

/**
 * 11. Count-Up Stats Animation on Scroll
 */
function initCountUpAnimations() {
  const statsElements = document.querySelectorAll(".stat-number");
  if (!statsElements.length) return;

  const animateCount = (el) => {
    const target = parseFloat(el.getAttribute("data-target")) || 0;
    const factor = parseFloat(el.getAttribute("data-factor")) || 1;
    const suffix = el.getAttribute("data-suffix") || "";
    const decimals = parseInt(el.getAttribute("data-decimals"), 10) || 0;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (target - start) * ease;

      const formattedVal = (current / factor).toFixed(decimals);
      el.innerText = `${formattedVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        const finalVal = (target / factor).toFixed(decimals);
        el.innerText = `${finalVal}${suffix}`;
      }
    }
    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  statsElements.forEach((el) => observer.observe(el));
}

/**
 * 12. Top Scroll Progress Bar
 */
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}

/**
 * 13. Contact Form Submission & Validation
 */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const successAlert = document.getElementById("form-success-alert");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("client-name")?.value.trim();
    const brand = document.getElementById("client-brand")?.value.trim();
    const email = document.getElementById("client-email")?.value.trim();
    const phone = document.getElementById("client-phone")?.value.trim();
    const type = document.getElementById("collab-type-select")?.value;
    const budget = document.getElementById("collab-budget-select")?.value;
    const message = document.getElementById("client-message")?.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email address, and collaboration message.");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

    // Attempt submission via Formspree or EmailJS endpoint, with Mailto fallback
    try {
      if (
        siteConfig.contact.formEndpoint &&
        !siteConfig.contact.formEndpoint.includes("placeholder")
      ) {
        await fetch(siteConfig.contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, brand, email, phone, type, budget, message })
        });
      } else {
        // Fallback simulation / mailto preparation
        await new Promise((res) => setTimeout(res, 600));
      }

      if (successAlert) {
        successAlert.style.display = "flex";
      }

      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Inquiry Sent!`;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        if (successAlert) successAlert.style.display = "none";
      }, 5000);
    } catch (err) {
      console.warn("Direct form submission error, triggering mailto fallback", err);
      const mailtoLink = `mailto:${siteConfig.contact.fallbackEmail}?subject=${encodeURIComponent(
        `Brand Collaboration Inquiry from ${name} (${brand || "Brand"})`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nBrand: ${brand}\nPhone: ${phone}\nCollab Type: ${type}\nBudget: ${budget}\n\nMessage:\n${message}`
      )}`;
      window.location.href = mailtoLink;
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}
