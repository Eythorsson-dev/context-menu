
export function selectNextFocusItem(container: HTMLElement, activeElement: HTMLElement, selectNext: boolean) {
    const focusableElements = [
        ...container.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ].reduce((arr, curr) => (arr.some(x => x.contains(curr)) || arr.push(curr as HTMLElement), arr), [] as HTMLElement[]);

    const currentIndex = focusableElements.indexOf(activeElement);

    const nextIndex = selectNext
        ? (currentIndex + 1) % focusableElements.length
        : (currentIndex - 1 + focusableElements.length) % focusableElements.length;

    focusableElements[nextIndex].focus();
}
