const degreeSymbol="\u00b0"
const button=document.querySelector(`button`)

button.addEventListener(`click`,(event)=>{
    
    const place=document.getElementById(`Location`).value

    function giveweather(data){
        const weatherInfo=document.getElementById(`weatherinfo`)
        weatherInfo.innerHTML=`Today's temprature is :${data.current.temp_c}${degreeSymbol}C<br>
        humidity: ${data.current.humidity}%<br>
        feelslike: ${data.current.feelslike_c}${degreeSymbol}C<br>
        condition: ${data.current.condition.text}<br>
        Wind:${data.current.wind_kph}kph<br>
        precipitation:${data.current.precip_mm}mm<br>
        Visibility:${data.current.vis_km}km<br>`
        // weatherInfo.innerHTML=`condition is :${data.current.condition.text}`
        weatherInfo.style.fontSize=`20px`      
    }
    const obj=fetch(`http://api.weatherapi.com/v1/current.json?key=ef3e281bbb024e318fa124539250907&q=${place}&aqi=yes`)

    const store=obj.then((value)=>{
        return value.json()
    })
    store.then((data)=>{
        giveweather(data)
    })
})