---
marp: true
theme: default
paginate: true
backgroundColor: "#ffffff"
header: "Cities for People - Nationwide Blueprint"
footer: ""
size: "16:9"
style: |
  section { font-size: 26px; }
  h1 { font-size: 36px; }
  h2 { font-size: 30px; }
  h3 { font-size: 24px; }
  h4 { font-size: 22px; }
  blockquote { font-size: 24px; }
  table { font-size: 22px; }
---

# Cities for People
## A Nationwide Blueprint for Human-Scale Streets

<br>

#### Digital Transformations Canada 2026

*Villages, protected movement, a national bike share, and streets built for children*
---

<!-- Overview -->
## What This Covers

A nationwide blueprint for rebuilding cities around human life:

- **The city model** - villages and neighborhoods where everything daily is within a 15-minute walk
- **The movement hierarchy** - walking, cycling, scooters first; cars and trucks as guests
- **The bike share as governed infrastructure** - a national standard for fare and access, run locally
- **The platform behind it** - the spec and reference implementation that let locally-run systems interoperate at 7:45 in the morning
- **Children and safe routes to school** - protecting the most important thing in society

<blockquote>
This is not a bike lane proposal. It is a proposal to build cities for people again.
</blockquote>

<blockquote>
Standardize what must interoperate. Leave everything else alone.
</blockquote>

---

<!-- The problem -->
## The Problem: Cities Built for Cars

For sixty years we designed streets around vehicle throughput. The results:

- **Children stopped walking to school.** The school run is now a car convoy twice a day
- **Streets emptied of life.** What used to be the front porch of a community is a traffic sewer
- **Land eaten by parking.** More space for stationary cars than for housing
- **Deaths treated as normal.** Traffic violence is a leading killer of children
- **Households forced into two cars** just to meet basic needs

<blockquote>
The car did not just take parking space. It took the street, the village, and the childhood.
</blockquote>

---

<!-- The premise -->
## The Premise: Design for the Child

Every design decision gets one test:

### Can an eight-year-old walk or bike to school alone?

- If the answer is no, the street is designed wrong
- Children are the most vulnerable road users, and the most honest ones
- A city that works for an eight-year-old works for everyone: the elderly, the disabled, the teenager, the parent with groceries
- This is not sentiment. It is a design specification — a checklist each city applies to its own streets, not a national rule

<blockquote>
Build the city for the weakest user and the strongest user will be fine. Reverse it and nobody is safe.
</blockquote>

---

<!-- Why boring gets ignored -->
## Why Boring Gets Ignored

People call Ottawa boring, and they are right. Boring is better.

- Walking and cycling photograph beautifully: a canal path at golden hour, a bike lane with actual cyclists
- But they do not generate **spectacle**. No fight, no viral council meeting, no culture-war proxy battle
- A safe bike lane does not produce a fight
- A sidewalk that exists does not go viral
- A medium-density neighbourhood that just works on a Tuesday does not give anyone a headline
- Meanwhile Toronto and Vancouver are celebrated as exciting, world-class cities, and they are also, in increasingly concrete ways, horrible places to live

<blockquote>
Healthy is boring. Boring is better. The things that rage are rarely the things that work.
</blockquote>

---

<!-- The middle path -->
## The Middle Path

I will take the bike lane that stays. I will take the sidewalk that exists. I will take the medium-density neighbourhood that does not require a car. I will take boring.

- **Boring is healthy. Boring is better.**
- Ottawa, for all its unglamorous predictability, is closer to that working middle path than either of the cities that get all the attention
- That is not a small thing. That is the whole thing
- The spectacle economy rewards the fight. The rest of us have to live on the street after the fight

<blockquote>
Walking and cycling get overlooked not because they are ugly. They do not perform outrage. That is exactly why they are worth defending.
</blockquote>

---

<!-- China already did it -->
## China Already Built This

China is not piloting this. China finished the pilot decades ago:

- **The world's largest bike-share systems** were born there: Hangzhou's public bicycle, then the megacity fleets that made our dockless experiments look like a village raffle
- **Protected bike lanes at scales no Canadian city has approached.** Wide, signal-priority, everyday corridors in Beijing, Chengdu, Xiamen; elevated cycling highways where we cannot find the political room for a curb
- **E-bikes are ordinary transport for hundreds of millions.** Not a hobby, not a lifestyle; the commute
- **Share hubs and metro stations interlock.** Bikes are treated as the circulatory system of transit, not an afterthought bolted onto the car plan
- **Meanwhile here:** Ontario removes bike lanes, Ottawa debates a pilot, Toronto fights over a single corridor, and we congratulate ourselves for being a serious country
- **And the dockless era proved the model at civilizational scale.** Hundreds of millions of riders, bikes on every corner, a habit of daily cycling rebuilt in a decade. It also exposed what happens when a commons has no public layer: operator collapse, deposit losses, abandoned fleets. China's answer was not to retreat — it was to impose national service standards, unique vehicle codes, maintenance requirements, and local fleet caps. The system matured into a regulated, consolidated market with hundreds of millions of users and millions of shared e-bikes across hundreds of cities. **The lesson is not "copy the scale" or "dockless is bad." It is: govern the public layer, keep the operator layer plural, and regulate the commons.**

<blockquote>
The hard part was never the technology or the money. It is believing you are allowed to build it — and then building the public layer well enough that the whole city can trust it, and no single company can hold it hostage.
</blockquote>

---

<!-- ============================ PART 1: THE CITY MODEL ============================ -->
# Part 1: The City Model
## Villages, not sprawl

---

<!-- The village -->
## The Village: A Model, Not a Mandate

<div class="flow">
  <div class="flow-box">
    <div class="plate plate-head">School</div>
    <div class="plate">At the center,</div>
    <div class="plate">within walking distance</div>
    <div class="plate">of every home</div>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-box">
    <div class="plate plate-head">Daily Life</div>
    <div class="plate">Shop, clinic, park,</div>
    <div class="plate">library, bike-share hub</div>
    <div class="plate">in every village</div>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-box">
    <div class="plate plate-head">Civic Life</div>
    <div class="plate">Library, community hall,</div>
    <div class="plate">public square within</div>
    <div class="plate">a short walk of every home</div>
  </div>
</div>

<blockquote>
A village is roughly 5,000 to 15,000 people inside a 15-minute walk. This is a **model bylaw** cities can adopt and adapt. The nation is a network of villages that chose to be villages.
</blockquote>

---

<!-- Village rules -->
## Rules of the Village

Published as a **model bylaw**. Cities adapt the numbers to their terrain, climate, and existing fabric. The rules describe function, not geometry.

| Principle | What It Asks of the Street |
|------|---------------|
| **School at the center** | Every home is a 10-15 minute walk from its school |
| **Mixed use, mixed people** | Homes, shops, schools and workshops interleaved, not zoned apart |
| **No through-traffic** | Cars can enter a village but cannot cut through it |
| **Permeable to people** | Foot and bike paths connect villages directly, ignoring the car network |
| **Density with limits** | Dense enough to support local shops and transit; low enough to stay human in scale |

<blockquote>
Through-traffic is the enemy of village life. Give cars a ring road, give people a path.
</blockquote>

---

<!-- ============================ PART 2: THE MOVEMENT HIERARCHY ============================ -->
# Part 2: The Movement Hierarchy
## Who the street belongs to

---

<!-- Modal hierarchy -->
## The Modal Hierarchy

A **model bylaw and funding condition.** Cities that adopt a published hierarchy qualify for infrastructure funding. Cities that don't can still fund specific projects.

| Rank | Mode | Street Space | Role |
|------|------|--------------|------|
| 1 | **Walking** | Widest sidewalks, car-free cores | Every trip under 1 km; every school run |
| 2 | **Cycling and scooters** | Protected lanes, bike highways | Daily trips of 1-10 km; the backbone |
| 3 | **Public transit** | Dedicated lanes, priority signals | Cross-village and inter-city trips |
| 4 | **Cars** | Filtered, slowed, scarce parking | When it is genuinely the right tool |
| 5 | **Trucks and freight** | Service corridors, off-peak windows | Goods delivery, no exceptions for convenience |

