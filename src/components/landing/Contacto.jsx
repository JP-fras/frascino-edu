const Contacto = () => {
  return (
    <section className="bg-[#F5F5F5] p-6 rounded-xl shadow-md text-[#1A1A1A] mb-10">
      <h2 className="text-2xl font-bold text-[#06402B] mb-4">Contacto</h2>
      <ul className="space-y-3 text-base">
        <li>
          📧 <a href="mailto:frascinojuanpablo@gmail.com" className="text-[#06402B] underline hover:text-[#FFA726]">frascinojuanpablo@gmail.com</a>
        </li>
        <li>
          💬 <a href="https://wa.me/5491164001674" target="_blank" className="text-[#06402B] underline hover:text-[#FFA726]">WhatsApp</a>
        </li>
        <li>
          💼 <a href="https://linkedin.com/in/juan-pablo-frascino-87870a27b/" target="_blank" className="text-[#06402B] underline hover:text-[#FFA726]">LinkedIn</a>
        </li>
      </ul>
    </section>
  );
};

export default Contacto
