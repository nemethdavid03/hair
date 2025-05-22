export default function ProductComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200"></th>
            <th className="p-4 text-center bg-primary/5 border-b-2 border-primary">
              <div className="font-heading font-bold text-lg text-primary">ReviveHair</div>
              <div className="text-sm text-gray-600 font-normal">Complete System</div>
            </th>
            <th className="p-4 text-center bg-gray-50 border-b-2 border-gray-200">
              <div className="font-heading font-bold text-lg">Leading Brand A</div>
              <div className="text-sm text-gray-600 font-normal">Hair Supplement</div>
            </th>
            <th className="p-4 text-center bg-gray-50 border-b-2 border-gray-200">
              <div className="font-heading font-bold text-lg">Leading Brand B</div>
              <div className="text-sm text-gray-600 font-normal">Topical Solution</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">NanoFusion™ Technology</td>
            <td className="p-4 border-b border-gray-200 text-center bg-primary/5 text-green-600 font-bold">✓</td>
            <td className="p-4 border-b border-gray-200 text-center text-red-500 font-bold">✗</td>
            <td className="p-4 border-b border-gray-200 text-center text-red-500 font-bold">✗</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Natural DHT Blockers</td>
            <td className="p-4 border-b border-gray-200 text-center bg-primary/5 text-green-600 font-bold">✓</td>
            <td className="p-4 border-b border-gray-200 text-center text-green-600 font-bold">✓</td>
            <td className="p-4 border-b border-gray-200 text-center text-red-500 font-bold">✗</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Growth Accelerators</td>
            <td className="p-4 border-b border-gray-200 text-center bg-primary/5 text-green-600 font-bold">✓</td>
            <td className="p-4 border-b border-gray-200 text-center text-red-500 font-bold">✗</td>
            <td className="p-4 border-b border-gray-200 text-center text-green-600 font-bold">✓</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Scalp Massager Tool</td>
            <td className="p-4 border-b border-gray-200 text-center bg-primary/5 text-green-600 font-bold">✓</td>
            <td className="p-4 border-b border-gray-200 text-center text-red-500 font-bold">✗</td>
            <td className="p-4 border-b border-gray-200 text-center text-red-500 font-bold">✗</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">90-Day Guarantee</td>
            <td className="p-4 border-b border-gray-200 text-center bg-primary/5 text-green-600 font-bold">✓</td>
            <td className="p-4 border-b border-gray-200 text-center text-red-500 font-bold">✗</td>
            <td className="p-4 border-b border-gray-200 text-center text-green-600 font-bold">✓</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Side-Effect Free</td>
            <td className="p-4 border-b border-gray-200 text-center bg-primary/5 text-green-600 font-bold">✓</td>
            <td className="p-4 border-b border-gray-200 text-center text-yellow-500 font-bold">△</td>
            <td className="p-4 border-b border-gray-200 text-center text-yellow-500 font-bold">△</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Price</td>
            <td className="p-4 border-b border-gray-200 text-center bg-primary/5 font-bold">$39.99</td>
            <td className="p-4 border-b border-gray-200 text-center">$49.99</td>
            <td className="p-4 border-b border-gray-200 text-center">$59.99</td>
          </tr>
          <tr>
            <td className="p-4 font-medium">Action</td>
            <td className="p-4 text-center bg-primary/5">
              <div className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                Best Value
              </div>
            </td>
            <td className="p-4 text-center">-</td>
            <td className="p-4 text-center">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
