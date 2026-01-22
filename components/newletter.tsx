"use client";

export default function Newsletter() {
    return (
        <section className="py-20 px-6 bg-black text-white text-center">
            <h2 className="text-3xl font-bold">
                Join Our Newsletter & Get 10% Off
            </h2>

            <p className="mt-3 text-gray-300">
                Sign up today and never miss our new arrivals, exclusive deals, and special offers.
            </p>

            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-3xl text-black bg-white outline-none "
                />
                <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200"
                >
                    Subscribe
                </button>
            </form>
        </section>

    );
}
