import { ArrowUpRight, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { nikmehrWork, projects, work } from "@/data/portfolio";
const touchUpsCover = "https://www.dropbox.com/scl/fi/520jlx8lb3onl7is5qyag/Duck-ai-image-2026-11-20-11-49.jpeg?rlkey=8xu096c7hfkhfzucp5upclhrq&raw=1";

import junoonPoster from "@/assets/junoon_case_file_poster.jpg.asset.json";
import junoonGhostship from "@/assets/junoon_case_ghostship.jpg.asset.json";
import junoonMcnally from "@/assets/junoon_case_mcnally.jpg.asset.json";
import junoonRogers from "@/assets/junoon_case_rogers.jpg.asset.json";
import junoonUnterweger from "@/assets/junoon_case_unterweger.jpg.asset.json";
import kms1 from "@/assets/khaneh_mod_setareh_slide_01.png.asset.json";
import kms2 from "@/assets/khaneh_mod_setareh_slide_02.png.asset.json";
import kms3 from "@/assets/khaneh_mod_setareh_slide_03.png.asset.json";
import kms4 from "@/assets/khaneh_mod_setareh_slide_04.png.asset.json";
import kms5 from "@/assets/khaneh_mod_setareh_slide_05.png.asset.json";

// Lovable stores uploaded artwork behind its asset endpoint. On Vercel these
// relative URLs would incorrectly resolve against the portfolio domain, so
// keep the source host explicit while leaving the Lovable project untouched.
const LOVABLE_ASSET_ORIGIN =
  "https://id-preview--c40cda6a-8161-45d2-9902-76acbf71b9f3.lovable.app";
const assetUrl = (path: string) => new URL(path, LOVABLE_ASSET_ORIGIN).toString();
const turquoiseCover =
  "https://www.dropbox.com/scl/fi/xu02n0326lzvadfh33fp6/final_carousel_slide_2_profile.jpg?rlkey=4pt5kfu7ajf95ni41a1une5i8&raw=1";
const turquoiseDetail =
  "https://www.dropbox.com/scl/fi/ysxlzqdqlbk000m10b36c/21c32000c543e8a70848b02e0dda227d65e0c2ee6d02316fd106f7308ff2c10f.png?rlkey=hgnv2et8heg9fassv18w175qt&raw=1";
const turquoiseVideo =
  "https://www.dropbox.com/scl/fi/83wizcnapp7geg9n0t5j1/lv_0_20260924152412.mp4?rlkey=nfirr8y5k3tov77hodlhsbw2m&raw=1";
const turkishCoffeeCover =
  "https://www.dropbox.com/scl/fi/kvfuw5kdovtngybol6ia0/lv_0_20260919130442.jpg?rlkey=h11cbdjbe82q6ztuygi7zq91g&raw=1";
const setareFashionFilmVideo =
  "https://www.dropbox.com/scl/fi/ekhldz7uwyjlww1o6s5eq/VID_20261118_085945_038_bsl.mp4?rlkey=51mztc574pp8rb9faplrqyxq9&raw=1";
const khanehShalvarImages = [
  { src: "https://www.dropbox.com/scl/fi/tj2gt8xclv481hdxyyini/grok_1794593164081.jpg?rlkey=tmq9k2vxeu1rxjlb0v5z0iu0i&raw=1", alt: "Khaneh Shalvar autumn campaign visual 01" },
  { src: "https://www.dropbox.com/scl/fi/sxdoctzwlc3rco09v2skp/IMG_20261113_211756_521.jpg?rlkey=fswq0c1qhe6yly5cc01uzz7g8&raw=1", alt: "Khaneh Shalvar autumn campaign visual 02" },
  { src: "https://www.dropbox.com/scl/fi/fco3cuj6iehy23rt8k8go/IMG_20261113_211816_095.jpg?rlkey=qyjaayzcmam273jhzav06u2dy&raw=1", alt: "Khaneh Shalvar autumn campaign visual 03" },
  { src: "https://www.dropbox.com/scl/fi/n4p2k6ic613vc2fk6tv5n/IMG_20261113_211915_319.jpg?rlkey=rzeg27hvku6wmijat6mem9vd4&raw=1", alt: "Khaneh Shalvar autumn campaign visual 04" },
  { src: "https://www.dropbox.com/scl/fi/fiox9e6ibonzy1r88ry4p/IMG_20261113_211925_973.jpg?rlkey=7harvn76dtwvtk9nf0uxbw1nh&raw=1", alt: "Khaneh Shalvar autumn campaign visual 05" },
  { src: "https://www.dropbox.com/scl/fi/vxb6xr81fejax5ga9qi95/IMG_20261113_211937_951.jpg?rlkey=ur02358bez5qia0jmfi7dx2r8&raw=1", alt: "Khaneh Shalvar autumn campaign visual 06" },
  { src: "https://www.dropbox.com/scl/fi/pfyvapnem382ce2tm2q34/IMG_20261113_211945_305.jpg?rlkey=66ozr21hu7uilf5tqsxgwkcc9&raw=1", alt: "Khaneh Shalvar autumn campaign visual 07" },
];

function TurquoiseJewelryGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <img
          src={turquoiseCover}
          alt="AI-generated model image wearing the turquoise jewelry set"
          loading="lazy"
          className="w-full bg-card object-contain"
        />
        <img
          src={turquoiseDetail}
          alt="Close-up AI-generated product visual showing details of the turquoise necklace"
          loading="lazy"
          className="w-full bg-card object-contain"
        />
      </div>
      <video
        controls
        playsInline
        preload="metadata"
        poster={turquoiseCover}
        className="mt-4 max-h-[560px] w-full bg-card"
      >
        <source src={turquoiseVideo} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        AI-generated concept imagery · Model view, product detail and video · Self-initiated project
      </figcaption>
    </figure>
  );
}

const parlaImages = [
  {
    src: "https://www.dropbox.com/scl/fi/jlj6owxsvn0le1puqndib/1795118785331.jpg?rlkey=y5puwnpdrdxmt37phpwi2s3fq&raw=1",
    alt: "Parla perfume campaign visual 01",
  },
  {
    src: "https://www.dropbox.com/scl/fi/f7rcx71g1todnsrdh6r8u/1795119614842.jpg?rlkey=724y9niwmsqi3huweg7wcw6s6&raw=1",
    alt: "Parla perfume campaign visual 02",
  },
  {
    src: "https://www.dropbox.com/scl/fi/waehv17by09ssp822zmbr/Duck-ai-image-2026-11-20-02-42.jpeg?rlkey=tikghyh0cre497rk0zs5mwk2q&raw=1",
    alt: "Parla perfume campaign visual 03",
  },
  {
    src: "https://www.dropbox.com/scl/fi/8y91i4ep19hykupkpg3tj/lv_0_20261119214004.jpg?rlkey=yfk7l4lwc8pnxis336n27rpoz&raw=1",
    alt: "Parla perfume campaign visual 04",
  },
  {
    src: "https://www.dropbox.com/scl/fi/pdp00vfryp32gsjrol2l0/1788513442182.png?rlkey=ycbc16fqcjxeey9jpri2am7fm&raw=1",
    alt: "Parla perfume campaign visual 05",
  },
  {
    src: "https://www.dropbox.com/scl/fi/he7wutc4l0a3fwii308o6/1788513500022.png?rlkey=gda11ps0r9tx7uin90hc8bu3f&raw=1",
    alt: "Parla perfume campaign visual 06",
  },
  {
    src: "https://www.dropbox.com/scl/fi/qo457y1mwnoyhzqi4ffin/1788513613751.png?rlkey=v0wcbr4o24hofev8k4t1nmkpc&raw=1",
    alt: "Parla perfume campaign visual 07",
  },
];

function ParlaGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <ol className="grid gap-4 sm:grid-cols-2">
        {parlaImages.map((image) => (
          <li key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="max-h-[900px] w-full bg-card object-contain"
            />
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Parla fragrance · Campaign visual explorations
      </figcaption>
    </figure>
  );
}

const sayehArtwork =
  "https://www.dropbox.com/scl/fi/xxgfqf8ji9jqbjazo79kp/file_00000000056081f4a18d01e5b1e0b733.png?rlkey=t8lyhkljeu0gtoiqcrypvm1n9&raw=1";

const sayehSlides = [
  {
    src: "https://www.dropbox.com/scl/fi/338le7nz1wjv5rxc46l61/file_00000000df408210917736c25bb0756f.png?rlkey=mbi1herhn9zd2sv6cqgu62qtn&raw=1",
    alt: "SAYEH character development presentation — slide 1",
  },
  {
    src: "https://www.dropbox.com/scl/fi/1wangkbv8gtuj8vuhl5z3/file_000000002d9c820a8826190870808e4b.png?rlkey=ouylmiopn4iz3eymb5v841sg1&raw=1",
    alt: "SAYEH character development presentation — slide 2",
  },
  {
    src: "https://www.dropbox.com/scl/fi/mijd2vm89oxq6nlwg372a/file_0000000052b481f49fd7a92a581f85e0.png?rlkey=nuwt9kpf2w46hzarc0sh9ctdz&raw=1",
    alt: "SAYEH character development presentation — slide 3",
  },
];

function SayehGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <img
        src={sayehArtwork}
        alt="SAYEH original character design overview"
        loading="lazy"
        className="max-h-[900px] w-full bg-card object-contain"
      />
      <ol className="mt-5 grid gap-4 sm:grid-cols-2">
        {sayehSlides.map((slide, index) => (
          <li key={slide.src} className={index === 0 ? "sm:col-span-2" : ""}>
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              className="max-h-[900px] w-full bg-card object-contain"
            />
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Original character designed independently by Setareh Rahimi, from
        concept through final presentation · Character development slides 01–03.
      </figcaption>
    </figure>
  );
}

function SetareFashionFilmGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <video
        controls
        playsInline
        preload="metadata"
        className="mx-auto max-h-[720px] w-full bg-card object-contain"
      >
        <source src={setareFashionFilmVideo} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Setare Fashion House · Autumn Collection · Self-directed fashion film
      </figcaption>
    </figure>
  );
}

const junoonSquares = [
  {
    src: assetUrl(junoonGhostship.url),
    alt: "Documentary crime-podcast cover exploration: Ghostship case",
  },
  {
    src: assetUrl(junoonMcnally.url),
    alt: "Documentary crime-podcast cover exploration: McNally case",
  },
  {
    src: assetUrl(junoonRogers.url),
    alt: "Documentary crime-podcast cover exploration: Rogers case",
  },
  {
    src: assetUrl(junoonUnterweger.url),
    alt: "Documentary crime-podcast cover exploration: Unterweger case",
  },
];

const kmsSlides = [
  {
    src: assetUrl(kms1.url),
    alt: "Slide 01 of 05: The digital experience — Khaneh Mod Setareh storefront cover",
  },
  {
    src: assetUrl(kms2.url),
    alt: "Slide 02 of 05: One brand, two screens — desktop and mobile header side by side",
  },
  {
    src: assetUrl(kms3.url),
    alt: "Slide 03 of 05: The visual system — colour palette, typeface and hierarchy",
  },
  { src: assetUrl(kms4.url), alt: "Slide 04 of 05: The complete experience — full page layout" },
  { src: assetUrl(kms5.url), alt: "Slide 05 of 05: The final note — closing slide" },
];

function KhanehModGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <ol className="grid gap-3 sm:grid-cols-2">
        {kmsSlides.map((img, i) => (
          <li key={img.src} className={i === 0 ? "sm:col-span-2" : ""}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/5] w-full bg-card object-contain"
            />
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Presentation slides 01–05 · Khaneh Mod Setareh ecommerce visual design exploration by
        Setareh Rahimi.
      </figcaption>
    </figure>
  );
}

