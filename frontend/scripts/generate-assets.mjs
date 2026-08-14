import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'images', 'products')
mkdirSync(OUT, { recursive: true })

const wrap = (defs, body, tintA, tintB) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <radialGradient id="bg" cx="50%" cy="38%" r="82%">
      <stop offset="0%" stop-color="${tintA}"/>
      <stop offset="100%" stop-color="${tintB}"/>
    </radialGradient>
    ${defs}
  </defs>
  <rect width="400" height="300" fill="url(#bg)"/>
  <circle cx="200" cy="146" r="128" fill="none" stroke="#14100C" stroke-opacity="0.05" stroke-width="2"/>
  ${body}
</svg>`

const shadow = (cx = 200, cy = 262, rx = 104, ry = 15) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#14100C" opacity="0.12"/>`

const citrusWheel = (cx, cy, r, fill, line) => `
  <g transform="translate(${cx} ${cy})">
    <circle r="${r}" fill="${fill}"/>
    <circle r="${r}" fill="none" stroke="${line}" stroke-width="2.6" opacity="0.55"/>
    <g stroke="${line}" stroke-width="1.8" opacity="0.6">
      <line x1="0" y1="${-r * 0.68}" x2="0" y2="${r * 0.68}"/>
      <line x1="${-r * 0.68}" y1="0" x2="${r * 0.68}" y2="0"/>
      <line x1="${-r * 0.48}" y1="${-r * 0.48}" x2="${r * 0.48}" y2="${r * 0.48}"/>
      <line x1="${r * 0.48}" y1="${-r * 0.48}" x2="${-r * 0.48}" y2="${r * 0.48}"/>
    </g>
  </g>`

const leaf = (cx, cy, s, fill, rot = 0, flip = 1) =>
  `<path transform="translate(${cx} ${cy}) rotate(${rot}) scale(${s * flip} ${s})" d="M0 0 C -13 -17 -19 -30 0 -46 C 19 -30 13 -17 0 0 Z" fill="${fill}"/>`

const berry = (cx, cy, r, fill, dark) => `
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>
  <ellipse cx="${cx}" cy="${cy - r * 0.2}" rx="${r * 0.5}" ry="${r * 0.42}" fill="#FFFFFF" opacity="0.25"/>
  <path d="M${cx} ${cy - r} q -4 -8 -1 -13 q 7 1 1 13 Z" fill="${dark}"/>`

/* ---------- GLASSES ---------- */

const glassOuter = 'M156 90 L244 90 C247 160 246 214 240 248 C239 254 227 258 200 258 C173 258 161 254 160 248 C154 214 153 160 156 90 Z'
const glassInner = 'M160 96 L240 96 C243 158 242 212 236 244 C235 250 225 253 200 253 C175 253 165 250 164 244 C158 212 157 158 160 96 Z'

function drink({ liquid, top, ice = 0, fruit = '', garnish = '', straw = '#E84A2E', bubble = 0, extra = '' }) {
  const clip = `<clipPath id="glass"><path d="${glassInner}"/></clipPath>`
  const liquidGrad = `<linearGradient id="liq" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${liquid[0]}"/>
    <stop offset="100%" stop-color="${liquid[1]}"/>
  </linearGradient>`
  let cubes = ''
  for (let i = 0; i < ice; i++) {
    const x = 172 + ((i * 53) % 62)
    const y = top + 14 + ((i * 37) % 34)
    cubes += `<rect x="${x}" y="${y}" width="26" height="26" rx="7" fill="#FFFFFF" opacity="0.82"/>
      <rect x="${x}" y="${y}" width="26" height="26" rx="7" fill="none" stroke="#BFE8D6" stroke-opacity="0.7" stroke-width="2"/>`
  }
  let bubbles = ''
  for (let i = 0; i < bubble; i++) {
    const bx = 178 + ((i * 41) % 60)
    const by = top + 8 + ((i * 53) % 80)
    bubbles += `<circle cx="${bx}" cy="${by}" r="${2.6 + (i % 3)}" fill="#FFFFFF" opacity="0.6"/>`
  }
  return wrap(
    clip + liquidGrad,
    `
    ${shadow()}
    <g clip-path="url(#glass)">
      <rect x="150" y="${top}" width="104" height="120" fill="url(#liq)"/>
      <rect x="150" y="${top}" width="104" height="8" fill="#FFFFFF" opacity="0.35"/>
      ${cubes}${fruit}${bubbles}
      <rect x="170" y="${top + 12}" width="9" height="92" rx="4.5" fill="#FFFFFF" opacity="0.28"/>
    </g>
    <path d="${glassOuter}" fill="none" stroke="#2A2418" stroke-opacity="0.4" stroke-width="3.4"/>
    <path d="${glassInner}" fill="none" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="2"/>
    <line x1="226" y1="248" x2="262" y2="70" stroke="${straw}" stroke-width="11" stroke-linecap="round"/>
    <line x1="222" y1="244" x2="254" y2="78" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" transform="rotate(-2 238 160)"/>
    ${garnish}
    ${extra}
    `,
    liquid[0], liquid[1],
  )
}

