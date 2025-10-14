// components/DirectorsMessage.jsx
export default function DirectorsMessage() {
  return (
    <section id="directors-message" className="rounded-t-4xl -mt-10 py-20 bg-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <img src="/SIWES_director.jpg" alt="Director" className="w-full rounded-2xl shadow-lg object-cover" />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome Message from the Director</h2>
            <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 mb-6">
              "Welcome to the SIWES UniPort platform. As we continue to bridge the gap between academic learning and practical industry experience, this platform serves as your gateway to meaningful industrial attachments."
            </blockquote>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment is to ensure every University of Port Harcourt student gains valuable hands-on experience that complements their academic journey. Through strategic partnerships with leading organizations, we facilitate placements that not only meet academic requirements but also prepare you for successful careers.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-gray-100 pt-6">
              <div>
                <p className="font-semibold text-gray-900">Dr. Ibinabo Fubara Bob-Manuel</p>
                <p className="text-accent-500 font-medium">AG Director, SIWES Unit</p>
                <p className="text-gray-500">University of Port Harcourt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}