import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserDetail({ activeUserId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
      .then(res => setUser(res.data))
      .finally(() => setLoading(false))
  }, [activeUserId])

  return (
    <div>
      <h1>Kullanıcı Detayı</h1>
      <div>
        {
          loading && <p>Yükleniyor...</p>
        }
      </div>
      <pre>
        {
          !loading && JSON.stringify(user, null, 2)
        }
      </pre>
    </div>
  )
}