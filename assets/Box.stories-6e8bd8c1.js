var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-cdff95b6.js";
import { B as Box, T as Text } from "./index-ffe5743f.js";
import "./index-c86cbf19.js";
import "./_commonjsHelpers-ca272635.js";
const Box_stories = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    variant: "primary"
  }
};
const Primary = {
  args: {
    variant: "primary",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "neutral-800",
      children: "Testando o elemento box"
    })
  }
};
const Secondary = {
  args: {
    variant: "secondary",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "neutral",
      children: "Testando o elemento box"
    })
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'primary',\n    children: <Text color='neutral-800'>Testando o elemento box</Text>\n  }\n}",
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...(_d = Secondary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'secondary',\n    children: <Text color='neutral'>Testando o elemento box</Text>\n  }\n}",
      ...(_f = (_e = Secondary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Secondary"];
export {
  Primary,
  Secondary,
  __namedExportsOrder,
  Box_stories as default
};
