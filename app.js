const modal = document.querySelector('#modal')
const content = document.querySelector('#content')
const backdrop = document.querySelector('#backdrop')
const progress = document.querySelector('#progress')


content.addEventListener('click', opendModal)
backdrop.addEventListener('click', closeModal)

const technologies = [
    {title: 'HTML', description: 'HTML Text', type: 'html', done: true},
    {title: 'CSS', description: 'CSS Text', type: 'css', done: true},
    {title: 'JavaScript', description: 'JavaScript Text', type: 'js', done: false},
    {title: 'Git', description: 'Git Text', type: 'git', done: true},
    {title: 'React', description: 'React Text', type: 'react', done: true},
]

function opendModal(event) {
    const data = event.target.dataset
    const tech = technologies.find(t => t.type === data.type)
    if (!tech) return
    modal.classList.add('open')
}


function closeModal() {
    modal.classList.remove('open')
}


function init() {
   renderCards()
   renderProgress()
}


function renderCards(){
    if (technologies === 0 ) {
        content.innerHTML = '<p class="empty">Технологий пока нет. Добавьте первую</p>'
    } else {
        let html = ''
    for (let i = 0; i < technologies.length; i++) {
        const tech = technologies[i]
        html += toCard(tech)
        }
        content.innerHTML = html
    }
}


function renderProgress() {
    const percent = computeProgressPercent()


    let background;

    if (percent <= 30) {
        background = '#e75a5a'
    } else if (percent > 30 && percent < 70) {
        background = '#f99415'
    } else {
        background ='#73ba3c'
    }


    progress.style.background = background
    progress.style.width = percent + '%'
    progress.textContent = percent ? percent + '%' : ''

}

function computeProgressPercent() {
    if(technologies.length === 0) {
        return 0
    }
    
    let doneCount = 0

    for(let i = 0; i < technologies.length; i++) {
        if(technologies[i].done) doneCount++
    } 

    return Math.round((100 * doneCount) / technologies.length)
}

function toCard(tech) {
    
    const doneClass = tech.done ? 'done' : ''


    return `
    <div class="card ${doneClass}" data-type"${tech.type}">
        <h3 data-type"${tech.type}">${tech.title}</h3>
    </div>   
    `
}

init()