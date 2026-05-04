/* global React, ReactDOM */
const Nav = () => /*#__PURE__*/React.createElement("nav", {
  className: "nav"
}, /*#__PURE__*/React.createElement("div", {
  className: "nav-inner"
}, /*#__PURE__*/React.createElement("a", {
  href: "index.html",
  className: "nav-logo"
}, /*#__PURE__*/React.createElement("span", {
  className: "nav-logo-mark"
}), "ClearSky"), /*#__PURE__*/React.createElement("div", {
  className: "nav-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "voicebee.html"
}, "VoiceBee"), /*#__PURE__*/React.createElement("a", {
  href: "jotbee.html"
}, "JotBee"), /*#__PURE__*/React.createElement("a", {
  href: "brand.html",
  style: {
    color: "#fff"
  }
}, "Brand"), /*#__PURE__*/React.createElement("a", {
  href: "index.html#about"
}, "\u5173\u4E8E"))));
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-dark",
  style: {
    paddingTop: "140px",
    paddingBottom: "80px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner center"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "brand guidelines \xB7 v1"), /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(56px,8vw,96px)",
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1.04,
    marginTop: "16px"
  }
}, "ClearSky", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--accent)"
  }
}, "visual system.")), /*#__PURE__*/React.createElement("p", {
  className: "subtitle",
  style: {
    margin: "24px auto 0",
    maxWidth: "640px"
  }
}, "\u4E00\u4EFD\u7ED9\u81EA\u5DF1\u770B\u7684\u8BBE\u8BA1\u89C4\u8303\u3002\u8BA9 ClearSky \u51FA\u54C1\u7684\u6BCF\u4E00\u4E2A\u4EA7\u54C1\uFF0C\u90FD\u957F\u5F97\u50CF\u4E00\u5BB6\u4EBA\u3002")));
const Section = ({
  id,
  eyebrow,
  title,
  desc,
  dark,
  children
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  className: `section ${dark ? "section-dark" : "section-white"}`
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "feature-block",
  style: {
    textAlign: "left",
    margin: "0 0 56px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), desc && /*#__PURE__*/React.createElement("p", {
  className: "subtitle",
  style: {
    margin: "16px 0 0"
  }
}, desc)), children));

/* ── Logos ────────────────────────────────────── */
const Logos = () => /*#__PURE__*/React.createElement(Section, {
  id: "logos",
  eyebrow: "logos",
  title: "\u4E24\u679A\u5C0F\u91D1\u7AE0\u3002",
  desc: "\u6240\u6709 ClearSky \u4EA7\u54C1 icon \u90FD\u9075\u5FAA\u300E\u91D1\u8272\u6D6E\u96D5\u4E3B\u4F53 + \u7C73\u767D\u5E95 + iOS squircle\u300F\u7684\u89C6\u89C9\u516C\u5F0F\u3002"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-logo-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-logo-card"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/voicebee-icon.png",
  alt: "VoiceBee",
  className: "product-hero-icon",
  style: {
    margin: "0 0 24px",
    width: "160px",
    height: "160px"
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "brand-logo-name"
}, "VoiceBee"), /*#__PURE__*/React.createElement("div", {
  className: "brand-logo-desc"
}, "\u590D\u53E4\u5E7F\u64AD\u9EA6\u514B\u98CE\u3002\u4EE3\u8868\"\u58F0\u97F3\u53D8\u6587\u5B57\"\u7684\u5DE5\u827A\u611F\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "brand-logo-card"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/jotbee-icon.png",
  alt: "JotBee",
  className: "product-hero-icon",
  style: {
    margin: "0 0 24px",
    width: "160px",
    height: "160px"
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "brand-logo-name"
}, "JotBee"), /*#__PURE__*/React.createElement("div", {
  className: "brand-logo-desc"
}, "\u871C\u8702 + \u94C5\u7B14\u5C3E\u3002\"Jot\"=\u901F\u8BB0\uFF0C\u871C\u8702\u5E2E\u4F60\u91C7\u96C6\u751F\u6D3B\u3002"))), /*#__PURE__*/React.createElement("div", {
  className: "brand-rules"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-rule"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-rule-mark do"
}, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "brand-rule-title"
}, "DO"), /*#__PURE__*/React.createElement("p", null, "\u7C73\u767D\u5E95 (#F3ECDC) \u94FA\u6EE1 squircle \u5185\u90E8 \xB7 \u4E3B\u4F53\u6D6E\u96D5\u91D1\u8272 \xB7 iOS App icon \u76F4\u63A5\u7528 1024\xD71024 \u51FA\u56FE"))), /*#__PURE__*/React.createElement("div", {
  className: "brand-rule"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-rule-mark dont"
}, "\u2717"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "brand-rule-title"
}, "DON'T"), /*#__PURE__*/React.createElement("p", null, "\u4E0D\u8981\u5916\u91D1\u5708 \xB7 \u4E0D\u8981\u5728 icon \u5185\u5D4C\u4EA7\u54C1\u540D \xB7 \u4E0D\u8981\u7EAF\u767D\u6216\u6DF1\u8272\u80CC\u666F \xB7 \u4E0D\u8981 emoji \u5316\u7684\u6241\u5E73\u63CF\u8FB9\u7248\u672C")))));

