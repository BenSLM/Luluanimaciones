import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import sharp from "sharp"

const SRC = "fotos"
const OUT = "public/images/galeria"
const SIZES = [
  { label: "640", max: 640 },
  { label: "1080", max: 1080 },
]
const QUALITY = 82

fs.mkdirSync(OUT, { recursive: true })

function slugify(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[()]+/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^[/-]+|[/-]+$/g, "")
    .replace(/-+/g, "-")
}

const files = fs
  .readdirSync(SRC)
  .filter((f) => /\.(jpe?g|jfif|png)$/i.test(f))
  .sort()

const seen = new Map()
const plan = []
for (const file of files) {
  const buf = fs.readFileSync(path.join(SRC, file))
  const hash = crypto.createHash("sha1").update(buf).digest("hex")
  if (seen.has(hash)) {
    console.log(`DUP: ${file} == ${seen.get(hash)}`)
    continue
  }
  seen.set(hash, file)
  plan.push({ file, slug: slugify(path.parse(file).name) })
}

for (const { file, slug } of plan) {
  const buf = fs.readFileSync(path.join(SRC, file))
  const meta = await sharp(buf).metadata()
  const dims = `${meta.width}x${meta.height}`
  for (const { label, max } of SIZES) {
    const outFile = path.join(OUT, `${slug}-${label}.webp`)
    await sharp(buf)
      .resize({ width: max, height: max, fit: sharp.fit.inside, withoutEnlargement: true })
      .rotate()
      .toFormat("webp", { quality: QUALITY })
      .toFile(outFile)
    const sz = fs.statSync(outFile).size
    console.log(`${file} [${dims}] -> ${path.basename(outFile)} (${(sz / 1024).toFixed(0)} KB)`)
  }
}

console.log(`\nDone: ${plan.length} unique images -> ${OUT}`)