const { useState, useEffect } = require("react")

export const useAdmin = email => {
    const [admin, setAdmin] = useState('')
    useEffect(() => {
        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.role)
            })
    }, [email])
    return [admin]
}