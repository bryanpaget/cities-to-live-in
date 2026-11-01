# Cities for People

## A Nationwide Blueprint for Human-Scale Streets

**Concept Deck 2026 | Digital Transformations Canada**

---

## About This Repository

This repository contains the source for the "Cities for People" presentation: a policy
manifesto for rebuilding cities around human life, with a national bike share as governed
infrastructure. The national layer is deliberately small: an interop spec for fare,
identity, payments, and open availability data, plus a reference implementation. Cities
and co-ops run their own systems, fleets, hubs, and operations. It builds presentation
slides (via [Marp](https://marp.app/)) and publishes them as HTML to GitHub Pages from the
`docs/` folder.

| Path | Description |
|------|-------------|
| `content/slides-en.md` | English Marp presentation source |
| `content/slides-policing.md` | Companion policing proposal; not part of the national infrastructure ask |
| `config/header-en.md` | Marp theme and front-matter (title slide) |
| `config/landing.html` | GitHub Pages landing page (copied to `docs/index.html`) |
| `postprocess.mjs` | Injects the theme CSS into the Marp CLI output; run by `make html` |
| `BUILD.md` | Build architecture and re-theme guide |
| `docs/` | Generated GitHub Pages site (built via `make html`, committed) |

### Build Locally

```bash
npm install
make html        # GitHub Pages site into docs/
make preview-en  # live slide preview on localhost:8080
make pdf-en      # presentation PDF (requires marp CLI + Chromium)
```

> **Note on deployments:** GitHub Pages serves the committed `docs/` folder. After editing
> slides, run `make html` and commit the regenerated `docs/`.

---

## Executive Summary

The deck's argument, in order:

- **The city model:** villages of 5,000-15,000 people where everything daily is a 15-minute walk, published as a model bylaw cities adopt and adapt
- **The movement hierarchy:** walking, cycling and scooters first; transit; cars and trucks as guests — a model bylaw and funding condition, not a federal rule
- **The bike share as governed infrastructure:** a federated public network with one account and one fare card nationwide, but local hubs, fleet mix, pricing, and operations
- **The platform behind it:** a small interop spec plus a reference implementation that lets locally-run systems interoperate through the 7:45 school rush
- **Children and safe streets:** safe routes to school, walking school buses, and streets designed for the most vulnerable users
- **Delivery:** phased rollout, conformance rather than conformity, model bylaws and competitive proof villages, and an exit guarantee for every city

The cultural frame: healthy cities are boring, and boring is better. China already built
this at scale — and its dockless wave also showed why the public layer has to be governed.
Canada is still arguing about paint.

**Key takeaway:** The lanes are a municipal job. The fleet is an operations job. The spec
is a national job. Keep the national kernel small, let local systems differ, and make it
easy for a city to leave with its riders, data, and fleet intact.

---

## The Platform: A Spec and a Reference Implementation

The national layer is a **spec plus a reference implementation**, not a single owned
platform. The spec defines fare, identity, payments, and data interchange. The reference
implementation is a working system any city or co-op can run, fork, or replace with its own
compliant build. Digital Transformations Canada maintains it; nobody is required to use it.

The reference implementation runs on a Kubernetes platform — the same class of shared
platform government already operates at scale. **What Kubernetes does here:** it runs the
services across many machines as one system. Services start, restart, move, and scale
themselves. A machine failure at 3 a.m. does not wake anyone; the services reappear
elsewhere.

**How demand is handled.** Ride demand is tidal: a school rush at 7:45, a homeward surge
at five, weather, events, seasons. Three tools keep the platform matched to real demand:

| Concern | Tool | What it does |
|---------|------|--------------|
| How many service instances | **KEDA** | Scales replicas on real signals (ride unlocks, transactions per minute, schedules), including scale-to-zero in non-production |
| How large each instance | **VPA** | Right-sizes CPU and memory per service from actual usage history, so capacity tracks reality between rushes |
| How much machine capacity | **Karpenter** | Provisions and reclaims compute just in time, packing work efficiently; quiet at night, full capacity at rush |

**Operational rules that carry over:** keep each controller on its own axis (one scales
count, one scales size, one supplies machines); hubs must fail soft, queuing rides locally
so a network outage does not strand a bike; conformance is tested through a public suite and
registry rather than asserted; availability feeds are open while personal data stays with
the local operator, minimized, never sold, and never used for enforcement; spec versions
ship on a published schedule with multi-year support so a city can replace the software
without replacing its fleet.

---

## Deck Structure

1. Intro: the problem, the premise, why boring cities get ignored, and the China comparison
2. Part 1: The City Model - the village as a model bylaw, not a mandate
3. Part 2: The Movement Hierarchy - who the street belongs to, adopted locally
4. Part 3: The Bike Share as Governed Infrastructure - one network, many systems; what stays local; what the standard will not collect; the physical-layer caveat
5. Part 4: The Platform - the spec and reference implementation, Kubernetes, tidal demand, and boring reliability
6. Part 5: Children and Safe Streets - safe routes and walking school buses
7. Part 6: Delivery - rollout, conformance, anti-patterns, the ask

The police proposal has been moved to `content/slides-policing.md` as a companion
proposal for cities that want it. It is not part of the national infrastructure ask.

---

## Repository Notes

The build is Marp CLI plus a post-processor (`postprocess.mjs`) that injects the green
theme. `docs/` is generated output and is never hand-edited. See [`BUILD.md`](BUILD.md)
for the full build architecture and re-theme guide.
