let btnPlayPause = document.getElementById('btn-playPause')
let btnMenos = document.getElementById('btn-minus')
let btnMais = document.getElementById('btn-plus')
let inputRange = document.getElementById('inputRange')
let h1BpmElement = document.getElementById('h1Bpm')
let audio = new Audio("./audio/tec.wav")
let bpm = 40
let isPLaying = false
let intervalo;

function clock() {
    intervalo = setInterval(()=>{
        audio.currentTime = 0
        audio.play()
    }, (60*1000)/bpm)
}

function atualizaH1Bpm(){
    h1BpmElement.innerHTML = bpm + ' BPM'
}

function atualizarBpm() {
    if(isPLaying){
        clearInterval(intervalo)
        clock()
    }
}

btnPlayPause.addEventListener('click', ()=>{
    if(!isPLaying){
        clock()
        btnPlayPause.innerHTML = '<i class="fa-sharp fa-solid fa-pause"></i>'
        isPLaying = !isPLaying
    } else {
        clearInterval(intervalo)
        btnPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>'
        isPLaying = !isPLaying
    }
})

inputRange.addEventListener('input', (e)=>{
    bpm = parseInt(e.target.value)
    atualizaH1Bpm()
    atualizarBpm()
})

btnMais.addEventListener('click', ()=>{
    if (bpm < 218) {
        bpm += 1
        inputRange.value = bpm
        atualizaH1Bpm()
        atualizarBpm()
    }
})

btnMenos.addEventListener('click', ()=>{
    if (bpm > 40) {
        bpm -= 1
        inputRange.value = bpm
        atualizaH1Bpm()
        atualizarBpm()
    }
})