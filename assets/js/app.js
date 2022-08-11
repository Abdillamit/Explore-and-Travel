const cursor = document.getElementById('cursor')
const hoverElements = document.querySelectorAll('[data-hover-element]')

document.addEventListener('mousemove', e =>{
	cursor.style.top = `${e.pageY}px`
	cursor.style.left = `${e.pageX}px`
} )

hoverElements.forEach(item => {
	item.addEventListener('mousemove', () =>{
		cursor.classList.add('cursor--hover')
	})
	item.addEventListener('mousemove', () =>{
		cursor.classList.remove('cursor--hover')
	})
})