import { Link } from "wouter";
import { Shield, Briefcase, Users, Heart, MessageSquare, Star } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";

const timeline = [
  { year: "RAF Mildenhall — MoD", role: "Air Mobility Specialist", detail: "Worked at RAF Mildenhall in the Ministry of Defence's Air Mobility directorate, gaining first-hand knowledge of how the base operates and how it affects the local community — operationally, economically, and socially." },
  { year: "HM Treasury Secondment", role: "Assessor, JEGS2000 Harmonisation Scheme", detail: "Seconded to Her Majesty's Treasury to serve as an assessor under the Joint Evaluation and Grading System 2000 (JEGS2000), a cross-departmental scheme to harmonise pay and grading across the public sector. This gave David deep insight into how government budgets are set — and where the system fails working people." },
  { year: "Trade Union", role: "Shop Steward, Health & Safety Representative, Lay Delegate", detail: "Served as an elected Shop Steward and Health & Safety Representative — representing colleagues in disputes, negotiating on pay and conditions, and ensuring employers met their legal responsibilities. Also served as a Lay Delegate, attending union conferences and shaping policy from the ground up." },
];

const values = [
  { icon: Shield, title: "Nobody Left Behind", body: "Every policy David proposes starts with the same question: who does this leave behind? The most vulnerable people — those with disabilities, those on low incomes, older residents, those in mental health crisis — should be protected first, not last." },
  { icon: Users, title: "Collective is Stronger", body: "David's career has been built on the belief that people achieve more together than alone. Whether through trade unions, community groups, or local democracy, collective action is how ordinary people win against powerful interests." },
  { icon: Heart, title: "Against Scapegoating", body: "David will not allow vulnerable people — benefit claimants, refugees, disabled people, the homeless — to be scapegoated for problems caused by those in power. He has seen this tactic used throughout his career and he will call it out wherever he encounters it." },
  { icon: Briefcase, title: "Evidence, Not Ideology", body: "David's background in MoD assessment and public sector evaluation means he understands how to use data. Policies should be based on what the evidence says works — not on ideology, not on what makes a good headline." },
  { icon: Star, title: "Rural Communities Matter", body: "Having lived and worked in the Mildenhall area, David knows how rural communities are systematically underfunded, overlooked, and underrepresented. The data is clear — and it drives everything in this campaign." },
  { icon: MessageSquare, title: "Open Door", body: "Politics only works if politicians listen. David's contact page is always open. He will attend community meetings, respond to messages personally, and make himself available to any resident — regardless of how they vote or whether they've voted before." },
];

export default function AboutDavid() {
  return (
    <div className="w-full bg-background min-h-screen">
      <PageSEO
        title="About David Chandler | Independent Candidate — Mildenhall Division"
        description="Learn about David Chandler — his background working at RAF Mildenhall, HM Treasury, and his commitment to serving Mildenhall High Town, Barton Mills, Worlington and Freckenham."
        path="/about"
      />
      {/* Hero */}
      <div className="bg-primary text-white pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="shrink-0">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white/10 border-4 border-accent flex items-center justify-center text-6xl font-serif font-bold text-accent shadow-2xl">
                DC
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
                Independent Candidate · Mildenhall Division
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">David Chandler</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                West Suffolk County Council — Mildenhall Division. Not affiliated with any political party. Motivated by fairness, evidence, and the belief that every person in our community deserves to be represented with honesty and dignity.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">MoD — RAF Mildenhall</span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">HM Treasury Secondment</span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">Shop Steward</span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">Health & Safety Rep</span>
                <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">Lay Delegate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Who is David Chandler?</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none space-y-4 leading-relaxed">
            <p>
              David Chandler is standing as an <strong className="text-foreground">independent candidate</strong> for the Mildenhall Division of West Suffolk County Council. He has no party whip, no political machine, and no donors to please. What he does have is decades of public service experience, a deep knowledge of how government works, and a genuine commitment to the people of Mildenhall High Town, Barton Mills, Worlington, and Freckenham.
            </p>
            <p>
              David describes himself as <strong className="text-foreground">socialist by personality and evidence by method</strong> — a combination that he developed through his career in the civil service, the trade union movement, and the Treasury. He believes that collective provision — properly funded public services, strong workers' rights, and a safety net that actually catches people — is not an outdated idea. It is the foundation of a civilised society.
            </p>
            <p>
              He knows from personal experience what it means to live and work in the Mildenhall area — to be frustrated by buses that don't come, to watch services cut year after year, and to see the same promises made at election time and forgotten afterwards. He is standing because he believes the Mildenhall Division deserves better — and because he is willing to do the work to make it happen.
            </p>
            <p>
              <strong className="text-foreground">This campaign is for everyone.</strong> Not just homeowners. Not just those who have always voted. Not just those who agree with David on every issue. If you live in the Mildenhall Division, you are who this campaign is for — regardless of your background, income, age, ability, or voting history.
            </p>
          </div>
        </section>

        {/* Career Timeline */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">Career in Public Service</h2>
          <div className="space-y-4">
            {timeline.map(({ year, role, detail }) => (
              <div key={role} className="bg-card border border-border rounded-xl p-6">
                <div className="flex flex-wrap items-start gap-4 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">{year}</span>
                  <h3 className="font-bold font-serif text-foreground text-lg">{role}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">What David Believes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <Icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-bold font-serif text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why standing as independent */}
        <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Why Independent?</h2>
          <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed space-y-4">
            <p>
              David is not standing under any party banner. That is a deliberate choice. Party politics at local government level too often means councillors follow whip lines from London rather than the needs of their constituents. A Conservative councillor must vote with the Conservative group even when it harms Mildenhall. A Labour councillor's priorities are set nationally.
            </p>
            <p>
              As an independent, <strong className="text-foreground">David's only obligation is to the residents of the Mildenhall Division</strong>. He can vote on every issue based on what the evidence and the community says is right — not what party HQ says is politically convenient. He can work with councillors from any party when it benefits the division, and oppose them when it does not.
            </p>
            <p>
              This is not about being above politics. David has strong values and he will not pretend otherwise. But those values will always be put in service of the people of this division — not a party machine.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-3">Get In Touch</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            David reads every message personally. Whether you have a question, a concern, or just want to share your view — he wants to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow transition-colors">
              Contact David
            </Link>
            <Link href="/surveys" className="px-6 py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors">
              Take a Survey
            </Link>
            <Link href="/manifesto" className="px-6 py-3 border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-colors">
              Read the Manifesto
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
