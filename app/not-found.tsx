import Link from "next/link";
import { ArrowLeft, Car } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#071521] text-white flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0B1F33] border border-[#D4A84F]/30 flex items-center justify-center text-[#D4A84F] shadow-lg">
          <Car className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D4A84F] font-bold">
            404 Error • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Lost Your Parking Spot?
          </h1>
          <p className="text-gray-300 text-sm mt-3 leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to the main entrance.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4A84F] to-[#E59A2F] text-[#071521] hover:brightness-110 transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
