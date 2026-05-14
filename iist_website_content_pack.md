# IIST Inc. Website Content Pack

**Purpose:** publishable multi-page website content for IIST Inc., designed for implementation using the existing `/ref/` template and `/img/` image assets.

**Public disclosure rule:** this website intentionally keeps chip-level specifications high-level. Detailed electrical, protocol, timing, memory, token, seed, key-size, and implementation details should remain in a qualified technical package, datasheet, or NDA workflow.

---

## 1. Website Strategy

### Primary positioning

**IIST Inc. builds hardware-rooted trust for connected devices.**

The website should present IIST as a trust infrastructure company built on semiconductor technology, not just as a chip vendor. The strongest public message is that trust should start where secrets are created: inside hardware, from silicon behavior, before software, cloud services, AI pipelines, robotics systems, or compliance workflows try to use it.

### Core public message

**Trust born from silicon.**  
Connected products need to prove identity, protect data, authenticate actions, verify provenance, and survive long lifecycles. IIST uses Dynamic PUF technology to help device makers anchor these trust functions in hardware, so trust material can be generated from the device itself instead of depending only on injected or stored secrets.

### Claim discipline

Use these words often:

- designed for
- supports
- enables
- helps
- hardware-rooted
- qualified evaluation
- integration path
- C2PA-compatible
- PQC-ready planning
- CRA mapping support

Avoid these words unless legally and technically approved:

- unbreakable
- impossible to hack
- guarantees compliance
- solves counterfeiting
- full C2PA trust-list registration completed
- hardware PQC implementation, unless referring to roadmap/planning or a separately approved implementation
- exact datasheet specifications

### Site audience

The website should serve five groups:

1. OEM / ODM device makers
2. Networking equipment and gateway manufacturers
3. AIoT, industrial, robotics, and embedded system teams
4. Semiconductor partners and chiplet ecosystem partners
5. Strategic customers, investors, and compliance-oriented partners

### Final site map

1. `index.html` — Home
2. `solutions.html` — Solutions
3. `technology.html` — Technology
4. `products.html` — Products
5. `evaluation.html` — Evaluation & CRA Mapping
6. `resources.html` — Resources
7. `company.html` — Company
8. `contact.html` — Contact

The public site should **not** have a public “datasheets” page with detailed specifications. Use **Evaluation** or **Technical Resources** instead.

---

## 2. Global Navigation and Footer

### Header navigation

- Solutions
- Technology
- Products
- Evaluation
- Resources
- Company
- Contact

### Primary CTA

**Contact IIST**

### Secondary CTA

**Request Technical Package**

### Footer copy

**IIST Inc.**  
Hardware-rooted trust for connected devices.

IIST builds Dynamic PUF-based chips, modules, and portable trust hardware for authentication, device identity, content authenticity, secure communication, robotics trust, and trusted lifecycle infrastructure.

**Footer columns**

Solutions:
- Authentication & FIDO2
- Content Authenticity & C2PA
- Robotics Trust
- Chip & Chiplet Trust Tracking
- Secure Communication

Products:
- SASE01EPZS / SASe Chip
- SASp Secure MCU
- Trust Modules
- Ankhor Key

Evaluation:
- SESIP Resources
- CRA Mapping Support
- Technical Package
- Development Kit

Contact:
- service@iist.com.tw
- https://www.iist-site.com

Footer disclaimer:

Technical information is provided for evaluation and integration planning. Final implementation, assurance level, compliance posture, and system security depend on the complete customer product, software, lifecycle process, operating environment, documentation, and threat model.

---

## 3. Homepage: `index.html`

### SEO

**Title:** IIST Inc. | Hardware-Rooted Trust for Connected Devices  
**Meta description:** IIST builds Dynamic PUF-based chips, modules, and portable trust hardware for authentication, content authenticity, device identity, robotics trust, secure communication, and CRA-ready product security planning.

### Hero section

**Eyebrow:** Dynamic PUF Trust Infrastructure

**Headline:**  
Hardware-rooted trust for connected devices.

**Subheadline:**  
IIST builds Dynamic PUF-based chips, modules, and portable trust hardware so identity, authentication, provenance, and secure operation can begin from silicon — not from stored secrets alone.

**Primary CTA:** Explore Solutions  
**Secondary CTA:** Request Technical Package

**Hero trust badges:**

- Generated, not stored
- Dynamic PUF
- Multiple trust functions
- FIDO2 integration path
- C2PA-compatible workflows
- SESIP / CRA mapping support

**Hero visual direction:**  
Use the strongest chip, silicon, circuit, or digital-DNA image in `/img/`. Overlay subtle glowing nodes labeled **Identity**, **Authentication**, **Provenance**, **Firmware Trust**, **Secure Channel**, and **Lifecycle**. If no suitable image exists, create a CSS/SVG chip illustration with branching trust roots.

---

### Problem section

**Headline:**  
Stored secrets do not scale trust.

**Body copy:**  
Connected systems must prove who they are, protect what they hold, verify where data came from, and authenticate what they are allowed to do. But many devices still depend on secrets that are written, injected, or stored. What is written can be stolen. What is stored can be copied. What is copied can be reused across systems.

This is not only a login problem. It affects routers, gateways, AIoT devices, robotics systems, firmware updates, API credentials, machine identity, and the data pipelines that modern products depend on.

**Three proof cards:**

1. **Identity can drift from hardware**  
   When credentials are copied, trust no longer stays attached to the device.

2. **Trust functions multiply**  
   FIDO2, device identity, secure channels, OTA updates, data signing, and PQC migration all need trusted root material.

3. **Lifecycle risk grows over time**  
   Long-lived products need trust that can be provisioned, separated, verified, and reviewed through deployment.

**Visual direction:**  
Create a three-part diagram: **Write → Store → Reuse**. Under it: “What is written can be stolen. What is stored can be copied. What is copied can be reused.”

---

### Solution section

**Headline:**  
Secrets should be born, not stored.

