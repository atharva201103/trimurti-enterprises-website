import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToQuoteForm(serviceTitle?: string) {
  if (typeof window === "undefined") return;

  // Signal to reset form if it was in submitted state, and select service if provided
  window.dispatchEvent(
    new CustomEvent("open-quote-form", {
      detail: { service: serviceTitle },
    })
  );

  const target = document.getElementById("service-quote-form") || document.getElementById("contact");
  if (target) {
    const navbarOffset = 90;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (window.location.hash !== "#contact") {
      window.history.pushState(null, "", "#contact");
    }

    setTimeout(() => {
      const input = document.getElementById("quote-name-input") as HTMLInputElement | null;
      if (input) {
        input.focus();
        input.classList.add("ring-4", "ring-[#D4A84F]/50");
        setTimeout(() => {
          input.classList.remove("ring-4", "ring-[#D4A84F]/50");
        }, 2000);
      }
    }, 450);
  }
}
