import { useEffect, useState } from 'react'
import { objectToArrayOfObject, parseData } from '../lib'

const initError = {
  status: null,
  message: null,
}

const useFetchMeta = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState({ ...initError })

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
          setError({ ...initError })
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
  const resetData = () => {
    setData(null)
    setIsLoading(false)
    setError({ ...initError })
  }
  return {
    isLoading,
    error,
    data,
    resetData,
  }
}

export { useFetchMeta }
