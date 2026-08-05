import { readdir, readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

const publicDir = new URL('../.output/public/', import.meta.url)
const clientDir = new URL('../.output/public/_nuxt/', import.meta.url)
const limits = {
  largestJavaScript: 300 * 1024,
  renderedHtml: 250 * 1024,
  totalCss: 100 * 1024,
  totalJavaScript: 650 * 1024,
}

async function filesWithin(directory, suffix) {
  return (await readdir(directory, { recursive: true }))
    .filter(file => file.endsWith(suffix))
    .map(file => join(directory.pathname, file))
}

async function totalSize(files) {
  return (await Promise.all(files.map(file => stat(file)))).reduce((total, file) => total + file.size, 0)
}

const javascript = await filesWithin(clientDir, '.js')
const css = await filesWithin(clientDir, '.css')
const html = await filesWithin(publicDir, '.html')
const javascriptSizes = await Promise.all(javascript.map(async file => ({ file, size: (await stat(file)).size })))
const largestJavaScript = javascriptSizes.sort((a, b) => b.size - a.size)[0]
const failures = []

const metrics = {
  largestJavaScript: largestJavaScript?.size || 0,
  renderedHtml: Math.max(0, ...await Promise.all(html.map(async file => (await readFile(file)).byteLength))),
  totalCss: await totalSize(css),
  totalJavaScript: await totalSize(javascript),
}

for (const [name, value] of Object.entries(metrics)) {
  if (value > limits[name]) failures.push(`${name}: ${value} bytes exceeds ${limits[name]} bytes`)
}

console.log(JSON.stringify({ limits, metrics }, null, 2))
if (failures.length) throw new Error(`Production budgets failed:\n${failures.join('\n')}`)