/* ── Colors ────────────────────────────────────── */
const colorTokens = [{
  name: "Apple Blue",
  hex: "#0071E3",
  role: "Accent · 主交互色 · 链接",
  dark: false
}, {
  name: "Pure Black",
  hex: "#000000",
  role: "Hero / Section-dark 背景",
  dark: true
}, {
  name: "Cream",
  hex: "#F3ECDC",
  role: "Icon 底色 · 暖主题底",
  dark: false
}, {
  name: "Warm Gold",
  hex: "#A17434",
  role: "暖主题 accent · Logo 主色",
  dark: false
}, {
  name: "Stone Gray",
  hex: "#F5F5F7",
  role: "Section-light 背景 · Apple 灰",
  dark: false
}, {
  name: "Ink",
  hex: "#1D1D1F",
  role: "正文主色 · Apple 黑",
  dark: true
}];
const Colors = () => /*#__PURE__*/React.createElement(Section, {
  id: "colors",
  eyebrow: "colors",
  title: "\u51B7\u6696\u4E24\u5957\uFF0C\u7EDF\u4E00\u4E00\u79CD\u514B\u5236\u3002",
  desc: "\u4E3B\u8272\u4E3A Apple Blue\uFF08\u9ED8\u8BA4\uFF09\u3002\u7C73\u767D + \u6696\u91D1\u7EC4\u5408\u4F5C\u4E3A\u526F\u4E3B\u9898\uFF08\u6696\u4E3B\u9898\uFF09\uFF0C\u7528\u4E8E\u5F3A\u8C03\u6E29\u5EA6\u611F\u7684\u9875\u9762\u3002",
  dark: true
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-color-grid"
}, colorTokens.map(c => /*#__PURE__*/React.createElement("div", {
  className: "brand-color-card",
  key: c.hex,
  style: {
    background: c.hex,
    color: c.dark ? "#fff" : "#1d1d1f"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-color-name"
}, c.name), /*#__PURE__*/React.createElement("div", {
  className: "brand-color-hex"
}, c.hex), /*#__PURE__*/React.createElement("div", {
  className: "brand-color-role"
}, c.role)))));

