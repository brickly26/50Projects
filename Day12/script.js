const buttons = document.querySelectorAll('.faq-toggle')

console.log(buttons)

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('active')
  })
})
