import Image from "next/image"
import {
  ExternalLink,
  Monitor,
  Cpu,
  CircuitBoard,
  Keyboard,
  Mouse,
  Mic2,
  Headphones,
  Package2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


const parts = [
  // CORE
  {
    category: "Core",
    name: "Case",
    model: "Montech Air 100 Lite",
    image: "/images/core/case.jpg",
    link: "https://easypc.com.ph/products/montech-air-100-lite-mesh-micro-atx-tempered-glass-side-panel-gaming-pc-case-black?variant=42707645464747",
  },
  {
    category: "Core",
    name: "CPU",
    model: "Ryzen 5 5600",
    image: "/images/core/cpu.jpg",
    link: "https://ecommerce.datablitz.com.ph/products/amd-ryzen-5-5600-processor-tray",
  },
  {
    category: "Core",
    name: "GPU",
    model: "MSI RTX 5060",
    image: "/images/core/gpu.jpg",
    link: "https://easypc.com.ph/products/msi-nvidia-geforce-rtx-5060-shadow-2x-oc-gs060-8s2c-8gb-128-bit-gddr7-videocard",
  },
  {
    category: "Core",
    name: "Motherboard",
    model: "MSI B550M PRO-VDH WIFI",
    image: "/images/core/mobo.jpg",
    link: "https://shopee.ph/product/124930893/23197013652?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkZUxlMGtIQkg0REF1dmhYUEdjQkRVejc3YW9JcTA2RzdMUnVWK1ZxMnlpWEhnTENNQ21GbTdXUXdmaUhob1hGazVhb0RCa0dWK0VTTlZ2aHFEVm1qanhzUjhsWTZYQm1rMXQxVmwySkI3VUI&gad_campaignid=22282944681",
  },
  {
    category: "Core",
    name: "RAM",
    model: "Corsair Vengeance LPX 16GB",
    image: "/images/core/ram.jpg",
    link: "https://shopee.ph/CORSAIR-Vengeance-LPX-DDR4-Kit-8GB-16GB-3200MHZ-2400Mhz-2666Mhz-DIMM-RAM-PC4-25600-19200-21300-6-UAK-i.1774083395.25698046567?extraParams=%7B%22display_model_id%22%3A330652604236%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    category: "Core",
    name: "Storage",
    model: "Crucial P3 Plus 1TB",
    image: "/images/core/ssd.jpg",
    link: "https://shopee.ph/product/1065241206/29779492600?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkYWYwbHJscWVKODZSakI1Y2Mxb2FWR3BobW9LNlFsMVJEdlNzREZrOHllTVdpUC9WM1ZDUHcvVjgzUHFlaVA2NXdCclFYbmFsc2hYS2pMYXBPZ1NlVjJrOUx4VXFIUVlVK2RnYjdkNURwQnMzQ1VyclN3SGVLcVQ3V3VMTjJOYVFnPT0",
  },
  {
    category: "Core",
    name: "PSU",
    model: "Corsair RM650e",
    image: "/images/core/psu.jpg",
    link: "https://ecommerce.datablitz.com.ph/products/corsair-rme-series-rm650e-650w-fully-modular-low-noise-atx-power-supply-cp-9020302-na",
  },
  {
    category: "Core",
    name: "Cooler",
    model: "Thermalright Assassin X 120",
    image: "/images/core/cooler.jpg",
    link: "https://ecommerce.datablitz.com.ph/products/thermalright-assassin-x-120-refined-se-cpu-cooler",
  },
  {
    category: "Core",
    name: "Fans",
    model: "Arctic P12 (5-Pack)",
    image: "/images/core/fans.jpg",
    link: "https://shopee.ph/ARCTIC-P12-Pro-PST-Black-White-CO-5-PACK-120mm-case-fan-PWM-dual-thread-i.173777316.44460832856?xptdk=47d78601-fc8a-47b3-bc9c-8e132c0e3bef",
  },

  // PERIPHERALS
  {
    category: "Peripherals",
    name: "Monitor",
    model: "NVISION G2455 144Hz",
    image: "/images/peripherals/monitor.jpg",
    link: "https://www.battlepasstechparts.com/product-page/nvision-g2455-black-23-8-1080p-fhd-144hz-ips-monitor",
  },
  {
    category: "Peripherals",
    name: "Monitor Arm",
    model: "North Bayou F80",
    image: "/images/peripherals/arm.jpg",
    link: "https://shopee.ph/product/263675024/3476608501?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWjJ2V2R0aHVZM3E3MGVQY0xHblM5TkUvODBvQ0JPZFpsRXdnQ1dWQm1YTkhVYlVmd1ZicDdMQUVvT09RcXF4Y2c4SEwvdXdaVGZtT2tzUGFseTVWR09Bbm12UVMwMnRqWmttNVlFQmxVNlI&gad_campaignid=9730548619",
  },
  {
    category: "Peripherals",
    name: "Mouse",
    model: "VXE Dragonfly R1 Pro",
    image: "/images/peripherals/mouse.jpg",
    link: "https://ecommerce.datablitz.com.ph/products/vxe-dragonfly-r1-pro-max-lightweight-wireless-gaming-mouse?variant=45470013849759",
  },
  {
    category: "Peripherals",
    name: "Keyboard",
    model: "AULA Win60HE",
    image: "/images/peripherals/keyboard.jpg",
    link: "https://shopee.ph/AULA-WIN60-68HE-Magnetic-Keyboard-RT-Gaming-Wired-RGB-Hot-swap-8kHz-low-latency-Mechanical-Keyboard-i.272447794.29121101709?extraParams=%7B%22display_model_id%22%3A233606276855%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    category: "Peripherals",
    name: "IEM",
    model: "Moondrop Chu 2",
    image: "/images/peripherals/iem.jpg",
    link: "https://shopee.ph/MOONDROP-CHU-2-DSP-in-Ear-Headphone-High-Performance-Dynamic-Driver-IEMs-Interchangeable-Cable-Chu-II-i.174314413.52200349084?extraParams=%7B%22display_model_id%22%3A390032367804%2C%22model_selection_logic%22%3A3%7D&rModelId=390032367804&sp_atk=b9d47582-fd54-4dc1-a45b-463e5f0df9f9&vItemId=56854353998&vModelId=315409613170&vShopId=1257811163&xptdk=b9d47582-fd54-4dc1-a45b-463e5f0df9f9",
  },
  {
    category: "Peripherals",
    name: "Microphone",
    model: "Fifine A6T AmpliGame",
    image: "/images/peripherals/mic.jpg",
    link: "https://shopee.ph/-CLEARANCE-Fifine-A6T-AmpliGame-USB-Wired-Cardioid-Condenser-Microphone-with-Two-Tone-RGB-Light-i.15328948.19863468869",
  },
  {
    category: "Peripherals",
    name: "Mousepad",
    model: "Logitech G640",
    image: "/images/peripherals/mousepad.jpg",
    link: "https://shopee.ph/Logitech-G640-Large-Cloth-Gaming-Mouse-Pad-i.167356732.23415715978",
  },

]

function getIcon(name: string) {
  const lower = name.toLowerCase()

  if (lower.includes("cpu")) return <Cpu className="h-4 w-4" />
  if (lower.includes("motherboard")) return <CircuitBoard className="h-4 w-4" />
  if (lower.includes("monitor")) return <Monitor className="h-4 w-4" />
  if (lower.includes("keyboard")) return <Keyboard className="h-4 w-4" />
  if (lower.includes("mouse")) return <Mouse className="h-4 w-4" />
  if (lower.includes("microphone")) return <Mic2 className="h-4 w-4" />
  if (lower.includes("iem")) return <Headphones className="h-4 w-4" />

  return <Package2 className="h-4 w-4" />
}

const coreParts = parts.filter((part) => part.category === "Core")
const peripherals = parts.filter((part) => part.category === "Peripherals")

type PartCardProps = {
  name: string
  model: string
  image: string
  link: string
  category: string
  priority?: boolean
}

function PartCard({
  name,
  model,
  image,
  link,
  category,
  priority = false,
}: PartCardProps) {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-neutral-900">
          <Image
            src={image}
            alt={model}
            fill
            priority={priority}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 33vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <Badge className="absolute left-3 top-3 border-0 bg-black/60 text-white text-[10px] sm:text-xs">
            {category}
          </Badge>
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-zinc-400">
            {getIcon(name)}
            <span className="text-[10px] uppercase tracking-[0.18em] sm:text-xs">
              {name}
            </span>
          </div>

          <h3 className="line-clamp-2 text-sm font-semibold text-white sm:text-base lg:text-lg">
            {model}
          </h3>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition hover:text-white"
          >
            View product
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mb-5 sm:mb-6">
      <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
        {title}
      </h2>
      <p className="mt-1 text-sm text-zinc-500 sm:text-base">{description}</p>
    </div>
  )
}

export default function PCBuildTable() {
  return (
    <section className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5 shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />

          <div className="relative z-10">
            <Badge className="mb-4 border-0 bg-white/10 text-zinc-200 text-[10px] sm:text-xs">
              My Setup
            </Badge>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
              <div>
                <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                  Built on a dream — one part at a time.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
                  It’s still a dream — but God’s timing makes all things possible.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                    Core Parts
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {coreParts.length}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                    Peripherals
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {peripherals.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <SectionHeader
            title="Core Components"
            description="Main hardware inside the build."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 2xl:grid-cols-4">
            {coreParts.map((part, index) => (
              <PartCard key={part.name} {...part} priority={index === 0} />
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <SectionHeader
            title="Peripherals"
            description="Everything around the setup."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 2xl:grid-cols-4">
            {peripherals.map((part) => (
              <PartCard key={part.name} {...part} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}