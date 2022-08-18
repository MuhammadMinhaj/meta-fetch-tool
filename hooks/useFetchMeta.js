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
      ;(async () => {
        setIsLoading(true)
        try {
          const res = await fetch(url)
          const data = await res.text()
          const { title, logo, ...rest } = parseData(data)
          const arrayOfObj = objectToArrayOfObject(rest)

          setData({ title, logo, list: arrayOfObj })
          setIsLoading(false)
        } catch (err) {
          setData(null)
          setError({
            status: err?.status,
            message: err?.message,
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
