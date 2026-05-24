import { RESUME_PDF_URL } from './urls';

export { RESUME_PDF_URL };

export interface SiteFile {
	id: string;
	filename: string;
	icon: string;
	iconColor: string;
	content: string;
	externalUrl?: string;
}

/** Wraps an array of line strings into editor-line divs with line numbers */
function lines(content: string[]): string {
	return content
		.map(
			(line, i) =>
				`<div class="editor-line"><span class="ln">${i + 1}</span><span class="lc">${line || '&nbsp;'}</span></div>`,
		)
		.join('');
}

export const siteFiles: SiteFile[] = [
	{
		id: 'about',
		filename: 'about.md',
		icon: 'file-text',
		iconColor: 'var(--color-limeCream)',
		content: lines([
			`<span class="syn-heading"># Marlon Ausby II</span>`,
			``,
			`<span class="syn-heading">### Solving problems with code and design</span>`,
			``,
			`<span class="syn-bold">**Status:**</span> Continuously Seeking`,
			``,
			`I'm a problem solver with a passion for building`,
			`solutions that are not only functional, but also`,
			`intuitive.`,
			``,
			`<span class="syn-hr">---</span>`,
			``,
			`<span class="syn-heading">## About Me</span>`,
			``,
			`Support engineer with 6+ years of experience`,
			`building secure, data-driven systems across`,
			`fintech, retail, and biomed—with a track record`,
			`of translating complex solutions into clear`,
			`value for customers. Through my background in`,
			`biomedical sciences and sales I bring rigor to`,
			`engineering problems and a customer-first mindset`,
			`to every stakeholder conversation.`,
			``,
			`<span class="syn-heading">## What I Do</span>`,
			``,
			`<span class="syn-list">-</span> <span class="syn-bold">**Design:**</span> Crafting intuitive interfaces`,
			`<span class="syn-list">-</span> <span class="syn-bold">**Develop:**</span> Building robust solutions`,
			`<span class="syn-list">-</span> <span class="syn-bold">**Deploy:**</span> Shipping to production`,
		]),
	},
	{
		id: 'experience',
		filename: 'experience.ts',
		icon: 'code',
		iconColor: '#3a86ff',
		content: lines([
			`<span class="syn-kw">type</span> <span class="syn-type">Experience</span> <span class="syn-op">=</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">location</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">[];</span>`,
			`<span class="syn-punc">};</span>`,
			``,
			`<span class="syn-cmt">// Professional experience</span>`,
			`<span class="syn-kw">const</span> <span class="syn-var">experience</span><span class="syn-punc">:</span> <span class="syn-type">Experience</span><span class="syn-punc">[]</span> <span class="syn-op">=</span> <span class="syn-punc">[</span>`,
			`  <span class="syn-punc">{</span>`,
			`    <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-str">"CRM Operations Architect"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-str">"My Well"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">location</span><span class="syn-punc">:</span> <span class="syn-str">"Remote, IL"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-str">"2026 — Present"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`      <span class="syn-str">"Architect HubSpot CRM operations, automation, and data models supporting client lifecycle and support workflows."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Own integrations and automation between HubSpot, internal platforms, and third-party tools (Google Sheets, Notion, APIs)."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Maintain dashboards and generate reports for leadership and cross-functional teams."</span><span class="syn-punc">,</span>`,
			`    <span class="syn-punc">],</span>`,
			`  <span class="syn-punc">},</span>`,
			`  <span class="syn-punc">{</span>`,
			`    <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-str">"Technical Support Specialist"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-str">"My Well"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">location</span><span class="syn-punc">:</span> <span class="syn-str">"Remote, IL"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-str">"2025 — 2026"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`      <span class="syn-str">"Engineered Python/TypeScript scripts for 40+ PCI compliant, vaulted data migrations (100K+ payment methods, 99.3% accuracy)."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Developed SQL reports and dashboards for 50+ clients and led fraud-detection initiatives that blocked over 200K+ suspicious transactions."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Built Python and TypeScript tooling to diagnose and resolve virtual POS transaction sync failures, improving settlement accuracy and reinforcing PCI DSS Level 1 compliance — over $1.3 Billion processed annually."</span><span class="syn-punc">,</span>`,
			`    <span class="syn-punc">],</span>`,
			`  <span class="syn-punc">},</span>`,
			`  <span class="syn-punc">{</span>`,
			`    <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-str">"Technical Consultant"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-str">"My Well"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">location</span><span class="syn-punc">:</span> <span class="syn-str">"Remote, IL"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-str">"2021 — 2024"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`      <span class="syn-str">"Engineered sales focused pipelines that details the status and quality of a lead, ultimately generating over $300,000 in ARR."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Coordinate FinTech architecture and adoption for over 80 organizations annually."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Engineered and managed API integrations between Google Sheets, Notion, and HubSpot."</span><span class="syn-punc">,</span>`,
			`    <span class="syn-punc">],</span>`,
			`  <span class="syn-punc">},</span>`,
			`  <span class="syn-punc">{</span>`,
			`    <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-str">"Founder & Operator"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-str">"The 7th Lab"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">location</span><span class="syn-punc">:</span> <span class="syn-str">"Remote, USA"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-str">"2018 — Present"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`      <span class="syn-str">"Lead cross-functional teams in planning, development, and deployment of 20+ full-stack projects using modern frameworks (Next.js, React, FastAPI) and cloud-native architectures (AWS, Docker)."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Instituted Agile/DevOps practices (CI/CD, Terraform) to accelerate release cycles, achieving quarterly profitable product launches for 5+ years."</span><span class="syn-punc">,</span>`,
			`    <span class="syn-punc">],</span>`,
			`  <span class="syn-punc">},</span>`,
			`  <span class="syn-punc">{</span>`,
			`    <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-str">"Junior Developer & Assistant Store Manager"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-str">"Vintage Etc."</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">location</span><span class="syn-punc">:</span> <span class="syn-str">"Tampa, FL"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-str">"2018 — 2020"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`      <span class="syn-str">"Developed/maintained e-commerce sites (WordPress, Shopify, MySQL, Square), cut load times by 40%."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Managed 15+ staff, optimized workflows, boosting efficiency 25%."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Automated reports & trained teams, saving 12 hours/week on admin tasks."</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Achieved the sale volume of $600,000+ in second-hand retail."</span><span class="syn-punc">,</span>`,
			`    <span class="syn-punc">],</span>`,
			`  <span class="syn-punc">},</span>`,
			`<span class="syn-punc">];</span>`,
			``,
			`<span class="syn-kw">export default</span> <span class="syn-var">experience</span><span class="syn-punc">;</span>`,
		]),
	},
	{
		id: 'homelab',
		filename: 'homelab.bash',
		icon: 'terminal',
		iconColor: 'var(--color-blazeOrange)',
		content: lines([
			`<span class="syn-cmt">#!/usr/bin/env bash</span>`,
			`<span class="syn-cmt"># =============================================</span>`,
			`<span class="syn-cmt"># The 7th Lab — HomeLab Operations</span>`,
			`<span class="syn-cmt"># Funded &amp; operated through my LLC, The 7th Lab</span>`,
			`<span class="syn-cmt"># =============================================</span>`,
			``,
			`<span class="syn-cmt"># I'm a problem solver, and engineering is the tool.</span>`,
			`<span class="syn-cmt"># This HomeLab hosts several enterprise-grade</span>`,
			`<span class="syn-cmt"># services and devices.</span>`,
			``,
			`<span class="syn-kw">set</span> <span class="syn-op">-euo</span> <span class="syn-var">pipefail</span>`,
			``,
			`<span class="syn-cmt"># --- Network: UniFi + Proxmox + NAS -----------</span>`,
			`<span class="syn-fn">network::deploy</span><span class="syn-punc">()</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-cmt"># Architect &amp; operate a 8 VLAN segmented UniFi</span>`,
			`  <span class="syn-cmt"># network with managed switching, Proxmox</span>`,
			`  <span class="syn-cmt"># virtualization, NAS storage tiers (2.5/10Gb),</span>`,
			`  <span class="syn-cmt"># VoIP, IP cameras, and isolated IoT workloads.</span>`,
			`  <span class="syn-kw">echo</span> <span class="syn-str">"[unifi]   6-VLAN topology online"</span>`,
			`  <span class="syn-kw">echo</span> <span class="syn-str">"[proxmox] virtualization cluster online"</span>`,
			`  <span class="syn-kw">echo</span> <span class="syn-str">"[nas]     2.5/10Gb storage tiers online"</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-cmt"># --- VPN: WireGuard mobile edge ---------------</span>`,
			`<span class="syn-fn">vpn::up</span><span class="syn-punc">()</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-cmt"># Maintain an active WireGuard VPN server</span>`,
			`  <span class="syn-cmt"># enabling secure remote access and mobile edge</span>`,
			`  <span class="syn-cmt"># networking for distributed users and devices.</span>`,
			`  <span class="syn-var">wg-quick</span> <span class="syn-op">up</span> <span class="syn-val">wg0</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-cmt"># --- Edge: Cloudflare Zero Trust --------------</span>`,
			`<span class="syn-fn">edge::publish</span><span class="syn-punc">()</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-cmt"># Deploy &amp; manage self-hosted applications and</span>`,
			`  <span class="syn-cmt"># APIs behind Cloudflare — leveraging DNS,</span>`,
			`  <span class="syn-cmt"># reverse proxying, SSL/TLS, and Zero Trust</span>`,
			`  <span class="syn-cmt"># controls for secure public exposure.</span>`,
			`  <span class="syn-var">cloudflared</span> <span class="syn-op">tunnel run</span> <span class="syn-val">the7thlab</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-cmt"># Boot the lab</span>`,
			`<span class="syn-fn">network::deploy</span> <span class="syn-op">&amp;&amp;</span> <span class="syn-fn">vpn::up</span> <span class="syn-op">&amp;&amp;</span> <span class="syn-fn">edge::publish</span>`,
		]),
	},
	{
		id: 'skills',
		filename: 'skills.json',
		icon: 'compass-drafting',
		iconColor: 'var(--color-electricGreen)',
		content: lines([
			`<span class="syn-punc">{</span>`,
			`  <span class="syn-prop">"languages"</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`    <span class="syn-str">"Python"</span><span class="syn-punc">,</span> <span class="syn-str">"C#"</span><span class="syn-punc">,</span> <span class="syn-str">"TypeScript"</span><span class="syn-punc">,</span> <span class="syn-str">"JavaScript"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Ruby"</span><span class="syn-punc">,</span> <span class="syn-str">"Go"</span><span class="syn-punc">,</span> <span class="syn-str">"SQL"</span><span class="syn-punc">,</span> <span class="syn-str">"HTML"</span><span class="syn-punc">,</span> <span class="syn-str">"CSS"</span><span class="syn-punc">,</span> <span class="syn-str">"Bash"</span>`,
			`  <span class="syn-punc">],</span>`,
			`  <span class="syn-prop">"frameworks"</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`    <span class="syn-str">"Next.js"</span><span class="syn-punc">,</span> <span class="syn-str">"Rails"</span><span class="syn-punc">,</span> <span class="syn-str">"React"</span><span class="syn-punc">,</span> <span class="syn-str">"FastAPI"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Astro"</span><span class="syn-punc">,</span> <span class="syn-str">"Playwright"</span><span class="syn-punc">,</span> <span class="syn-str">"Flutter"</span>`,
			`  <span class="syn-punc">],</span>`,
			`  <span class="syn-prop">"databases"</span><span class="syn-punc">:</span> <span class="syn-punc">[</span><span class="syn-str">"PostgreSQL"</span><span class="syn-punc">,</span> <span class="syn-str">"MySQL"</span><span class="syn-punc">],</span>`,
			`  <span class="syn-prop">"cloud_and_devops"</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`    <span class="syn-str">"AWS"</span><span class="syn-punc">,</span> <span class="syn-str">"Azure"</span><span class="syn-punc">,</span> <span class="syn-str">"Oracle"</span><span class="syn-punc">,</span> <span class="syn-str">"Cloudflare"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Docker"</span><span class="syn-punc">,</span> <span class="syn-str">"Proxmox"</span>`,
			`  <span class="syn-punc">],</span>`,
			`  <span class="syn-prop">"os_and_kernels"</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`    <span class="syn-str">"macOS"</span><span class="syn-punc">,</span> <span class="syn-str">"Windows"</span><span class="syn-punc">,</span> <span class="syn-str">"Linux (Debian)"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Arch Linux"</span><span class="syn-punc">,</span> <span class="syn-str">"Fedora Linux"</span><span class="syn-punc">,</span> <span class="syn-str">"Kali Linux"</span>`,
			`  <span class="syn-punc">],</span>`,
			`  <span class="syn-prop">"payment_and_security"</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`    <span class="syn-str">"PCI DSS Level 1"</span><span class="syn-punc">,</span> <span class="syn-str">"Fraud Detection"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Payment Gateway"</span>`,
			`  <span class="syn-punc">],</span>`,
			`  <span class="syn-prop">"other"</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`    <span class="syn-str">"REST APIs"</span><span class="syn-punc">,</span> <span class="syn-str">"Data Migrations"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Reporting &amp; Analytics"</span><span class="syn-punc">,</span> <span class="syn-str">"Presentations"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Demos"</span>`,
			`  <span class="syn-punc">]</span>`,
			`<span class="syn-punc">}</span>`,
		]),
	},
	{
		id: 'projects',
		filename: 'projects.sql',
		icon: 'sql',
		iconColor: '#ffbe0b',
		content: lines([
			`<span class="syn-cmt">-- Featured Projects</span>`,
			`<span class="syn-cmt">-- Querying all projects by Marlon Ausby II</span>`,
			``,
			`<span class="syn-kw">SELECT</span>`,
			`	<span class="syn-var">p.name</span><span class="syn-punc">,</span>`,
			`	<span class="syn-var">p.description</span><span class="syn-punc">,</span>`,
			`	<span class="syn-var">p.tech_stack</span><span class="syn-punc">,</span>`,
			`	<span class="syn-var">p.live_url</span>`,
			`	<span class="syn-var">d.name</span> <span class="syn-kw">AS</span> <span class="syn-prop">'developer'</span><span class="syn-punc">,</span>`,
			`	<span class="syn-var">o.name</span> <span class="syn-kw">AS</span> <span class="syn-prop">'organization'</span><span class="syn-punc">,</span>`,
			`<span class="syn-kw">FROM</span> <span class="syn-var">projects</span> <span class="syn-kw">AS</span> <span class="syn-str">p</span>`,
			`	<span class="syn-kw">JOIN</span> <span class="syn-var">developers</span> <span class="syn-kw">AS</span> <span class="syn-str">d</span> <span class="syn-kw">ON</span> <span class="syn-var">p.developer_id</span> <span class="syn-op">=</span> <span class="syn-var">d.id</span>`,
			`	<span class="syn-kw">JOIN</span> <span class="syn-var">organizations</span> <span class="syn-kw">AS</span> <span class="syn-str">o</span> <span class="syn-kw">ON</span> <span class="syn-var">p.organization_id</span> <span class="syn-op">=</span> <span class="syn-var">o.id</span>`,
			`<span class="syn-kw">WHERE</span> <span class="syn-var">p.developer_id</span> <span class="syn-op">=</span> <span class="syn-val">1</span>`,
			`	<span class="syn-kw">AND</span> <span class="syn-var">p.live</span> <span class="syn-op">=</span> <span class="syn-val">true</span>`,
			`<span class="syn-kw">ORDER BY</span> <span class="syn-var">name</span> <span class="syn-kw">ASC</span><span class="syn-punc">;</span>`,
			``,
			`<span class="syn-cmt">-- Query returned 3 rows</span>`,
		])
		+ `<div class="sql-results">
			<table class="sql-table">
				<thead>
					<tr>
						<th>name</th>
						<th>description</th>
						<th>tech_stack</th>
						<th>live_url</th>
						<th>developer</th>
						<th>organization</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>marlonii-web-suite</td>
						<td>Personal portfolio websites</td>
						<td>Astro, TypeScript, Tailwind</td>
						<td><a href="#">marlonii.com</a></td>
						<td>Marlon Ausby II</td>
						<td>By Marlon II</td>
					</tr>
					<tr>
						<td>the-bible-api</td>
						<td>Open Source scripture study tools</td>
						<td>Flutter, Go, PostgreSQL</td>
						<td><a href="#">scripturecommons.com</a></td>
						<td>Marlon Ausby II</td>
						<td>Scripture Commons</td>
					</tr>
					<tr>
						<td>go-fomu</td>
						<td>Form builder for agile teams</td>
						<td>Ruby, Rails, SQLite</td>
						<td><a href="#">gofomu.com</a></td>
						<td>Marlon Ausby II</td>
						<td>The 7th Lab</td>
					</tr>
					<tr>
						<td>cookout-yall</td>
						<td>Open source project for the cookout!</td>
						<td>PHP, Laravel, SQLite</td>
						<td><a href="#">cookoutyall.com</a></td>
						<td>Marlon Ausby II</td>
						<td>The 7th Lab</td>
					</tr>
					<tr>
						<td>gitchem</td>
						<td>Another great project</td>
						<td>Python, Svelte, MySQL</td>
						<td><a href="#">gitchem.io</a></td>
						<td>Marlon Ausby II</td>
						<td>The 7th Lab</td>
					</tr>
				</tbody>
			</table>
			<div class="sql-footer">(3 rows)</div>
		</div>`,
	},
	{
		id: 'education',
		filename: 'education.css',
		icon: 'palette',
		iconColor: 'var(--color-blueViolet)',
		content: lines([
			`<span class="syn-cmt">/* Education & Certifications */</span>`,
			``,
			`<span class="syn-sel">.degree</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-prop">--title</span><span class="syn-punc">:</span> <span class="syn-str">"Bachelor of Science in Biomedical Sciences"</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">--institution</span><span class="syn-punc">:</span> <span class="syn-str">"University of South Florida"</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">--graduation</span><span class="syn-punc">:</span> <span class="syn-str">"2019"</span><span class="syn-punc">;</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-sel">.degree</span><span class="syn-sel">::before</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-prop">content</span><span class="syn-punc">:</span> <span class="syn-fn">var</span><span class="syn-punc">(</span><span class="syn-prop">--title</span><span class="syn-punc">)</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">font-weight</span><span class="syn-punc">:</span> <span class="syn-val">bold</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">color</span><span class="syn-punc">:</span> <span class="syn-val">#69D7F2</span><span class="syn-punc">;</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-cmt">/* Relevant coursework */</span>`,
			`<span class="syn-sel">.coursework</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-prop">--courses</span><span class="syn-punc">:</span>`,
			`    <span class="syn-str">"Advnaced Biochemistry II"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Spectroscopic Analysis of Organic Compounds"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Organic Chemistry II"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Genetics"</span><span class="syn-punc">,</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-cmt">/* Certifications */</span>`,
			`<span class="syn-sel">.certifications</span> <span class="syn-punc">{</span>`,
			`<span class="syn-prop">list-style</span><span class="syn-punc">:</span> <span class="syn-val">none</span><span class="syn-punc">;</span>`,
			`<span class="syn-cmt">/* Add your certifications here */</span>`,
			`<span class="syn-punc">}</span>`,
		]),
	},
	{
		id: 'contact',
		filename: 'contact.html',
		icon: 'globe',
		iconColor: '#ffe6a7',
		content: lines([
			`<span class="syn-cmt">&lt;!-- Let's connect! --&gt;</span>`,
			`<span class="syn-tag">&lt;section</span> <span class="syn-attr">id</span><span class="syn-op">=</span><span class="syn-str">"contact"</span><span class="syn-tag">&gt;</span>`,
			`  <span class="syn-tag">&lt;h1&gt;</span>Get In Touch<span class="syn-tag">&lt;/h1&gt;</span>`,
			`  <span class="syn-tag">&lt;p&gt;</span>`,
			`    I'm always open to new opportunities and`,
			`    interesting projects. Feel free to reach out!`,
			`  <span class="syn-tag">&lt;/p&gt;</span>`,
			``,
			`  <span class="syn-tag">&lt;ul</span> <span class="syn-attr">class</span><span class="syn-op">=</span><span class="syn-str">"contact-links"</span><span class="syn-tag">&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>Email:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"mailto:hello@marlonii.com"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">hello@marlonii.com</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>GitHub:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"https://github.com/iam-marlonii"</span> <span class="syn-attr">target</span><span class="syn-op">=</span><span class="syn-str">"_blank"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">github.com/iam-marlonii</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>LinkedIn:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"https://www.linkedin.com/in/marlon-ausby-jr/"</span> <span class="syn-attr">target</span><span class="syn-op">=</span><span class="syn-str">"_blank"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">linkedin.com/in/marlon-ausby-jr</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>X:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"https://x.com/iam_marlonii"</span> <span class="syn-attr">target</span><span class="syn-op">=</span><span class="syn-str">"_blank"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">x.com/iam_marlonii</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>Instagram:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"https://www.instagram.com/iam.marlonii/"</span> <span class="syn-attr">target</span><span class="syn-op">=</span><span class="syn-str">"_blank"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">instagram.com/iam.marlonii</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>Reddit:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"https://www.reddit.com/user/iam-marlonii/"</span> <span class="syn-attr">target</span><span class="syn-op">=</span><span class="syn-str">"_blank"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">reddit.com/user/iam-marlonii</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>Substack:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"https://substack.com/@marlonausbyii"</span> <span class="syn-attr">target</span><span class="syn-op">=</span><span class="syn-str">"_blank"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">substack.com/@marlonausbyii</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`  <span class="syn-tag">&lt;/ul&gt;</span>`,
			`<span class="syn-tag">&lt;/section&gt;</span>`,
		]),
	},
	{
		id: 'resume',
		filename: 'resume.pdf',
		icon: 'download-file',
		iconColor: 'var(--color-vermilion)',
		externalUrl: RESUME_PDF_URL,
		content: lines([
			`<span class="syn-cmt">// resume.pdf</span>`,
			``,
			`<a href="${RESUME_PDF_URL}" target="_blank" rel="noopener noreferrer" style="color: var(--color-skyBlue); text-decoration: underline; text-underline-offset: 3px;">Open PDF in new tab →</a>`,
		]),
	},
];

export function getFileById(id: string | null): SiteFile {
	return siteFiles.find((f) => f.id === id) || siteFiles[0];
}
