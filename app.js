/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle */
const {
  useState,
  useEffect,
  useRef
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "blue",
  "_note": "default theme: Apple blue (chosen)",
  "showMockups": true,
  "showPrinciples": true
} /*EDITMODE-END*/;
const THEME_CLASS = {
  blue: "",
  warm: "theme-warm",
  mono: "theme-mono"
};

/* ===== Icons (line SVG, SF Symbol-ish) ===== */
const Icon = ({
  name,
  size = 18
}) => {
  const stroke = "currentColor";
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "mic":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "3",
        width: "6",
        height: "12",
        rx: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 11a7 7 0 0 0 14 0M12 18v3"
      }));
    case "book":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
      }));
    case "arrow-right":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      }));
    case "download":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v12m-5-5 5 5 5-5M4 21h16"
      }));
    case "sparkle":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"
      }));
    case "lock":
      return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("rect", {
        x: "4",
        y: "11",
        width: "16",
        height: "10",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 11V7a4 4 0 0 1 8 0v4"
      }));
    default:
      return null;
  }
};

/* ===== Top Nav ===== */
const Nav = () => /*#__PURE__*/React.createElement("nav", {
  className: "nav"
}, /*#__PURE__*/React.createElement("div", {
  className: "nav-inner"
}, /*#__PURE__*/React.createElement("a", {
  href: "./",
  className: "nav-logo"
}, /*#__PURE__*/React.createElement("span", {
  className: "nav-logo-mark"
}), "ClearSky"), /*#__PURE__*/React.createElement("div", {
  className: "nav-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "#products"
}, "\u4EA7\u54C1"), /*#__PURE__*/React.createElement("a", {
  href: "#updates"
}, "\u66F4\u65B0"), /*#__PURE__*/React.createElement("a", {
  href: "#about"
}, "\u5173\u4E8E"), /*#__PURE__*/React.createElement("a", {
  href: "#blog"
}, "Blog"))));

/* ===== Hero with mockups ===== */
const HeroMockups = () => /*#__PURE__*/React.createElement("div", {
  className: "hero-stage",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("div", {
  className: "mock mock-jotbee"
}, /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-bar"
}, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-date"
}, "2026 \xB7 05 \xB7 04 \xB7 MON"), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-title"
}, "\u5173\u4E8E\u65E9\u6668\u7684\u4E00\u676F\u5496\u5561"), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line medium"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line short"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-emoji"
}, /*#__PURE__*/React.createElement("span", {
  className: "mock-jotbee-tag"
}, "\u65E5\u5E38"), /*#__PURE__*/React.createElement("span", {
  className: "mock-jotbee-tag"
}, "\u5496\u5561")))), /*#__PURE__*/React.createElement("div", {
  className: "mock mock-voicebee"
}, /*#__PURE__*/React.createElement("div", {
  className: "mock-voicebee-text"
}, "\u4ECA\u5929\u7684\u5929\u6C14\u771F\u4E0D\u9519\uFF0C\u9002\u5408\u51FA\u53BB\u8D70\u8D70", /*#__PURE__*/React.createElement("span", {
  className: "mock-voicebee-cursor"
})), /*#__PURE__*/React.createElement("div", {
  className: "mock-voicebee-bottom"
}, /*#__PURE__*/React.createElement("div", {
  className: "mock-voicebee-wave"
}, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
  className: "mock-voicebee-kbd"
}, "fn"))));
const Hero = ({
  showMockups
}) => /*#__PURE__*/React.createElement("section", {
  className: "section section-dark"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero",
  style: !showMockups ? {
    gridTemplateColumns: "1fr",
    textAlign: "center"
  } : undefined
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "\u72EC\u7ACB\u5DE5\u4F5C\u5BA4 \xB7 \u4E00\u4EBA + AI"), /*#__PURE__*/React.createElement("h1", {
  className: "headline-hero"
}, "\u4E0D\u4F1A\u5199\u4EE3\u7801\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u4F46\u77E5\u9053\u81EA\u5DF1\u8981\u4EC0\u4E48\u3002"), /*#__PURE__*/React.createElement("p", {
  className: "subtitle",
  style: !showMockups ? {
    marginLeft: "auto",
    marginRight: "auto"
  } : undefined
}, "\u6211\u662F ClearSky\u3002\u4FDD\u9669\u884C\u4E1A\u4ECE\u4E1A\u8005\uFF0C\u975E\u79D1\u73ED\u3002\u7528 AI \u505A\u51FA\u4E86\u81EA\u5DF1\u9700\u8981\u7684\u5DE5\u5177\uFF0C\u5DF2\u4E0A\u67B6 App Store\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "hero-meta"
}, /*#__PURE__*/React.createElement("a", {
  href: "#products",
  className: "btn btn-primary"
}, "\u67E5\u770B\u4F5C\u54C1", /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 14
})), /*#__PURE__*/React.createElement("a", {
  href: "#about",
  className: "btn btn-ghost"
}, "\u5173\u4E8E\u6211"), /*#__PURE__*/React.createElement("span", {
  className: "hero-stat"
}, /*#__PURE__*/React.createElement("span", {
  className: "hero-stat-dot"
}), "2 \u6B3E App \u5728\u7EBF \xB7 \u6301\u7EED\u66F4\u65B0"))), showMockups && /*#__PURE__*/React.createElement(HeroMockups, null))));

