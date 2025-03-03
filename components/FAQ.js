function FAQ() {
    try {
        const faqs = [
            {
                question: "¿Cómo realizo un pedido?",
                answer: "Para realizar un pedido, simplemente haz clic en el botón de WhatsApp del producto que te interesa y nos pondremos en contacto contigo."
            },
            {
                question: "¿Cuáles son los métodos de pago?",
                answer: "Aceptamos transferencias bancarias, efectivo y pagos móviles. Los detalles específicos se acordarán durante la conversación de WhatsApp."
            },
            {
                question: "¿Realizan envíos?",
                answer: "Sí, realizamos envíos a domicilio. El costo y tiempo de entrega dependerá de tu ubicación."
            }
        ];

        return (
            <section id="faq" className="py-16 bg-white" data-name="faq-section">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12" data-name="faq-title">
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-6" data-name="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item pb-4" data-name={`faq-item-${index}`}>
                                <h3 className="text-xl font-semibold mb-2" data-name="faq-question">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600" data-name="faq-answer">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('FAQ component error:', error);
        reportError(error);
        return null;
    }
}
