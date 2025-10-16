# Title: Why K8s, Why Now?
Description: We will discuss the challenges of operating in a multi-stakeholder environment, the benefits Kubernetes provides in flexibility and scalability, and the pitfalls organizations should anticipate. Attendees will gain a grounded perspective on the benefits of orchestration, when Kubernetes is the right choice, and what precursors are necessary for adoption.  Bio:
Rhett is a Site Reliability Engineer in the Office of Information Technology, where he focuses on developer enablement and platform reliability. He brings nearly a decade of experience spanning complex multi-stakeholder environments. He approaches technology adoption from a pragmatic perspective. His recent work has centered on helping to build the on-premises orchestration offering. 
1. Opening (3–5 minutes)
* Hook:
    * “When it comes to kubernetes, you may have heard two extremes: Kubernetes is the silver bullet for all infrastructure woes… and critics (like David Heinemeier Hansson—creator of Ruby on Rails) say you should stick with a monolith. So which is right?”
* Context:
    * Introduce your org’s environment: a university with diverse stakeholders, many ‘masters,’ and workloads ranging from research apps to student portals.
    * State the central thesis: Kubernetes isn’t always necessary — but for us, it unlocks flexibility and scale we couldn’t achieve otherwise.
* Roadmap: What we’ll cover: challenges, Kubernetes’ benefits, why now, and pitfalls to avoid.

2. The Problem Space (5–8 minutes)
* University-specific challenges:
    * Diverse applications and teams, each with different requirements.
    * Seasonal, spiky workloads (e.g., registration week, admissions results).
    * Security and compliance constraints.
    * Pressure to modernize research computing and student-facing services simultaneously.
* Visual: A patchwork of apps running on separate servers, each “master” with their own setup. → Inefficiency and fragility.

3. What Kubernetes Offers (10–12 minutes)
* Strategic Benefits:
    * Flexibility across masters: multi-tenancy, namespaces, and policy-driven controls let different groups operate independently within a shared cluster.
    * Elastic scalability: handle bursts in demand without over-provisioning year-round.
    * Portability: run on-prem, cloud, or hybrid — critical for long-term academic investments.
    * Resilience: automated failover and self-healing — fewer midnight pages.
    * Consistency & governance: declarative configs reduce “snowflake servers.”
* Counter-arguments (DHH’s monolith critique):
    * Monoliths shine in smaller, product-focused startups where complexity can be avoided.
    * But our environment is inherently polyglot and decentralized — a single monolith is politically and technically impractical.
    * Frame K8s adoption as the “least-worst” option given complexity, not a vanity play.

4. Why Now? (5–8 minutes)
* Timing factors:
    * Kubernetes ecosystem is mature (better tooling, stability, enterprise support).
    * Internal skill base has grown (DevOps culture, cloud adoption).
    * Increasing demand for self-service from departments and OIT.
    * Strategic push: aligning with industry best practices.
* Visual: Timeline of Kubernetes maturity vs. your org’s readiness.

5. Pitfalls & Lessons Learned (5–8 minutes)
* Common Pitfalls:
    * Overcomplicating with Kubernetes too early.
    * Underestimating cultural/skills shift.
    * Treating Kubernetes as “set it and forget it” (it needs governance).
    * Hidden costs (monitoring, networking, upgrades).
* Mitigations:
    * Start with pilot workloads.
    * Provide training + guardrails.
    * Align adoption with specific, measurable outcomes (scalability, uptime, cost).

6. Key Takeaways (3–5 minutes)
* Kubernetes isn’t the default choice — but for a complex, multi-stakeholder environment, it’s the pragmatic one.
* Adoption is about governance and timing, not just technology.
* Success requires cultural change alongside technical rollout.

7. Q&A (5–10 minutes)
* Seed counter-arguments:
    * “Why not just keep things simple?”
    * “What about vendor lock-in?”
    * “How do we avoid Kubernetes becoming its own source of complexity?”