/* ===== Products ===== */
const Products = () => /*#__PURE__*/React.createElement("section", {
  id: "products",
  className: "section section-white"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "\u4F5C\u54C1"), /*#__PURE__*/React.createElement("h2", {
  className: "headline-section"
}, "\u4E24\u4E2A\u5DE5\u5177\uFF0C\u4E00\u4E2A\u5DE5\u4F5C\u5BA4\u3002"), /*#__PURE__*/React.createElement("p", {
  className: "subtitle"
}, "\u4E3A\u81EA\u5DF1\u9020\u7684\u4E1C\u897F\uFF0C\u6700\u540E\u4E5F\u5E2E\u5230\u4E86\u522B\u4EBA\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "products-grid"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://tangzhihong.com/voicebee/",
  className: "product-tile"
}, /*#__PURE__*/React.createElement("div", {
  className: "product-tile-head"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/voicebee-icon.png",
  alt: "",
  className: "product-tile-icon"
}), /*#__PURE__*/React.createElement("div", {
  className: "product-tile-meta"
}, /*#__PURE__*/React.createElement("h3", null, "VoiceBee"), /*#__PURE__*/React.createElement("span", {
  className: "product-tile-platform"
}, "macOS \xB7 v1.1.0"))), /*#__PURE__*/React.createElement("div", {
  className: "product-tile-tagline"
}, "\u6309\u4F4F\u8BF4\u8BDD\uFF0C\u677E\u5F00\u8F93\u5165\u3002"), /*#__PURE__*/React.createElement("p", {
  className: "product-tile-desc"
}, "macOS \u539F\u751F\u8BED\u97F3\u8F93\u5165\u6CD5\u3002\u6D41\u5F0F\u8BC6\u522B\uFF0CAI \u6DA6\u8272\uFF0C\u9009\u4E2D\u5373\u7FFB\u8BD1\u3002\u4EFB\u4F55 App \u4EFB\u4F55\u8F93\u5165\u6846\u53EF\u7528\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "product-tile-features"
}, /*#__PURE__*/React.createElement("span", null, "5 \u79CD\u8BED\u8A00"), /*#__PURE__*/React.createElement("span", null, "\u5168\u5C40\u5FEB\u6377\u952E"), /*#__PURE__*/React.createElement("span", null, "\u672C\u5730\u8BC6\u522B"), /*#__PURE__*/React.createElement("span", null, "AI \u6DA6\u8272")), /*#__PURE__*/React.createElement("span", {
  className: "product-tile-cta"
}, "\u4E86\u89E3\u66F4\u591A ", /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 14
}))), /*#__PURE__*/React.createElement("a", {
  href: "https://jotbee.app",
  className: "product-tile"
}, /*#__PURE__*/React.createElement("div", {
  className: "product-tile-head"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/jotbee-icon.png",
  alt: "",
  className: "product-tile-icon"
}), /*#__PURE__*/React.createElement("div", {
  className: "product-tile-meta"
}, /*#__PURE__*/React.createElement("h3", null, "JotBee"), /*#__PURE__*/React.createElement("span", {
  className: "product-tile-platform"
}, "iOS \xB7 macOS \xB7 v1.1.0"))), /*#__PURE__*/React.createElement("div", {
  className: "product-tile-tagline"
}, "\u968F\u624B\u8BB0\u5F55\uFF0C\u917F\u9020\u751F\u6D3B\u3002"), /*#__PURE__*/React.createElement("p", {
  className: "product-tile-desc"
}, "\u5373\u5F00\u5373\u5199\u7684\u65E5\u8BB0\u672C\u3002\u539F\u751F SwiftUI\uFF0C\u79D2\u5F00\u79D2\u5199\u3002iCloud \u7167\u7247\u540C\u6B65\uFF0CAI Reflect \u6E29\u6696\u56DE\u5E94\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "product-tile-features"
}, /*#__PURE__*/React.createElement("span", null, "iOS + macOS"), /*#__PURE__*/React.createElement("span", null, "iCloud \u540C\u6B65"), /*#__PURE__*/React.createElement("span", null, "7 \u79CD AI \u5F15\u64CE"), /*#__PURE__*/React.createElement("span", null, "\u65E0\u5185\u8D2D")), /*#__PURE__*/React.createElement("span", {
  className: "product-tile-cta"
}, "\u4E86\u89E3\u66F4\u591A ", /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 14
}))))));

