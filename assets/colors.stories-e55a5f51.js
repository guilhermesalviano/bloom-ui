import { g as getContrast, M as Meta, U as Unstyled } from "./chunk-HLWAVYOI-98269db4.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-cdff95b6.js";
import { c as colors } from "./index-0bc0f0da.js";
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
function ColorsGrid({ type }) {
  return Object.entries(colors).filter(([key, color]) => type ? key.includes(type) : true).map(([key, color]) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          backgroundColor: color,
          padding: "2rem",
          color: getContrast(color, "#FFFFFF") < 3.5 ? "#000000" : "#FFFFFF"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontFamily: "monospace" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "bg-",
            key
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: color })
        ] })
      },
      key
    );
  });
}
try {
  ColorsGrid.displayName = "ColorsGrid";
  ColorsGrid.__docgenInfo = { "description": "", "displayName": "ColorsGrid", "props": { "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2"
  }, useMDXComponents(), props.components);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Colors"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h1, {
      id: "colors",
      children: "Colors"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.p, {
      children: "Cores utilizadas na Koaris."
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "neutrals",
      children: "Neutrals"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(Unstyled, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "neutral"
      })
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "primary",
      children: "Primary"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(Unstyled, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "orange"
      })
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "others",
      children: "Others"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsxs(Unstyled, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "red"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "blue"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "green"
      })]
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
  title: "Tokens/Colors",
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
