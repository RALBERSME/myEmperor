function openIframeFull(container) {
  const iframe = container.querySelector("iframe");
  if (iframe) {
    window.open(iframe.src, "_blank");
  }
}
