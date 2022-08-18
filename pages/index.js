import Head from 'next/head'
import { useState } from 'react'
import { Alert } from '../components/core'
import { Brand } from '../features/brand/brand'
import { DataList } from '../features/data-list/data-list'
import { Footer } from '../features/footer/footer'
import { Search } from '../features/search/search'
import { useFetchMeta } from '../hooks'
export default function MainPage() {
  const [url, setUrl] = useState(null)
  const { isLoading, data, error, resetData } = useFetchMeta(url)

  const handleSubmit = (e, isReset) => {
    e.preventDefault()
    if (isReset) {
      e.target.reset()
      resetData()
      return
    }
    setUrl(e.target.elements.url.value)
  }

  return (
    <div className="container mx-auto py-5">
      <Head>
        <title>Fetch Meta Data</title>
        <meta name="description" content="Fetch meta data by URL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl text-center antialiased border-b-2 py-3 text-indigo-900">
        Fetch Meta Data Tool
      </h1>

      <main className="py-5 w-[60%] m-auto">
        <Search handleSubmit={handleSubmit} isReset={!!data} />
        {error?.message && (
          <Alert
            text={error?.message}
            type="error"
            handleClickClear={() => {
              setUrl(null)
              resetData()
            }}
          />
        )}
        {isLoading && <h1 className="text-3xl text-center py-5">Loading...</h1>}
        {data && <Brand imgSrc={data?.logo} title={data?.title} />}
        <DataList data={data?.list} />
      </main>

      <Footer />
    </div>
  )
}