/* ── Type ────────────────────────────────────── */
const Type = () => /*#__PURE__*/React.createElement(Section, {
  id: "type",
  eyebrow: "typography",
  title: "SF Pro Display / SF Pro Text\u3002",
  desc: "\u8DDF Apple \u540C\u6B3E\u3002\u4E2D\u6587\u8D70 PingFang SC \u2192 Noto Sans SC fallback\u3002\u6C38\u8FDC\u4E0D\u7528 Inter / Roboto / Arial\u3002"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-type-stack"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-type-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-type-meta"
}, "Display \xB7 56-96px \xB7 600"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(48px,6vw,72px)",
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1.04
  }
}, "\u4E0D\u4F1A\u5199\u4EE3\u7801\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u4F46\u77E5\u9053\u81EA\u5DF1\u8981\u4EC0\u4E48\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "brand-type-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-type-meta"
}, "Headline \xB7 32-48px \xB7 600"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: "40px",
    fontWeight: 600,
    letterSpacing: "-0.015em",
    lineHeight: 1.12
  }
}, "\u6BCF\u4E00\u4E2A\u529F\u80FD\uFF0C\u90FD\u4E3A\u65E5\u5E38\u800C\u751F\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "brand-type-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-type-meta"
}, "Subtitle \xB7 19-28px \xB7 400"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-display)",
    fontSize: "22px",
    fontWeight: 400,
    lineHeight: 1.42,
    color: "var(--text-secondary)"
  }
}, "\u72EC\u7ACB\u5DE5\u4F5C\u5BA4\uFF0C\u4E00\u4EBA + AI\uFF0C\u505A\u81EA\u5DF1\u9700\u8981\u7684\u5DE5\u5177\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "brand-type-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-type-meta"
}, "Body \xB7 15-17px \xB7 400"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--font-text)",
    fontSize: "17px",
    lineHeight: 1.62,
    color: "var(--text-secondary)"
  }
}, "\u50CF\u88C5\u4FEE\u623F\u5B50\uFF1A\u6211\u4E0D\u4F1A\u780C\u5899\uFF0C\u4F46\u6211\u975E\u5E38\u6E05\u695A\u6211\u8981\u4EC0\u4E48\u6837\u7684\u623F\u5B50\u3002AI \u662F\u6211\u7684\u5F00\u53D1\u642D\u6863\u2014\u2014\u6211\u8D1F\u8D23\u5B9A\u4E49\u9700\u6C42\u3001\u628A\u63A7\u4F53\u9A8C\uFF0CAI \u8D1F\u8D23\u5199\u4EE3\u7801\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "brand-type-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-type-meta"
}, "Eyebrow \xB7 13px \xB7 500 \xB7 uppercase \xB7 0.04em"), /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "about this domain"))));

/* ── Squircle ────────────────────────────────────── */
const Squircle = () => /*#__PURE__*/React.createElement(Section, {
  id: "shape",
  eyebrow: "shape language",
  title: "iOS Squircle\uFF0C\u4E0D\u662F\u5706\u89D2\u3002",
  desc: "\u6240\u6709\u4EA7\u54C1 icon\u3001\u5BB9\u5668\u5706\u89D2\u7684\u5916\u5F62\u90FD\u4F7F\u7528 n=5 \u7684\u8D85\u692D\u5706 (superellipse)\uFF0C\u8DDF iOS App icon \u5B8C\u5168\u4E00\u81F4 \u2014 \u66F2\u7387\u8FDE\u7EED (G2)\uFF0C\u8F6C\u89D2\u65E0\u6298\u70B9\u3002",
  dark: true
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-squircle-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-squircle-demo"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "180px",
    height: "180px",
    background: "var(--accent)",
    borderRadius: "40px",
    margin: "0 auto"
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "brand-squircle-label"
}, "\u666E\u901A border-radius"), /*#__PURE__*/React.createElement("div", {
  className: "brand-squircle-sub"
}, "\u5706\u5F27 \xB7 G1 \u8FDE\u7EED \xB7 \u8F6C\u89D2\u80FD\u611F\u89C9\u5230\u63A5\u7F1D")), /*#__PURE__*/React.createElement("div", {
  className: "brand-squircle-demo"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: "180px",
    height: "180px",
    background: "var(--accent)",
    margin: "0 auto",
    WebkitMaskImage: "url(assets/squircle.svg)",
    maskImage: "url(assets/squircle.svg)",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%"
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "brand-squircle-label",
  style: {
    color: "var(--accent)"
  }
}, "iOS Squircle \u2713"), /*#__PURE__*/React.createElement("div", {
  className: "brand-squircle-sub"
}, "\u8D85\u692D\u5706 \xB7 G2 \u8FDE\u7EED \xB7 \u6574\u6761\u8F6E\u5ED3\u4E00\u6C14\u5475\u6210"))));

