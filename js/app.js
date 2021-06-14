let init = () => {
	// grab elements from page
	let container = document.getElementsByClassName('jumbo-slider__container')[0],
		slides = document.getElementsByClassName('jumbo-slider__slide'),
		circles = document.getElementsByClassName('jumbo-slider__circle'),
		links = document.getElementsByClassName('jumbo-slider__link'),
		current = 1,
		time = 12000

	// add animation class to slide
	slides[0].classList.add('jumbo-slider__slide--active')

	// add animation to link
	links[current - 1].classList.add('jumbo-slider__link--active')

	// add animation to circle
	circles[current - 1].classList.add('jumbo-slider__circle--filled')

	// iterate through current nav links and circle elements
	let updateNav = (current) => {
		console.log(`update current: ${current}`)

		for (let index = 0; index < slides.length; index++) {
			//remove all classes
			links[index].classList.remove('jumbo-slider__link--active')
			circles[index].classList.remove('jumbo-slider__circle--filled')
		}

		links[current - 1].classList.add('jumbo-slider__link--active')
		circles[current - 1].classList.add('jumbo-slider__circle--filled')
	}

	// set slide change based on timer
	let startSliding = () => {
		setInterval(() => {
			console.log(`current: ${current}`)
			// remove active class from first slide [0] and add it to second [1]
			slides[1].classList.add('jumbo-slider__slide--active')
			slides[0].classList.remove('jumbo-slider__slide--active')

			// clone active slide and place it on bottom of stack
			container.appendChild(slides[0].cloneNode([true]))
			// remove top slide after it has been cloned
			container.removeChild(slides[0])
			console.log(`slides: ${slides.length}`)
			if (current < slides.length) {
				current++
				updateNav(current)
			} else {
				current = 1
				updateNav(current)
			}
		}, time)
	}
	startSliding()
}

init()
