const { useState, useEffect } = require("react")

export const useSeller = email => {
    const [seller, setSeller] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data.role)

            })
    }, [email])
    return [seller]
}