const milkshake = ({ liquid, cream = '#FFFBF2', cherry = true, garnish = '' }) => {
  const clip = `<clipPath id="glass"><path d="${glassInner}"/></clipPath>`
  const liquidGrad = `<linearGradient id="liq" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${liquid[0]}"/>
    <stop offset="100%" stop-color="${liquid[1]}"/>
  </linearGradient>`
  const creamGrad = `<linearGradient id="cr" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#FFFFFF"/>
    <stop offset="100%" stop-color="${cream}"/>
  </linearGradient>`
  return wrap(
    clip + liquidGrad + creamGrad,
    `
    ${shadow()}
    <g clip-path="url(#glass)">
      <rect x="150" y="120" width="104" height="140" fill="url(#liq)"/>
      <rect x="150" y="120" width="104" height="8" fill="#FFFFFF" opacity="0.3"/>
      <rect x="170" y="132" width="9" height="96" rx="4.5" fill="#FFFFFF" opacity="0.26"/>
    </g>
    <path d="M156 92 C150 74 160 60 176 66 C182 50 204 46 214 62 C228 52 242 60 244 82 L244 100 L156 100 Z" fill="url(#cr)"/>
    <path d="M156 92 C150 74 160 60 176 66 C182 50 204 46 214 62 C228 52 242 60 244 82" fill="none" stroke="#EADCC4" stroke-width="2.4" opacity="0.6"/>
    <circle cx="228" cy="56" r="7" fill="#E8453C" stroke="#B92E27" stroke-width="1.6"/>
    <path d="M228 49 C 226 38 232 30 244 30" fill="none" stroke="#4E7A3A" stroke-width="3" stroke-linecap="round"/>
    <path d="${glassOuter}" fill="none" stroke="#2A2418" stroke-opacity="0.4" stroke-width="3.4"/>
    <line x1="222" y1="246" x2="252" y2="64" stroke="#EFD34E" stroke-width="11" stroke-linecap="round"/>
    <line x1="218" y1="242" x2="246" y2="72" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="3" stroke-linecap="round" transform="rotate(-2 232 158)"/>
    ${garnish}
    `,
    '#FFF6E2', '#F4E4C4',
  )
}

const mojito = ({ liquid, leaf2 = '#2E9E4F', garnish }) => {
  const clip = `<clipPath id="glass"><path d="${glassInner}"/></clipPath>`
  const liquidGrad = `<linearGradient id="liq" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${liquid[0]}"/>
    <stop offset="100%" stop-color="${liquid[1]}"/>
  </linearGradient>`
  const mint = `
    ${leaf(214, 150, 0.85, leaf2, 20)}
    ${leaf(202, 166, 0.75, leaf2, 70, -1)}
    ${leaf(222, 172, 0.7, leaf2, 40)}
  `
  return wrap(
    clip + liquidGrad,
    `
    ${shadow()}
    <g clip-path="url(#glass)">
      <rect x="150" y="128" width="104" height="130" fill="url(#liq)"/>
      <rect x="150" y="128" width="104" height="8" fill="#FFFFFF" opacity="0.3"/>
      ${mint}
      <rect x="170" y="140" width="9" height="92" rx="4.5" fill="#FFFFFF" opacity="0.26"/>
    </g>
    <path d="${glassOuter}" fill="none" stroke="#2A2418" stroke-opacity="0.4" stroke-width="3.4"/>
    <line x1="228" y1="250" x2="258" y2="68" stroke="#E84A2E" stroke-width="11" stroke-linecap="round"/>
    ${garnish}
    `,
    '#E9F7E6', '#CFEAD2',
  )
}

const hotDrink = ({ liquid, cream, garnish = '', mint = false }) => {
  const rimFill = liquid
  return wrap(
    `<linearGradient id="cup" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFDF7"/>
      <stop offset="100%" stop-color="#F1E6D2"/>
    </linearGradient>
    <radialGradient id="lid" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${rimFill[0]}"/>
      <stop offset="100%" stop-color="${rimFill[1]}"/>
    </radialGradient>`,
    `
    ${shadow()}
    <ellipse cx="200" cy="232" rx="92" ry="15" fill="#E9DCC4"/>
    <ellipse cx="200" cy="230" rx="92" ry="15" fill="none" stroke="#C9B692" stroke-opacity="0.6" stroke-width="2"/>
    <ellipse cx="200" cy="229" rx="62" ry="10" fill="#F6EDDB"/>
    <path d="M158 120 L242 120 L233 214 Q231 220 200 220 Q169 220 167 214 Z" fill="url(#cup)"/>
    <path d="M242 140 Q280 146 278 178 Q276 208 234 202" fill="none" stroke="url(#cup)" stroke-width="16" stroke-linecap="round"/>
    <ellipse cx="200" cy="118" rx="42" ry="9" fill="url(#lid)"/>
    ${garnish}
    <path d="M180 96 C176 84 186 76 182 62" fill="none" stroke="#A9987A" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
    <path d="M214 98 C210 84 222 76 218 60" fill="none" stroke="#A9987A" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round"/>
    `,
    '#FFF4DF', '#F1E1C0',
  )
}

