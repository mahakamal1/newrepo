const countdown = ()=>{
    const daysToCount = new Date('June 17, 2021 00:00:00')
    const now = new Date().getTime() //convert curent time to millseconds
    const contdowns = daysToCount - now
    const sec = 1000
    const min = 60 * sec
    const hour = 60 * min
    const day = 24 * hour
    const textdays = Math.floor(contdowns / day)
    const texthours = Math.floor((contdowns % day)/hour)
    const textmin = Math.floor((contdowns%hour)/min)
    const textsecs = Math.floor((contdowns%min)/sec)

    document.querySelector('.day').innerHTML = textdays
    document.querySelector('.hour').innerHTML = texthours
    document.querySelector('.minute').innerHTML = textmin
    document.querySelector('.second').innerHTML = textsecs
}

setInterval( countdown,1000)