**Body copy:**  
Dynamic PUF turns natural silicon behavior into hardware-rooted trust material. Instead of relying only on externally injected secrets, IIST helps products derive trust from the device itself. This makes it possible to design systems where identity, challenge-response, signing, access, and lifecycle functions are anchored closer to the hardware.

**Value bullets:**

- Hardware-bound identity
- Keys and trust material generated when needed
- Reduced dependence on persistent stored secrets
- Multiple trust functions from one hardware foundation
- Integration paths for OEM products, modules, and portable trust devices

**Visual direction:**  
Layer diagram:  
**Silicon behavior → Dynamic PUF → hardware-rooted trust material → separated trust functions → deployed applications**

---

### Solution cards preview

#### Authentication & FIDO2

Use FIDO2 as the standard login path, then extend deployment scenarios with IIST hardware-rooted companion functions for machine identity, secure challenge-response, and role-separated trust.

CTA: **View Authentication Solution**

#### Content Authenticity & C2PA

Support C2PA-compatible workflows for signing and verifying provenance of media, documents, logs, sensor outputs, and machine-generated evidence.

CTA: **View C2PA Integration Path**

#### Robotics Trust

Help robots and robotic fleets prove identity, software state, operator authorization, sensor provenance, and trusted operation before they act in the physical world.

CTA: **View Robotics Trust**

#### Chip & Chiplet Trust Tracking

Use PUF-derived hardware identity as one layer of trust evidence for chip, module, and chiplet traceability when integrated with manufacturing and verification workflows.

CTA: **View Chiplet Trust Tracking**

---

### Trust architecture section

**Headline:**  
One connected product. Many trust functions. One hardware-rooted foundation.

**Body copy:**  
Authentication, provenance, secure communication, firmware trust, and PQC migration are often discussed as separate features. In real products, they are connected. Each function needs identity, key material, signatures, secure state, or evidence. IIST helps device makers build these functions from a common hardware-rooted trust foundation.

**Architecture cards:**

1. **Device Identity**  
   Prove a device is tied to a physical hardware instance.

2. **FIDO2 & Access**  
   Support passwordless and phishing-resistant authentication workflows.

3. **Secure Channels**  
   Strengthen device-to-device and device-to-cloud trust.

4. **Signed Provenance**  
   Sign data, logs, outputs, and content authenticity records.

5. **Firmware Trust**  
   Support update workflows and lifecycle verification.

6. **PQC-Ready Planning**  
   Prepare long-life products for future cryptographic migration paths.

**Visual direction:**  
Use a central chip icon labeled **Dynamic PUF Root** with six branches to the above functions.

---

### Products preview

**Headline:**  
Hardware formats for real deployment.

**Intro copy:**  
IIST productizes Dynamic PUF into practical hardware formats for evaluation, integration, production, and portable trust workflows.

#### SASE01EPZS / SASe Chip

Secure co-processor for embedded trust anchoring.

Designed for OEMs and embedded teams that need hardware-rooted identity, trust separation, secure challenge-response behavior, and lifecycle support in connected products.

CTA: **View Product Brief**

#### SASp Secure MCU

Secure MCU platform roadmap for programmable trust functions.

Designed to extend Dynamic PUF-based trust into broader embedded system roles, with support for secure lifecycle architecture and PQC-ready product planning.

CTA: **Discuss Roadmap**

#### Trust Modules

Ready-to-integrate hardware trust modules.

Designed for faster evaluation and pilot deployment where teams want hardware-rooted trust without starting directly at chip-level integration.

CTA: **Discuss Module Integration**

#### Ankhor Key

Portable hardware trust anchor.

Designed for FIDO2 authentication, access workflows, signing, content authenticity pilots, administrator workflows, and operator trust scenarios.

CTA: **View Ankhor Key**

---

### Credibility strip

**Headline:**  
Built from semiconductor design to real integration.

Use only public-safe credibility language:

- Dynamic PUF-based hardware trust platform
- 10,000+ PUF chips produced and validated
- Security evaluation resources available
- OEM integration and pilot support
- SESIP resources and CRA mapping discussions
- Built for chips, modules, USB keys, and secure MCU roadmap

**Note:** Do not publish exact certificate IDs, private customer names, or detailed chip parameters unless explicitly approved.

---

### Final CTA

**Headline:**  
Build trust where it starts.

**Body copy:**  
Whether you are designing a router, gateway, AIoT product, robotic system, secure data workflow, or long-life connected device, IIST can help you evaluate how hardware-rooted trust fits into your product architecture.

**Primary CTA:** Contact IIST  
**Secondary CTA:** Request Technical Package

---

## 4. Solutions Page: `solutions.html`

### SEO

**Title:** IIST Solutions | FIDO2, C2PA, Robotics Trust, Chiplet Tracking  
**Meta description:** Explore IIST hardware-rooted trust solutions for FIDO2 authentication, C2PA-compatible content authenticity, robotics, chip/chiplet traceability, secure communication, and CRA mapping.

### Page hero

**Eyebrow:** Solutions

**Headline:**  
Trust functions mapped to real deployment needs.

**Subheadline:**  
IIST helps OEMs and embedded teams connect hardware-rooted trust to authentication, content authenticity, robotics, chip traceability, secure communication, firmware lifecycle, and CRA-oriented product security planning.

---

### Solution 1: FIDO2 + custom-defined scenario functions

**Headline:**  
FIDO2 authentication, extended by hardware-rooted scenario functions.

**Body copy:**  
FIDO2 and WebAuthn provide a standard path for strong, phishing-resistant user authentication. IIST uses that standard login path as an entry point, then supports companion custom-defined scenario functions anchored in IIST hardware-rooted trust.

These companion functions are not presented as part of the FIDO2 standard. They are deployment-specific functions that can help connect user authentication with device identity, machine credentials, secure challenge-response, local policy, signing, and lifecycle workflows.

**What this enables:**

