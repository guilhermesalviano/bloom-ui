var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-cdff95b6.js";
import { F as Form, T as Text, I as Input, a as Button, b as TextInput } from "./index-ffe5743f.js";
import "./index-c86cbf19.js";
import "./_commonjsHelpers-ca272635.js";
const Form_stories = {
  title: "Form/Form",
  component: Form,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    orientation: "col"
  },
  argTypes: {
    orientation: {
      options: ["col", "row"],
      control: {
        type: "inline-radio"
      }
    },
    children: {
      type: "symbol"
    }
  }
};
const Default = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
          color: "neutral-800",
          children: "Testando o elemento Form"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
          type: "text",
          placeholder: "Testando o elemento Form",
          error: false
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        type: "submit",
        className: "w-30",
        children: "Finalizar"
      })]
    })
  }
};
const OrientationRow = {
  args: {
    orientation: "row",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "w-full",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
          color: "neutral-800",
          children: "Testando o elemento Form"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, {
          type: "text",
          prefix: "koaris.com.br/",
          placeholder: "Testando o elemento Form",
          error: false
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        type: "submit",
        className: "w-30",
        children: "Finalizar"
      })]
    })
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    children: <>\n        <div>\n          <Text color='neutral-800'>Testando o elemento Form</Text>\n          <Input type='text' placeholder='Testando o elemento Form' error={false} />\n        </div>\n        <Button type='submit' className='w-30'>Finalizar</Button>\n      </>\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
OrientationRow.parameters = {
  ...OrientationRow.parameters,
  docs: {
    ...(_d = OrientationRow.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    orientation: 'row',\n    children: <>\n        <div className='w-full'>\n          <Text color='neutral-800'>Testando o elemento Form</Text>\n          <TextInput type='text' prefix='koaris.com.br/' placeholder='Testando o elemento Form' error={false} />\n        </div>\n        <Button type='submit' className='w-30'>Finalizar</Button>\n      </>\n  }\n}",
      ...(_f = (_e = OrientationRow.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "OrientationRow"];
export {
  Default,
  OrientationRow,
  __namedExportsOrder,
  Form_stories as default
};