const coconut = () => wrap(
  `<radialGradient id="shell" cx="40%" cy="30%" r="80%">
    <stop offset="0%" stop-color="#8A5A34"/>
    <stop offset="100%" stop-color="#5E3A1E"/>
  </radialGradient>`,
  `
  ${shadow(200, 262, 112, 16)}
  <path d="M200 138 C 132 138 112 176 118 224 C 122 258 150 274 200 274 C 250 274 278 258 282 224 C 288 176 268 138 200 138 Z" fill="url(#shell)"/>
  <g stroke="#4A2C14" stroke-opacity="0.5" stroke-width="2.4" fill="none">
    <path d="M128 208 C 140 196 152 200 160 214"/>
    <path d="M120 232 C 136 224 150 226 158 240"/>
    <path d="M276 208 C 264 196 252 200 244 214"/>
    <path d="M284 232 C 268 224 254 226 246 240"/>
  </g>
  <ellipse cx="200" cy="140" rx="76" ry="26" fill="#FFF8E8"/>
  <ellipse cx="200" cy="138" rx="76" ry="26" fill="none" stroke="#C9B692" stroke-width="2.4" opacity="0.6"/>
  <ellipse cx="200" cy="142" rx="62" ry="20" fill="#E7F0D6"/>
  <ellipse cx="200" cy="140" rx="46" ry="15" fill="#FFFFFF" opacity="0.7"/>
  <line x1="232" y1="240" x2="266" y2="70" stroke="#E84A2E" stroke-width="11" stroke-linecap="round"/>
  <line x1="228" y1="236" x2="258" y2="76" stroke="#FFFFFF" stroke-opacity="0.55" stroke-width="3" stroke-linecap="round"/>
  ${leaf(120, 96, 1.05, '#2E9E4F', -30)}
  ${leaf(136, 76, 0.85, '#3DB865', 10, -1)}
  `,
  '#F0F8E8', '#DCEFD0',
)

/* ---------- PLATES & BOWLS ---------- */

const plate = () => `
  <ellipse cx="200" cy="236" rx="104" ry="17" fill="#EDE2CB"/>
  <ellipse cx="200" cy="233" rx="104" ry="17" fill="#FBF6E9"/>
  <ellipse cx="200" cy="231" rx="80" ry="13" fill="#FFFFFF"/>`

const bowl = (innerDefs) => {
  const bowlGrad = `<radialGradient id="bw" cx="45%" cy="35%" r="80%">
    <stop offset="0%" stop-color="#FBF6E9"/>
    <stop offset="100%" stop-color="#E9DCC4"/>
  </radialGradient>`
  return wrap(
    bowlGrad,
    `
    ${shadow()}
    <path d="M118 200 C 118 258 162 276 200 276 C 238 276 282 258 282 200 Z" fill="url(#bw)"/>
    <ellipse cx="200" cy="200" rx="82" ry="22" fill="#FFFFFF"/>
    <ellipse cx="200" cy="200" rx="82" ry="22" fill="none" stroke="#C9B692" stroke-opacity="0.5" stroke-width="2"/>
    ${innerDefs}
    `,
    '#FFF3E0', '#F2E0C4',
  )
}

const maggiBowl = ({ topping = '', noodles = '#F3C94F' }) => bowl(`
  <path d="M124 192 C 132 212 150 220 200 220 C 250 220 268 212 276 192 C 272 208 250 214 200 214 C 150 214 128 208 124 192 Z" fill="#E8A93C"/>
  <g stroke="${noodles}" stroke-width="9" fill="none" stroke-linecap="round">
    <path d="M150 176 C 168 160 186 176 204 160 C 222 146 240 164 252 150"/>
    <path d="M144 190 C 164 176 184 192 206 176 C 226 162 246 180 258 166"/>
    <path d="M150 204 C 170 190 192 206 212 190 C 230 176 248 194 260 180"/>
  </g>
  ${topping}`)

