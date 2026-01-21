import ContactForm from "@/components/conatact";
import ContactInfo from "@/components/contactinfo";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="h-[40vh] bg-black text-white flex items-center justify-center">
                <div className="text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Contact Our Team
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                        Have questions about our shoes, orders, or sizing?
                        We re here to help you every step of the way.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                <ContactInfo />
                <ContactForm />
            </section>
        </main>
    );
}
