export const scrollContainerToChildCenter = (
  container: HTMLElement | null,
  child: HTMLElement,
  behavior: ScrollBehavior = "smooth"
) => {
  if (!container || container.scrollWidth <= container.clientWidth) {
    return;
  }

  const centeredLeft =
    child.offsetLeft + child.clientWidth / 2 - container.clientWidth / 2;
  const maxLeft = container.scrollWidth - container.clientWidth;
  const nextLeft = Math.max(0, Math.min(centeredLeft, maxLeft));

  container.scrollTo({
    left: nextLeft,
    behavior,
  });
};