const momosPlate = ({ fill, dark }) => wrap(
  `<radialGradient id="mo" cx="45%" cy="40%" r="70%">
    <stop offset="0%" stop-color="${fill[0]}"/>
    <stop offset="100%" stop-color="${fill[1]}"/>
  </radialGradient>`,
  `
  ${shadow()}
  ${plate()}
  <g>
    <path d="M168 186 C 168 158 182 142 200 142 C 218 142 232 158 232 186 C 232 214 218 230 200 230 C 182 230 168 214 168 186 Z" fill="url(#mo)"/>
    <path d="M168 186 C 168 158 182 142 200 142 C 218 142 232 158 232 186" fill="none" stroke="${dark}" stroke-opacity="0.6" stroke-width="3"/>
    <g stroke="${dark}" stroke-opacity="0.5" stroke-width="2.4" fill="none">
      <path d="M176 176 C 182 168 188 164 194 162"/>
      <path d="M200 158 C 206 160 211 164 216 170"/>
      <path d="M178 196 C 184 202 190 205 196 206"/>
      <path d="M222 174 C 224 180 224 188 222 194"/>
    </g>
  </g>
  <g>
    <path d="M128 178 C 128 154 140 140 156 140 C 172 140 184 154 184 178 C 184 202 172 216 156 216 C 140 216 128 202 128 178 Z" fill="url(#mo)" opacity="0.9"/>
    <g stroke="${dark}" stroke-opacity="0.5" stroke-width="2.4" fill="none">
      <path d="M136 170 C 141 163 146 160 152 158"/>
      <path d="M156 148 C 161 150 165 154 168 159"/>
      <path d="M138 186 C 143 191 148 194 153 195"/>
    </g>
  </g>
  <g>
    <path d="M272 178 C 272 154 284 140 300 140 C 316 140 328 154 328 178 C 328 202 316 216 300 216 C 284 216 272 202 272 178 Z" fill="url(#mo)" opacity="0.9"/>
    <g stroke="${dark}" stroke-opacity="0.5" stroke-width="2.4" fill="none">
      <path d="M280 170 C 285 163 290 160 296 158"/>
      <path d="M300 148 C 305 150 309 154 312 159"/>
      <path d="M282 186 C 287 191 292 194 297 195"/>
    </g>
  </g>`,
  '#FDF1E4', '#F1DCC2',
)

const sandwich = ({ layer, egg }) => wrap(
  `<linearGradient id="sd" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#F7E3B8"/>
    <stop offset="100%" stop-color="#D9B96E"/>
  </linearGradient>`,
  `
  ${shadow()}
  ${plate()}
  <g transform="rotate(-8 200 210)">
    <path d="M132 150 L216 150 L216 176 L132 176 Z" fill="url(#sd)"/>
    <path d="M132 150 L216 150 L216 176 L132 176 Z" fill="none" stroke="#B98A3C" stroke-opacity="0.4" stroke-width="2.4"/>
    <path d="M132 196 L216 196 L216 222 L132 222 Z" fill="url(#sd)"/>
    <path d="M132 196 L216 196 L216 222 L132 222 Z" fill="none" stroke="#B98A3C" stroke-opacity="0.4" stroke-width="2.4"/>
    <rect x="132" y="176" width="84" height="20" fill="${layer}"/>
    <rect x="132" y="176" width="84" height="20" fill="none" stroke="#14100C" stroke-opacity="0.12" stroke-width="1.6"/>
    ${egg}
  </g>`,
  '#FDF1E4', '#F1DCC2',
)

const fries = ({ sprinkle }) => {
  const boxGrad = `<linearGradient id="bx" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#E8433C"/>
    <stop offset="100%" stop-color="#C22F2A"/>
  </linearGradient>`
  let sp = ''
  for (let i = 0; i < 14; i++) {
    sp += `<rect x="${138 + ((i * 43) % 76)}" y="${118 + ((i * 37) % 40)}" width="6" height="14" rx="3" fill="${sprinkle}" opacity="0.85"/>`
  }
  return wrap(
    boxGrad,
    `
    ${shadow(200, 250, 112, 16)}
    <g>
      <g stroke="#EAB94E" stroke-width="11" fill="none" stroke-linecap="round">
        <path d="M170 118 L158 72"/>
        <path d="M198 112 L192 62"/>
        <path d="M226 118 L236 74"/>
        <path d="M212 116 L214 68"/>
        <path d="M184 116 L176 66"/>
        <path d="M206 114 L206 60"/>
      </g>
      ${sp}
    </g>
    <path d="M150 118 L250 118 L244 228 C 243 234 232 238 200 238 C 168 238 157 234 156 228 Z" fill="url(#bx)"/>
    <path d="M150 118 L250 118 L244 228 C 243 234 232 238 200 238 C 168 238 157 234 156 228 Z" fill="none" stroke="#9E241F" stroke-width="3"/>
    <path d="M156 148 L244 148" stroke="#F2E0C4" stroke-width="6" stroke-linecap="round"/>
    <path d="M160 178 L240 178" stroke="#F2E0C4" stroke-width="6" stroke-linecap="round"/>
    <path d="M172 148 L172 228" stroke="#C22F2A" stroke-width="4" opacity="0.5"/>
    `,
    '#FFF0DE', '#F3DDBE',
  )
}

