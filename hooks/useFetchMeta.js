import { useEffect, useState } from 'react'
import { objectToArrayOfObject, parseData } from '../lib'

const useFetchMeta = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState({
    status: null,
    message: null,
  })

  useEffect(() => {
    if (url) {
      (async () => {
        setIsLoading(true)
        try {
          const res = await fetch(url)
          const data = await res.text()
          setData(objectToArrayOfObject(parseData(data)))
          setIsLoading(false)
        } catch (err) {
          setError({
            status:err?.status,
            message:err?.message
          })
          setIsLoading(false)
        }
      })()
    }
  }, [url])

  return {
    isLoading,
    error,
    data,
  }
}

export { useFetchMeta }
