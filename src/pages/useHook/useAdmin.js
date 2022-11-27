const { useState, useEffect } = require("react")

export const useAdmin = email => {
    const [admin, setAdmin] = useState('')
    const [usLoding, setUsLoding] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.role)
                setUsLoding(false)
            })
    }, [email])
    return [admin, usLoding]
}