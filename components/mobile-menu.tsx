"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import CheckoutButton from "@/components/checkout-button"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-heading font-bold text-xl text-primary">ReviveHair</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-8">
            <Link
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-2"
              href="#features"
              onClick={handleLinkClick}
            >
              Features
            </Link>
            <Link
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-2"
              href="#results"
              onClick={handleLinkClick}
            >
              Results
            </Link>
            <Link
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-2"
              href="#testimonials"
              onClick={handleLinkClick}
            >
              Testimonials
            </Link>
            <Link
              className="text-lg font-medium hover:text-primary transition-colors px-2 py-2"
              href="#faq"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
          </nav>
          <div className="mt-auto border-t pt-4">
            <CheckoutButton className="w-full rounded-full" onClick={() => setOpen(false)}>
              Buy Now - $39.99
            </CheckoutButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
