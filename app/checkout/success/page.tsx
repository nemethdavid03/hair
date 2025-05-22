import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your ReviveHair Growth Formula is on its way!
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="font-medium mb-2">Order Details</h2>
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">Product:</span>
              <span>ReviveHair Growth Formula</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span>$39.99</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            A confirmation email has been sent to your email address. You'll receive tracking information once your
            order ships.
          </p>
          <Button asChild className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
