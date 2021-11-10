const slider_el = document.querySelector('.slider')
const label_el = document.querySelector('.label') 

// console.log(slider_el.value)


slider_el.addEventListener('input', () => {
    label_el.innerHTML = slider_el.value
    let val = +110 + parseInt(slider_el.value)
    label_el.style.left = `${val}px`
})