<blockquote>
The hierarchy is not anti-car, and it is not a federal rule. It is a menu. Space allocated by principle rather than by history — and adopted locally, or not at all.
</blockquote>

---

<!-- Street typology -->
## Street Typology

<div class="flow">
  <div class="flow-box">
    <div class="plate plate-head">Living Street</div>
    <div class="plate">Inside the village</div>
    <div class="plate">Walkers and bikes have</div>
    <div class="plate">absolute priority</div>
    <div class="plate">Cars crawl or stay out</div>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-box">
    <div class="plate plate-head">Bike Highway</div>
    <div class="plate">Between villages</div>
    <div class="plate">Protected, direct,</div>
    <div class="plate">signal-priority corridors</div>
    <div class="plate">for real distance riding</div>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-box">
    <div class="plate plate-head">Service Corridor</div>
    <div class="plate">Freight and delivery</div>
    <div class="plate">Off-peak windows,</div>
    <div class="plate">cargo-bike last mile,</div>
    <div class="plate">trucks at the edge</div>
  </div>
</div>

Model typologies, published for adoption. A city with a hill, a river, or a winter can modify any of these and still qualify for funding.

---

<!-- Cars and trucks -->
## Cars and Trucks Still Exist

This is not a car ban. It is a car demotion, done properly:

- **Ring roads and garages at the edge.** Drive to the village, park once, walk in
- **Filtered permeability.** Cars can reach every door; they just cannot speed through on the way to somewhere else
- **Delivery windows.** Trucks restock shops off-peak; cargo bikes handle the last hundred meters
- **Shared and electric.** When a car is genuinely needed, it is small, slow in villages, and shared
- **Freight is freight.** Trucks are treated as a utility with scheduled access, not as private convenience

<blockquote>
The goal is not to make driving illegal. It is to make driving unnecessary for an ordinary life.
</blockquote>

---

<!-- ============================ PART 3: BIKE SHARE AS INFRASTRUCTURE ============================ -->
# Part 3: The Bike Share as Governed Infrastructure
## A national standard, run locally

---

<!-- What it is -->
## What It Is: One Network, Many Systems

- **One account, one fare card, nationwide.** Ride in one city, return in another. The pass is the national layer
- **Hubs where cities choose them**, with funding structured so that every village and transit station can have one if the city wants it
- **Fleet mix is local.** Standard bikes, e-bikes, cargo bikes, enclosed trikes for winter: each city chooses what fits its terrain and climate
- **Kids' bikes included where cities choose them.** A child's first independent trip is on a shared or handed-down bike, not in a back seat
- **Publicly governed, locally operated.** The network is critical infrastructure under a public standard. Operations are municipal, co-op, or contracted — the standard does not care which

<blockquote>
A transit map without bikes is a map with a hole in it. The national layer is the fare and the account. Everything you can see from the saddle belongs to the city.
</blockquote>

---

<!-- Why infrastructure -->
## Why Infrastructure, Not an App

| | Dockless Private Scheme | Federated Public Network |
|---|---|---|
| **Who designs the streets** | Nobody; bikes fight existing roads | The network and the lanes are built together |
| **Where bikes go** | Sidewalks, dumped, broken | Fixed hubs at schools, stations, village centers |
| **Coverage** | Profitable cores only | Rural and low-density included by funding design, not left to the market |
| **Fare** | Surge pricing, per-ride | Flat, subsidized, integrated with transit |
| **Data and governance** | Private, opaque | Open availability feed; aggregate ridership published; personal data stays with the local operator |
| **Lifecycle** | Vandalize and replace | Maintained fleet, long service life |
| **Exit** | | Rider data portable, hardware non-proprietary, local operator can leave without losing riders |
| **Versioning** | | Spec versions ship on a published schedule with multi-year support windows |

<blockquote>
Private share failed because it bolted a fleet onto streets that were never designed for it. Build the streets first, and the fleet becomes trivial to run.
</blockquote>

---

<!-- Integration -->
## Integration: The Network Effect

