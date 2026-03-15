// ╔═══════════════════════════════════════════════════════════╗
// ║  THE AXON — Landing Page Configuration                    ║
// ║                                                           ║
// ║  Edit the values below to customize your site.            ║
// ║  Save the file and push to GitHub — Cloudflare will       ║
// ║  automatically redeploy with your changes.                ║
// ╚═══════════════════════════════════════════════════════════╝

const CONFIG = {

  // ─── Site ──────────────────────────────────────────────────
  siteName: "THE AXON",
  tagline: "transmissions from the space between",
  headerQuote: "Welcome to my home inside the wires",

  // ─── Profile (shown in the About modal) ────────────────────
  profileName: "Oxytocin",
  profileHandle: "@0x_Ytocin",
  profileAvatar: "",          // paste a URL to your image, or leave "" for initials
  profileInitials: "OX",      // shown when no avatar image is set
  profileBio:
    "Exploring internet culture, neuroscience, and the signals " +
    "we send into the void. Fascinated by the space between " +
    "synapses — where memory becomes meaning and noise becomes signal.",

  // ─── Blog Link ─────────────────────────────────────────────
  blogUrl: "https://blog.theaxon.co/?modal=subscribe",
  blogButtonText: "ENTER THE BLOG",

  // ─── Social Links ─────────────────────────────────────────
  //     Add, remove, or reorder freely.
  //     icon: any emoji or character
  //     name: display label
  //     url:  full URL or mailto: link
  socialLinks: [
    { icon: "𝕏", name: "Twitter",  url: "https://x.com/0x_Ytocin" },
    { icon: "◈", name: "Blog",     url: "https://blog.theaxon.co" },
    { icon: "✉", name: "Email",    url: "mailto:hello@mail.theaxon.co" },
  ],

  // ─── Colors ────────────────────────────────────────────────
  colorPrimary:      "#ff2a6d",    // hot pink — main accent
  colorSecondary:    "#05d9e8",    // electric cyan — secondary accent
  colorBackground:   "#1e1e2e",    // Catppuccin Mocha base
  colorText:         "#cdd6f4",    // Catppuccin Mocha text
  colorDimText:      "#7f849c",    // Catppuccin Mocha overlay1
  colorWindow:       "#181825",    // Catppuccin Mocha mantle
  colorWindowBorder: "#313244",    // Catppuccin Mocha surface0
  colorTitleBar:     "#1e1e2e",    // Catppuccin Mocha base

  // ─── Effects (true / false) ────────────────────────────────
  enableScanlines:   true,         // CRT scanline overlay
  enableGlitch:      true,         // glitch text on title
  enableSignalPulse: true,         // axon signal animation
  enableCRTVignette: true,         // dark-edge vignette
  enableNeuronBg:    true,         // neuron cellular automaton (wide screens only)

  // ─── Extras ────────────────────────────────────────────────
  footerMessage: "best viewed in netscape navigator 4.0",
};