/* ===== Updates timeline ===== */
const Updates = () => /*#__PURE__*/React.createElement("section", {
  id: "updates",
  className: "section section-light"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "\u6700\u65B0\u52A8\u6001"), /*#__PURE__*/React.createElement("h2", {
  className: "headline-section"
}, "\u4E00\u76F4\u5728\u8FED\u4EE3\u3002"), /*#__PURE__*/React.createElement("p", {
  className: "subtitle"
}, "\u6BCF\u4E00\u6B21\u66F4\u65B0\u90FD\u6765\u81EA\u771F\u5B9E\u4F7F\u7528\u4E2D\u7684\u75D2\u70B9\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "updates-timeline"
}, /*#__PURE__*/React.createElement("div", {
  className: "update-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "update-date"
}, "2026.04.24"), /*#__PURE__*/React.createElement("div", {
  className: "update-content"
}, /*#__PURE__*/React.createElement("h3", null, "JotBee ", /*#__PURE__*/React.createElement("span", {
  className: "update-version"
}, "v1.1.0")), /*#__PURE__*/React.createElement("ul", {
  className: "update-list"
}, /*#__PURE__*/React.createElement("li", null, "\u5168\u65B0\u5E94\u7528\u56FE\u6807\uFF0C\u89C6\u89C9\u66F4\u6210\u719F"), /*#__PURE__*/React.createElement("li", null, "\u7167\u7247\u652F\u6301 iCloud \u540C\u6B65\uFF0C\u8DE8\u8BBE\u5907\u65E0\u7F1D\u6D41\u52A8"), /*#__PURE__*/React.createElement("li", null, "iOS \u4E0E macOS \u53CC\u7AEF\u5DF2\u4E0A\u7EBF App Store")))), /*#__PURE__*/React.createElement("div", {
  className: "update-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "update-date"
}, "2026.04.14"), /*#__PURE__*/React.createElement("div", {
  className: "update-content"
}, /*#__PURE__*/React.createElement("h3", null, "VoiceBee ", /*#__PURE__*/React.createElement("span", {
  className: "update-version"
}, "v1.1.0")), /*#__PURE__*/React.createElement("ul", {
  className: "update-list"
}, /*#__PURE__*/React.createElement("li", null, "\u6DA6\u8272\u6A21\u5F0F\u5168\u9762\u5347\u7EA7\uFF0C\u6D41\u5F0F\u54CD\u5E94\uFF0C\u9996\u5B57 ~0.5 \u79D2\u51FA\u73B0"), /*#__PURE__*/React.createElement("li", null, "\u6D6E\u7A97\u5B9E\u65F6\u663E\u793A AI \u6DA6\u8272\u8FC7\u7A0B"), /*#__PURE__*/React.createElement("li", null, "Ollama / Claude / DeepSeek / Gemini \u5168\u5F15\u64CE\u6D41\u5F0F\u8F93\u51FA")))), /*#__PURE__*/React.createElement("div", {
  className: "update-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "update-date"
}, "2026.04.12"), /*#__PURE__*/React.createElement("div", {
  className: "update-content"
}, /*#__PURE__*/React.createElement("h3", null, "VoiceBee ", /*#__PURE__*/React.createElement("span", {
  className: "update-version"
}, "v1.0.0")), /*#__PURE__*/React.createElement("ul", {
  className: "update-list"
}, /*#__PURE__*/React.createElement("li", null, "\u65B0\u589E\u7FFB\u8BD1\u529F\u80FD\uFF0C\u9009\u4E2D\u6587\u5B57\u6309 \u2325T \u5373\u53EF\u7FFB\u8BD1"), /*#__PURE__*/React.createElement("li", null, "\u7FFB\u8BD1\u5F15\u64CE\u72EC\u7ACB\u914D\u7F6E\uFF0C\u652F\u6301\u591A\u5F15\u64CE"), /*#__PURE__*/React.createElement("li", null, "\u8BBE\u7F6E\u754C\u9762\u65B0\u589E\u7FFB\u8BD1 Tab")))))));

