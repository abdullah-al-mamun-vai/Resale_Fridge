const { useState, useEffect } = require("react")

export const useSeller = email => {
    const [seller, setSeller] = useState('')

    useEffect(() => {
        fetch(`https://freeze-resale-server-abdullah-al-mamun-vai.vercel.app/users/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setSeller(data.role)

            })
    }, [email])
    return [seller]
}