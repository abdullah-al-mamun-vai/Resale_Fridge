const { useState, useEffect } = require("react")

export const useBuyer = email => {
    console.log(email)
    const [buyer, setBuyer] = useState('')
    const [usLoding, setUsLoding] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setBuyer(data.role)
                setUsLoding(false)

            })
    }, [email])
    return [buyer, usLoding]
}