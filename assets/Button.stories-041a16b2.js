var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./jsx-runtime-cdff95b6.js";
import { G as GenIcon, a as Button, T as Text } from "./index-431ca2ba.js";
import "./index-c86cbf19.js";
import "./_commonjsHelpers-ca272635.js";
function GrLinkNext(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeWidth": "2", "d": "M2,12 L22,12 M13,3 L22,12 L13,21" } }] })(props);
}
const Button_stories = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Visualizar",
    size: "md",
    disabled: false,
    variant: "primary"
  },
  argTypes: {
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio"
      }
    },
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "inline-radio"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    onClick: {
      action: "click"
    }
  }
};
const Primary = {};
const Secondary = {
  args: {
    variant: "secondary",
    children: "Ignorar"
  }
};
const Small = {
  args: {
    size: "sm"
  }
};
const WithIcon = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        tag: "span",
        color: "neutral",
        style: {
          paddingRight: "1rem"
        },
        children: "Próximo"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(GrLinkNext, {})]
    })
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{}",
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...(_d = Secondary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'secondary',\n    children: 'Ignorar'\n  }\n}",
      ...(_f = (_e = Secondary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...(_g = Small.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'sm'\n  }\n}",
      ...(_i = (_h = Small.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WithIcon.parameters = {
  ...WithIcon.parameters,
  docs: {
    ...(_j = WithIcon.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: `{
  args: {
    children: <>
        <Text tag="span" color="neutral" style={{
        paddingRight: '1rem'
      }}>
          Próximo
        </Text>
        <GrLinkNext />
      </>
  }
}`,
      ...(_l = (_k = WithIcon.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_m = Disabled.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...(_o = (_n = Disabled.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Secondary", "Small", "WithIcon", "Disabled"];
export {
  Disabled,
  Primary,
  Secondary,
  Small,
  WithIcon,
  __namedExportsOrder,
  Button_stories as default
};
