import { ref as e, onMounted as a, resolveComponent as i, openBlock as s, createElementBlock as l, createElementVNode as t, createVNode as _, createBlock as p, defineCustomElement as u } from "vue";
const m = { style: { display: "flex", "justify-content": "space-around" } }, d = /* @__PURE__ */ t("h2", null, "Check your Chart", -1), h = {
  __name: "LineChart",
  setup(c) {
    e({}), e([44, 55, 41, 17, 15]);
    const n = e({
      chart: {
        id: "vuechart-example"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    }), o = e([
      {
        name: "series-1",
        data: [30, 4, 45, 50, 49, 60, 70, 91]
      }
    ]);
    return a(() => {
    }), (v, C) => {
      const r = i("apexchart");
      return s(), l("div", null, [
        t("div", m, [
          t("div", null, [
            d,
            _(r, {
              width: "500",
              type: "line",
              options: n.value,
              series: o.value
            }, null, 8, ["options", "series"])
          ])
        ])
      ]);
    };
  }
}, f = {
  __name: "App",
  setup(c) {
    return (n, o) => (s(), p(h));
  }
}, x = u(f);
customElements.define("custom-chart-widget", x);
