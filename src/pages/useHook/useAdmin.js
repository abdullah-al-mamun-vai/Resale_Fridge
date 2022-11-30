const { useState, useEffect } = require("react")

export const useAdmin = email => {
    const [admin, setAdmin] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.role)
            })
    }, [email])
    return [admin]
}