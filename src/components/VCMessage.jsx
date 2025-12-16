export default function VCMessage() {
  return (
    <section id="vice-chancellor-message" className="rounded-t-4xl -mt-10 pt-6 lg:py-20  bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3">
            <img src="/uniport-vc.png" alt="Vice Chancellor" className="w-full rounded-2xl shadow-lg object-cover" />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome Message from the Vice Chancellor</h2>
            <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 mb-6">
              "Dear UniPort students and partners, welcome to the SIWES platform—where learning meets opportunity. As Vice Chancellor, I am deeply committed to supporting every student to gain meaningful industry experience, grow professionally, and represent our University with excellence. Together, we bridge classroom knowledge with real-world impact."
            </blockquote>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Through this platform, you will connect with reputable organizations, access clear guidance, and receive responsive support from the SIWES Unit. Bring your curiosity, diligence, and integrity—UniPort stands firmly behind you as you take confident steps into the world of work.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-gray-100 pt-6">
              <div>
                <p className="font-semibold text-gray-900">Prof. Owunari A. Georgewill</p>
                <p className="text-accent-500 font-medium">Vice Chancellor</p>
                <p className="text-gray-700 text-sm mt-1">
                  PROFESSOR, CHIEF, SIR, OWUNARI ABRAHAM GEORGEWILL — KSC, JP (B.Med. Sc., MBBS., MSc., MD., UPH) FRSB London, FIIA, MSIOP, MIAME, MASN, MNMA, MWASP, MWASOT.
                </p>
                <p className="text-gray-600 mt-1 text-sm">9th Vice Chancellor of the University of Port Harcourt</p>
                <div className="mt-3 space-y-1 text-sm">
                  <p className="text-gray-700 font-mono">Email: owunari.georgewill@uniport.edu.ng</p>
                  <p className="text-gray-700 font-mono">Phone: 0803 317 0636</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
