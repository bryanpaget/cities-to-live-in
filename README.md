# Cities for People

## A Nationwide Blueprint for Human-Scale Streets

**Concept Deck 2026 | Digital Transformations Canada**

---

## About This Repository

This repository contains the source for the "Cities for People" presentation: a policy
manifesto for rebuilding cities around human life, with a national bike share as backbone
infrastructure and the digital platform behind it as federal shared infrastructure. It
builds presentation slides (via [Marp](https://marp.app/)) and publishes them as HTML to
GitHub Pages from the `docs/` folder.

| Path | Description |
|------|-------------|
| `content/slides-en.md` | English Marp presentation source |
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

- **The city model:** villages of 5,000-15,000 people where everything daily is a 15-minute walk, with the school at the center and no through-traffic
- **The movement hierarchy:** walking, cycling and scooters first; transit; cars and trucks as guests on a people-first network
- **The bike share as national infrastructure:** one public utility with a hub in every village and transit station, one account and one fare card nationwide, not a private dockless app fighting the streets
- **The platform behind it:** the software system that keeps a national fleet and fare network running through the 7:45 school rush
- **Children and the new police role:** safe routes to school, walking school buses, and a police mandate retooled around protecting the most vulnerable people on the street
- **Delivery:** phased nationwide rollout, one federal owner for the standard and the platform, anti-patterns that kill half-measures

The cultural frame: healthy cities are boring, and boring is better. China already built
this at scale; Canada is still arguing about paint.

**Key takeaway:** The lanes are a municipal job. The fleet is an operations job. The
platform is a national job. Build the streets first, build the platform once, and the
rest becomes ordinary maintenance.

---

## The Platform: Kubernetes in the Bike Share

The national bike share is also a digital utility: accounts, fare transactions, fleet
locks, and telemetry, nationwide, every day. That software runs as a Kubernetes platform -
the same class of shared platform government already operates at scale.

**What Kubernetes does here:** it runs the platform's services across many machines as one
system. Services start, restart, move, and scale themselves. A machine failure at 3 a.m.
does not wake anyone; the services reappear elsewhere.

**How demand is handled.** Ride demand is tidal: a school rush at 7:45, a homeward surge
at five, weather, events, seasons. Three tools keep the platform matched to real demand:

| Concern | Tool | What it does |
|---------|------|--------------|
| How many service instances | **KEDA** | Scales replicas on real signals (ride unlocks, transactions per minute, schedules), including scale-to-zero in non-production |
| How large each instance | **VPA** | Right-sizes CPU and memory per service from actual usage history, so capacity tracks reality between rushes |
| How much machine capacity | **Karpenter** | Provisions and reclaims compute just in time, packing work efficiently; quiet at night, full capacity at rush |

**Operational rules that carry over:** keep each controller on its own axis (one scales
count, one scales size, one supplies machines); hubs must fail soft, queuing rides locally
so a network outage does not strand a bike; open APIs so regional operators plug into the
national platform instead of re-procuring the same software thirty times; aggregate
ridership telemetry public by default, personal data protected and never sold.

---

## Deck Structure

1. Intro: the problem, the premise, why boring cities get ignored, and the China comparison
2. Part 1: The City Model - the village as the unit of the city
3. Part 2: The Movement Hierarchy - who the street belongs to
4. Part 3: The Bike Share as National Infrastructure - a public utility, not an app
5. Part 4: The Platform - Kubernetes, tidal demand, and boring reliability
6. Part 5: Children and the New Police Role - safe routes and guardianship
7. Part 6: Delivery - rollout, ownership, anti-patterns, the ask

---

## Repository Notes

The build is Marp CLI plus a post-processor (`postprocess.mjs`) that injects the green
theme. `docs/` is generated output and is never hand-edited. See [`BUILD.md`](BUILD.md)
for the full build architecture and re-theme guide.
