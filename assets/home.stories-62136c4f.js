import { M as Meta } from "./chunk-HLWAVYOI-98269db4.js";
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
    p: "p",
    strong: "strong",
    h2: "h2",
    pre: "pre",
    code: "code",
    a: "a"
  }, useMDXComponents(), props.components);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Meta, {
      title: "Home"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h1, {
      id: "bloom-ui",
      children: "Bloom-ui"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsxs(_components.p, {
      children: ["Bloom-ui is a public design system from the Koaris Project developed with ", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.strong, {
        children: "React"
      }), ", ", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.strong, {
        children: "Typescript"
      }), ", and ", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.strong, {
        children: "Tailwindcss"
      }), "."]
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "motivation",
      children: "Motivation"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.p, {
      children: "Bloom-ui is a design system developed exclusively for the Koaris project with the aim of unifying the interfaces and simplifying the construction of new React projects."
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.p, {
      children: "Install the following package:"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.pre, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(_components.code, {
        className: "language-bash",
        children: "npm i @koaris/bloom-ui\n"
      })
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.p, {
      children: "Import design system css in your css file:"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.pre, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(_components.code, {
        className: "language-css",
        children: '@import "@koaris/bloom-ui/dist/tailwind.css";\n'
      })
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.p, {
      children: "Components usage:"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.pre, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `import { Text } from '@koaris/bloom-ui'

<Text tag="p">Test</Text>
`
      })
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "contributions-and-bug-reports",
      children: "Contributions and bug reports"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsxs(_components.p, {
      children: ["You can follow and make contributions in ", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/guilhermesalviano/bloom-ui",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "github"
      }), "."]
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
  title: "Home",
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
