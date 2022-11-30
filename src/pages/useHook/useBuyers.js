const { useState, useEffect } = require("react")

export const useBuyer = email => {
    const [buyer, setBuyer] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setBuyer(data.role)

            })
    }, [email])
    return [buyer]
}