/* ── Naming ────────────────────────────────────── */
const Naming = () => /*#__PURE__*/React.createElement(Section, {
  id: "naming",
  eyebrow: "naming",
  title: "\u6240\u6709\u4EA7\u54C1\u90FD\u662F *Bee\u3002",
  desc: "Bee = \u4E00\u53EA\u5C0F\u5DE5\u5177\u4EBA\uFF0C\u5E2E\u4F60\u505A\u4E00\u4EF6\u4E8B\u3002\u8FD9\u662F ClearSky \u4EA7\u54C1\u547D\u540D\u7684\u5143\u89C4\u5219\u3002"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-name"
}, "VoiceBee"), /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-desc"
}, "\u58F0\u97F3\u7684\u5C0F\u871C\u8702 \u2014 \u5E2E\u4F60\u628A\u58F0\u97F3\u53D8\u6210\u6587\u5B57")), /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-name"
}, "JotBee"), /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-desc"
}, "\u901F\u8BB0\u7684\u5C0F\u871C\u8702 \u2014 \u5E2E\u4F60\u91C7\u96C6\u751F\u6D3B\u7684\u77AC\u95F4")), /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-card brand-naming-future"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-name"
}, "?Bee"), /*#__PURE__*/React.createElement("div", {
  className: "brand-naming-desc"
}, "\u4E0B\u4E00\u4E2A\u8FD8\u6CA1\u51FA\u751F\u7684\u5C0F\u871C\u8702"))), /*#__PURE__*/React.createElement("div", {
  className: "brand-rules",
  style: {
    marginTop: "48px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-rule"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-rule-mark do"
}, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "brand-rule-title"
}, "\u547D\u540D\u89C4\u5219"), /*#__PURE__*/React.createElement("p", null, "\u52A8\u8BCD/\u540D\u8BCD + Bee \xB7 \u9A7C\u5CF0\u62FC\u5199 (VoiceBee \u800C\u975E Voicebee) \xB7 \u4E00\u4E2A\u52A8\u4F5C\u63CF\u8FF0\u6E05\u695A\u505A\u4EC0\u4E48 \xB7 \u4E2D\u6587\u4E0D\u76F4\u8BD1\uFF0C\u6309\u54C1\u7C7B\u81EA\u8D77\u4E00\u4E2A\u540D (VoiceBee = \u542C\u8BB0 / JotBee = \u968F\u624B\u8BB0)")))));

