import * as cheerio from 'cheerio'

export const parseData = (data) => {
  const metaData = {}

  const $ = cheerio.load(data)
  const head = $('head')

  // Collect data from head
  metaData.title = head.find('title').text()
  metaData.description = head.find('meta[name=description]').attr('content')
  metaData.logo =
    head.find('meta[name="og:image"]').attr('content') ||
    head.find('meta[property="og:image"]').attr('content')
  metaData.themeColor = head.find('meta[name="theme-color"]').attr('content')
  metaData.author = head.find('meta[name=author]').attr('content')
  metaData.siteName = head.find('meta[property="og:site_name"]').attr('content')
  metaData.siteType = head.find('meta[property="og:type"]').attr('content')
  metaData.keywords = head.find('meta[name="keywords"]').attr('content')

  return metaData
}
