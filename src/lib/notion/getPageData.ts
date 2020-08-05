import rpc, { values } from './rpc'

const PAGE_LIMIT = 100

export default async function getPageData(pageId: string, skip = 3) {
  try {
    let blocks = []

    let chunkNumber = 0
    let currentPage
    let currentCursor = { stack: [] }

    do {
      // hit page limit, load next page
      const nextBlock = await loadPageChunk({
        pageId,
        cursor: currentCursor,
        chunkNumber,
      })
      currentPage = values(nextBlock.recordMap.block)
      currentCursor = { stack: [nextBlock.cursor.stack[0]] }
      chunkNumber++

      if (currentPage[0] && currentPage[0].value.content) {
        // remove table blocks
        currentPage.splice(0, skip)
      }

      blocks = blocks.concat(currentPage)
    } while (currentPage.length >= PAGE_LIMIT)

    return { blocks }
  } catch (err) {
    console.error(`Failed to load pageData for ${pageId}`, err)
    return { blocks: [] }
  }
}

export function loadPageChunk({
  pageId,
  limit = PAGE_LIMIT,
  cursor = { stack: [] },
  chunkNumber = 0,
  verticalColumns = false,
}: any) {
  return rpc('loadPageChunk', {
    pageId,
    limit,
    cursor,
    chunkNumber,
    verticalColumns,
  })
}
