function Highlights() {
  const specs = [
    {
      value: "48MP",
      label: "Principal",
      text: "Sensor Quad-pixel com foco automatico",
      color: "text-blue-600",
    },
    {
      value: "12MP",
      label: "Ultra Wide",
      text: "Campo de visao 120° com modo noturno",
      color: "text-orange-500",
    },
    {
      value: "12MP",
      label: "Telefoto 5X",
      text: "Zoom óptico de 5x com estabilização",
      color: "text-blue-600",
    },
  ];
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melho experiência
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/titanium-design.jpg"
            />
            <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">
              Estrutura de titânio aeroespacial. O smartphone mais forte e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/ios-features.jpg"
              alt=""
            />
            <h3 className="font-bold mb-2 text-3xl">IOS 26</h3>
            <p className="text-gray-300">
              Sistema mais avaçado do mundo com IA integrada.
            </p>
          </div>
        </div>

        <div
          className="bg-gray-900 rounded-3xl p-12 mb-16 max-w-5xl mx-auto"
          id="performace"
        >
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
          <p className="text-gray-300 mb-6">
            O chip mais poderoso em um smartphone.
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="../../public/img/chip-a18-pro.jpg"
            alt=""
          />

          <ul className="list-disc space-y-3 text-gray-300">
            <li>CPU 20% mais rápida</li>
            <li>GPU 25% mais rápida</li>
            <li>Neural engine com 16 núcleos</li>
            <li>Ray tracing acelearado por hardware</li>
          </ul>
        </div> 
        <h2 className="text-4xl md:text-5xl text-center
        mb-12 font-bold">Sistema de câmera Pro avançado</h2>
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          {" "}
          {specs.map((spec, index) => (
            <div
              key={index} id="camera"
              className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-110 text-center"
            >
               
              <p className={`text-3xl font-bold ${spec.color} `}>
                {spec.value}
              </p>
              <h3 className="text-2xl font-bold">{spec.label}</h3>
              <p className="text-gray-300">{spec.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Highlights;