/* ===== About strip ===== */
const About = () => /*#__PURE__*/React.createElement("section", {
  id: "about",
  className: "section section-dark"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "about-strip"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "\u5173\u4E8E"), /*#__PURE__*/React.createElement("h2", null, "\u81EA\u5DF1\u9700\u8981\u7684\u4E1C\u897F\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u81EA\u5DF1\u9020\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "about-strip-aside"
}, /*#__PURE__*/React.createElement("p", null, "\u7528\u4E86\u5F88\u4E45\u7684\u65E5\u8BB0 App \u4E0D\u518D\u7EF4\u62A4\uFF0C\u5361\u987F\u5230\u6253\u4E0D\u5F00 \u2014 \u81EA\u5DF1\u9020\u4E86\u4E00\u4E2A\u3002"), /*#__PURE__*/React.createElement("p", null, "\u8DDF AI \u5BF9\u8BDD\u5168\u9760\u6253\u5B57\uFF0C\u6548\u7387\u592A\u4F4E\uFF0C\u73B0\u6709\u8BED\u97F3\u8F93\u5165\u6CD5\u53C8\u4E0D\u4FE1\u4EFB \u2014 \u53C8\u9020\u4E86\u4E00\u4E2A\u3002"), /*#__PURE__*/React.createElement("p", null, "\u6211\u7ED9\u81EA\u5DF1\u7684\u5B9A\u4F4D\u4ECE\u6765\u4E0D\u662F\u7A0B\u5E8F\u5458\uFF0C\u800C\u662F\u4EA7\u54C1\u7ECF\u7406\u3002AI \u662F\u6211\u7684\u642D\u6863\u3002"), /*#__PURE__*/React.createElement("a", {
  href: "blog/hello-world.html",
  className: "link-arrow"
}, "\u6211\u7684\u6545\u4E8B ", /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 14
}))))));

/* ===== Principles ===== */
const Principles = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-white",
  style: {
    paddingTop: "0",
    paddingBottom: "120px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "principles"
}, /*#__PURE__*/React.createElement("div", {
  className: "principle"
}, /*#__PURE__*/React.createElement("div", {
  className: "principle-num"
}, "01"), /*#__PURE__*/React.createElement("h3", null, "\u9700\u6C42\u9A71\u52A8"), /*#__PURE__*/React.createElement("p", null, "\u6BCF\u4E2A\u4EA7\u54C1\u90FD\u6765\u81EA\u771F\u5B9E\u7684\u75DB\u70B9\uFF0C\u4E0D\u662F\"\u60F3\u505A\u4E2A App \u8BD5\u8BD5\"\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "principle"
}, /*#__PURE__*/React.createElement("div", {
  className: "principle-num"
}, "02"), /*#__PURE__*/React.createElement("h3", null, "\u9690\u79C1\u4FE1\u4EF0"), /*#__PURE__*/React.createElement("p", null, "\u4E0D\u4FE1\u4EFB\u5927\u5382\u7684\u8BED\u97F3\u5904\u7406\uFF0C\u6240\u4EE5\u81EA\u5DF1\u9020\u3002\u6570\u636E\u7559\u5728\u4F60\u7684\u8BBE\u5907\u4E0A\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "principle"
}, /*#__PURE__*/React.createElement("div", {
  className: "principle-num"
}, "03"), /*#__PURE__*/React.createElement("h3", null, "\u5BA1\u7F8E\u5E95\u7EBF"), /*#__PURE__*/React.createElement("p", null, "\u4E0D\u597D\u770B\u7684\u4E1C\u897F\u6211\u81EA\u5DF1\u90FD\u4E0D\u7528\u3002\u754C\u9762\u7F8E\u89C2\u662F\u5E95\u7EBF\uFF0C\u4E0D\u662F\u52A0\u5206\u9879\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "principle"
}, /*#__PURE__*/React.createElement("div", {
  className: "principle-num"
}, "04"), /*#__PURE__*/React.createElement("h3", null, "\u4E00\u4EBA\u56E2\u961F"), /*#__PURE__*/React.createElement("p", null, "\u4E00\u4E2A\u4EBA + \u4E00\u4E2A AI\uFF0C\u4ECE\u60F3\u6CD5\u5230\u4E0A\u67B6 App Store\u3002")))));