- User login with a FIDO2-capable hardware trust device
- Device or machine identity tied to IIST hardware-rooted trust
- Role-separated trust paths for admin, service, firmware, and data functions
- Custom challenge-response workflows for high-value actions
- Secure access to infrastructure, APIs, management portals, or field devices
- Local signing or verification scenarios where deployment policy requires stronger evidence

**Scenario: Secure router administrator access**

1. An administrator signs in using a FIDO2-capable IIST hardware key.
2. The service verifies the WebAuthn assertion and grants the correct session scope.
3. For sensitive actions, the system requests an IIST hardware-rooted companion challenge.
4. The IIST trust device or embedded module produces a hardware-bound response.
5. Firmware update, configuration change, or log signing proceeds only when the user, device, and scenario policy match.

**Microcopy / notice:**  
FIDO2 handles the standard user-authentication path. IIST custom-defined functions support deployment-specific trust scenarios around the authenticated session.

**Visual direction:**  
Create a two-lane sequence diagram:

Top lane: **User → Browser / App → FIDO2 Authenticator → Server**  
Bottom lane: **Device / Service → IIST Hardware Root → Challenge-Response / Signing / Policy Function**

Use a different line style or color for “FIDO2 standard flow” and “IIST companion trust function.”

---

### Solution 2: C2PA-compatible content authenticity

**Headline:**  
Hardware-rooted provenance for content, logs, and machine data.

**Body copy:**  
As AI-generated content and machine-generated data increase, detection alone becomes weaker. Provenance is different: it does not try to guess whether something is authentic; it helps prove where data came from, whether it changed, and which trusted identity signed it.

IIST supports C2PA-compatible workflows where hardware-rooted trust can contribute to signing and verifying provenance for media, documents, logs, sensor outputs, robotic inspection results, and internal enterprise records.

**Use cases:**

- Signed media and documents
- Internal ERP or intranet content signing
- Sensor data and inspection records
- Robot-generated evidence
- AI data pipeline integrity
- Machine logs and automation records
- Enterprise proof-of-origin workflows

**C2PA notice:**  
IIST supports C2PA-compatible content authenticity workflows. Official C2PA Trust List / root certificate registration is pending. Public validators may not yet recognize IIST-issued signatures as trusted under the official C2PA trust model. Qualified customers can discuss enterprise, private, pilot, or staged trust-chain deployment models.

**Visual direction:**  
Create a horizontal provenance pipeline:

**Create / Capture → Hash → Sign Provenance → Attach Manifest → Store / Publish → Verify**

Use icons for document/media, chip/key signer, manifest, and verifier.

---

### Solution 3: Robotics trust

**Headline:**  
Trust for robotics before action.

**Vision statement:**  
Robots are becoming physical actors in the real world. Before a robot moves, updates, reports, or accepts remote commands, it should be able to prove who it is, what state it is in, where its data came from, and which operator, model, or policy authorized the action.

**Body copy:**  
IIST’s vision is to make trust portable across robot identity, operator authentication, sensor provenance, firmware lifecycle, and fleet operation. The goal is not only secure login. The goal is evidence of trusted operation.

A robotic system may need to prove that the controller is authentic, the firmware path is valid, the operator was authorized, the sensor output was signed, and the inspection report belongs to a specific machine and moment. IIST hardware-rooted trust can support these workflows as part of a larger robotics security architecture.

**Use cases:**

- Robot and controller identity
- Operator authentication
- Sensor and log provenance
- Signed inspection reports
- Secure firmware update workflows
- Tool, model, or policy authorization
- Fleet onboarding and lifecycle records
- Device-to-cloud trust
- Field maintenance and RMA evidence

**Copy block for robotics card:**  
From command to movement, from sensor to report, trust should not be assumed. It should be created, signed, and verified.

**Visual direction:**  
Diagram with five nodes:

**Operator → Robot Controller → Robot / Sensor → Edge Gateway → Cloud / Report**

Add trust labels:
- operator identity
- robot identity
- firmware trust
- sensor provenance
- signed output

---

### Solution 4: PUF as trust tracker for chip manufacturers and chiplets

**Headline:**  
Hardware-rooted trust tracking for chips, modules, and chiplet workflows.

**Body copy:**  
Dynamic PUF can support a hardware-rooted trust tracker for semiconductor workflows. A PUF-derived hardware identity can act as one layer of evidence for die enrollment, package association, module commissioning, anti-substitution checks, and lifecycle verification.

This is especially relevant as supply chains become more modular and chiplet-based. When silicon components move through wafer test, packaging, module assembly, system integration, and field deployment, each stage needs stronger ways to connect physical hardware to secure records.

**Careful positioning:**  
PUF does not replace manufacturing controls, secure databases, packaging policy, logistics security, or compliance documentation. It can contribute a hardware-rooted fingerprint that supports traceability and verification when integrated into a complete workflow.

**Use cases:**

- Wafer or die enrollment
- Lot and package association
- Chiplet identity binding
- Module commissioning
- Anti-substitution evidence
- Secure RMA and return verification
- Field lifecycle verification
- Hardware identity for secure records

**Short card copy:**  
Use the hardware itself as part of the traceability story — not as the whole story.

**Visual direction:**  
Timeline:

**Wafer → Die → Chiplet → Package → Module → Field Device → RMA / Lifecycle**

Place “PUF enrollment / verification checkpoint” markers at selected stages.

---

### Solution 5: Secure communication and PQC-ready planning

**Headline:**  
Hardware-rooted identity for secure communication and post-quantum migration planning.

**Body copy:**  
Long-life connected products must prepare for changing cryptographic requirements. IIST supports secure communication planning by providing hardware-rooted identity, entropy, key derivation support, and lifecycle trust functions that can fit into future PQC migration paths.

This is positioned as **PQC-ready system planning** and **cryptographic lifecycle support**, not as a public claim that every IIST product contains a complete hardware-based PQC implementation.

**Use cases:**

- Device-to-device trust
- Device-to-cloud onboarding
- Secure provisioning
- Challenge-response between endpoints
- Secure channel architecture
- PQC migration planning for long-life devices
- Key and seed lifecycle support

