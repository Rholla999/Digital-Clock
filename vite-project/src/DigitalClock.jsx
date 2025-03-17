import { useEffect, useState } from "react"


function DigitalClock(){

        const [time, setTime] = useState(new Date())

        useEffect(()=>{

            const i = setInterval(()=>{
                setTime(new Date())
            }, 1000)

            return () => {
                clearInterval(i)
            }
        }, [])


        function updateTime() {
            let h = String(time.getHours()).padStart(2, '0')
            let m = String(time.getMinutes()).padStart(2, '0')
            let s = String(time.getSeconds()).padStart(2, '0')
            let meridiem = h >= 12 ? 'PM' : 'AM'

            h = h % 12 || 12
            return `${addZero(h)}:${m}:${s}:${meridiem}`
        }

        function addZero(n){
            return (n < 10 ? '0' : '') + n
        }


    return (
        <>
        <div className="container">
            <h2>Digital Clock</h2>
            <div className="clock-container">
                <span>{updateTime()}</span>
            </div>
        </div>
        </>
    )
}

export default DigitalClock