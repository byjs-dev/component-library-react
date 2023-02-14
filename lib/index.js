import i from "react";
function n(t) {
  var r, o, e = "";
  if (typeof t == "string" || typeof t == "number")
    e += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (r = 0; r < t.length; r++)
        t[r] && (o = n(t[r])) && (e && (e += " "), e += o);
    else
      for (r in t)
        t[r] && (e && (e += " "), e += r);
  return e;
}
function g() {
  for (var t, r, o = 0, e = ""; o < arguments.length; )
    (t = arguments[o++]) && (r = n(t)) && (e && (e += " "), e += r);
  return e;
}
const u = ({ variant: t = "primary", theme: r, label: o, ...e }) => /* @__PURE__ */ i.createElement(
  "button",
  {
    style: { fontFamily: "Roboto" },
    className: g(
      //base styles
      "focus:ring-3 rounded border-none px-4 py-2 text-lg font-medium focus:ring focus:ring-blue-500 focus:ring-offset-1",
      //variant styles
      t === "primary" ? "bg-indigo-800 text-white hover:bg-neutral-900" : t === "secondary" ? "bg-white text-indigo-800 ring-2 ring-inset ring-indigo-800 hover:bg-neutral-900 hover:text-white" : t === "tertiary" ? "bg-white text-indigo-800 hover:bg-gray-200" : ""
    ),
    ...e
  },
  o
), s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  s as Button
};
//# sourceMappingURL=index.js.map