**Visual direction:**  
Network diagram:

**Device A ↔ Gateway ↔ Cloud / Service ↔ Device B**

Overlay hardware-rooted identities at endpoints and a lifecycle track labeled **Classical today → PQC transition planning → future migration**.

---

### Solution 6: SESIP resources and CRA mapping support

**Headline:**  
SESIP resources and CRA mapping support.

**Body copy:**  
Connected-device manufacturers increasingly need to connect hardware security design, product risk analysis, vulnerability handling, software lifecycle, update processes, and compliance documentation. IIST maintains SESIP-related evaluation resources for its hardware trust platform and can support qualified customers with mapping discussions for Cyber Resilience Act applications.

IIST does not claim that one component alone makes a complete customer product CRA compliant. Instead, IIST helps customers understand how hardware-rooted trust functions may contribute to the larger product security case.

**Support areas:**

- Hardware-rooted identity evidence
- Secure provisioning and lifecycle architecture
- Challenge-response and authentication architecture
- Firmware/update trust architecture
- Data integrity and provenance support
- Documentation support for customer security review
- Security architecture discussion for CRA application planning

**CTA:** Ask About SESIP / CRA Mapping

---

## 5. Technology Page: `technology.html`

### SEO

**Title:** Dynamic PUF Technology | Hardware Digital DNA  
**Meta description:** Learn how IIST uses Dynamic PUF technology to create hardware-rooted trust material for identity, authentication, challenge-response, signing, provenance, and lifecycle trust.

### Page hero

**Eyebrow:** Technology

**Headline:**  
Trust rooted in silicon.

**Subheadline:**  
IIST starts with Dynamic PUF and builds upward into root identities, hardware trust functions, platform services, and real application workflows.

---

### Section: Dynamic PUF

**Headline:**  
Hardware digital DNA.

**Body copy:**  
Every chip carries physical variation from the semiconductor fabrication process. Dynamic PUF uses this behavior as a foundation for hardware-rooted trust material. Instead of depending only on secrets injected from outside and stored forever, IIST’s architecture can derive trust material from the device itself when needed.

This changes the starting point of trust. Trust begins with silicon behavior, then moves upward into identity, challenge-response, signing, secure access, data provenance, and lifecycle functions.

**Feature bullets:**

- Hardware-bound identity
- On-demand trust material generation
- Reduced dependence on stored secrets
- Challenge-response support
- Flexible trust partitioning
- Multiple trust-function architecture

**Visual direction:**  
Use a silicon/digital-DNA graphic. If no image exists, create an animated chip outline with changing internal signal paths and stable external identity nodes.

---

### Section: Root identity model

**Headline:**  
One device, many trust functions.

**Body copy:**  
A connected product rarely needs only one identity. It may need one trust path for user authentication, another for device identity, another for firmware updates, another for data signing, and another for secure communication. IIST’s architecture supports the idea of separating trust functions so one hardware foundation can serve multiple deployment needs.

**Trust branches:**

- User authentication
- Device identity
- Secure channel support
- Firmware update trust
- Signed data and provenance
- PQC migration planning

**Visual direction:**  
Central chip labeled **Dynamic PUF Root** branching into six trust domains.

---

### Section: Custom-defined scenario functions

**Headline:**  
Scenario-defined trust from hardware.

**Body copy:**  
IIST hardware trust functions can be configured around deployment scenarios. A customer may define different trust paths for administrator access, service operations, firmware workflows, data signing, or local device operations. This supports clearer separation between roles and functions.

Custom-defined functions are not a replacement for system design. They are building blocks that must be integrated with customer software, policy, user management, lifecycle process, and threat model.

**Examples:**

- Admin trust path
- Service trust path
- Firmware trust path
- Data-signing trust path
- Local device trust path
- Machine credential trust path

**Notice:**  
Detailed implementation behavior is provided through qualified technical documentation, development-kit support, or customer integration discussions.

---

### Section: Trust architecture

**Headline:**  
From silicon to system.

**Body copy:**  
Hardware provides the physical trust anchor. The root-of-trust layer derives identity and trust material. The platform layer exposes that trust through authentication, signing, secure communication, provisioning, and lifecycle functions. Applications inherit stronger assurance because trust begins below software.

**Architecture layers:**

1. **Applications** — login, device identity, signed data, robotics trust, firmware lifecycle, content authenticity
2. **Platform functions** — FIDO2 path, C2PA-compatible workflows, challenge-response, signing, provisioning, SDK support
3. **Root-of-trust layer** — Dynamic PUF, hardware entropy, root identity management, key derivation support
4. **Hardware** — chips, modules, secure MCU platform, portable trust keys

---

### Section: Evaluation without overexposure

**Headline:**  
Evaluation support without exposing unnecessary internals.

**Body copy:**  
IIST provides public materials that explain product value, trust architecture, and integration paths. Detailed electrical, protocol, command, timing, and implementation specifications are shared through the appropriate technical package or qualified engagement.

For SESIP-related discussions, IIST can help customers review how hardware-rooted trust functions may map into broader Cyber Resilience Act application planning.

**CTA:** Request Technical Package

---

## 6. Products Page: `products.html`

### SEO

**Title:** IIST Products | Secure Chips, Modules, Ankhor Key  
**Meta description:** Explore IIST product families: SASE01EPZS / SASe Chip, SASp Secure MCU roadmap, hardware trust modules, and Ankhor Key for authentication, signing, and hardware-rooted trust.

### Page hero

**Eyebrow:** Products

**Headline:**  
Hardware trust products for different integration paths.

**Subheadline:**  
IIST offers secure chips, modules, portable hardware trust keys, and a secure MCU platform roadmap so teams can adopt Dynamic PUF-based trust at the level that fits their product design.

---

### Product 1: SASE01EPZS / SASe Chip

**Product label:** Secure co-processor

**Headline:**  
SASE01EPZS / SASe Chip

**Subheadline:**  
Secure co-processor for embedded trust anchoring.

