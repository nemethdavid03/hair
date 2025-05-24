import Link from "next/link"
import { ArrowRight, Check, ChevronRight, Sparkles, Star, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import CheckoutButton from "@/components/checkout-button"
import MobileMenu from "@/components/mobile-menu"
import CountdownTimer from "@/components/countdown-timer"
import ProductComparison from "@/components/product-comparison"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-primary">Siraxx</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#results">
            Results
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#faq">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <CheckoutButton className="rounded-full shadow-md hidden md:flex">Buy Now</CheckoutButton>
          <MobileMenu />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-accent/10 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-8 relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>

            <div className="flex flex-col gap-4 md:gap-5 md:w-1/2 z-10">
              <Badge className="w-fit bg-accent text-black font-medium mb-1">Revolutionary Formula</Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Transform Your Hair in <span className="text-primary">Just 30 Days</span>
              </h1>
              <p className="text-gray-600 text-base">
                Our breakthrough hair growth formula delivers thicker, fuller, and healthier hair with clinically proven
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <CheckoutButton className="rounded-full font-medium px-6 py-2 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all animate-pulse">
                  Get 50% Off Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CheckoutButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full font-medium px-6 py-2 border hover:bg-secondary/5 transition-all"
                >
                  See Results
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                <div className="flex">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-gray-700 text-sm font-medium">4.9/5 from 3,500+ happy customers</span>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
              <img
                src="/siraxx.png"
                alt="Siraxx Growth Formula"
                className="rounded-2xl shadow-xl animate-float relative z-10"
                width={600}
                height={600}
              />
              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-lg p-2 shadow-lg z-20 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-medium text-xs">Clinically Proven</span>
                </div>
              </div>
              <div
                className="absolute -top-4 -left-4 bg-white rounded-lg p-2 shadow-lg z-20 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-secondary" />
                  <span className="font-medium text-xs">Fast Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-20 lg:py-24 relative diagonal-section bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <Badge className="bg-secondary text-white mb-1">The Science</Badge>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Why Siraxx Works When Others Fail</h2>
              <p className="max-w-[800px] text-gray-600 text-base">
                Our proprietary blend of 27 active ingredients targets hair loss at the root cause.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
              <div className="feature-card">
                <div className="rounded-full bg-primary/10 p-3">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">NanoFusion™ Technology</h3>
                <p className="text-center text-gray-600 text-sm">
                  Our microscopic nutrient particles penetrate deep into follicles, revitalizing them from within.
                </p>
              </div>
              <div className="feature-card">
                <div className="rounded-full bg-secondary/10 p-3">
                  <Check className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold">DHT Blockers</h3>
                <p className="text-center text-gray-600 text-sm">
                  Naturally inhibits the hormone responsible for 95% of hair loss without side effects.
                </p>
              </div>
              <div className="feature-card">
                <div className="rounded-full bg-accent/20 p-3">
                  <Check className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold">Growth Accelerators</h3>
                <p className="text-center text-gray-600 text-sm">
                  Stimulates dormant follicles and extends the growth phase for longer, thicker hair.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="comparison" className="w-full py-12 md:py-20 lg:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <Badge className="bg-primary text-white mb-1">Comparison</Badge>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                How Siraxx <span className="text-primary">Compares</span>
              </h2>
              <p className="max-w-[800px] text-gray-600 text-base">
                See why our complete system outperforms other hair growth solutions on the market.
              </p>
            </div>
            <div className="mt-8">
              <ProductComparison />
            </div>
          </div>
        </section>

        <section id="results" className="w-full py-12 md:py-20 lg:py-24 bg-gray-50 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <Badge className="bg-primary text-white mb-1">Transformations</Badge>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                Real People, Real <span className="text-primary">Results</span>
              </h2>
              <p className="max-w-[800px] text-gray-600 text-base">
                See the dramatic before and after transformations from our customers.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col gap-3 group">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img
                    src="/row-1-column-1 (1).jpg"
                    alt="Before using Siraxx"
                    className="rounded-xl w-full h-auto transition-transform group-hover:scale-105 duration-500"
                    width={600}
                    height={400}
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-sm">
                    "I was losing hope after trying everything. 8 weeks with Siraxx changed everything."
                  </p>
                  <p className="text-xs text-gray-500 mt-1">- Michael, 42</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img
                    src="/row-1-column-2.jpg"
                    alt="After using Siraxx"
                    className="rounded-xl w-full h-auto transition-transform group-hover:scale-105 duration-500"
                    width={600}
                    height={400}
                  />
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex gap-1 mb-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-700 text-sm">
                    "The confidence I've gained back is priceless. My hair is thicker than in my 20s!"
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button className="rounded-full bg-primary hover:bg-primary/90 transition-colors text-sm font-medium px-5 py-2">
                See More Transformations
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-20 lg:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <Badge className="bg-accent text-black mb-1">Testimonials</Badge>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                Thousands of <span className="text-primary">Happy Customers</span>
              </h2>
              <p className="max-w-[800px] text-gray-600 text-base">
                Join the revolution that's changing how people think about hair growth.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-100"
                >
                  <div className="flex">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-700 text-sm">
                    {i === 1 &&
                      "After trying countless products with no success, Siraxx finally gave me the results I was looking for. My hair is noticeably thicker and healthier!"}
                    {i === 2 &&
                      "I was skeptical at first, but within 4 weeks I started seeing new growth in areas that were completely bald. This product is nothing short of miraculous!"}
                    {i === 3 &&
                      "Not only did my hair grow faster, but it's also shinier and feels so much healthier. The compliments I've been getting are amazing!"}
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t">
                    <div className="rounded-full bg-primary w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
                      {i === 1 ? "S" : i === 2 ? "M" : "J"}
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {i === 1 ? "Sarah T." : i === 2 ? "Michael R." : "Jennifer L."}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                          Verified
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {i === 1 ? "3 months ago" : i === 2 ? "1 month ago" : "2 weeks ago"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24 bg-gray-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <span className="inline-block bg-white/20 py-1 px-3 rounded-full text-xs font-medium mb-1">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Transform Your Hair?</h2>
              <p className="max-w-[800px] text-white/90 text-base">
                Join thousands of satisfied customers who have revitalized their hair with our breakthrough formula.
              </p>

              <CountdownTimer className="my-4" />

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <CheckoutButton className="rounded-full font-medium px-5 py-2 bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg transition-all">
                  Get 50% Off Today - $39.99
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CheckoutButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full font-medium px-5 py-2 border border-white text-white hover:bg-white/10 transition-all"
                >
                  View Ingredients
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  <Check className="h-3 w-3 text-white" />
                  <span className="text-white text-xs font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  <Check className="h-3 w-3 text-white" />
                  <span className="text-white text-xs font-medium">90-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  <Check className="h-3 w-3 text-white" />
                  <span className="text-white text-xs font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-20 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-10">
              <Badge className="bg-secondary text-white mb-1">FAQ</Badge>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Common Questions</h2>
              <p className="max-w-[800px] text-gray-600 text-base">Everything you need to know about Siraxx.</p>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "How quickly will I see results?",
                    a: "Most customers begin to notice improvements within 2-4 weeks of consistent use. You'll first notice less shedding, followed by new growth and increased thickness. For optimal results, we recommend using Siraxx for at least 90 days.",
                  },
                  {
                    q: "Is Siraxx suitable for all hair types?",
                    a: "Yes! Our revolutionary formula works effectively on all hair types, textures, and colors. Whether you have straight, wavy, curly, or coily hair, Siraxx can help improve hair density and overall health.",
                  },
                  {
                    q: "Are there any side effects?",
                    a: "Siraxx is made with natural ingredients and is generally well-tolerated. Some users may experience a pleasant tingling sensation upon application, which indicates increased blood circulation. Unlike prescription treatments, Siraxx doesn't cause sexual side effects or other serious issues.",
                  },
                  {
                    q: "How do I use Siraxx?",
                    a: "For best results, apply the serum to a clean, dry scalp once daily, preferably at night. Massage gently for 60 seconds to stimulate blood flow. Take the supplement once daily with food. Consistency is key for optimal results.",
                  },
                  {
                    q: "What's included in the Siraxx system?",
                    a: "The complete Siraxx system includes our advanced formula serum (2 oz), a 30-day supply of our hair nutrition supplements, a premium scalp massager tool, and our exclusive hair care guide with tips from top dermatologists.",
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i + 1}`}
                    className="border border-gray-200 rounded-lg mb-3 overflow-hidden"
                  >
                    <AccordionTrigger className="font-heading text-base px-4 py-3 hover:bg-gray-100 transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-gray-600 text-sm">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <span className="font-heading font-bold text-xl text-white">Siraxx</span>
              <p className="mt-3 text-gray-400 text-sm">Transforming hair and confidence since 2020.</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427a4.902 4.902 0 01-1.153 1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 4.041v-.63c0-2.456.011-2.784.058-3.807.045-.975.207-1.504.344-1.857.182-.466.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.041-.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors text-sm" href="#features">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors text-sm" href="#results">
                    Results
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors text-sm" href="#testimonials">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors text-sm" href="#faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-3">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors text-sm" href="#">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors text-sm" href="#">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors text-sm" href="#">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors text-sm" href="#">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-3">Subscribe</h3>
              <p className="text-gray-400 mb-3 text-sm">Get exclusive offers and updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-lg w-full text-sm" />
                <Button className="rounded-r-lg text-sm">Join</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2025 Siraxx. All rights reserved.</p>
            <div className="flex gap-6 mt-3 md:mt-0">
              <Link className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
