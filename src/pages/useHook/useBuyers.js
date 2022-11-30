const { useState, useEffect } = require("react")

export const useBuyer = email => {
    const [buyer, setBuyer] = useState('')

    useEffect(() => {
        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setBuyer(data.role)

            })
    }, [email])
    return [buyer]
}