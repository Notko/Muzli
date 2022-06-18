document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.getElementsByClassName('btn')

    Array.from(buttons).forEach((element) => {
        element.addEventListener('mousemove', e => {
            let rect = e.target.getBoundingClientRect()
            let x = e.clientX - rect.left
            let y = e.clientY - rect.top

            switch (true) {
                case element.classList.contains('btn--red'):
                    renderBackground(element, x, y, "253, 104, 91, 1", "253, 186, 91")
                    break
                case element.classList.contains('btn--green'):
                    renderBackground(element, x, y, "57, 174, 144, 1", "57, 146, 174")
                    break
                case element.classList.contains('btn--white'):
                    renderBackground(element, x, y, "255, 255, 255, 1", "230, 230, 230")
                    break
                case element.classList.contains('btn--yellow'):
                    renderBackground(element, x, y, "254, 205, 94, 1", "254, 125, 94")
                    break
                default:
                    break
            }
        })
        element.addEventListener('mouseout', () => {
            element.style.background = null
        })
    })

    function renderBackground(element, x, y, bgColor, circleColor) {
        element.style.background = "rgba(" + bgColor + ") radial-gradient(circle at " + x + "px " + y + "px, rgba(" + circleColor + ", .6) 0%, rgba(" + circleColor + ", 0) calc(0% + 200px)) no-repeat scroll 0 0 border-box"
    }
})