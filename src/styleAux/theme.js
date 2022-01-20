export const color = {
    bgPrimary: "rgb(61, 61, 240)",
    bgSecondary: "#3f87a6",
}

export const displayFlex = (display, direction, justifyContent, alignItem) => {
    return `
    display: ${display}
    direction: ${direction}
    justify-content: ${justifyContent}
    align-item: ${alignItem}
    `    
}