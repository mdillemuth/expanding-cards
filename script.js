// Selecting the panel components
const panels = document.querySelectorAll('.panel')

// Clicking on panels
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses() // clears active on all panels
    panel.classList.add('active') // adds active to clicked panel
  })
})

// Removing active class from all panels when new panel is opened
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
