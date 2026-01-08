function About(){
    return(
        <section className="text-center">
        <h1 className="text-3xl font-bold mt-20">About Us</h1>
        <p className="mt-3">To deliver farm-fresh fruits and vegetables with trust, speed, and quality — straight to every home.</p>
        <div className="md:flex">
            <div className="border border-black p-2 m-6">
                
                <h2 className="text-xl font-medium">Fresh & Organic</h2>
                <p>Hand-picked fruits and vegetables sourced daily from trusted local farms. Always natural, healthy, and chemical-free.</p>
            </div>
            <div className="border border-black p-2 m-6">
                

                <h2 className="text-xl font-medium">Fast & Reliable Delivery</h2>
                <p>Get your groceries delivered to your doorstep quickly and safely. Freshness guaranteed with every order.</p>
            </div>
            <div className="border border-black p-2 m-6">
                

                <h2 className="text-xl font-medium">Best Prices & Quality</h2>
                <p>Enjoy farm-fresh produce at competitive prices without compromising on quality. Affordable, healthy, and convenient.</p>
            </div>

        </div>
    </section>
    )
}

export default About