**Public product copy:**  
SASE01EPZS is IIST’s Dynamic PUF-based secure co-processor platform for embedded systems. It is designed to help OEMs and device makers add hardware-rooted identity, trust separation, secure challenge-response behavior, and protected lifecycle functions to connected products.

**Public highlights:**

- Dynamic PUF-based hardware trust foundation
- Hardware-rooted identity support
- Multiple trust-function architecture
- Secure challenge-response capability
- Embedded host integration
- Support for provisioning and lifecycle workflows
- Designed for AIoT, industrial, networking, robotics, and connected-device applications
- SESIP-related evaluation resources available for qualified discussions
- CRA mapping support available for product security planning

**Best for:**  
OEMs and embedded hardware teams that need a hardware-rooted trust anchor close to the device.

**CTA:** Request SASe Product Brief

**Do not publish on page:**  
No interface speeds, clocks, power, memory sizes, seed sizes, exact challenge-response sizes, package details, command tables, cryptographic internals, default token behavior, or detailed protocol information.

---

### Product 2: SASp Secure MCU

**Product label:** Roadmap platform

**Headline:**  
SASp Secure MCU

**Subheadline:**  
Secure MCU platform roadmap for programmable trust functions.

**Public product copy:**  
SASp is IIST’s secure MCU platform direction for teams that need programmable embedded security functions with a Dynamic PUF-based trust foundation. It is designed to support broader trust roles inside connected products, including hardware-rooted identity, secure lifecycle architecture, and PQC-ready migration planning.

**Public highlights:**

- Secure MCU platform direction
- Dynamic PUF-based trust foundation
- Hardware entropy and identity support
- Programmable trust-function architecture
- Secure lifecycle planning
- PQC-ready system planning
- Roadmap discussion available by request

**Best for:**  
Product teams planning future embedded platforms where trust functions need to live closer to the main system architecture.

**CTA:** Discuss SASp Roadmap

---

### Product 3: Trust Modules

**Product label:** Integration accelerator

**Headline:**  
Hardware Trust Modules

**Subheadline:**  
Ready-to-integrate modules for faster evaluation and deployment.

**Public product copy:**  
IIST trust modules give OEMs, system integrators, and embedded teams a faster path to evaluate and deploy hardware-rooted trust. Modules are useful when teams want to test authentication, device identity, signing, or lifecycle workflows before committing to deeper chip-level integration.

**Public highlights:**

- Faster evaluation path
- OEM pilot support
- Reduced board-level integration friction
- Hardware-rooted identity functions
- Challenge-response and signing workflows
- Development-kit and SDK discussion available

**Best for:**  
Evaluation programs, pilot deployments, system integrators, and teams that want hardware-rooted trust without starting directly at silicon integration.

**CTA:** Discuss Module Integration

---

### Product 4: Ankhor Key

**Product label:** Portable trust anchor

**Headline:**  
Ankhor Key

**Subheadline:**  
Portable hardware trust anchor for authentication, signing, and secure access.

**Public product copy:**  
Ankhor Key is IIST’s portable hardware trust device for workflows that require user-facing or operator-facing hardware-rooted trust. It supports FIDO2 authentication paths and can be positioned for secure access, signing, C2PA-compatible pilot workflows, administrator authorization, and custom-defined scenario functions.

**Public highlights:**

- FIDO2 authentication path
- Portable hardware-rooted identity
- Signing and verification workflows
- Scenario-defined companion functions
- User, administrator, and operator trust scenarios
- Evaluation discussion available by request

**Best for:**  
Secure login, administrator access, field operator trust, content-signing pilots, and portable identity workflows.

**CTA:** View Authentication Solution

---

### Product CTA section

**Headline:**  
Need deeper technical detail?

**Body copy:**  
Detailed specifications, development-kit information, integration notes, and security evaluation materials are available through a qualified technical package.

**CTA:** Request Technical Package

---

## 7. Evaluation Page: `evaluation.html`

### SEO

**Title:** IIST Evaluation Resources | SESIP and CRA Mapping Support  
**Meta description:** IIST provides qualified technical resources, SESIP-related evaluation materials, and CRA mapping support for OEMs and connected-device product teams.

### Page hero

**Eyebrow:** Evaluation

**Headline:**  
Security evaluation support for real products.

**Subheadline:**  
IIST helps qualified customers connect hardware-rooted trust functions to security review, integration planning, SESIP-related resources, and Cyber Resilience Act application mapping.

---

### Section: Why evaluation matters

**Headline:**  
Hardware trust must fit the product security case.

**Body copy:**  
A secure component is only one part of a secure product. Connected-device manufacturers must also consider software lifecycle, secure updates, vulnerability handling, documentation, threat modeling, deployment process, supply chain, and user-facing security claims.

IIST’s role is to help customers understand how hardware-rooted trust functions can contribute to the larger product security case without overclaiming what one component can decide alone.

---

### Section: SESIP resources

**Headline:**  
SESIP-related resources for qualified discussions.

**Body copy:**  
IIST maintains SESIP-related evaluation resources for its hardware trust platform. These resources can support OEM security review, architecture discussion, and evidence planning. For SASE01EPZS, public SESIP Security Target resources identify the platform at a high level as a secure co-processor platform for embedded systems.

**Public-safe wording:**  
SESIP evaluation resources are available for qualified discussions, including support for mapping hardware-rooted trust functions to Cyber Resilience Act application requirements.

**Do not claim:**  
Do not claim that SESIP alone guarantees CRA compliance. Do not claim that IIST certifies the customer’s complete product for CRA. Do not claim that one chip makes a full product compliant.

---

### Section: CRA mapping support

**Headline:**  
CRA mapping support for connected-device manufacturers.

**Body copy:**  
The Cyber Resilience Act changes the security conversation for products with digital elements. Device makers increasingly need to explain how secure design, update handling, vulnerability response, identity, access, lifecycle management, and documentation fit together.

IIST can support CRA-oriented mapping discussions by helping customers identify where hardware-rooted trust may contribute evidence or architecture support in their product security case.

