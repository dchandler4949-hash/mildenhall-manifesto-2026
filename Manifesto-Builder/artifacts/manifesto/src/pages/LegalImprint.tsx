export default function LegalImprint() {
  return (
    <div className="w-full bg-background min-h-[70vh] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <img 
            src={`${import.meta.env.BASE_URL}images/mildenhall-division-crest.jpg`} 
            alt="Mildenhall Division Crest" 
            className="w-32 h-auto rounded-xl shadow-lg border border-border"
          />
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-primary inline-block pb-2 border-b-2 border-destructive">Legal Imprint</h1>
        </div>
        
        <div className="prose prose-lg text-muted-foreground bg-card p-8 sm:p-12 rounded-2xl shadow-lg border border-border/50 mx-auto">
          <p className="font-semibold text-foreground text-xl mb-6 text-center leading-relaxed">
            This election campaign material is published in accordance with the Political Parties, Elections and Referendums Act 2000 (PPERA) and the Representation of the People Act 1983.
          </p>

          <div className="space-y-6 mt-10">
            <div className="p-8 bg-primary/5 rounded-xl border-l-4 border-primary">
              <h3 className="text-primary font-bold text-xl m-0 mb-6 font-serif">Campaign Details</h3>
              <ul className="space-y-4 m-0 list-none pl-0 text-base">
                <li><strong className="text-foreground">Promoter:</strong> David Chandler, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT</li>
                <li><strong className="text-foreground">On behalf of:</strong> David Chandler (Independent)</li>
                <li><strong className="text-foreground">Publisher:</strong> David Chandler Campaign, Mildenhall, Suffolk</li>
                <li><strong className="text-foreground">Website:</strong> This website — mildenhall.first (campaign site)</li>
                <li><strong className="text-foreground">Division:</strong> Mildenhall Division, West Suffolk County Council</li>
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-sm">
              <h4 className="text-foreground font-bold text-lg mb-3">Legal Compliance</h4>
              <p>
                In compliance with Section 143 of the Political Parties, Elections and Referendums Act 2000, all election material must contain an imprint detailing the promoter and publisher. This digital material fulfils those requirements.
              </p>
              <p className="mt-4">
                Any data collected via surveys or contact forms on this website is processed in accordance with the Data Protection Act 2018 and UK GDPR. Data is held securely, used solely to respond to correspondence, and is not shared with any third party.
              </p>
              <p className="mt-4">
                For data enquiries, please use the <a href="/contact" className="text-primary underline hover:text-primary/80 font-semibold">Contact</a> page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