/* ── Voice & Tone ────────────────────────────────────── */
const Voice = () => /*#__PURE__*/React.createElement(Section, {
  id: "voice",
  eyebrow: "voice & tone",
  title: "\u50CF\u4E00\u4E2A\u670B\u53CB\u5728\u8BF4\u8BDD\u3002",
  desc: "\u4E0D\u7AEF\u7740\uFF0C\u4E0D\u5356\u5F04\uFF0C\u4E0D\u5806\u5F62\u5BB9\u8BCD\u3002\u5C11\u8BF4\u300E\u6781\u81F4\u300F\u300E\u91CD\u65B0\u5B9A\u4E49\u300F\u300E\u98A0\u8986\u300F\u3002\u591A\u8BF4\u300E\u6253\u5F00\u5C31\u5199\u300F\u300E\u6309\u4F4F\u8BF4\u8BDD\u300F\u3002",
  dark: true
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-voice-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-voice-col"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-voice-label",
  style: {
    color: "#3aa86a"
  }
}, "\u8FD9\u6837\u8BF4"), /*#__PURE__*/React.createElement("ul", {
  className: "brand-voice-list"
}, /*#__PURE__*/React.createElement("li", null, "\"\u4E0D\u4F1A\u5199\u4EE3\u7801\uFF0C\u4F46\u77E5\u9053\u81EA\u5DF1\u8981\u4EC0\u4E48\""), /*#__PURE__*/React.createElement("li", null, "\"\u6309\u4F4F\u8BF4\u8BDD\uFF0C\u677E\u5F00\u5C31\u53D8\u6210\u6587\u5B57\""), /*#__PURE__*/React.createElement("li", null, "\"\u6253\u5F00\u5C31\u5199\uFF0C\u5173\u6389\u5C31\u8D70\""), /*#__PURE__*/React.createElement("li", null, "\"\u88C5\u4FEE\u623F\u5B50\uFF1A\u6211\u4E0D\u4F1A\u780C\u5899\uFF0C\u4F46\u6211\u6E05\u695A\u8981\u4EC0\u4E48\u6837\u7684\u623F\u5B50\""), /*#__PURE__*/React.createElement("li", null, "\"\u5B8C\u5168\u514D\u8D39\uFF0C\u65E0\u5185\u8D2D\uFF0C\u65E0\u5E7F\u544A\""))), /*#__PURE__*/React.createElement("div", {
  className: "brand-voice-col"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-voice-label",
  style: {
    color: "#d24343"
  }
}, "\u4E0D\u8981\u8FD9\u6837\u8BF4"), /*#__PURE__*/React.createElement("ul", {
  className: "brand-voice-list"
}, /*#__PURE__*/React.createElement("li", null, "\"\u91CD\u65B0\u5B9A\u4E49\u4E2A\u4EBA\u8BB0\u5F55\""), /*#__PURE__*/React.createElement("li", null, "\"AI \u9A71\u52A8\u7684\u4E0B\u4E00\u4EE3\u751F\u4EA7\u529B\u5DE5\u5177\""), /*#__PURE__*/React.createElement("li", null, "\"\u6781\u81F4\u6D41\u7545 / \u6781\u81F4\u4F53\u9A8C / \u6781\u81F4\u7B80\u6D01\""), /*#__PURE__*/React.createElement("li", null, "\"\u4E3A\u70ED\u7231\u800C\u751F\""), /*#__PURE__*/React.createElement("li", null, "\"\u8D4B\u80FD\u6BCF\u4E00\u4F4D\u521B\u4F5C\u8005\"")))));
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
  href: "voicebee.html"
}, "VoiceBee"), /*#__PURE__*/React.createElement("a", {
  href: "jotbee.html"
}, "JotBee")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Brand"), /*#__PURE__*/React.createElement("a", {
  href: "#logos"
}, "Logos"), /*#__PURE__*/React.createElement("a", {
  href: "#colors"
}, "Colors"), /*#__PURE__*/React.createElement("a", {
  href: "#type"
}, "Type"), /*#__PURE__*/React.createElement("a", {
  href: "#shape"
}, "Squircle")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:hi@tangzhihong.com"
}, "Email"), /*#__PURE__*/React.createElement("a", {
  href: "index.html#about"
}, "\u5173\u4E8E"))), /*#__PURE__*/React.createElement("div", {
  className: "footer-legal"
}, /*#__PURE__*/React.createElement("span", null, "Copyright \xA9 2026 ClearSky. Brand Guidelines v1."), /*#__PURE__*/React.createElement("a", {
  href: "index.html"
}, "\u56DE\u9996\u9875")));
const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", {
  id: "main"
}, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Logos, null), /*#__PURE__*/React.createElement(Colors, null), /*#__PURE__*/React.createElement(Type, null), /*#__PURE__*/React.createElement(Squircle, null), /*#__PURE__*/React.createElement(Naming, null), /*#__PURE__*/React.createElement(Voice, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));