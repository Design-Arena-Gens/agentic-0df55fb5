export default function Home() {
  const missionMetrics = [
    { label: "Active Orbits", value: "12", delta: "+3.4%", trend: "up" },
    { label: "KW Harvested", value: "4.8M", delta: "+12%", trend: "up" },
    { label: "Thermal Load", value: "38%", delta: "-6%", trend: "down" },
    { label: "Deployable Array Mass", value: "126t", delta: "+1.2t", trend: "up" },
  ];

  const launchQueue = [
    {
      vehicle: "AURORA VII",
      window: "NET 24 APR, 06:12 UTC",
      site: "LC-39A • Cape Canaveral",
      payload: "Solar Sail // Louver Stack 48-B",
      readiness: 92,
    },
    {
      vehicle: "ARGUS IV",
      window: "NET 09 MAY, 11:40 UTC",
      site: "VAFB SLC-4E",
      payload: "Adaptive Facade // Borealis Tower",
      readiness: 81,
    },
    {
      vehicle: "ZENITH III",
      window: "NET 18 JUN, 03:25 UTC",
      site: "Starbase 14",
      payload: "Smart Shade // Desert Bloom Campus",
      readiness: 64,
    },
  ];

  const supplyMatrix = [
    {
      title: "Carbon Struts",
      vessel: "NOVA FREIGHTER",
      eta: "T+14h",
      load: "82%",
      status: "Nominal",
    },
    {
      title: "Nano-Shroud Panels",
      vessel: "LUMEN CANISTER",
      eta: "On Orbit",
      load: "100%",
      status: "Commissioning",
    },
    {
      title: "Control Firmware",
      vessel: "QUANTUM RELAY",
      eta: "T+3h",
      load: "64%",
      status: "Validating",
    },
    {
      title: "Crew & EVA",
      vessel: "SKYWARD IV",
      eta: "Ready",
      load: "6 Specialists",
      status: "Pre-Breathe",
    },
  ];

  const conceptBoard = [
    {
      site: "Azimuth Hub — Sahara Arcology",
      lead: "Ito / DeepWorks",
      aperture: "2.4km",
      progress: 74,
      focus: "Dust mitigation, low solar elevation",
    },
    {
      site: "Solstice Campus — Reykjavík",
      lead: "Reyes / Northern Fold",
      aperture: "1.1km",
      progress: 56,
      focus: "Thermal retention, auroral refractor",
    },
    {
      site: "Binary Spire — Singapore",
      lead: "Okoye / Gravity Labs",
      aperture: "0.8km",
      progress: 41,
      focus: "Hurricane resilience, adaptive louvers",
    },
  ];

  const telemetryBands = [
    {
      id: "VANDER-16",
      load: 82,
      label: "Louver bank // SE Quadrant",
    },
    {
      id: "HALCYON-24",
      load: 63,
      label: "Thermal sink // Polar Array",
    },
    {
      id: "LYNX-02",
      load: 48,
      label: "Spare capacity // Night cycle",
    },
    {
      id: "MIRAGE-07",
      load: 91,
      label: "Commercial grid // Desert corridor",
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-lg absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-stellar-purple/30 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-dots bg-[size:280px_280px] opacity-20" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col gap-10 px-6 pb-20 pt-12 md:px-10 lg:px-16">
        <header className="relative flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow-md backdrop-blur-lg md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.55em] text-slate-400">
              Mission Control
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Helios Command
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base">
              Coordinating orbital shading arrays, terrestrial deployables, and design
              teams to regulate the planet&apos;s thermal balance with precision.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-end">
            <div className="flex h-full flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-carbon-black/60 p-4">
              <div className="size-12 rounded-full border border-slate-700 bg-carbon-black/70 p-2">
                <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-slate-200">
                  <path
                    d="M4.5 9.75L12 3l7.5 6.75M4.5 9.75V21h15V9.75M9 21v-6.75h6V21"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-slate-400">
                  Habitat Load
                </p>
                <p className="text-2xl font-semibold text-white md:text-3xl">
                  67% Stabilized
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-carbon-black/60 px-6 py-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Orbit
              </p>
              <p className="mt-1 text-lg font-semibold text-stone-100">T+112:44:18</p>
              <p className="text-xs text-slate-500">Array Synchronization Loop</p>
            </div>
          </div>
        </header>

        <main className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-3">
          <section className="col-span-1 flex flex-col gap-6 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {missionMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow-sm backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    {metric.label}
                  </p>
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className={`rounded-full px-2 py-1 font-medium ${
                        metric.trend === "up"
                          ? "bg-green-500/10 text-emerald-300"
                          : "bg-red-500/10 text-rose-300"
                      }`}
                    >
                      {metric.delta}
                    </span>
                    <span className="text-slate-500">24h Shift</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow-md backdrop-blur md:flex-row">
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    Launch Queue
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                    Shading Array Deployment Flight Plan
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-slate-400">
                    Precision-orchestrated liftoff cadence synced to architect design
                    milestones and orbital window predictions.
                  </p>
                </div>
                <div className="mt-6 hidden rounded-2xl border border-white/10 bg-carbon-black/70 p-4 md:flex">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-3 animate-pulse rounded-full bg-emerald-400" />
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                      Weather 24h
                    </p>
                    <p className="text-sm text-slate-200">
                      Cape Canaveral: Winds 14kt, Ceilings Nominal
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                {launchQueue.map((mission) => (
                  <div
                    key={mission.vehicle}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-carbon-black/70"
                  >
                    <div className="border-b border-white/5 px-5 py-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500">
                          {mission.vehicle}
                        </p>
                        <p className="text-xs text-slate-400">{mission.window}</p>
                      </div>
                      <p className="mt-2 text-sm text-slate-200">{mission.payload}</p>
                      <p className="text-xs text-slate-500">{mission.site}</p>
                    </div>
                    <div className="px-5 py-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="uppercase tracking-[0.28em] text-slate-400">
                          Readiness
                        </span>
                        <span className="text-slate-300">{mission.readiness}%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500"
                          style={{ width: `${mission.readiness}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow-md backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    Habitat Thermal Envelope
                  </p>
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-emerald-200">
                    Stable
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  Radiant Flux Distribution
                </h3>
                <div className="mt-6 grid grid-cols-6 gap-4">
                  {Array.from({ length: 12 }).map((_, index) => {
                    const band = (index + 1) * 8;
                    const intensity = 40 + (Math.sin(index * 0.9) + 1) * 30;
                    return (
                      <div key={index} className="col-span-3 flex flex-col gap-2">
                        <div className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-500">
                          Band {band}
                        </div>
                        <div className="h-24 overflow-hidden rounded-xl bg-slate-950/80">
                          <div
                            className="h-full rounded-xl bg-gradient-to-t from-purple-600/50 via-blue-600/60 to-sky-400/70"
                            style={{ height: `${intensity}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 text-xs text-slate-500">
                  Flux loads nominal. Adjusting pitch alignment 0.8° over Mare Tranquillitatis.
                </p>
              </div>

              <div className="grid h-full grid-rows-[auto_auto_1fr] gap-4">
                <div className="rounded-3xl border border-white/10 bg-carbon-black/70 p-6 shadow-inner backdrop-blur">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                      Telemetry
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <span className="size-2 animate-pulse rounded-full bg-emerald-300" />
                      Live
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Array Load Channels
                  </h3>
                  <div className="mt-5 space-y-4">
                    {telemetryBands.map((band) => (
                      <div key={band.id} className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <p className="font-mono text-[0.7rem] tracking-[0.25em] text-slate-400">
                            {band.id}
                          </p>
                          <span className="text-slate-200">{band.load}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-800/80">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-400"
                            style={{ width: `${band.load}%` }}
                          />
                        </div>
                        <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
                          {band.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    Crew Ops
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    EVA Preparation Checklist
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                        ✓
                      </span>
                      Tether calibration complete
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full border border-slate-600 text-slate-400">
                        ●
                      </span>
                      Suit coolant loop pressurization
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex size-5 items-center justify-center rounded-full border border-slate-600 text-slate-400">
                        ●
                      </span>
                      Manual override training 15m
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Supply Chain
                </p>
                <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sky-200">
                  Synced
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Orbital Logistics Flow
              </h3>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                {supplyMatrix.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-carbon-black/60 p-4"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-500">
                      <span>{item.title}</span>
                      <span>{item.status}</span>
                    </div>
                    <p className="mt-1 font-medium text-slate-100">{item.vessel}</p>
                    <p className="text-xs text-slate-500">{item.eta}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>Load</span>
                      <span>{item.load}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Design Lab
                </p>
                <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-purple-200">
                  Iterating
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Concept Review Board
              </h3>
              <div className="mt-5 space-y-4">
                {conceptBoard.map((concept) => (
                  <div
                    key={concept.site}
                    className="rounded-2xl border border-white/10 bg-carbon-black/70 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      {concept.site}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{concept.focus}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>{concept.lead}</span>
                      <span>{concept.aperture}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-sky-500 to-emerald-400"
                        style={{ width: `${concept.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-carbon-black/70 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  Communications
                </p>
                <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                  <span className="size-2 animate-slow-pulse rounded-full bg-sky-300" />
                  Arrays Linked
                </span>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">
                    Downlink
                  </p>
                  <p className="mt-1 text-base text-slate-100">
                    Horizon net relaying architect revisions through low-latency quantum
                    mesh.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">
                    Alerts
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-slate-200">
                    <span className="size-2 rounded-full bg-amber-400" />
                    Solar wind expected to peak in 18m; adjusting sail angles preemptively.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-slate-500">
                    Spotlight
                  </p>
                  <p className="mt-1 text-slate-200">
                    Urban canopy prototypes surpassing predicted albedo targets by 18%.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
