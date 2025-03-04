import React from 'react'

const ListRendering = () => {

    //for rendering a list of items, we can use the map method, flow of rendering is as follows:

    const namesData = ['Bruce', 'Clark', 'Diana'] // Array of strings

    // const names = [] 
    //     for (let n of namesdata) {
    //         names.push(<li>{n}</li>)
    //     }


    // promotion.map ((e) => {
    //     return <h1>{e}</h1>
    // })

    const nameList = namesData.map((name, index) => (
        <h2 key={index}>{name}</h2>
    ))

    return (
        <div>
            <h1>
                List Rendering
            </h1>
            {nameList}
        </div>
    )
}

export default ListRendering
