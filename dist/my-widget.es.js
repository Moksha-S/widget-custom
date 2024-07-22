import { ref as e, onMounted as r, resolveComponent as c, openBlock as i, createElementBlock as l, createElementVNode as t, createVNode as p } from "vue";
const d = { style: { display: "flex", "justify-content": "space-around" } }, u = /* @__PURE__ */ t("h2", null, "Check your Chart", -1), h = {
  __name: "LineChart",
  setup(n) {
    e({}), e([44, 55, 41, 17, 15]);
    const o = e({
      chart: {
        id: "vuechart-example"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    }), s = e([
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]);
    return r(() => {
    }), (_, m) => {
      const a = c("apexchart");
      return i(), l("div", null, [
        t("div", d, [
          t("div", null, [
            u,
            p(a, {
              width: "500",
              type: "line",
              options: o.value,
              series: s.value
            }, null, 8, ["options", "series"])
          ])
        ])
      ]);
    };
  }
}, v = {
  install(n) {
    n.component("LineChart", h);
  }
};
export {
  h as LineChart,
  v as default
};