<div class="flow">
  <div class="flow-box">
    <div class="plate plate-head">School Run</div>
    <div class="plate">Every school has a hub</div>
    <div class="plate">and a slow, protected</div>
    <div class="plate">approach from</div>
    <div class="plate">every direction</div>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-box">
    <div class="plate plate-head">Transit</div>
    <div class="plate">Hubs at every station</div>
    <div class="plate">Bikes extend catchments</div>
    <div class="plate">and replace park-and-ride</div>
    <div class="plate">lots with bike parking</div>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-box">
    <div class="plate plate-head">Daily Errands</div>
    <div class="plate">Cargo bikes for</div>
    <div class="plate">groceries and kids</div>
    <div class="plate">replace car trips</div>
    <div class="plate">under five kilometers</div>
  </div>
</div>

<blockquote>
Each hub makes the next one more useful. Transit and bikes are one system, priced and signed as one.
</blockquote>

---

<!-- What stays local -->
## What Stays Local

The national standard covers the fare, the account, and the data. Everything else belongs to the city:

- **Hub siting** - schools, stations, and village centres chosen locally
- **Fleet mix** - e-bikes only on hills, enclosed trikes in winter, cargo bikes where families need them
- **Pricing tiers** - subsidized, flat, or income-scaled
- **Operations** - municipal, co-op, or contracted
- **Maintenance and labour** - local jobs at local wages
- **Branding and wayfinding** - the system has a local name and a local face

<blockquote>
A national pass, a local bike. The standard guarantees you can ride anywhere; it does not tell a city what to ride.
</blockquote>

---

<!-- What the standard will not collect -->
## What the Standard Will Not Collect

Data minimization is a design commitment, not a policy afterthought:

- **No rider tracking.** Availability feeds only — how many bikes at a hub, never who is on them
- **No trip-level personal data** shared above the local operator
- **No real-time location feeds** to any agency, for any purpose
- **No enforcement use.** Ridership data never feeds law enforcement, immigration, or benefit eligibility
- **Aggregate ridership published openly** — the public good that justifies the public spend

<blockquote>
The state has a legitimate need to know how many bikes are at the station. It has no need to know who rode one, or when, or where they went afterwards.
</blockquote>

---

<!-- The physical-layer caveat -->
## The Physical-Layer Caveat

The national standard covers the **digital interop surface only** — and that is deliberate.

- Software can be standardized at near-zero cost. **Docks, bikes, and mechanics cannot**
- Every physical standardization is a local compromise: terrain, climate, existing street fabric, local labour
- So the spec stays small **because the physical layer needs to stay plural**
- Conformance means "your system can talk to ours." It does not mean "your system looks like ours"

<blockquote>
Keep the kernel small. Let the distros differ. A city that cannot modify its own fleet has been handed a ceiling and told it is a floor.
</blockquote>

---

<!-- ============================ PART 4: THE PLATFORM ============================ -->
# Part 4: The Platform
## The software behind the fleet

---

<!-- What K8s is -->
## The Reference Implementation

The national layer is a **spec plus a reference implementation**. The spec defines fare, identity, and data interchange. The reference implementation is a working system any city or co-op can run, fork, or replace with its own compliant build. Digital Transformations Canada maintains it. Nobody is required to use it.

The reference implementation runs on standard public-sector machinery. **Kubernetes** is the standard way to run software across many machines as one system:

- You declare what should be running; it starts, restarts, moves, and scales services on its own
- A machine dies at 3 a.m.? The services reappear somewhere else without anyone waking up
- It is the grid the platform services plug into, like electricity for buildings
- Governments, banks, and carriers already run on it; this is proven machinery, not experiment

<blockquote>
Nobody at the hub needs to know what Kubernetes is. They need the bike to unlock on a wet Tuesday morning — and the city needs to be able to replace the software without replacing the fleet.
</blockquote>

---

<!-- Demand scaling -->
## Demand Is Tidal

Ride demand is not flat. It is a school rush at 7:45, a homeward surge at five, a downpour, a game night, June versus January.

How the reference implementation handles it:

