import Head from 'next/head'
import { useState } from 'react'
import { DataList } from '../features/data-list/data-list'
import { Search } from '../features/search/search'
import { useFetchMeta } from '../hooks'

export default function MainPage() {
  const [url, setUrl] = useState(null)
  const { isLoading, data, error } = useFetchMeta(url)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(e.target.elements.url.value)
  }

  return (
    <div className="container mx-auto py-5">
      <Head>
        <title>Fetch Meta Data</title>
        <meta name="description" content="Fetch meta data by URL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl text-center antialiased border-b-2 py-3">
        Fetch Meta Data Tool
      </h1>

      <main className="py-5">
        <Search handleSubmit={handleSubmit} />
        {isLoading && <h1 className="text-center">Loading...</h1>}
        <DataList data={data}/>
      </main>

      <footer className="text-center text-base font-medium antialiased border-t-2 py-2">
        <span>
          Developed by{' '}
          <a
            href="httspans://muhammadminhaj.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Muhammad Minhaj
          </a>
        </span>
      </footer>
    </div>
  )
}
