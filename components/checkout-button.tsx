"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, ExternalLink } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface CheckoutButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function CheckoutButton({ className, children, onClick }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  const handleCheckout = async () => {
    if (onClick) onClick()
    setLoading(true)

    try {
      console.log("Starting checkout process...")

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: 1 }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Checkout API error:", errorData)
        throw new Error(errorData.details || errorData.error || `Failed to create checkout session: ${response.status}`)
      }

      const data = await response.json()
      console.log("Checkout API response:", data)

      // Check for checkoutUrl first, then sessionId as fallback
      if (!data.checkoutUrl && !data.sessionId) {
        throw new Error("No checkout URL or session ID returned from checkout API")
      }

      // If we have a direct checkout URL, use it
      if (data.checkoutUrl) {
        setCheckoutUrl(data.checkoutUrl)

        // Try to open in a new tab first
        const newWindow = window.open(data.checkoutUrl, "_blank")

        // If opening a new window fails or is blocked, show the dialog
        if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
          console.log("Popup blocked or failed, showing manual checkout dialog")
          setShowDialog(true)
        }
      } else {
        // Fallback to using sessionId with Stripe.js
        const { getStripe } = await import("@/lib/stripe")
        const stripe = await getStripe()

        if (!stripe) {
          throw new Error("Failed to initialize Stripe")
        }

        const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId })

        if (error) {
          console.error("Stripe redirect error:", error)
          throw new Error(error.message || "Error redirecting to checkout")
        }
      }
    } catch (error: any) {
      console.error("Checkout process error:", error)
      toast({
        title: "Checkout Error",
        description: error.message || "There was a problem starting the checkout process. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button onClick={handleCheckout} disabled={loading} className={className}>
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
            <DialogDescription>
              We couldn't automatically redirect you to the checkout page. Please click the button below to complete
              your purchase.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              You'll be redirected to Stripe's secure checkout page to complete your payment.
            </p>
          </div>
          <DialogFooter>
            <Button asChild className="w-full">
              <a href={checkoutUrl || "#"} target="_blank" rel="noopener noreferrer">
                Continue to Checkout <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
