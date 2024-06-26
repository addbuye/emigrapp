const CallToAction = () => {
    return (
        <section id="contact" className="py-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-4">¡Realizar mi autodiagnóstico ahora!</h2>
                <p className="text-lg mb-8">Ingresá y contestá las preguntas para ver cómo podemos ayudarte.</p>
                <a href="/diagnostico" className="bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-200">
                    Ir al formulario
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