<div class="flow">
  <div class="flow-box">
    <div class="plate plate-head">Real Signals</div>
    <div class="plate">Ride unlocks, fare</div>
    <div class="plate">transactions, weather,</div>
    <div class="plate">event schedules</div>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-box">
    <div class="plate plate-head">KEDA + VPA</div>
    <div class="plate">KEDA scales services</div>
    <div class="plate">on those signals;</div>
    <div class="plate">VPA right-sizes each</div>
    <div class="plate">from real usage</div>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-box">
    <div class="plate plate-head">Karpenter</div>
    <div class="plate">Adds and reclaims</div>
    <div class="plate">machines just in time;</div>
    <div class="plate">quiet at night,</div>
    <div class="plate">full capacity at rush</div>
  </div>
</div>

- Scale on **actual demand**, not guesses: transactions per minute, unlocks per hub
- Development environments scale to zero when nobody is using them
- Keep each controller on its own job: one scales count, one scales size, one supplies machines

<blockquote>
The same three tools government platforms already run, pointed at a mission worth caring about.
</blockquote>

---

<!-- Reliability -->
## Governed to Be Boring

- **Hubs fail soft.** A network outage queues rides locally; the lock still opens, the dock still holds
- **A spec body, not an owner.** Cities, provinces, operators, accessibility advocates, and rider representatives hold seats. Versions ship on a published schedule; cities can propose changes
- **Conformance is tested, not asserted.** A public test suite and a registry of compliant systems. Cities certify; they don't petition
- **Telemetry is aggregate by default.** Availability feeds open; ridership published; personal data minimized, never sold, never used for enforcement
- **Boring is the feature.** Heroics at 2 a.m. are a design failure. The platform should be dull, predictable, and quietly excellent

<blockquote>
A national utility earns trust the same way a sidewalk does: by being there every single day, and by being easy to leave if it stops being good.
</blockquote>

---

<!-- Governance -->
## How the Spec Is Governed

The standard is only as trustworthy as the body that holds it.

- **A multi-stakeholder council**, chaired independently, with voting seats for cities, provinces, operators, accessibility advocates, and rider representatives. No single vendor, agency, or level of government holds a majority
- **Published versioning.** Spec versions ship on a fixed cadence with multi-year support windows, so a city is never forced to re-certify on a vendor's schedule
- **An open change process.** Any member can propose an amendment; the test suite is public; the rationale for every accepted or rejected change is published
- **The reference implementation is one option among many.** DTC maintains it as a public good, and any compliant system can replace it without losing riders, data, or fleet

<blockquote>
A standard is only legitimate if the people who have to live with it helped write it — and can leave it without losing their city.
</blockquote>

---

<!-- ============================ PART 5: CHILDREN AND SAFE STREETS ============================ -->
# Part 5: Children and Safe Streets
## Protecting what matters most

---

<!-- Safe routes -->
## Safe Routes to School

The convoy at the school gate ends because the alternative already exists:

- **Every route to school is protected.** Slow zones, car-free segments, guarded crossings staffed at peak hours
- **Walking school buses.** Groups of children walk fixed routes with adult escorts, gathering stops along the way
- **Bike training in school.** Riding is taught like swimming: a basic life skill, certified before independence
- **Drop-off loops for the exceptions.** A small, slow, one-way loop at the edge of the campus for those who truly must be driven
- **No car door-to-door.** Families park at the village edge and walk the last stretch, like everyone always did

<blockquote>
Nobody drives their kid to school here. Not because it is forbidden, but because it is slower than walking.
</blockquote>

---

<!-- ============================ PART 6: DELIVERY ============================ -->
# Part 6: Delivery
## How it actually gets built

---

<!-- Phased rollout -->
## The Rollout

| Phase | Years | What Happens |
|-------|-------|--------------|
| **1. Standard** | 0-2 | National interop spec (fare, identity, availability data, privacy floor), conformance test suite, and a published set of model bylaws for cities that want them |
| **2. Proof villages** | 1-4 | Convert a dozen villages and city districts; prove the model with real families and real schools |
| **3. Bike-share build** | 2-6 | National network rolled out **hub by hub, city by city**, on protected lanes built to local design. Funding conditioned on conformance, not conformity |
| **4. Conversion** | 4-15 | Through-traffic removed village by village; parking converted to housing and parks |
| **5. Steady state** | 15+ | Maintenance and expansion; the default city, not the experiment |

<blockquote>
Start where the political will is. Make the first villages so good that every remaining car city looks like an apology.
</blockquote>

