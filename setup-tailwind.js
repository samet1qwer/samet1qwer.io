import { execSync } from "child_process";
import fs from "fs";

console.log("🚀 Tailwind kurulumu başlatılıyor...");

// Gerekli paketleri yükle
execSync("npm install -D tailwindcss postcss autoprefixer", {
  stdio: "inherit",
});

// Tailwind yapılandırma dosyalarını oluştur
execSync("npx tailwindcss init -p", { stdio: "inherit" });

// tailwind.config.js dosyasını düzenle
const configPath = "./tailwind.config.js";
let config = fs.readFileSync(configPath, "utf8");
config = config.replace(
  /content:\s*\[\]/,
  `content: ["./src/**/*.{js,jsx,ts,tsx}"]`
);
fs.writeFileSync(configPath, config);
console.log("✅ tailwind.config.js ayarlandı.");

// index.css kontrolü
const cssPath = "./src/index.css";
if (fs.existsSync(cssPath)) {
  fs.writeFileSync(
    cssPath,
    "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"
  );
  console.log("✅ src/index.css Tailwind direktifleriyle güncellendi.");
} else {
  console.warn("⚠️ src/index.css bulunamadı, manuel eklemen gerekebilir.");
}

console.log("🎉 Tailwind kurulumu tamamlandı!");
