import React, { useState } from 'react'

function Form() {
    const [data, setData] = useState({
        Name: "", number: "", place: ""
    })

    function changeData(e) {

        setData((prev) => {
            if (e.target.name == "Name") {
                return {
                    ...prev, Name: e.target.value
                }
            }
            else if (e.target.name == "number") {
                return {
                    ...prev, number: e.target.value
                }
            }
            else if (e.target.name == "place") {
                return {
                    ...prev, place: e.target.value
                }
            }
        })
    }

    function submit(e) {
        e.preventDefault()
        let i = 0
        let dataArr = Object.keys(data)

        while (i < dataArr.length) {
            console.log(`${dataArr[i]}:${data[dataArr[i]]}`);
            i += 1
        }
        // console.log(data);
    }
    return (
        <div>
            <form>
                <label>
                    Name:
                    <input name="Name" value={data.Name} placeholder="Name" onChange={changeData} />
                </label>
                <label>
                    number:
                    <input name="number" value={data.number} placeholder="number" onChange={changeData} />
                </label>
                <label>
                    place:
                    <input name="place" value={data.place} placeholder="place" onChange={changeData} />
                </label>

                <button onClick={submit} >Submit</button>

            </form>
        </div>
    )
}

export default Form