**Mapping discussion areas:**

- Hardware-rooted identity
- Provisioning and lifecycle architecture
- Challenge-response and authentication flows
- Firmware and update trust support
- Data integrity and provenance functions
- Vulnerability reporting and customer support process
- Integration assumptions and operational environment
- Documentation support for security review

**CTA:** Ask About SESIP / CRA Mapping

---

### Section: Technical package

**Headline:**  
Request the technical package.

**Body copy:**  
Detailed product specifications, development-kit information, integration notes, SDK support, and evaluation resources are available for qualified OEM, partner, and customer discussions.

**Package cards:**

1. Product brief
2. Integration guide
3. Development kit / SDK information
4. SESIP-related evaluation resources
5. CRA mapping workshop
6. Detailed datasheet under qualified engagement

**CTA:** Request Technical Package

**Link:**  
`mailto:service@iist.com.tw?subject=IIST%20Technical%20Package%20Request`

---

## 8. Resources Page: `resources.html`

### SEO

**Title:** IIST Resources | Trust Architecture and Product Briefs  
**Meta description:** Request IIST product briefs, Dynamic PUF overview, trust architecture materials, authentication solution notes, C2PA integration resources, and OEM evaluation materials.

### Page hero

**Eyebrow:** Resources

**Headline:**  
Resources for evaluation and integration.

**Subheadline:**  
Start with public overviews. Request deeper technical materials when you are ready to evaluate products, integration, or partnership.

---

### Public resources grid

#### Company Overview

A concise overview of IIST positioning, product categories, core technology, target customers, and primary use cases.

CTA: Request Overview

#### Dynamic PUF Overview

An introduction to Dynamic PUF and how IIST uses hardware behavior as a foundation for trust material.

CTA: Request Dynamic PUF Overview

#### Trust Architecture

A silicon-to-system explanation of how hardware-rooted trust supports authentication, identity, secure communication, provenance, and lifecycle functions.

CTA: Request Trust Architecture

#### Product Overview

A high-level guide to SASE01EPZS / SASe Chip, SASp Secure MCU, Trust Modules, and Ankhor Key.

CTA: Request Product Overview

#### Authentication Solutions

FIDO2 authentication paths and IIST custom-defined companion functions for scenario-specific trust.

CTA: Request Authentication Brief

#### C2PA / Content Authenticity

C2PA-compatible signing and verification workflows for content, machine data, logs, and provenance.

CTA: Request C2PA Brief

#### Robotics Trust

Trust model for robots, operators, sensor provenance, firmware lifecycle, and fleet verification.

CTA: Request Robotics Brief

#### OEM Integration Guide

A practical guide for OEMs evaluating hardware-rooted trust integration.

CTA: Request OEM Integration Guide

#### SESIP / CRA Mapping

Resources for connecting hardware-rooted trust functions to SESIP-related evaluation evidence and CRA application planning.

CTA: Ask About SESIP / CRA Mapping

---

### C2PA repeated notice for resource page

IIST supports C2PA-compatible content authenticity workflows. Official C2PA Trust List / root certificate registration is pending. Public validators may not yet recognize IIST-issued signatures as trusted under the official C2PA trust model.

---

## 9. Company Page: `company.html`

### SEO

**Title:** About IIST Inc. | Building Trust from Silicon  
**Meta description:** IIST Inc. builds hardware-rooted trust from silicon using Dynamic PUF technology, semiconductor design, security architecture, and OEM integration experience.

### Page hero

**Eyebrow:** Company

**Headline:**  
Building trust from silicon.

**Subheadline:**  
IIST combines semiconductor design, Dynamic PUF technology, security architecture, and product integration to help connected devices prove identity, protect data, and support trusted operation.

---

### Company story

**Headline:**  
From hardware security to trust infrastructure.

**Body copy:**  
Connected products are becoming identity-bearing, data-producing, AI-connected, and physically active systems. They need more than software security added at the end. They need trust infrastructure that starts at the hardware layer and continues through authentication, communication, data provenance, firmware lifecycle, and long-term product responsibility.

IIST was built around this idea: trust should be created where it is hardest to copy — inside the hardware itself. Our Dynamic PUF platform turns silicon behavior into a foundation for hardware-rooted trust functions that can be productized as chips, modules, portable trust keys, and future secure MCU platforms.

---

### Taiwan and Europe bridge

**Headline:**  
Dynamic trust by design, built across ecosystems.

**Body copy:**  
IIST is rooted in Taiwan’s semiconductor ecosystem and connected to industrial deployment needs in Europe and global markets. Taiwan brings semiconductor speed, foundry access, hardware execution, and productization. Europe brings system integration, industrial deployment, regulation-driven trust requirements, and Cyber Resilience Act pressure.

Together, these forces shape IIST’s mission: turn hardware security into practical trust infrastructure for connected products.

**Visual direction:**  
Two-column ecosystem graphic:

Left: **Taiwan** — semiconductor, execution speed, productization  
Right: **Europe / Global Markets** — industrial deployment, system integration, CRA, trust infrastructure

---

### Team capability strip

**Headline:**  
A team built for trust hardware.

**Capability cards:**

- Semiconductor design
- Dynamic PUF research foundation
- Security architecture
- Product implementation
- OEM integration
- Business development and partnerships
- Academic and ecosystem support

### Optional public team copy

Use only if the website template has a team section.

#### Prof. Wai-Chi Fang

Founder & Director. Research foundation and IC design origin.

#### Prof. Kow-Ming Chang

Chairman & President. Academic and strategic leadership.

#### Jack Lin

Co-Founder & CFO. Business development, partnerships, and fundraising.

#### Nicolas Fahier, Ph.D.

Co-Founder & CTO. Security architecture and deployment execution.

#### Martin / Meng-Ting Wan

IC Design Lead / IC Design Director. Semiconductor design and product implementation.

**Note:** Confirm final preferred English spelling and titles before publishing.

---

### Closing company CTA

**Headline:**  
We secure where trust is created.