---

<!-- Who builds it -->
## Who Builds It

This is a national **standard** with local **ownership**, the way public systems work when they work:

- **A spec body** with seats for cities, provinces, operators, and riders owns the standard: fare, identity, payments, availability data, privacy floor
- **Digital Transformations Canada** maintains the reference implementation and the conformance test suite. Anyone can run it, fork it, or build their own compliant system
- **Cities and regions procure their own operations** — municipal, co-op, or contracted. The spec prevents incompatibility; it does not pick the operator
- **Infrastructure funding is conditioned on conformance** with the fare and data standard, not on adopting any particular street design
- **Proof villages are funded competitively.** Cities propose their own designs against a published floor

<blockquote>
The lanes are a municipal job. The fleet is an operations job. The spec is a national job. Do not mix them up.
</blockquote>

---

<!-- Anti-patterns -->
## What Kills It: Anti-Patterns

- **Painted lanes next to speeding traffic** - a stripe of paint is not infrastructure; protect it or delete it
- **A pilot with no network** - one pretty bike street that connects to nothing teaches people that bikes do not go anywhere
- **Bike share without bike lanes** - fleets die on hostile streets; the app is not the product, the street is
- **Thirty incompatible platform procurements** - each region re-buys a proprietary platform that cannot talk to its neighbours; the national account dies, and so does the network effect. Operations procurement is fine. Platform fragmentation is not.
- **Keeping car capacity "for now"** - every lane left in place signals that the old city is still the real one
- **School gates full of cars "just this morning"** - exceptions every day are not exceptions; design them out
- **Enforcement without design** - fines replace protection; the street stays lethal for the child who misses a signal
- **One national app cities can't modify** - a reference implementation that becomes the only implementation is a ceiling dressed as a floor
- **A spec body captured by a single vendor** - the CentOS problem: whoever controls the standard controls the cities
- **Mandatory real-time rider tracking** - the MDS failure: legibility run wild, privacy surrendered for dashboards
- **An exit that's too expensive to take** - if leaving the network means losing your fleet and your riders, you were never free to stay

<blockquote>
Half-measures are worse than nothing. So is a perfect standard nobody can leave. Build the smallest possible national layer, and make it easy to walk away from.
</blockquote>

---

<!-- Conclusion -->
## The Ask

- **Fund a national interop spec and reference implementation** through Digital Transformations Canada, governed jointly with provinces and cities
- **Condition infrastructure funding on conformance** with the fare, account, and open-data standard — not on adopting any particular street design
- **Publish model bylaws** for the village, the modal hierarchy, and safe routes to school — a menu, not a mandate
- **Fund proof villages competitively,** with cities proposing their own designs against a published floor
- **Fund the network hub by hub, city by city,** with local operations and a national account

<blockquote>
A city is not a traffic problem to be managed. It is a place where children grow up. Build accordingly.
</blockquote>

---

<!-- References -->
## References and Further Reading

### Design and research:
1. Jan Gehl, *Cities for People* - life between buildings and the human scale of streets
2. The 15-minute city concept - daily needs within a short walk or ride (Carlos Moreno)
3. Vision Zero - the ethical premise that no traffic death is acceptable, starting with children

### Practice, near and far:
4. Chinese megacities - the largest bike-share systems and protected cycling networks on earth (Hangzhou, Beijing, Chengdu, Xiamen)
5. BIXI Montreal - a publicly owned bike share that proved a cold city can ride year-round
6. Vision Zero Ottawa - the local commitment, and the gap between commitment and street design
7. Paris, Barcelona, Bogota - school street programs and large-scale pedestrianization at city scale
8. The Netherlands - fifty years of protected cycling infrastructure and the "sustainable safety" doctrine

### Platform:
9. Kubernetes - the standard for running services across many machines as one system
10. VPA, KEDA, Karpenter - right-sizing, event-driven scaling, and just-in-time capacity for tidal demand
11. GBFS (General Bikeshare Feed Specification) - the narrow, open availability standard; the model for what the national layer should look like
12. MDS (Mobility Data Specification) - the cautionary case: a standard that required real-time rider tracking and drew sustained privacy criticism before governance was settled
