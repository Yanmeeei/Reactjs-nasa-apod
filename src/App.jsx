import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import SideBar from "./components/SideBar.jsx";
import {useEffect, useState} from "react";

function App() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const [showModel, setShowModel] = useState(false) // declare state., setter, and default value
    const [data, setData] = useState(null)
    // const [loading, setLoading] = useState(false)
    function handleToggleModel() {
        setShowModel(!showModel)
    }

    useEffect(() => {
        async function fetchAPIData() {
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
            console.log(url)

            const today = (new Date()).toDateString()
            const localKey = `NASA-${today}`
            if (localStorage.getItem(localKey)) {
                const getData = JSON.parse(localStorage.getItem(localKey))
                setData(getData)
                console.log('Fetched from cache today\n', data)
                return
            }

            try {
                const resp = await fetch(url)
                const apiData = await resp.json()
                setData(apiData)
                localStorage.clear()
                localStorage.setItem(localKey, JSON.stringify(apiData))
                console.log('Fetched from api today\n', data)
            } catch (e) {
                console.log(e.message)
            }
        }
        fetchAPIData()
    }, [])

    return (
        <>
            {data ? (<Main data={data} />) : (
                <div className={"loadingState"}>
                    <i className={"fa-solid fa-gear"}></i>
                </div>
            )}
            {showModel && <SideBar data={data} handleToggleModel={handleToggleModel}/>}
            {data && (<Footer data={data} handleToggleModel={handleToggleModel}/>)}
        </>
    )
}

export default App
