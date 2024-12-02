const input=document.getElementById('city')
const container=document.querySelector('.container')
let cityName
const key='55136871479ed58d1dd6228c5546babb'
const tempetur=document.querySelector('.tempetur')
const weather=document.querySelector('.weather')
const humidity=document.querySelector('.humidity')
const icon=document.querySelector('.icon')
// functions
async function getEmoji(id){
    if(id<300&&id>=200){
        icon.innerText='🌩️';
    }else if(id<600&&id>=300){
        icon.innerText='🌧️';
    }else if(id<700&&id>=600){
        icon.innerText='🌨️'
    }else if(id<800&&id>=700){
        icon.innerText='🌫'
    }
    else if(id===800){
        icon.innerText='🌞'
    }else if(id>800){
        icon.innerText='🌥️'
    }else{
        alert('no icon for that wether')
    };
}
function displayData(data){
    // destructor data
    // set the innerText value to an empty string
    // pass data to innerText
    // 
    container.firstElementChild.innerText=""
    tempetur.innerText=""
    weather.innerText=""
    humidity.innerText=""
    humidity.innerText=""
    icon.innerText=""
    //
    container.firstElementChild.innerText=data.name
    tempetur.innerText=`${data.main.temp} c°`
    weather.innerText=data.weather[0].description
    humidity.innerText=`humidity:${data.main.humidity}%`
    getEmoji(data.weather[0].id)
    container.style.display='flex'
}
//event
input.addEventListener('keydown',async function(e){
    try{
        if(e.key==='Enter'){
            if(!this.value){
                alert("that's not a city farm boy")
                throw new Error('not a city')
            }
            cityName=this.value.toLowerCase()
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
            const data= await response.json()
            displayData(data)
        }
    }catch(err){ 
        console.error(err)
    }
    
})