/* ===== Blog ===== */
const Blog = () => /*#__PURE__*/React.createElement("section", {
  id: "blog",
  className: "section section-light"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "Blog"), /*#__PURE__*/React.createElement("h2", {
  className: "headline-section"
}, "\u4E00\u4E2A\u975E\u7A0B\u5E8F\u5458\u7684\u9020\u7269\u7B14\u8BB0\u3002"), /*#__PURE__*/React.createElement("p", {
  className: "subtitle"
}, "\u4E0D\u5B9A\u671F\u66F4\u65B0\uFF0C\u5199\u70B9\u60F3\u6CD5\u548C\u8FC7\u7A0B\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "blog-list"
}, /*#__PURE__*/React.createElement("a", {
  href: "blog/hello-world.html",
  className: "blog-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "blog-row-date"
}, "2026.04.14"), /*#__PURE__*/React.createElement("h3", null, "\u4E00\u4E2A\u4FDD\u9669\u5185\u52E4\uFF0C\u4E3A\u4EC0\u4E48\u8981\u505A App \u548C\u7F51\u7AD9"), /*#__PURE__*/React.createElement("span", {
  className: "blog-row-arrow"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 16
})))), /*#__PURE__*/React.createElement("div", {
  className: "blog-cta"
}, /*#__PURE__*/React.createElement("a", {
  href: "blog/",
  className: "link-arrow"
}, "\u67E5\u770B\u5168\u90E8\u6587\u7AE0 ", /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 14
})))));

/* ===== Notes (replaces Quotes) ===== */
const Notes = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-white"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "\u5199\u5728\u4EA7\u54C1\u80CC\u540E"), /*#__PURE__*/React.createElement("h2", {
  className: "headline-section"
}, "\u4E00\u4E9B\u96F6\u788E\u7684\u7B14\u8BB0\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "notes"
}, /*#__PURE__*/React.createElement("div", {
  className: "note"
}, /*#__PURE__*/React.createElement("div", {
  className: "note-num"
}, "N. 01"), /*#__PURE__*/React.createElement("p", null, "2023 \u5E74\u6211\u5B66\u4E0D\u4F1A\u5199\u4EE3\u7801\uFF0C2026 \u5E74\u6211\u53D1\u73B0\u6211\u6839\u672C\u4E0D\u9700\u8981\u4F1A\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "note"
}, /*#__PURE__*/React.createElement("div", {
  className: "note-num"
}, "N. 02"), /*#__PURE__*/React.createElement("p", null, "\u9690\u79C1\u4E0D\u662F\u4E00\u4E2A\u529F\u80FD\uFF0C\u662F\u4E00\u4E2A\u5E95\u7EBF\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "note"
}, /*#__PURE__*/React.createElement("div", {
  className: "note-num"
}, "N. 03"), /*#__PURE__*/React.createElement("p", null, "\u4EA7\u54C1\u4F1A\u88AB\u66F4\u597D\u7684\u4EA7\u54C1\u66FF\u4EE3\uFF0C\u4F46\u6545\u4E8B\u4E0D\u4F1A\u3002")))));

