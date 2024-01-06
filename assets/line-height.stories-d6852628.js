import { M as Meta, U as Unstyled } from "./chunk-HLWAVYOI-98269db4.js";
import { T as TokensGrid } from "./TokensGrid-f9f50ceb.js";
import { l as lineHeights } from "./index-0bc0f0da.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-cdff95b6.js";
import { u as useMDXComponents } from "./index-550dc53c.js";
import "./iframe-48b89f7e.js";
import "../sb-preview/runtime.js";
import "./index-c86cbf19.js";
import "./_commonjsHelpers-ca272635.js";
import "./react-18-0ced5682.js";
import "./chunk-ZGA76URP-3445f0e6.js";
import "./index-26c70190.js";
import "./index-121c761d.js";
import "./index-eeefe080.js";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, useMDXComponents(), props.components);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Line Heights"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h1, {
      id: "line-heights",
      children: "Line Heights"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.p, {
      children: "Altura das linhas utilizadas na Koaris."
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(Unstyled, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TokensGrid, {
        tokens: lineHeights
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? /* @__PURE__ */ jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const __page = () => {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
const componentMeta = {
  title: "Tokens/Line Heights",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...componentMeta.parameters.docs || {},
  page: MDXContent
};
const __namedExportsOrder = ["__page"];
export {
  __namedExportsOrder,
  __page,
  componentMeta as default
};
