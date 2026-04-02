import { useEffect } from "react";
import { Download, Printer, X } from "lucide-react";
import { Link } from "wouter";
import { PageSEO } from "@/components/PageSEO";

export default function LetterVoters() {
  useEffect(() => {
    document.title = "Open Letter to Voters — David Chandler, Mildenhall Division";
    // PageSEO also sets this — useEffect kept for non-JS fallback
  }, []);

  const handlePrint = () => window.print();

  return (
    <>
      <PageSEO
        title="Open Letter to Voters | David Chandler — Mildenhall Division"
        description="David Chandler's open letter to all residents of the Mildenhall Division. Three solemn public pledges: never cancel elections, freeze councillor allowances, hold parish surgeries in every village. Print and share."
        path="/letter"
      />
      {/* Print action bar — hidden when printing */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-primary text-white py-3 px-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold">Open Letter to Voters</span>
          <span className="text-white/60 text-xs hidden sm:inline">Save as PDF using your browser's print dialog</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-accent text-primary text-sm font-bold px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
          <Link href="/" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-3 py-2 rounded-lg transition-colors">
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Close</span>
          </Link>
        </div>
      </div>

      {/* Letter body */}
      <div className="print:pt-0 pt-16 min-h-screen bg-stone-100 print:bg-white">
        <div
          id="letter-content"
          className="
            max-w-[210mm] mx-auto
            bg-white
            print:shadow-none shadow-2xl
            px-12 py-12
            print:px-[20mm] print:py-[15mm]
            min-h-[297mm]
            font-serif
            text-gray-900
            print:text-black
          "
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {/* Header: Crest + Candidate info */}
          <div className="flex flex-col items-center mb-8 border-b-2 border-gray-800 pb-8">
            <img
              src={`${import.meta.env.BASE_URL}images/mildenhall-crest-letter.jpg`}
              alt="Mildenhall High Town, Barton Mills, Worlington & Freckenham Parishes — Unitas et Vigilantia"
              className="w-44 h-auto mb-5"
            />
            <h1 className="text-2xl font-bold text-center tracking-wide uppercase text-gray-900">
              David Chandler
            </h1>
            <p className="text-base text-center text-gray-700 mt-1">
              Independent Candidate — Mildenhall Division<br />
              West Suffolk County Council
            </p>
            <p className="text-sm text-center text-gray-500 mt-2 italic">
              Serving: Mildenhall High Town · Barton Mills · Worlington · Freckenham
            </p>
          </div>

          {/* Date and salutation */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">March / April 2026</p>
            <p className="text-base leading-relaxed">
              Dear Resident of Mildenhall High Town, Barton Mills, Worlington or Freckenham,
            </p>
          </div>

          {/* Opening */}
          <div className="mb-7 space-y-3 text-[15px] leading-relaxed text-gray-800">
            <p>
              My name is <strong>David Chandler</strong> and I am standing as your Independent candidate for the Mildenhall Division at West Suffolk County Council. I am not affiliated with any political party. I am motivated by a simple belief: that every person in our community deserves honest, active, and fearless representation — regardless of where they live, how they vote, or how much influence they have.
            </p>
            <p>
              I am writing to you directly because I know that not everyone has access to the internet, to social media, or to the campaign website I have created. Democracy only works when every voter is informed. Please pass this letter on to any neighbour, family member, or friend who may not have seen it online.
            </p>
            <p>
              Before asking for your vote, I want to make three solemn, public pledges — not promises that will be forgotten after polling day, but commitments I am prepared to be held to account for throughout my entire term in office.
            </p>
          </div>

          {/* Pledges */}
          <div className="space-y-6 mb-8">

            {/* Pledge 1 */}
            <div className="border-l-4 border-gray-800 pl-5 py-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Pledge One</p>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                I Will Never Vote to Cancel an Election
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-800">
                The recent upheaval over Suffolk's local government reorganisation — where elections were delayed, boundaries redrawn, and decisions imposed from above without adequate public consent — represents one of the greatest betrayals of voters in this county's recent democratic history. Residents had every right to expect certainty, transparency, and respect for the ballot box. Instead, confusion reigned.
              </p>
              <p className="text-[14px] leading-relaxed text-gray-800 mt-2">
                I pledge that, if elected, <strong>I will never vote in favour of cancelling, suspending, or indefinitely delaying any scheduled election, referendum, or democratic vote</strong> — except in the event of a declared wartime national emergency, or other statutory contingency expressly provided for in law. The public's right to vote is not a technicality. It is the foundation of everything. I will defend it without compromise.
              </p>
            </div>

            {/* Pledge 2 */}
            <div className="border-l-4 border-gray-800 pl-5 py-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Pledge Two</p>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                I Will Oppose Any Increase in Councillors' Allowances and Expenses
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-800">
                Elected representatives must lead by example. At a time when residents in Mildenhall, Barton Mills, Worlington, and Freckenham are facing rising council tax, reduced services, and a genuine cost-of-living crisis, it would be unconscionable for councillors to vote themselves pay rises.
              </p>
              <p className="text-[14px] leading-relaxed text-gray-800 mt-2">
                I pledge that <strong>for the full duration of my term in office, I will vote against any proposal to increase councillors' allowances or expenses, including my own — holding the annual increase to zero (£0) in every year I serve</strong>. If we ask the public to accept a squeeze, we must accept one too. This is not a financial sacrifice for me; it is a matter of basic principle.
              </p>
            </div>

            {/* Pledge 3 */}
            <div className="border-l-4 border-gray-800 pl-5 py-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Pledge Three</p>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Regular Community Meetings and Councillor Surgeries in Every Parish
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-800">
                Your councillor should be visible, accessible, and present in your community — not just at election time. I have spoken with too many residents who feel they have no idea who represents them or how to contact them when something goes wrong.
              </p>
              <p className="text-[14px] leading-relaxed text-gray-800 mt-2">
                I pledge that <strong>each of our four parishes — Mildenhall High Town, Barton Mills, Worlington, and Freckenham — will have access to a regular open meeting and a councillor surgery, held at a local venue where available, on a day and time agreed with the community</strong>. No appointment. No gatekeepers. Just your elected representative, sitting in your village, ready to listen and help.
              </p>
            </div>
          </div>

          {/* Thank you and survey */}
          <div className="border-t border-gray-300 pt-6 mb-7">
            <h2 className="text-base font-bold text-gray-900 mb-3">A Note of Thanks — and an Invitation</h2>
            <div className="space-y-3 text-[14px] leading-relaxed text-gray-800">
              <p>
                To everyone who has visited the campaign website at <strong>davidchandler.uk</strong> — thank you. Your time and attention mean everything to a community campaign run on honesty rather than a party machine. Every page view, every shared link, and every conversation that followed is part of building the kind of local politics our division deserves.
              </p>
              <p>
                The website contains a series of short surveys on the issues that matter most to our community — transport, housing, policing, the environment, employment, and more. <strong>I would be very grateful if you, or anyone you can reach, would take a few minutes to complete one or more of these surveys.</strong> Your views will directly shape the evidence base I take into the council chamber. The surveys are completely anonymous and take only a few minutes.
              </p>
              <p className="font-medium">
                Visit: <strong>davidchandler.uk</strong> — then click <em>"Have Your Say"</em>
              </p>
              <p>
                If you do not have internet access but would like your views recorded, please ask a family member, neighbour, or local library staff to help you complete the survey on your behalf.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mb-8 text-[14px] leading-relaxed text-gray-800">
            <p className="mb-3">
              Whatever you decide on polling day, I hope this letter has shown you that independent, evidence-based, community-focused representation is possible in the Mildenhall Division. I am not asking you to trust a party. I am asking you to trust a neighbour who will show up, tell the truth, and fight for you.
            </p>
            <p>
              Thank you for reading. Please share this letter with anyone who might not have seen it online.
            </p>
          </div>

          {/* Signature block */}
          <div className="mb-8">
            <p className="text-[14px] text-gray-800 mb-1">Yours sincerely,</p>
            <p
              className="text-5xl text-gray-800 mb-1 leading-none"
              style={{ fontFamily: "'Georgia', cursive", fontStyle: "italic", letterSpacing: "-0.02em" }}
            >
              David Chandler
            </p>
            <div className="mt-3 text-[13px] text-gray-700 space-y-0.5">
              <p><strong>David Chandler</strong></p>
              <p>Independent Candidate — Mildenhall Division</p>
              <p>West Suffolk County Council Election 2025</p>
              <p>55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT</p>
            </div>
          </div>

          {/* Legal imprint */}
          <div className="border-t-2 border-gray-400 pt-5 mt-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Election Communication — Legal Imprint</p>
            <div className="text-[11px] text-gray-600 leading-relaxed space-y-1">
              <p>
                <strong>Promoted by:</strong> David Chandler, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT
              </p>
              <p>
                <strong>On behalf of:</strong> David Chandler (Independent Candidate for the Mildenhall Division, West Suffolk County Council)
              </p>
              <p>
                <strong>Published by:</strong> David Chandler Campaign, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT
              </p>
              <p>
                <strong>Printed / distributed by:</strong> The recipient of this letter is authorised to reproduce and share it freely for non-commercial election campaigning purposes within the Mildenhall Division.
              </p>
              <p className="mt-2 text-gray-500">
                This election communication is published in compliance with Section 143 of the Political Parties, Elections and Referendums Act 2000 (PPERA) and the Representation of the People Act 1983. The promoter and publisher details are as stated above. This material is authorised for use in the Mildenhall Division only. Campaign website: davidchandler.uk
              </p>
            </div>
          </div>

        </div>

        {/* Bottom action bar — screen only */}
        <div className="print:hidden max-w-[210mm] mx-auto py-6 px-4 flex flex-wrap gap-3 justify-center">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow"
          >
            <Printer className="w-4 h-4" />
            Print or Save as PDF
          </button>
          <p className="text-xs text-gray-500 self-center text-center">
            In your browser's print dialog, choose "Save as PDF" to download. Select A4 paper size for best results.
          </p>
        </div>
      </div>

      {/* Print-specific global styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body * { visibility: hidden; }
          #letter-content, #letter-content * { visibility: visible; }
          #letter-content {
            position: fixed;
            top: 0;
            left: 0;
            width: 210mm;
            min-height: 297mm;
            padding: 15mm 20mm;
            box-shadow: none !important;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}