/* ===== CTA ===== */
const CTA = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-dark",
  style: {
    padding: "100px 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner center"
}, /*#__PURE__*/React.createElement("h2", {
  className: "headline-section"
}, "\u5F00\u59CB\u4F7F\u7528\u3002"), /*#__PURE__*/React.createElement("p", {
  className: "subtitle",
  style: {
    margin: "16px auto 0"
  }
}, "\u6240\u6709\u5DE5\u5177\u5B8C\u5168\u514D\u8D39\u3002\u6CA1\u6709\u5185\u8D2D\uFF0C\u6CA1\u6709\u5E7F\u544A\uFF0C\u6CA1\u6709\u8D26\u53F7\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "cta-buttons"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://tangzhihong.com/voicebee/",
  className: "btn btn-primary"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "download",
  size: 14
}), "VoiceBee for macOS"), /*#__PURE__*/React.createElement("a", {
  href: "https://jotbee.app",
  className: "btn btn-ghost"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "download",
  size: 14
}), "JotBee for iOS \xB7 macOS"))));

/* ===== Footer ===== */
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-brand-col"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-brand"
}, "ClearSky"), /*#__PURE__*/React.createElement("p", {
  className: "footer-tagline"
}, "\u72EC\u7ACB\u5DE5\u4F5C\u5BA4\u3002\u4E00\u4EBA + AI\uFF0C\u505A\u81EA\u5DF1\u9700\u8981\u7684\u5DE5\u5177\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Products"), /*#__PURE__*/React.createElement("a", {
  href: "https://tangzhihong.com/voicebee/"
}, "VoiceBee"), /*#__PURE__*/React.createElement("a", {
  href: "https://jotbee.app"
}, "JotBee")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Resources"), /*#__PURE__*/React.createElement("a", {
  href: "blog/"
}, "Blog"), /*#__PURE__*/React.createElement("a", {
  href: "pricing/"
}, "Pricing")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("a", {
  href: "privacy.html"
}, "Privacy"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:hi@tangzhihong.com"
}, "Email"))), /*#__PURE__*/React.createElement("div", {
  className: "footer-legal"
}, /*#__PURE__*/React.createElement("span", null, "Copyright \xA9 2026 ClearSky. All rights reserved."), /*#__PURE__*/React.createElement("a", {
  href: "privacy.html"
}, "\u9690\u79C1\u653F\u7B56")));

/* ===== Tweaks ===== */
const THEME_LABELS = ["Apple 蓝", "暖金米白", "极简黑白"];
const THEME_KEYS = ["blue", "warm", "mono"];
const Tweaks = ({
  tweaks,
  setTweak
}) => /*#__PURE__*/React.createElement(TweaksPanel, {
  title: "Tweaks"
}, /*#__PURE__*/React.createElement(TweakSection, {
  label: "\u4E3B\u9898\u8272\u8C03"
}), /*#__PURE__*/React.createElement(TweakRadio, {
  label: "Accent",
  value: THEME_LABELS[THEME_KEYS.indexOf(tweaks.theme)] || THEME_LABELS[0],
  options: THEME_LABELS,
  onChange: v => setTweak("theme", THEME_KEYS[THEME_LABELS.indexOf(v)])
}), /*#__PURE__*/React.createElement(TweakSection, {
  label: "\u5E03\u5C40"
}), /*#__PURE__*/React.createElement(TweakToggle, {
  label: "Hero mockup",
  value: tweaks.showMockups,
  onChange: v => setTweak("showMockups", v)
}), /*#__PURE__*/React.createElement(TweakToggle, {
  label: "\u8BBE\u8BA1\u539F\u5219\u533A\u5757",
  value: tweaks.showPrinciples,
  onChange: v => setTweak("showPrinciples", v)
}));

/* ===== Fade-in observer ===== */
const useFadeIn = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

/* ===== App ===== */
const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useFadeIn();
  useEffect(() => {
    document.body.className = THEME_CLASS[tweaks.theme] || "";
  }, [tweaks.theme]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, /*#__PURE__*/React.createElement(Hero, {
    showMockups: tweaks.showMockups
  }), /*#__PURE__*/React.createElement(Products, null), /*#__PURE__*/React.createElement(Updates, null), /*#__PURE__*/React.createElement(About, null), tweaks.showPrinciples && /*#__PURE__*/React.createElement(Principles, null), /*#__PURE__*/React.createElement(Blog, null), /*#__PURE__*/React.createElement(Notes, null), /*#__PURE__*/React.createElement(CTA, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Tweaks, {
    tweaks: tweaks,
    setTweak: setTweak
  }));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));