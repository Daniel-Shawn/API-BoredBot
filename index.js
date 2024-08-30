

let runBtn = document.getElementById('run')


runBtn.addEventListener('click', runBot)

//dud = ['mas', 'sun', 'run', 'oyeeee']


function runBot(){
        let display = document.getElementById('display')
        display.innerHTML = ''
        //fetch("https://dog.ceo/api/breeds/image/random")
        fetch("https://apis.scrimba.com/bored/api/activity")
                .then(response => response.json())
                .then(data => {
                        display.innerText = data.activity
                })
                
}



;