function KhanehShalvarGallery() {
  const looks = [
    {
      title: "Navy Ribbed Turtleneck",
      images: [
        {
          label: "Original · Tailor’s Dummy",
          src: "https://www.dropbox.com/scl/fi/fiox9e6ibonzy1r88ry4p/IMG_20261113_211925_973.jpg?rlkey=7harvn76dtwvtk9nf0uxbw1nh&raw=1",
        },
        {
          label: "Ghost Mannequin",
          src: "https://www.dropbox.com/scl/fi/pfyvapnem382ce2tm2q34/IMG_20261113_211945_305.jpg?rlkey=66ozr21hu7uilf5tqsxgwkcc9&raw=1",
        },
        {
          label: "On-Model Fit",
          src: "https://www.dropbox.com/scl/fi/vxb6xr81fejax5ga9qi95/IMG_20261113_211937_951.jpg?rlkey=ur02358bez5qia0jmfi7dx2r8&raw=1",
        },
      ],
    },
    {
      title: "Grey Ribbed Turtleneck",
      images: [
        {
          label: "Original · Tailor’s Dummy",
          src: "https://www.dropbox.com/scl/fi/bl4e6trc55k9h83y23uoy/.jpg?rlkey=dynw62cfxsyajju4trmcsumrt&raw=1",
        },
        {
          label: "Ghost Mannequin",
          src: "https://www.dropbox.com/scl/fi/u05hhyzrg6ahlivriqpqo/.png?rlkey=hw438msqjd8fxoqm2iqfbw2ur&raw=1",
        },
        {
          label: "On-Model Fit",
          src: "https://www.dropbox.com/scl/fi/5c2hna2hvzuzv7fuz4cpr/.jpg?rlkey=26znd195tigvaudqhrxyfl5ln&raw=1",
        },
      ],
    },
  ];

  return (
    <figure className="space-y-8 border-t border-rule pt-6">
      {looks.map((look) => (
        <section key={look.title} className="space-y-3">
          <h3 className="eyebrow text-foreground">{look.title} · Product Transformation</h3>
          <ol className="grid gap-3 sm:grid-cols-3">
            {look.images.map((image) => (
              <li key={image.label} className="border border-rule bg-card p-3">
                <img
                  src={image.src}
                  alt={`${look.title} — ${image.label}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full bg-background/50 object-contain"
                />
                <p className="mt-3 border-t border-rule pt-2 text-center font-mono text-xs text-muted-foreground">
                  {image.label}
                </p>
              </li>
            ))}
          </ol>
        </section>
      ))}
      <figcaption className="text-xs leading-relaxed text-muted-foreground">
        Product image transformation · Original tailor’s dummy, ghost mannequin and on-model presentation.
      </figcaption>
    </figure>
  );
}


const touchUpsPairs = [
  {
    title: "Food retouch 01",
    before: "https://www.dropbox.com/scl/fi/axvf73zwc5sm8agsyg3fg/unnamed-10.webp?rlkey=aaht3kqgxkl9hxcqj4et489ka&raw=1",
    after: "https://www.dropbox.com/scl/fi/qa3hmub11yh6fipsehqkp/1792682346570.jpg?rlkey=46bb5h90t7xmucidqf2jitq95&raw=1",
  },
  {
    title: "Food retouch 02",
    before: "https://www.dropbox.com/scl/fi/9mp0s87j662q4dkq8wcom/lv_0_20261022071125.jpg?rlkey=g6h1zkcmdejlfula2waafx9vh&raw=1",
    after: "https://www.dropbox.com/scl/fi/sy0ea9y3iiez88halstxt/lv_0_20261022073202.jpg?rlkey=m15v1sl4gcpz6iyjh9xt5kmgy&raw=1",
  },
  {
    title: "Food retouch 03",
    before: "https://www.dropbox.com/scl/fi/uzz73p9sdl00u13lzbob4/unnamed-3.webp?rlkey=tcbnge742p26f7io36e9ykpot&raw=1",
    after: "https://www.dropbox.com/scl/fi/5u4z479efuuz500xfty32/VEGA_1792654251368.jpg?rlkey=pazxycvftjmfljh4vdolpjd80&raw=1",
  },
  {
    title: "Food retouch 04",
    before: "https://www.dropbox.com/scl/fi/1414iztmvive8geiwbjww/lv_0_20261022070508.jpg?rlkey=12ryrwzrs60r40zzq3lu6212s&raw=1",
    after: "https://www.dropbox.com/scl/fi/wo9gc0man2l1kkpgmcxe2/lv_0_20261022081616.jpg?rlkey=vyenwrqs5tcadtg6ut0tkpyvq&raw=1",
  },
  {
    title: "Coffee retouch 01",
    before: "https://uc38f78cd19cc07ef42d87a67c09.previews.dropboxusercontent.com/p/thumb/ADRPoncNzW7owGACetWSE5Ilz02u_6sFcVYL7TyhyZHJMgx4QNqKPaPzXxLUD9kN2XJ_MrUZakAFmKZNJh-JrmhOT-b1ZyAp1YeAv8nlLbiqDeJA0Hf1Q_UTM_Gx3iBOMwP8Lct1ab42aKMd1XxTM3c23_0z5v88Yfdhss9ovzk1aBDgpDjJhc0VDQwT__GwFDvSQjyiZGNf_W2_4zimXM7UKi2sh12SU76EyBZ8Dqj_xcAFat1Lj5zPY9gQduFeMG8yKWDj4tYGb_NOAQJ9ocWQr7i3PocvBPpznvW-vRTb-g/p.jpeg",
    after: "https://uc525ae958c4cd815354cd89cc29.previews.dropboxusercontent.com/p/thumb/ADSnSJFCInzbhRQqAl-KpQgUDJTldV_E23gl4dBLHbYXcuVKUJRhQFU-kzBGNiqXm-2m4eFp1XOP9J1NPtBZFIVYxJ9D6YJUfBJfxluf6ESeXAw63oSebaxiizFWYKmL21lSoQ9nNsmBv1tWaapvrSXmL_sOnYhWRmmopFjozXQjeiM-lnaoNN5qeI0kGuWpVMYTmQJ1wQVV3LcT03ph0B2rwqjGWuaOxHX7T5RNOI57IZyT4i5cR1FPnHslpCohodS6JJWG6gwjAfIaOmEz4Cxk0_UxvVVSP2LTuMogdhk0nw/p.jpeg",
  },
];

const chenjehLogoMotion =
  "https://www.dropbox.com/scl/fi/qcfk7ije92kvmlolk5kg1/chenjeh-logo-motion.mp4?rlkey=39iwnl7f26s0g0rhkks4uk6kv&raw=1";

function TouchUpsGallery() {
  return (
    <figure className="space-y-8 border-t border-rule pt-6">
      <section className="space-y-4">
        <div>
          <h3 className="font-display text-2xl">Food Photo Retouching</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Original and retouched restaurant food photography · Before / After
          </p>
        </div>
        <ol className="space-y-6">
          {touchUpsPairs.map((pair, index) => (
            <li key={pair.title} className="space-y-3">
              <h4 className="eyebrow">{String(index + 1).padStart(2, "0")} / {pair.title}</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="min-w-0">
                  <img
                    src={pair.before}
                    alt={`${pair.title} — original food photograph before retouching`}
                    loading="lazy"
                    className="w-full bg-card object-contain"
                  />
                  <p className="mt-2 text-center font-mono text-xs text-muted-foreground">BEFORE</p>
                </div>
                <div className="min-w-0">
                  <img
                    src={pair.after}
                    alt={`${pair.title} — retouched food photograph after editing`}
                    loading="lazy"
                    className="w-full bg-card object-contain"
                  />
                  <p className="mt-2 text-center font-mono text-xs text-muted-foreground">AFTER</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="space-y-4 border-t border-rule pt-6">
        <div>
          <h3 className="font-display text-2xl">AI-assisted Visual Reconstruction</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Tea photograph · Original scene and AI-assisted reconstruction · Before / After
          </p>
        </div>
        <img
          src={touchUpsCover}
          alt="Tea photograph before and AI-assisted visual reconstruction after"
          loading="lazy"
          className="w-full bg-card object-contain"
        />
        <p className="text-xs leading-relaxed text-muted-foreground">
          The AFTER is an AI-assisted reconstruction based on the original photograph, not a pixel-level retouch of the original file.
        </p>
      </section>
      <section className="space-y-3 border-t border-rule pt-6">
        <div>
          <h3 className="font-display text-2xl">Chenjeh — Logo Motion</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Motion treatment of the restaurant's static logo
          </p>
        </div>
        <video controls playsInline preload="metadata" className="max-h-[560px] w-full bg-card">
          <source src={chenjehLogoMotion} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </section>
      <figcaption className="text-xs leading-relaxed text-muted-foreground">
        Restaurant food photo retouching and logo motion · Chenjeh
      </figcaption>
    </figure>
  );
}

function StillnessGallery() {
  const stills = ["https://uce3574d77083caa64e47b4d0bbd.previews.dropboxusercontent.com/p/thumb/ADSOka9f8eq4nhKoixYJWFfcHA43aAqRDZNv7t1DzuslPSVsVOEn_XdvEnNJ5L3ucSUhXnvzNeEHrbmPdMe9yCnSuB87vKq6Jr5fKxrXXsMP9tPelaurS4bR8fwz60p6d96WvkyyUrNIp2CsxVntjCzcvsk1Dy-KCXJ_CTflIaMUUN-JGKqylbGlGojKKeeXHhsO0nji8yJykaEAIKJfE3tde5cWo_KbBJ924Yb1LhSle4RVV__BAkQLxpT6okW1gDA42A3I32PW_dv5uihmrZ78d6iqjmG5NqPVyQa7stqIIQ/p.jpeg","https://uce3dfa8daf7f8a961d64a48d5ad.previews.dropboxusercontent.com/p/thumb/ADRc0PBzu8mZBleF7Hwlr5b4GoBK_0ZHvARubQ0tyBzdEUPRS9CN9BOqlqxdriykKpYcXdo9uSUvN_fRjOuiiI479k6-iXTT9Sk3SPhUaKlCW26Pyt-dp4m1Jxf2JE0Xuo0g3QuKexnRUJ8dKiddJKAID7yz1GOLJR3KqgFqf0giWfrrGqWHm5Z9ZeARNfahQcrGKEO5u7Lxi9agEqgAb5hLM5UeR3DGsYQAb0YxOFq2RAwQA9RsN--ewFYixioALQse9Pn44VyaPbjIRfL6B793Lu3pzFulCbBibo_lwgVA/p.png","https://uc13dfd01c620e9406806255b22b.previews.dropboxusercontent.com/p/thumb/ADSdCgNigesD7SC7soXkKuFJrGfoi_e43qXMSmpqHT8p3lwQybIoEbRMkYBGOT2_GlZO6qGcJLa5MdZ7a7zJLjz3HFgsasBPE2p2qzsmTZqw1dgwufuKMpo-T5VKOWgV-vjKuZz0FHEx4vwjm7noeX5wvmmn6F7l5UFWOInOnwpKrGlNu8GDlCsdORcCJF1TDZC0RuCziqC0_kMSt1vdXIxp8_O6ovI_B9dMFdqObUdzT_Up7EVF4CcNtCbxssWFl9V83fraLVcpZF-Hfgbk3mwMoYtkJRA0SrgTygRy8IZr1w/p.jpeg","https://uc7b527f52f199d3038187d6ee80.previews.dropboxusercontent.com/p/thumb/ADQjw1JSgCI4wsK6qPaLczK25g7uGEsf752aC1U4rNY1zRhgFChz7bqnFhl-8ytx3YyqwN0Kbi8LG6IFhU-Y2iY0uli5sQ9Wq-AVSVx8BwuLgktcSaO9RTaUgVTS6RmgDJE5MX8R0Ulv7UyvAETA3_MomS8fKsNbrg1fQLVbEW8ovlJlGUgqwIN21-6IRkQdEMWPlfTWU2zN_UuF9HXe1GrZ2-JsVw0y5vW0aEbNyRTxA4ZY3dVRMuQFjXVz0Q5X7inhsUpB6I6F-DbsoX_pk7nSOWIMdq-SBNtqE6gF15tafQ/p.png","https://uc05cef579ea140c27b906a4453b.previews.dropboxusercontent.com/p/thumb/ADSTzLQg0xm4srMff0nVRrs5-k4g1R5TECTJBEh_CCNIJRqEPg35ogyqHLJaNhWjoXjzP2BjPZCSeKK-BW1WXU7ZHuIa8mWjeOTTxgfTa0Ry6C_smpPNGh_B8IvT8HKTrn2CAvVoV4yV82vtmdD6jlJND7r25k2YrEC5wr-dBhAybcnpMMzB69YVVtjVI-z8JMynzuX8kcMToPXMBpLzdjGOf7A_CDNGqT9Z8JJJWFh7bQaX-_wB0nTt1krJ4gxQRkzC7hwhOKFtLha-ejfWenK_eezOVgabsoDwIslVK7oQHQ/p.jpeg","https://uc00d93da3a3fff1df1612586037.previews.dropboxusercontent.com/p/thumb/ADTDBMEr-Yvi8VC9QHaxU9W9fTAc2676U9374jHI-Rggz1TGWm5RE-1aTkvzfXi3o59LA_-fhgfTK6LMdnDc1d_YKlCefTVVOid8t7KF9xITdsomjLkpp3bt0XExWvq_5NwvhqSwT_SyMOYEct536csHuagIr-hDfJt3LmZio4lCAtDImp_Nd2UYm04Q1pJMR2pVNFe1Rpef2xnt9aVLG19xhuxPyHGiPPDqXbxVHarl4_mwyUpOzc3EempgDabtsoCYNHQKom4O14zphVcK0ybI426LWLOsysXLvpXgnW-h8g/p.png","https://ucf8d72c8246813b4e8c1ac12366.previews.dropboxusercontent.com/p/thumb/ADSSpVg-fMYnnfaPmw7M1ZdTAJNp5rrCfBPJJAU-i22-Ll4NDzKnNVh4Y1UnjuUw2cPSPWOFQmph9x6zMzdy2ybrWySbmbjw6gJFayJtWLnR15vBdOOVa5wAYjlDJRae-R-e3P38QWIP4diGs6ZQR4lm2oX3rI-rPu-E1z94cuOb9hUaBL8aTkCcyjslQoGDQczD60xrUK6gV0HHNzCTNK3RQzv9jaGP3ql9htZkvCkWek2v0FL3XhlOqcuxAIiJIqfDeDBMeSoP7zrpzdiNVt0DeBQmfE1TZVFLX7DsOivfgA/p.png"];
  const motion = [
    { title: "Motion study 01", href: "https://www.dropbox.com/preview/%D9%81%D8%B6%D8%A7%DB%8C%20%D8%A2%D8%B1%D8%A7%D9%85%D8%B4%20%D8%A8%D8%AE%D8%B4/VID_20260728_185913_037.mp4", poster: "https://uce18baa8dca6ed0590e3552536.previews.dropboxusercontent.com/p/thumb/ADS3BlzzXMJoMndQv12NTI__iX1x3dFggS5RspYN_V_A_t3xMnAtbWNBjXOWYJX3I3l8dPbMIqVP3-upQFMVAizJAbtDuXYgvu0J8laHZlcN-B2y_I5k6o2B0gijWBK8CxAl5CkyLecLQd5v0cOzDoTmtMVbgBDxCO1hCYMa7eRYasVCWIt4rNtd4adXKm9y32fLWyWU-DaTt1juY5Bwn0SzwkN1wzlzjRvadfSgSgLX4VycNIHYiV1jXIpQmXEV0LR8RcLuAlPFvNe6usaFwYPwAnpIRTVqLWklWIQrvNMR7aOgjRsoAXPgMMVcUbocDzqU1cCrVW0gcsQrfQ4iMW8W/p.jpeg?size=640x480&size_mode=3" },
    { title: "Motion study 02", href: "https://www.dropbox.com/preview/%D9%81%D8%B6%D8%A7%DB%8C%20%D8%A2%D8%B1%D8%A7%D9%85%D8%B4%20%D8%A8%D8%AE%D8%B4/20260629_232654.mp4", poster: "https://uc6954d6edff038511a64d0a70a1.previews.dropboxusercontent.com/p/thumb/ADSxfK_AQpgBl3eLuTe-B-sACvQiQbnS6TBmqAyFJqjv7w-PkHbPFDKRIjXHkkAEkk_K_LS9OVygZ631enEMEHUIOft3DcV6FkX3_7879AvrCrshS-Kat3sQDF5NHoaaQq6z66pOFRSfFMa-YNpZL5pMWYV6feXs9yl5VHdv_ZY3vWPej54kL2jiCR5V2usl4eB3zgJ9ZkdGcfLMalFaN_tkOsN1vrdWL7St1_avDvTjRPySp5KseNHaxKFeSLJM3HX9Kk2szSrCUg5GufhZwI_q9k4SBrtR9uEmi6jwIs22TBYh1snz5xsENPtX1xr0b8puPYc3R7g0aTe3s80L189M/p.jpeg?size=640x480&size_mode=3" },
  ];
  return (
    <div className="space-y-8 border-t border-rule pt-5">
      <section className="space-y-3">
        <div>
          <p className="eyebrow">01 / Motion studies</p>
          <h3 className="font-display text-2xl">Moving through stillness</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Two motion pieces · open to play in Dropbox</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {motion.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="group block border border-rule">
              <div className="relative aspect-video overflow-hidden bg-card">
                <img src={item.poster} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <span className="absolute inset-0 grid place-items-center bg-black/20 text-white"><span className="grid size-12 place-items-center rounded-full border border-white/80 text-xl">▶</span></span>
              </div>
              <p className="flex items-center justify-between p-3 text-sm"><span>{item.title}</span><ArrowUpRight className="size-4" aria-hidden="true" /></p>
            </a>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <div>
          <p className="eyebrow">02 / Still imagery</p>
          <h3 className="font-display text-2xl">Spaces for pause</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {stills.map((src, index) => (
            <img key={src} src={src} alt={`Wellness and meditation environment concept ${index + 1}`} loading="lazy" className="aspect-[4/5] w-full bg-card object-cover" />
          ))}
        </div>
      </section>
    </div>
  );
}

const coffeeAssetsCover = "https://www.dropbox.com/scl/fi/niwau2i7okvwh0o2whh2v/ai-image-generator-1.jpg?rlkey=buddyp8xmtvpwkjzbutdnvd60&raw=1";

const coffeeAssetImages = [
  "https://uc67c8a1be0cb745e8aa8f406352.previews.dropboxusercontent.com/p/thumb/ADRarViq9rqHmJBE9xC-GuTxptixksHAC0DbO7BLvsun1M3Eoo4S_HzY-5kmle9g7UboWOsACyoW0E3rQwy5e2yHqcEbKD0XaiYO3mIOuCIr0f0PH2RSSuk4XYmJakQ1xWrQIK5Jg5h_JhR4DUhPUulyh9vt1rQ0dx_EmqYAxYQPxrc1RqF783hqWC5qSCdNxZyKLiN4OtL92oHwvaLKn5qH2Rj8uG5LGzedwV0JVNeankAvbaqrkQPbUSGNumo0wg6FMyJx99vkVNA055u1sk-UU2jhlN0AQE9i9xZAejUDqg/p.jpeg",
  "https://ucdaf8683294916a692005d4733b.previews.dropboxusercontent.com/p/thumb/ADQ-Rlqml43x8c_CZfDzsBT9g0_e-TeoOcBnNkWfNBTXk2ffs44O1CEs4xF1lXM0-zXCyBSo6wFs2SkJ_0o9oxvs7yaNv6Ukb3rSC5M7sbLfFi3S0WI4Yb_A5WgLV9NZDAHXhWVSHVavC6CGky9oJwF_rBdPM4hY-AkxGtjUND_1Vpja960KJzBmld-aUSJmKjKb0l_3quiRxGa22roQ_hIEkhlSrdNsTXixoGRb1Q3za2V_1S6oxHdwhhWhtKcakppQdQHHiZFqWmVrV0AWQCpn4ikR08-R7-ipwrmbFiWtiw/p.jpeg",
  "https://uc7b479aea63720a509a9268cfee.previews.dropboxusercontent.com/p/thumb/ADS94ncaAQHxewsjfN36TfEqmyur3VUWdwbGa8b0KfufTCDblVNFdGv-pxBWKj_Mv6R7rod1N0pJfAV1XrWCW6aS1r7h4fCdS-KAv5Vo4TTMPP1j9bXcZSPMFnEnGUISDftqOYsLC356HsHjRuQaFy8av_DB-nzUGAQeFoNxbj2hgwbS-ZP5V619yqU-SmofhtSPSjv5Da5ql5DiJtzp7gwye1vhcKmOOYMx8QtsjNQYv4Vpn5qC6tGX_-X6_3MScfxTohA1kkRibCAFAWaVHGLao95cbTVFALmU9t_TXR6IXA/p.jpeg",
  "https://ucce69b197fb601109f653135fed.previews.dropboxusercontent.com/p/thumb/ADSngAoWAf6TodxRWTnobuT-249he2iS-QrbI2iYPW7aplytVxzAzLChvzUNpSAMs0QmuE7gKO7oPWkWaoXG1QD8wvg2PtoEnHf97mlMm-sE6f6ibGYPOhxDdLQRTnzvvfEz7FDtwFLmc9oEmKHgTkbCcDpzhA3Ymj2zqX2v8oA93LrfZlNiAMkcAMwOnMCNy2MVmAj2kbPjZls33I3D06B94amiZTlkUE96UxgAnc8EzWiJLneodcN-HN6EEMBaMKhu97XW4p8JPRJqwpRFSLksekFE7sfRx2qYTure8ZX61A/p.jpeg",
  "https://uce0d4adc3425055d15fbaa1fc26.previews.dropboxusercontent.com/p/thumb/ADSkgwMs8D43FQn98tvKZKpD4X7G55PYivuovYsVCT94lkoOFr4mjGYX-xZKnZuHz9bxVRK8Tm4PrhJucLTE58bCKKE08fr__0JhMysDbZs0-qI4mxR7O_-w4gS8dwybwcjZplqSiYRYgrHWV1WNPqLxAs5JwMH06lleagpzuZdlQ1BdcC0CpRkVhGgf_rOCuNOPmPxg0QYqswjQj1-rfl6M1Rw9EX8Z0tY2IoZ5XK1J-Ip2gGgA55iFQHPwTUMuNCOk0_e9oO7swSK0csp5w0eksviu_exz8ojoTmBBEcGutQ/p.jpeg",
  "https://uce8d4dd8353d44b6ae2c400c34e.previews.dropboxusercontent.com/p/thumb/ADTi3KPSy3u9Sh1uTun02sLX98l9Ivmq5zS6ISX_8jgY8bdkRPHeXGFyZX1c91brZIbfaSQ30TBqfOhKNjJBEGIr_zBjrOzJxDvOpvKBdvZsLsKZ3G1AwmgM7IpwaR3GLJ-CqsW_8h7QjPg6t1KI4C3gWC9vyK9C9F2YBJApVm-QIff_rLcPvYHhtzALhwYDzZuSGH-5VvxdsIBkXGQw8Tz2WOTXTOYxQ36WhqjKlw9dby-H2XiDIG6Cuo9_u01d74XcFhXJNantU5aek0B41ctwUzgdDyPsCbN-sd4BBT_ZNA/p.jpeg",
  "https://uc2cc8223d2e79af555607ac4a3e.previews.dropboxusercontent.com/p/thumb/ADSwK-RLQfWEgLnS9FS00i7vpOJ8rgkliQBScR01C9AnuntRZDdVWycYqV2MZjEVNdovWubCW_BvmPUn-Vy5HYpuIK1QPUWIEXI97ZXw8h-AtTCyL3XwgFhBopISLSYGJueNgumNl9qfjKbvlwZ3kkmZFT6W-Lr8XSzlWcCmo-dd-ylilnncb8AYgwq2hUoSOtjuXXlZCyYO2wJ002_RBihJ98aEFpr90fUz00xZUQF8QTN302ZWKRej7TKWihnvhH_2RbYMKpGcvgHk584AdffY5SXjAKdULFLD3QAeOAhYAw/p.png",
  "https://uc6deac2e81b69df2e3588ec9d93.previews.dropboxusercontent.com/p/thumb/ADRjqmicQdw-jva-kytQKe9tg2eH3W7F-UVSqphlPSyXH6_LCf01lhVtGxih8MfvqJWoMMBO-xNq3m7pIPNcUks_RdXwf4qHfbJpzavtpBrLi8wC2rU_zTQxfZNyMnF9zBZeEOFpiaLimN-aCNiOzul1i2zDxyCk-kGxMD-fBAzGSIgwLuMoApXuHUdvvBiWVwF6Ml47tc2w31EJ_I5QXkw27yZs0kJiScx_idf-jnZssn0obbJN1fI75-mIuO2J7YvMTqDJm7l7f9hAMhh05OsYpKDdPPqeh8zWRh4hszjsGQ/p.jpeg",
];

const randomPiecesImages = [
  "https://uc56d3a29557d06a3cd8161d15c7.previews.dropboxusercontent.com/p/thumb/ADTIrMkLlvfmHfmjeJXEnEWloiE7drX-lfjk8t__MOgTNOMjBRvPioL7GFL7BKep1nQGzvEuz3LdzuygsUL6hArUGst2gECsKcqVQIscoUHyDvuBmUrTiJfTgn8YxbnMXjt7xTHiCTXwECId89z9z-IVGQiR4W5EfIh8cQSaxx9Q2JdOOgLosEioLvzexO-oxJOs-pnr8sFq_ZUP6xo5jkJ_S3Q1KgNMnPi6sDKj7DSq1UdHj76jI3Rwz84Lyza8KWyuAty5g6FffQ4sdbGt-CkZZpphXk7EqjA_CIih8dV1tA/p.jpeg",
  "https://uc93cf2c15e661e8afff74643c73.previews.dropboxusercontent.com/p/thumb/ADSB5t1Ndlo4gt_RF04ZjJLIJJCd12dWXq0WlSAJZbOLFJh4pPjIK3ph_59eUlN8zb9ionzFJScftl3NYn7dSkB7_5KBBXQ51yxhwcn3wcrHaO0mez6BGyX7ThSjt__1XEYKQ7ZR9AD08H5uxS7K68Enpgen-SVZeM77AHhljhKLlMRoDCRV3odPnx1EaRkrP82L-xsBYT1fvloAk4zgc8M-s32f9NnQgRr-yaGelZtgi7yj_Kpd5P_LZAP4HeGVbPwYPASQ-K0BXCYmgC2LjIzYOr7Ah1GmRUZtbZxHqBERmQ/p.jpeg",
  "https://uca0cf0aa626f256ad70921a257d.previews.dropboxusercontent.com/p/thumb/ADTaFFUWlbZhPZ8E82aJO2yVN3YxEPS48y4OTiPQcT7pGqMY5qsTYL11zjikziM3xnaZfUHUMpvvjAZLavBp-xpAzVoKTM4iFJbgKtCK4rJjnlg-HYfCD8gpERIHu3yjykCCzCcxVHj1faR8G0Ceaorkxls_P8nXMfeAMvz9mJMm2QV13NMfx-GNNJkDpwzul9mJQka43jUojfaY0g2tkvhlInPLvgtwxmdzlQPEQSRJ6USKDfPFqxLUTzaQUIJv_4Hb176UCOjU4Mk1WBUM5F0Xm7rKVwu7CNt0sa5KVYkWUw/p.png",
  "https://uce3a0e81923f734f1dc85e9a892.previews.dropboxusercontent.com/p/thumb/ADRGTQmedWtc6kASN9Hm-hu4m6tgt5oCIDjV7V_ViS5djpA856qfc2gcB7r5Cvkc79ByHxVGnP9QusIYu4vAv5QS-gYap0jwONw5kmZfEiRLoxmJc_7abVc1vUwFPeyKioihJDrbSt71-dCWhFHHM-AAAlYkUqBDrji227Yh0ei2tBWkmm3oyEa2kO93v5KCn-VDBt-X3J7yjfVRtEqYmh_EvZIYkJE1JkJE3aIBY8tuyVskj6RDTBtGnxBc4ZdHpRTpFAJFxtwXhnnuiM5Vi2KVALT1iTj7mTVoYTfESS8ACA/p.jpeg",
  "https://uc9ddc4a4d8aef1ec1ab3675c20a.previews.dropboxusercontent.com/p/thumb/ADRyp0ioZDpQWRxljY_nFQqKQDxM7M544FrWzGyl1aQ8ldBXKYUwiiiDQS3F9JvQ-uZlqcFFwUgpoDsv18ejTfZi723ABnpOtb1rJ7EzhU8GNAz3S_gPmkpi6pARF3e_cmsniaJGPKb5MNXVnZK7yLsLSxYrgdQlQeBWjinlDNqf9bOu1Qd2KlVOV1RpqjrFzoRlbWA_jaKwtOR5lkptDjPuNhd5aPCjcHY7lj_hTDLi1RB9U5k8JAMmFYszEkrusSXNhFotFslhx8DBDgh4V_cgEmzs6ZiXYF2jBI-sqHZYSw/p.png",
  "https://uc9f52e0e69e2a578ed52412f9fb.previews.dropboxusercontent.com/p/thumb/ADQMpu2a5era2QUfbIAoEaCj4Q7VD-JuT22XfnObk5q5zfKNT6RIaMgkmgxw4U6VsgCuC7cLgZeOdySiGLrsJsSJ7NX5wm_tiO5lJELj09UBTBtTLm3784AxdIHnFdxR_-LRGmkr-mx5r6Wz4bHloVh8PrHd7xdXZg_gdImfOwfGgt_Kx73HAPytszx6QqvyQD8GRjCUKmWeYRS4SD6pblXc1ugYo8z4u4uzkx9zm9RStln1QXFkEw313k6HZZMhiweVevzdF4rQ9KxlSDoPZ57qVw9SHPXDR539FNsDpfsf6g/p.png",
  "https://uc2715a2eafde15959e1f0d31325.previews.dropboxusercontent.com/p/thumb/ADTstDBg0zdVLDPLMd3KB5Y4692hw9SozPMVeumcWM5xKqEYD8x7HDJOT2dD4lp-BaCBfygTOl9r9OjLpJ4Xiss2H_gTJA_3VwmDsBtWzzQqFWHwMqEQbQuZ4R7c03yvXVzx7CckvbcquXuNlhiTps_da9vlRcaLF3rcOIQu2cPDjfmnkLHsTvEzbWDg2KImyUsTRpmUt_SHpj1e2kZmxUer8vdp42AOXO3YXyCUjDcIGJ2zIl0vCzn4eIAbtCUWRpgsCPyQsLtwe69KytfIxgoh_wDeWdlF3ZqZVg2PBb34ig/p.png",
  "https://uc4e5edc90fabdbbdd41e746c868.previews.dropboxusercontent.com/p/thumb/ADTq115VEfFEzPZ1_V9zJ8mr9FIQgSXUSSFecrqkKZu65PVPl7dY7gtvdV5pdirsvKSSbZRI8m26XCuY1j5PYwgQluTA88EIGrYDhfHkXz9vk6AHUT3HQEtlOqAYgnNwudje8OL1W3WO6ySE0Uqk5r-Xo-hTy-x6Ga1tO8ljxuLZ1qvJ6PBpujjO5VrrlA8PR1OpY5KDoB1V1va8KKjRzizo3HjHkPHFxUK6ov1gfYhVINsnxi_y9JEQHTWIYhd7XSCfyEtqxeV-8d1mLt0dysiMY9JJo5zivMVBhCxht9fGdw/p.png",
  "https://uc6a28d44c43bb5b8d8c3b8e9876.previews.dropboxusercontent.com/p/thumb/ADQSYXquSh0gK3G68ESH4-QbpjVWHBL3kO3xRbVH7V9yxSM7EjNnTW1BbVF85HTwGTRcl725dozVZ0-YK5GAm06FXWtdswO1ZlY99vbZv0-rVtGlq35H3ORucBLWgNTSwJc4id0lMUpQ4tX3p16KURV7n6M-adJS4wAeXsklluPyBiOXKU4-PszTKt8J2SZEhtJyVyN8m8iQSNw0LMeDbl7RFOZVzxYUbTgtIf7q3DihyF9AisvLxvju4NEptBg7v-BKH6Sa4ryi4ouFq71_68akxn64pIlmIZM-dYfEMVQ6Rw/p.jpeg",
  "https://ucb0685e6e0aedda9110a3179053.previews.dropboxusercontent.com/p/thumb/ADStgG3m3_sKR9-8uInYBC_4i3gro9_-LXwpS9769jX-VnIhVJRx6cBSHrfmy_Q51o4qc1cPyw34N2Gc9XjGn7jkiFgcmC9G12e4YtK6S0ZYDlm8TY5lOqPLUMWUAdHYxc13CoKRUK47YzzbvV3oxB2rcf0-qq-7_SRD10tDK5LxKHY1J9csAHxDeWbZQeYmlOw85i8oYwf4yGzqQcg1gE4FwWIneDyKC7r7MFpdtcbq70vMebeM5CPTcFrJXaNvDuBzJNYr8bfnmSFoolIYHY6Y35xWDv3hrG6wrSKpwsjZxQ/p.png",
  "https://ucb7f2adaa7646baf96a62a0aea8.previews.dropboxusercontent.com/p/thumb/ADRA6vB0l2HfO_dJCxdfdgD_UoY2J5wbp_fYeTPKgXeEQfKA9vGHPvoV61EA-kY4KyY2AJ7mIiHg1VtqqaF3Hnp3e8IykE336vOOB14ebkpoDCyeRtiR4iRbpxxwKuyr19-FOnx2DrefwDZNDjU7FK2gGbvQJ6LAn3-3JJKLJEGjPsc0K6b9SbduuFEse7yUlFp5NWL4xfAZt2WBe4PW33_ZovxviEuCrxkiQJ5d8DxBXxDIHJv1C6fSqDY6c-b8apIu_6KJv-qBbcj8EOh3p_l3kRoSRa7EhWI4t7pkM7clkw/p.png",
  "https://uc604555032b416b64bd793f7980.previews.dropboxusercontent.com/p/thumb/ADTHXcQf6vPEeWzIgzycYR9MgvtIzaUozXm1JRVRh09aZ8zssLrd0gt82Vi2ObbaflLNdYhH9uWkB_Q5h0O0ZtBAmaG09qjbWw4BD36gWhyPFiki99ng5WUleMS_DM_RbaKY4TU1g03d7ZrPLFBK7qgrR6jw5oQYmEoYLfm2UQctm9by4h1LJHrQ0mbNJlmlWBHdbb6WvI4GHZyXYnPev8SZ0lLrhAptASCGuoUDxE1cNWj281tEwQ8AlCEW4MkC60u664tW_s7LmQX-kkHGvFMaWqro9SROH3nHvjggLVDqrw/p.jpeg",
];

function RandomPiecesGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {randomPiecesImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Random Pieces poster artwork ${index + 1}`}
            loading="lazy"
            className="aspect-[3/4] w-full bg-card object-contain"
          />
        ))}
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Random Pieces · Selected poster works and graphic experiments
      </figcaption>
    </figure>
  );
}

function CoffeeAssetsGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {coffeeAssetImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Coffee visual asset ${index + 1}`}
            loading="lazy"
            className="aspect-[4/5] w-full bg-card object-cover"
          />
        ))}
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Coffee Assets · Selected visual explorations · Collection in progress
      </figcaption>
    </figure>
  );
}

function JunoonGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <img
          src={assetUrl(junoonPoster.url)}
          alt="Vertical evidence-file style poster exploration with Junoon stamp"
          loading="lazy"
          className="h-full w-full bg-card object-contain"
        />
        <div className="grid grid-cols-2 content-start gap-3">
          {junoonSquares.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-square w-full bg-card object-contain"
            />
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Visual design explorations by Setareh Rahimi · created during a recent team collaboration · not the podcast's original identity.
      </figcaption>
    </figure>
  );
}

function PageLinks() {
  return (
    <ul className="mt-5 flex flex-wrap gap-3" aria-label="Nikmehr Instagram pages">
      {nikmehrWork.pages.map((page) => (
        <li key={page.name}>
          {page.href && (
            <Button
              asChild
              variant="outline"
              className="h-auto gap-2 rounded-none border-foreground bg-transparent px-4 py-2 font-normal shadow-none hover:bg-foreground hover:text-background"
            >
              <a href={page.href} target="_blank" rel="noopener noreferrer">
                <span dir="rtl">{page.name}</span>
                <ArrowUpRight aria-hidden="true" />
                <span className="sr-only">(opens Instagram in a new tab)</span>
              </a>
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
}

function PublishedExamples({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={
        compact ? "mt-4 grid gap-3 sm:grid-cols-2" : "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {work.map((reel, index) => (
        <li key={reel.id}>
          <a
            href={reel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-44 flex-col justify-between border border-rule bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / 04
              </span>
              <span className="eyebrow">
                {reel.platform} · {reel.kind}
              </span>
            </div>
            <div className="mt-8 flex items-end justify-between gap-3">
              <div>
                <p className="font-display text-xl leading-tight">{reel.label}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                  View original reel <ArrowUpRight className="size-3" aria-hidden="true" />
                </span>
              </div>
              <ArrowUpRight
                className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden="true"
              />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SelectedWork() {
  return (
    <>
      <ol className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="min-w-0">
            <Dialog>
              <article className="flex h-full flex-col border border-rule p-5 md:p-6">
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    aria-label={`View ${project.title} project`}
                    className="group relative flex h-auto w-full flex-col items-stretch justify-between gap-6 whitespace-normal rounded-none bg-card p-5 text-left font-normal hover:bg-secondary md:p-7 aspect-[4/3]"
                  >
                    <span className="eyebrow flex items-center justify-between gap-3">
                      <span>{project.coverLabel}</span>
                      <Plus className="shrink-0 text-foreground" aria-hidden="true" />
                    </span>
                    {project.id === "touch-ups" ? (
                      <img
                        src={touchUpsCover}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-cover"
                      />
                    ) : project.id === "stillness-wellness-spaces" ? (
                      <img
                        src="https://uce3574d77083caa64e47b4d0bbd.previews.dropboxusercontent.com/p/thumb/ADSOka9f8eq4nhKoixYJWFfcHA43aAqRDZNv7t1DzuslPSVsVOEn_XdvEnNJ5L3ucSUhXnvzNeEHrbmPdMe9yCnSuB87vKq6Jr5fKxrXXsMP9tPelaurS4bR8fwz60p6d96WvkyyUrNIp2CsxVntjCzcvsk1Dy-KCXJ_CTflIaMUUN-JGKqylbGlGojKKeeXHhsO0nji8yJykaEAIKJfE3tde5cWo_KbBJ924Yb1LhSle4RVV__BAkQLxpT6okW1gDA42A3I32PW_dv5uihmrZ78d6iqjmG5NqPVyQa7stqIIQ/p.jpeg"
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-cover"
                      />
                    ) : project.id === "sayeh-character-design" ? (
                      <img
                        src={sayehArtwork}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "junoon-podcast" ? (
                      <img
                        src={assetUrl(junoonPoster.url)}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full object-contain"
                      />
                    ) : project.id === "khaneh-mod-setareh" ? (
                      <img
                        src={assetUrl(kms1.url)}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full object-contain"
                      />
                    ) : project.id === "visual-identity-case-study" ? (
                      <span className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden border-y border-rule py-5">
                        <span className="eyebrow">VISUAL IDENTITY / CASE STUDY</span>
                        <span className="font-display text-5xl leading-none tracking-tight text-accent md:text-7xl">FORM<br/><span className="text-foreground">IN SYSTEM</span></span>
                        <span className="text-xs text-muted-foreground">View original LinkedIn publication</span>
                      </span>
                    ) : project.id === "khaneh-shalvar" ? (
                      <img
                        src="https://www.dropbox.com/scl/fi/9opb0khn2jedpgufmwtvl/copilot_image_1794860807764.png?rlkey=1rebrjfdhj9dqjbevync482ub&raw=1"
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "random-pieces" ? (
                      <img
                        src={randomPiecesImages[0]}
                        alt="Random Pieces poster collection preview"
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "moodbean" ? (
                      <img
                        src={coffeeAssetsCover}
                        alt="Coffee Assets cover — specialty coffee visual"
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "turkish-coffee-packaging" ? (
                      <img
                        src={turkishCoffeeCover}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "turquoise-jewelry-set" ? (
                      <img
                        src={turquoiseCover}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full object-contain"
                      />
                    ) : project.id === "parla-perfume-ad" ? (
                      <img
                        src="https://www.dropbox.com/scl/fi/8y91i4ep19hykupkpg3tj/lv_0_20261119214004.jpg?rlkey=yfk7l4lwc8pnxis336n27rpoz&raw=1"
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "setare-fashion-house-film" ? (
                      <img
                        src="https://www.dropbox.com/scl/fi/xncc2r3didacdnzew9hgy/setare-fashion-house-cover.jpg?rlkey=ql6x1krumtrk310mbebmloefx&raw=1"
                        alt="Setare Fashion House autumn collection editorial cover"
                        aria-hidden="true"
                        loading="lazy"
                        className="min-h-0 flex-1 w-full bg-card object-cover"
                      />
                    ) : project.id === "nikmehr" ? (
                      <img
                        src="https://www.dropbox.com/scl/fi/ocvutld04s55mtujgcmqs/InShot_20261120_162106691.jpg?rlkey=d778o7elrbl0nj5ppqhuj6js4&raw=1"
                        alt="1001 show cover artwork"
                        aria-hidden="true"
                        loading="lazy"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : (
                      <span className="flex min-h-0 flex-1 flex-col justify-center gap-4 border-y border-rule py-6">
                        <span className="eyebrow text-muted-foreground">{project.category}</span>
                        <span className="font-display text-3xl leading-tight text-accent md:text-4xl">
                          {project.coverLabel}
                        </span>
                        <span className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                          {project.role}
                        </span>
                      </span>
                    )}
                    <span className="border-t border-rule pt-4 font-display text-3xl leading-tight md:text-4xl">
                      {project.title}
                    </span>
                  </Button>
                </DialogTrigger>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="eyebrow">{project.category}</p>
                  <p className="mt-2 text-sm text-accent">{project.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  {project.id === "junoon-podcast" && (
                    <div className="mt-5 border-t border-rule pt-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <section>
                          <p className="eyebrow">01 / Video editing</p>
                          <p className="mt-2 text-sm font-medium">Brian Yassipour case</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            Full episode edit, carried through to final export.
                          </p>
                        </section>
                        <section>
                          <p className="eyebrow">02 / Visual exploration</p>
                          <p className="mt-2 text-sm font-medium">Documentary crime-podcast visuals</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            Personal cover and social visual explorations — separate from Junoon's original identity.
                          </p>
                        </section>
                      </div>
                    </div>
                  )}
                  {project.id === "nikmehr" && <PageLinks />}
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="mt-auto h-auto justify-start self-start rounded-none px-0 pt-5 pb-0 font-normal"
                    >
                      Project context
                      <Plus aria-hidden="true" />
                      <span className="sr-only">: {project.title}</span>
                    </Button>
                  </DialogTrigger>
                </div>
              </article>
              <DialogContent className="z-[70] max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl gap-5 overflow-y-auto rounded-none p-6 shadow-none sm:rounded-none md:p-10">
                <p className="eyebrow pr-8">
                  {project.category} ·{" "}
                  {project.status === "exploration"
                    ? "Exploration"
                    : project.status === "team-collaboration"
                      ? "Recent team collaboration"
                      : "Verified role"}
                </p>
                <DialogTitle className="pr-6 font-display text-3xl font-normal leading-tight tracking-normal md:text-5xl">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed">
                  {project.context}
                </DialogDescription>
                <dl className="border-t border-rule pt-5">
                  <dt className="eyebrow">Role</dt>
                  <dd className="mt-2 text-accent">{project.role}</dd>
                  <dt className="eyebrow mt-6">Scope</dt>
                  <dd>
                    <ul className="mt-2 space-y-2">
                      {project.scope.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed">
                          <span aria-hidden="true" className="text-accent">
                            —
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
                {project.id === "touch-ups" && <TouchUpsGallery />}
                {project.id === "stillness-wellness-spaces" && <StillnessGallery />}
                {project.id === "parla-perfume-ad" && <ParlaGallery />}
                {project.id === "sayeh-character-design" && <SayehGallery />}
                {project.id === "khaneh-shalvar" && <KhanehShalvarGallery />}
                {project.id === "random-pieces" && <RandomPiecesGallery />}\n                {project.id === "moodbean" && <CoffeeAssetsGallery />}
                {project.id === "junoon-podcast" && <JunoonGallery />}
                {project.tracks?.map((track) => (
                  <section key={track.title} className="border-t border-rule pt-5">
                    <h3 className="font-display text-2xl">{track.title}</h3>
                    <p className="eyebrow mt-2">{track.label}</p>
                    <ul className="mt-3 space-y-2">
                      {track.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed">
                          <span aria-hidden="true" className="text-accent">
                            —
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
                {project.id === "visual-identity-case-study" && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border border-foreground px-4 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    View original LinkedIn case study
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.id === "turkish-coffee-packaging" && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border border-foreground px-4 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    View original LinkedIn packaging project
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.id === "moodbean" && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border border-foreground px-4 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    Explore the live coffee finder
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.id === "khaneh-mod-setareh" && <KhanehModGallery />}
                {project.id === "turquoise-jewelry-set" && <TurquoiseJewelryGallery />}
                {project.id === "setare-fashion-house-film" && <SetareFashionFilmGallery />}
                <p className="border-t border-rule pt-5 text-sm leading-relaxed text-muted-foreground">
                  {project.note}
                </p>
                {project.id === "nikmehr" && (
                  <>
                    <PageLinks />
                    <section className="mt-6 border-t border-rule pt-5">
                      <p className="eyebrow">Selected published content</p>
                      <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
                        Published examples associated with the Nikmehr coordination and publishing role; not attributed to either page individually.
                      </p>
                      <PublishedExamples compact />
                    </section>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ol>
    </>
  );
}
