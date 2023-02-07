import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, n as attr, b as insert_hydration, H as append_hydration, C as noop } from "../../chunks/index-e98e3991.js";
const styles = "";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div3;
  let div0;
  let t0;
  let div2;
  let h1;
  let t1;
  let t2;
  let div1;
  let t3;
  let t4;
  let button;
  let t5;
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      t0 = space();
      div2 = element("div");
      h1 = element("h1");
      t1 = text("Erzähl doch mal ...");
      t2 = space();
      div1 = element("div");
      t3 = text("test");
      t4 = space();
      button = element("button");
      t5 = text("Neues Thema");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h1 = claim_element(div2_nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Erzähl doch mal ...");
      h1_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "test");
      div1_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      button = claim_element(div2_nodes, "BUTTON", {});
      var button_nodes = children(button);
      t5 = claim_text(button_nodes, "Neues Thema");
      button_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "bgimg svelte-weih42");
      attr(div1, "class", "card");
      attr(div2, "class", "content svelte-weih42");
      attr(div3, "class", "bgcolor svelte-weih42");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div3, t0);
      append_hydration(div3, div2);
      append_hydration(div2, h1);
      append_hydration(h1, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      append_hydration(div1, t3);
      append_hydration(div2, t4);
      append_hydration(div2, button);
      append_hydration(button, t5);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