**Body copy:**  
IIST does not only help products authenticate users. We help products create stronger evidence of identity, origin, and trusted operation from the hardware upward.

**CTA:** Contact IIST

---

## 10. Contact Page: `contact.html`

### SEO

**Title:** Contact IIST Inc. | Product Evaluation and Integration  
**Meta description:** Contact IIST for product evaluation, OEM integration, FIDO2 authentication, C2PA-compatible workflows, robotics trust, chiplet tracking, SESIP resources, and CRA mapping support.

### Page hero

**Eyebrow:** Contact

**Headline:**  
Start an integration conversation.

**Subheadline:**  
Tell us what you are building. IIST can help evaluate which hardware-rooted trust path fits your product, deployment, or partnership need.

---

### Contact paths

#### Product evaluation

For teams evaluating chips, modules, development kits, or Ankhor Key.

CTA: Request Product Evaluation

#### OEM / partner integration

For OEMs, ODMs, system integrators, and embedded teams planning deployment.

CTA: Discuss Integration

#### SESIP / CRA mapping

For connected-device manufacturers planning security review, evaluation evidence, or CRA application mapping.

CTA: Ask About SESIP / CRA Mapping

#### Strategic discussion

For investors, strategic partners, semiconductor ecosystem partners, and business development conversations.

CTA: Start Strategic Discussion

---

### Contact form fields

- Name
- Company
- Email
- Role
- Interest area
- Message

Interest dropdown:

- Product evaluation
- OEM integration
- FIDO2 authentication
- C2PA / content authenticity
- Robotics trust
- Chip / chiplet trust tracking
- Secure communication / PQC-ready planning
- SESIP / CRA mapping
- Investor or strategic discussion

### Fallback behavior

If there is no backend form handler, use mailto:

`mailto:service@iist.com.tw?subject=IIST%20Website%20Inquiry`

### Contact info block

**Email:** service@iist.com.tw  
**Website:** https://www.iist-site.com

---

## 11. Image and Graphic Placement Plan

Use `/img/` assets only when they clearly match the content. Avoid using unrelated stock images as product photos. If a product image is not obvious, use a CSS/SVG technical diagram or labeled placeholder instead.

### Homepage

- Hero: best chip/silicon/circuit/digital-DNA image
- Problem: CSS/SVG “Write / Store / Copy / Reuse” diagram
- Solution: silicon-to-system layered trust diagram
- Products: actual product photos if identifiable; otherwise technical cards
- Final CTA: abstract circuit or dark gradient with trust nodes

### Solutions page

- FIDO2 section: USB key/authenticator image or sequence diagram
- C2PA section: content/document/media image or provenance pipeline
- Robotics section: robotics/automation/AIoT image or robot-fleet diagram
- Chiplet tracker: wafer/chip/package image or manufacturing timeline
- Secure communication: network/node diagram
- SESIP/CRA: compliance/evaluation architecture card, not a legal image

### Technology page

- Dynamic PUF: chip/digital-DNA image
- Root identity: central chip with multiple branches
- Custom functions: role-separated trust matrix
- Evaluation: clean document/evidence stack diagram

### Products page

- SASE01EPZS / SASe: real chip/product image if available; otherwise chip card
- SASp: secure MCU/block diagram, roadmap styling
- Modules: real module/board photo if available
- Ankhor Key: USB key photo if available

### Company page

- Taiwan / semiconductor ecosystem image
- Team or founder photos only if available and approved
- Otherwise use abstract ecosystem map: Taiwan ↔ Europe / Global Markets

---

## 12. Reusable Microcopy

### CTAs

- Explore Solutions
- View Products
- Request Technical Package
- Contact IIST
- Discuss Integration
- Ask About SESIP / CRA Mapping
- Request Product Brief
- View Authentication Solution
- View C2PA Integration Path

### Badges

- Generated, not stored
- Hardware-rooted identity
- Dynamic PUF
- Multiple trust functions
- Built for OEM integration
- C2PA-compatible workflow
- FIDO2 integration path
- PQC-ready planning
- SESIP resources available
- CRA mapping support

### Disclaimers

**C2PA disclaimer:**  
IIST supports C2PA-compatible content authenticity workflows. Official C2PA Trust List / root certificate registration is pending. Public validators may not yet recognize IIST-issued signatures as trusted under the official C2PA trust model.

**SESIP / CRA disclaimer:**  
IIST maintains SESIP-related evaluation resources for qualified discussions, including support for mapping hardware-rooted trust functions to Cyber Resilience Act application requirements. Final CRA conformity depends on the complete customer product, software, lifecycle process, vulnerability handling, documentation, operating environment, and market requirements.

**Technical disclosure disclaimer:**  
Detailed electrical, protocol, command, timing, memory, and implementation specifications are available through qualified technical documentation or customer engagement.

**PQC disclaimer:**  
IIST supports PQC-ready architecture planning and cryptographic lifecycle discussions. This should not be read as a claim that every product includes a complete public hardware-based PQC implementation.

---

## 13. Codex Implementation Prompt

Use this prompt inside Codex:

```text
You are working inside the IIST Inc. website repository. Build a polished multi-page website using the existing template and visual style found in `/ref/`, and the image assets found in `/img/`.

FIRST STEPS
1. Inspect `/ref/` and identify the template HTML, CSS, JavaScript, layout rhythm, typography, colors, buttons, cards, header/footer, spacing, and responsive behavior.
2. Inspect `/img/` and map every image by likely use: chip/silicon, USB key, module/board, robotics/AIoT, content/provenance, abstract/circuit, team/company.
3. Preserve the style of `/ref/`. Extend it into a multi-page website rather than inventing a new design system.
4. Do not publish detailed chip specifications, exact interface speeds, clocks, power values, memory sizes, seed sizes, token behavior, command tables, package details, timing diagrams, or implementation internals.

CREATE THESE PAGES
- `index.html`
- `solutions.html`
- `technology.html`
- `products.html`
- `evaluation.html`
- `resources.html`
- `company.html`
- `contact.html`

GLOBAL NAVIGATION
Header links:
- Solutions
- Technology
- Products
- Evaluation
- Resources
- Company
- Contact

Primary CTA: Contact IIST
Secondary CTA: Request Technical Package

DESIGN DIRECTION
The site should look like a premium semiconductor/security company website: modern, technical, serious, clean, and trustworthy. Use dark technical sections, strong whitespace, precise cards, subtle gradients, circuit-grid overlays, and clean SVG/HTML diagrams where product images are missing.

CLAIM DISCIPLINE
Use careful words such as “supports,” “enables,” “designed for,” “qualified evaluation,” “integration path,” “C2PA-compatible,” “PQC-ready planning,” and “CRA mapping support.”

Do not claim:
- unbreakable security
- impossible to hack
- guaranteed CRA compliance
- complete supply-chain solution
- official C2PA Trust List registration completed
- detailed public chip specs
- private customer names or certification IDs unless already present in the approved website assets

CONTENT
Use the full website copy from `iist_website_content_pack.md` or paste the content from this file directly into the pages. Keep section headings and wording close to the source content.

REQUIRED CONTENT HIGHLIGHTS
Homepage:
- Hero headline: “Hardware-rooted trust for connected devices.”
- Problem headline: “Stored secrets do not scale trust.”
- Solution headline: “Secrets should be born, not stored.”
- Include solution cards for FIDO2, C2PA, Robotics Trust, Chip/Chiplet Trust Tracking.
- Include product preview for SASE01EPZS / SASe Chip, SASp Secure MCU, Trust Modules, Ankhor Key.

Solutions page:
- FIDO2 + custom-defined scenario functions must clearly separate FIDO2/WebAuthn standard flow from IIST companion custom-defined functions.
- C2PA section must include warning: official C2PA Trust List / root certificate registration pending.
- Robotics trust section must include statement: robots are physical actors and should prove identity, state, data origin, and authorization before action.
- Chip/chiplet trust tracker section must avoid overclaiming and say PUF supports traceability as one layer when integrated with manufacturing, packaging, secure records, and verification policy.
- Secure communication section must say PQC-ready planning, not full hardware PQC claim.
- SESIP/CRA section must say IIST can support mapping discussions, not guarantee CRA compliance.

Technology page:
- Explain Dynamic PUF as hardware digital DNA.
- Explain one device / many trust functions.
- Explain custom-defined scenario functions without publishing token or command details.
- Include evaluation support without overexposure.

Products page:
- Use high-level product briefs only.
- Do not create detailed public datasheet tables.
- For SASE01EPZS / SASe Chip, use public copy: “Dynamic PUF-based secure co-processor platform for embedded systems,” “hardware-rooted identity,” “multiple trust-function architecture,” and “qualified SESIP / CRA mapping discussions.”
- Add CTA for technical package under qualified engagement.

Evaluation page:
- Include SESIP resources and CRA mapping support.
- Include disclaimers that final CRA conformity depends on the complete customer product, software, lifecycle process, vulnerability handling, documentation, operating environment, and market requirements.

Resources page:
- Create request cards for Company Overview, Dynamic PUF Overview, Trust Architecture, Product Overview, Authentication Solutions, C2PA / Content Authenticity, Robotics Trust, OEM Integration Guide, SESIP / CRA Mapping.
- If documents do not exist in `/docs/`, use mailto fallback.

Company page:
- “Building trust from silicon.”
- Taiwan ↔ Europe / global market ecosystem story.
- Optional team section only if template/assets support it. Confirm final names/titles before publishing.

Contact page:
- Contact paths for product evaluation, OEM integration, SESIP/CRA mapping, strategic discussion.
- Form fields: name, company, email, role, interest area, message.
- Mailto fallback: `mailto:service@iist.com.tw?subject=IIST%20Website%20Inquiry`

IMAGE PLACEMENT
Use `/img/` assets as follows:
- Homepage hero: best chip/silicon/digital-DNA image.
- FIDO2: USB key/authenticator image or flow diagram.
- C2PA: content/media/document image or provenance pipeline.
- Robotics: robot/AIoT/automation image or fleet diagram.
- Chiplet tracker: wafer/chip/package image or manufacturing timeline.
- Technology: chip/circuit image and layered trust diagram.
- Products: actual product images if identifiable; otherwise technical cards.
- Company: Taiwan/semiconductor/team image if available; otherwise ecosystem diagram.

ACCESSIBILITY
- Semantic HTML
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation
- Visible focus states
- High contrast text
- Responsive mobile navigation

SEO
Add page titles and meta descriptions as defined in the content pack.

FINAL QUALITY CHECK
Before finishing:
- All pages open locally.
- Header/footer links work.
- No broken image paths.
- No console errors.
- Mobile layout works.
- No detailed chip specs are public.
- C2PA warning appears wherever C2PA is discussed.
- SESIP mentions include CRA mapping support and no compliance guarantee.
- PQC wording is careful.
- FIDO2 standard flow and IIST companion functions are separated.
- PUF chiplet tracker avoids overclaiming.
- CTAs do not point to missing files; use mailto fallback where needed.

DELIVERABLE
Create the complete website files and provide a short implementation summary listing pages created, assets used, missing image/doc fallbacks, where the C2PA notice appears, where SESIP/CRA mapping appears, and how to preview the site.
```

---

## 14. Final Publishing Checklist

Before publishing online, review these items manually:

- No exact chip specs are exposed.
- No default token or root identity internals are exposed.
- No unreleased customer name is exposed.
- C2PA notice is visible.
- SESIP is always paired with CRA mapping support language.
- CRA language avoids compliance guarantees.
- PQC language says planning/readiness, not unsupported product claims.
- FIDO2 wording separates standards-based authentication from IIST custom scenario functions.
- Chip/chiplet PUF tracker wording avoids “solves counterfeiting.”
- Contact mailto works.
- Product images are accurate.
- Team names and titles are confirmed before publication.

