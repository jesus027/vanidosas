// Comprime los videos de public/video a 720p sin audio (H.264, faststart).
// Los originales se respaldan en public/video/_original/ (una sola vez).
// Uso: node scripts/compress-videos.mjs
import ffmpeg from "ffmpeg-static";
import { spawnSync } from "node:child_process";
import {
  readdirSync,
  mkdirSync,
  copyFileSync,
  statSync,
  renameSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";

const dir = "public/video";
const backup = join(dir, "_original");
if (!existsSync(backup)) mkdirSync(backup, { recursive: true });

const mb = (n) => (n / 1048576).toFixed(1) + " MB";
const files = readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".mp4"));

let totalBefore = 0;
let totalAfter = 0;

for (const f of files) {
  const src = join(dir, f);
  const bak = join(backup, f);
  if (!existsSync(bak)) copyFileSync(src, bak); // respaldo del original (una vez)

  const before = statSync(bak).size;
  const tmp = join(dir, f + ".tmp.mp4");
  const args = [
    "-y",
    "-i", bak, // siempre desde el original respaldado
    "-vf", "scale=-2:720", // alto 720, ancho automático (par)
    "-c:v", "libx264",
    "-preset", "veryfast",
    "-crf", "30",
    "-pix_fmt", "yuv420p", // compatibilidad amplia
    "-movflags", "+faststart", // empieza a reproducir antes de descargar todo
    "-an", // sin audio
    tmp,
  ];

  process.stdout.write(`Comprimiendo ${f} ... `);
  const r = spawnSync(ffmpeg, args, { stdio: ["ignore", "ignore", "ignore"] });
  if (r.status !== 0 || !existsSync(tmp)) {
    console.log("FALLÓ");
    continue;
  }
  renameSync(tmp, src);
  const after = statSync(src).size;
  totalBefore += before;
  totalAfter += after;
  console.log(`${mb(before)} -> ${mb(after)}`);
}

console.log(`\nTotal: ${mb(totalBefore)} -> ${mb(totalAfter)}`);
