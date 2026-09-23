export const scrollToId = (id) => {
  const target = `#${id}`;
  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset: -80, duration: 1.2 });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};