const burger = ({ patty, pattyDark }) => wrap(
  `<radialGradient id="bun" cx="45%" cy="35%" r="80%">
    <stop offset="0%" stop-color="#F2C877"/>
    <stop offset="100%" stop-color="#D99937"/>
  </radialGradient>
  <radialGradient id="pt" cx="45%" cy="40%" r="70%">
    <stop offset="0%" stop-color="${patty}"/>
    <stop offset="100%" stop-color="${pattyDark}"/>
  </radialGradient>`,
  `
  ${shadow()}
  ${plate()}
  <g transform="rotate(-6 200 210)">
    <path d="M148 216 C 148 240 184 246 200 246 C 216 246 252 240 252 216 L 252 222 C 252 244 220 252 200 252 C 180 252 148 244 148 222 Z" fill="url(#bun)"/>
    <rect x="148" y="200" width="104" height="18" fill="url(#pt)"/>
    <path d="M148 200 Q 200 206 252 200 L 252 208 Q 200 216 148 208 Z" fill="#3E7A2E"/>
    <path d="M148 196 C 148 174 184 168 200 168 C 216 168 252 174 252 196 L 252 200 L 148 200 Z" fill="url(#bun)"/>
    <circle cx="168" cy="182" r="3.4" fill="#E8B056"/>
    <circle cx="200" cy="176" r="3.8" fill="#E8B056"/>
    <circle cx="232" cy="182" r="3.4" fill="#E8B056"/>
    <path d="M196 186 Q 204 190 196 196" fill="none" stroke="#C9872F" stroke-width="2.4" opacity="0.7"/>
    <path d="M204 186 Q 196 190 204 196" fill="none" stroke="#C9872F" stroke-width="2.4" opacity="0.7"/>
  </g>`,
  '#FFF0DE', '#F3DDBE',
)

const nuggets = () => wrap(
  `<radialGradient id="nu" cx="45%" cy="40%" r="70%">
    <stop offset="0%" stop-color="#F2C877"/>
    <stop offset="100%" stop-color="#D99937"/>
  </radialGradient>`,
  `
  ${shadow()}
  ${plate()}
  <g transform="rotate(-8 200 210)">
    <path d="M150 184 C 150 162 190 158 200 158 C 226 158 254 172 252 192 C 250 210 216 218 198 216 C 178 214 150 206 150 184 Z" fill="url(#nu)"/>
    <path d="M196 160 C 196 170 208 170 208 160 Z" fill="#F2C877"/>
    <path d="M230 180 C 236 180 238 186 232 190 C 228 186 224 180 230 180 Z" fill="#E8B056"/>
    <path d="M162 192 C 156 192 154 198 160 202 C 164 198 168 192 162 192 Z" fill="#E8B056"/>
    <path d="M180 208 C 174 210 176 216 182 216 C 186 212 186 208 180 208 Z" fill="#E8B056"/>
    <path d="M148 184 C 142 184 140 190 146 194 C 150 190 152 184 148 184 Z" fill="#E8B056"/>
    <path d="M200 206 C 206 208 210 204 206 200 C 200 200 196 204 200 206 Z" fill="#E8B056"/>
    <path d="M222 200 C 228 200 230 206 224 210 C 220 206 216 200 222 200 Z" fill="#E8B056"/>
  </g>`,
  '#FFF0DE', '#F3DDBE',
)

const popcorn = () => {
  let puffs = ''
  const centers = [
    [178, 176], [204, 170], [226, 182], [168, 200], [194, 194], [218, 206], [246, 192], [154, 218], [180, 214], [206, 220], [232, 222], [252, 214],
  ]
  centers.forEach(([x, y], i) => {
    const r = 16 + (i % 3) * 2
    puffs += `<circle cx="${x}" cy="${y}" r="${r}" fill="#FBE8C2" stroke="#E6C896" stroke-width="2"/>
      <path d="M${x - r + 4} ${y - r + 4} q ${r * 0.4} -6 ${r * 0.8} 0 q 0 6 -${r * 0.4} 6 q -${r * 0.4} 0 -${r * 0.4} -6 Z" fill="#FFF6E0"/>`
  })
  return wrap(
    '',
    `
    ${shadow()}
    ${plate()}
    <g>${puffs}</g>`,
    '#FFF0DE', '#F3DDBE',
  )
}

const roll = () => wrap(
  `<linearGradient id="rl" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#F6E7C8"/>
    <stop offset="100%" stop-color="#E0C791"/>
  </linearGradient>`,
  `
  ${shadow(200, 252, 112, 16)}
  <g transform="rotate(-10 200 214)">
    <rect x="128" y="168" width="144" height="34" rx="16" fill="url(#rl)"/>
    <rect x="128" y="168" width="144" height="34" rx="16" fill="none" stroke="#B98A3C" stroke-opacity="0.4" stroke-width="2.4"/>
    <ellipse cx="128" cy="185" rx="17" ry="16" fill="#E8D3A6"/>
    <ellipse cx="272" cy="185" rx="17" ry="16" fill="#D9BC7E"/>
    <ellipse cx="128" cy="185" rx="12" ry="11" fill="#8FB86A"/>
    <path d="M146 168 L170 168 L170 202 L146 202 Z" fill="#E8D3A6" opacity="0.6"/>
    <rect x="128" y="196" width="144" height="10" fill="#FFFFFF" opacity="0.5"/>
  </g>`,
  '#FFF0DE', '#F3DDBE',
)

