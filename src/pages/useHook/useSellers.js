const { useState, useEffect } = require("react")

export const useSeller = email => {
    console.log(email)
    const [seller, setSeller] = useState('')
    const [usLoding, setUsLoding] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data.role)
                setUsLoding(false)

            })
    }, [email])
    return [seller, usLoding]
}