const breadOmelette = ({ cheese, chicken }) => wrap(
  `<radialGradient id="eg" cx="45%" cy="40%" r="70%">
    <stop offset="0%" stop-color="#F8CF57"/>
    <stop offset="100%" stop-color="#E8A93C"/>
  </radialGradient>
  <linearGradient id="br" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#F2DCA6"/>
    <stop offset="100%" stop-color="#D4AE62"/>
  </linearGradient>`,
  `
  ${shadow()}
  ${plate()}
  <g transform="rotate(-8 200 210)">
    <path d="M132 168 C 132 146 176 142 196 142 C 226 142 260 150 258 176 C 256 200 216 210 196 208 C 172 206 132 190 132 168 Z" fill="url(#eg)"/>
    <path d="M146 168 C 146 154 176 150 196 150 C 220 150 246 156 246 172 C 246 188 216 196 196 194 C 176 192 146 182 146 168 Z" fill="url(#eg)"/>
    <g stroke="#C9872F" stroke-width="2.4" fill="none" opacity="0.7">
      <path d="M168 170 C 174 176 168 182 174 188"/>
      <path d="M196 160 C 202 166 196 172 202 178"/>
      <path d="M222 168 C 228 174 222 180 228 186"/>
    </g>
    ${cheese}
    <rect x="248" y="204" width="52" height="34" rx="6" fill="url(#br)"/>
    <rect x="248" y="204" width="52" height="34" rx="6" fill="none" stroke="#B98A3C" stroke-opacity="0.5" stroke-width="2.4"/>
    <rect x="256" y="204" width="6" height="34" fill="#FFFFFF" opacity="0.5"/>
    ${chicken}
  </g>`,
  '#FFF1E0', '#F3DFC2',
)

const fruitSalad = () => {
  const fruit = `
    <g>
      <path d="M152 186 C 152 174 162 166 174 166 C 186 166 196 174 196 186 C 196 198 186 206 174 206 C 162 206 152 198 152 186 Z" fill="#FF8A3C"/>
      <path d="M206 174 C 206 162 216 154 228 154 C 240 154 250 162 250 174 C 250 186 240 194 228 194 C 216 194 206 186 206 174 Z" fill="#FFE23B"/>
      <circle cx="188" cy="198" r="12" fill="#F26CA4"/>
      <circle cx="218" cy="206" r="13" fill="#3E9E5A"/>
      <circle cx="252" cy="196" r="11" fill="#7A5FC8"/>
      <circle cx="160" cy="212" r="11" fill="#E84A2E"/>
      <circle cx="232" cy="220" r="10" fill="#F26CA4"/>
    </g>`
  return bowl(fruit)
}

const omeletteEggBit = (x, y) =>
  `<circle cx="${x}" cy="${y}" r="8" fill="#FFF3C9"/><circle cx="${x}" cy="${y}" r="8" fill="none" stroke="#F2C877" stroke-width="2"/>`

const chickenBit = (x, y) =>
  `<rect x="${x}" y="${y}" width="14" height="10" rx="4" fill="#D9A566"/><rect x="${x}" y="${y}" width="14" height="10" rx="4" fill="none" stroke="#B98A3C" stroke-opacity="0.6" stroke-width="1.6"/>`

const paneerBit = (x, y) =>
  `<rect x="${x}" y="${y}" width="14" height="12" rx="3" fill="#FFF6E2"/><rect x="${x}" y="${y}" width="14" height="12" rx="3" fill="none" stroke="#E2C99A" stroke-width="1.6"/>`

const vegBit = (x, y) =>
  `<path d="M${x} ${y} l 6 -3 l 2 6 l -6 3 Z" fill="#3E9E5A"/><path d="M${x + 8} ${y - 4} l 5 1 l -1 6 l -5 -1 Z" fill="#FF7A48"/>`

/* ---------- CONFIG ---------- */

const ITEMS = {
  'tea': () => hotDrink({ liquid: ['#E8B96A', '#C98F3F'] }),
  'lemon-tea': () => hotDrink({ liquid: ['#F0C75E', '#D8A93F'], garnish: citrusWheel(222, 116, 15, '#FFE23B', '#D8A93F') }),
  'green-tea': () => hotDrink({ liquid: ['#CDDF8F', '#A9C460'], garnish: leaf(218, 110, 0.6, '#2E9E4F', 30) }),
  'ginger-tea': () => hotDrink({ liquid: ['#E4B369', '#CA9350'], garnish: `<path transform="translate(220 104) rotate(25) scale(0.7)" d="M0 0 C -16 -10 -22 -26 0 -40 C 22 -26 16 -10 0 0 Z" fill="#E0A34E" stroke="#C98F3F" stroke-width="2"/>` }),
  'black-tea': () => hotDrink({ liquid: ['#9A3E22', '#6E2A15'] }),
  'coffee': () => hotDrink({ liquid: ['#6B4526', '#4A2C15'] }),
  'black-coffee': () => hotDrink({ liquid: ['#5D3A22', '#3E2613'] }),
  'boost': () => hotDrink({ liquid: ['#C68A4E', '#A96A30'], garnish: `<g fill="#8A5A34" opacity="0.8"><circle cx="184" cy="116" r="2.4"/><circle cx="196" cy="120" r="2.2"/><circle cx="210" cy="116" r="2.4"/></g>` }),
  'horlicks': () => hotDrink({ liquid: ['#D9A15E', '#BC7F3C'], garnish: `<g fill="#C9905A" opacity="0.8"><circle cx="186" cy="117" r="2.4"/><circle cx="200" cy="120" r="2.2"/><circle cx="214" cy="117" r="2.4"/></g>` }),
  'fresh-lemon-juice': () => drink({ liquid: ['#F5E85C', '#E3CE3B'], top: 150, ice: 2, garnish: citrusWheel(224, 102, 19, '#FFE23B', '#D8A93F') }),
  'lemon-soda': () => drink({ liquid: ['#F7EF7A', '#E9DD4A'], top: 140, ice: 3, bubble: 9, garnish: citrusWheel(226, 100, 18, '#FFE23B', '#D8A93F') }),
  'orange-juice': () => drink({ liquid: ['#FFB03B', '#F28A1C'], top: 150, ice: 2, fruit: '<circle cx="208" cy="196" r="14" fill="#FF8A3C"/><path d="M208 184 C 200 188 196 196 200 204 C 208 208 216 204 220 196 C 222 190 216 184 208 184 Z" fill="#FFF3D6" opacity="0.7"/>', garnish: citrusWheel(224, 102, 19, '#FFA52E', '#C96E1A') }),
  'mosambi-juice': () => drink({ liquid: ['#D9E87B', '#B9CB52'], top: 150, ice: 2, garnish: citrusWheel(224, 102, 18, '#D8E86B', '#9FB33F') }),
  'watermelon-juice': () => drink({ liquid: ['#FF7A6E', '#F25448'], top: 150, ice: 2, garnish: citrusWheel(224, 102, 19, '#FF6B5E', '#C93C30') }),
  'muskmelon-juice': () => drink({ liquid: ['#F5C98A', '#EBB263'], top: 150, ice: 2 }),
  'chikoo-juice': () => drink({ liquid: ['#C99A68', '#A87A48'], top: 152, ice: 2 }),
  'red-banana-juice': () => drink({ liquid: ['#F09A86', '#D96F57'], top: 150, ice: 2, fruit: '<path d="M196 190 q 6 -18 26 -22 q -2 22 -18 30 q -8 -2 -8 -8 Z" fill="#B3402E" opacity="0.8"/>' }),
  'pomegranate-juice': () => drink({ liquid: ['#C9304E', '#9E1F3A'], top: 150, ice: 2, fruit: '<circle cx="204" cy="196" r="13" fill="#E84A5A"/><circle cx="196" cy="188" r="10" fill="#E84A5A"/>', garnish: `<g transform="translate(224 100)"><circle r="18" fill="#C9304E"/><circle r="6" fill="#E87185" opacity="0.8"/><circle cx="-8" cy="6" r="4" fill="#E87185" opacity="0.7"/></g>` }),
  'fig-juice': () => drink({ liquid: ['#B98A6A', '#96704F'], top: 152, ice: 2, fruit: `<path d="M198 178 q 4 -16 16 -16 q 10 0 8 16 q -2 14 -14 16 q -10 2 -10 -16 Z" fill="#8A5A6E"/>` }),
  'apple-juice': () => drink({ liquid: ['#F2E9A8', '#E0CE6E'], top: 150, ice: 2, fruit: '<circle cx="206" cy="196" r="15" fill="#E84A2E"/><path d="M206 183 C 202 178 204 172 210 170 C 212 172 210 178 206 183 Z" fill="#4E7A3A"/>' }),
  'dragon-fruit-juice': () => drink({ liquid: ['#F47BB5', '#E24E96'], top: 150, ice: 2, fruit: '<circle cx="206" cy="198" r="14" fill="#F26CA4"/><g fill="#FFF" opacity="0.8"><circle cx="200" cy="194" r="2"/><circle cx="208" cy="190" r="2"/><circle cx="211" cy="200" r="2"/><circle cx="202" cy="203" r="2"/></g>' }),
  'avocado-juice': () => drink({ liquid: ['#BBD67A', '#93BC57'], top: 148, ice: 1, fruit: '<circle cx="206" cy="196" r="15" fill="#7FA843"/><ellipse cx="206" cy="196" rx="6" ry="10" fill="#B98A3C"/>' }),
  'tender-coconut': () => coconut(),
  'bread-omelette': () => breadOmelette({ cheese: '', chicken: '' }),
  'cheese-bread-omelette': () => breadOmelette({ cheese: `<path d="M152 164 C 168 156 216 154 236 164 C 240 170 238 174 232 176 C 214 184 176 184 156 176 C 150 174 150 168 152 164 Z" fill="#F2C84B" opacity="0.9"/>`, chicken: '' }),
  'chicken-bread-omelette': () => breadOmelette({ cheese: '', chicken: `${chickenBit(196, 162)}${chickenBit(214, 178)}${chickenBit(176, 176)}` }),
  'plain-maggi': () => maggiBowl({}),
  'egg-maggi': () => maggiBowl({ topping: `${omeletteEggBit(180, 168)}${omeletteEggBit(212, 184)}` }),
  'veg-maggi': () => maggiBowl({ topping: `${vegBit(168, 164)}${vegBit(196, 170)}${vegBit(228, 162)}` }),
  'cheese-maggi': () => maggiBowl({ topping: `<path d="M158 156 C 176 146 222 146 240 156 C 244 162 242 168 234 170 C 216 178 182 178 164 170 C 158 168 156 160 158 156 Z" fill="#F2C84B" opacity="0.95"/>` }),
  'chicken-maggi': () => maggiBowl({ topping: `${chickenBit(170, 162)}${chickenBit(198, 172)}${chickenBit(226, 158)}` }),
  'paneer-maggi': () => maggiBowl({ topping: `${paneerBit(170, 160)}${paneerBit(202, 170)}${paneerBit(228, 158)}` }),
  'french-fries': () => fries({ sprinkle: '#F2C877' }),
  'peri-peri-fries': () => fries({ sprinkle: '#D84A2E' }),
  'masala-fries': () => fries({ sprinkle: '#E8A93C' }),
  'veg-momos': () => momosPlate({ fill: ['#FFF6E4', '#F1E0BC'], dark: '#C9A96E' }),
  'chicken-momos': () => momosPlate({ fill: ['#EFD9AE', '#DDB778'], dark: '#B98A3C' }),
  'paneer-momos': () => momosPlate({ fill: ['#FFF8E8', '#F2E3C4'], dark: '#C9B28A' }),
  'mushroom-momos': () => momosPlate({ fill: ['#E4D5C4', '#CDB69E'], dark: '#9C8266' }),
  'veg-sandwich': () => sandwich({ layer: '#7FA843', egg: '' }),
  'egg-sandwich': () => sandwich({ layer: '#F2C84B', egg: '' }),
  'paneer-sandwich': () => sandwich({ layer: '#FFF6E2', egg: '' }),
  'chicken-sandwich': () => sandwich({ layer: '#D9A566', egg: '' }),
  'veg-burger': () => burger({ patty: '#8FB86A', pattyDark: '#67984A' }),
  'chicken-burger': () => burger({ patty: '#D9A566', pattyDark: '#B67F3C' }),
  'chicken-nuggets': () => nuggets(),
  'chicken-popcorn': () => popcorn(),
  'paneer-roll': () => roll(),
  'fruit-salad': () => fruitSalad(),
  'vanilla-milkshake': () => milkshake({ liquid: ['#FBF3DC', '#EFE0B8'] }),
  'butterscotch-milkshake': () => milkshake({ liquid: ['#F0C878', '#DFA94E'] }),
  'chocolate-milkshake': () => milkshake({ liquid: ['#8A5A34', '#633E20'] }),
  'mango-milkshake': () => milkshake({ liquid: ['#FFC83D', '#F29C1F'] }),
  'pista-milkshake': () => milkshake({ liquid: ['#C9E08A', '#A8C964'] }),
  'cold-coffee': () => milkshake({ liquid: ['#A9744A', '#7E5330'], cream: '#F6E7D2', cherry: false, garnish: '<ellipse cx="200" cy="250" rx="34" ry="8" fill="#B9895A" opacity="0.55"/>' }),
  'rose-milk': () => milkshake({ liquid: ['#F6AFC4', '#EE88A8'], cream: '#F9E4EC' }),
  'badam-milk': () => milkshake({ liquid: ['#F0DFBE', '#E2C894'], cream: '#FBF3E0' }),
  'pista-milk': () => milkshake({ liquid: ['#CFE5A0', '#AFCE74'], cream: '#F4F7E6' }),
  'mint-mojito': () => mojito({ liquid: ['#BFE88A', '#9ED46B'] }),
  'strawberry-mojito': () => mojito({ liquid: ['#F5A9BC', '#EE8FA6'], garnish: `${berry(212, 130, 10, '#E84A5A', '#B9354A')}` }),
  'blueberry-mojito': () => mojito({ liquid: ['#A28BDF', '#8469CE'], garnish: `${berry(204, 132, 10, '#6A4FB8', '#4A348C')}${berry(222, 142, 8, '#6A4FB8', '#4A348C')}` }),
}

for (const [key, fn] of Object.entries(ITEMS)) {
  writeFileSync(join(OUT, `${key}.svg`), fn())
  console.log('✓', key)
}
console.log(`Generated ${Object.keys(ITEMS).length} illustrations → ${OUT}`)
