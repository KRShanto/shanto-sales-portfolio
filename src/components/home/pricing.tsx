"use client";

import { useState, useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../section";
import SectionTitle from "../section-title";
import { BackgroundGradient } from "../ui/background-gradient";
import DiscountImage from "../../../public/discount.png";
import Image from "next/image";
import { PricingModel } from "@/types/pricing";
import { useSelectPricing } from "@/hooks/useSelectPricing";
import { Roboto } from "next/font/google";
import { PRICING_MODEL } from "@/lib/constants";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default function Pricing() {
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<{
    [key: string]: { [key: string]: boolean };
  }>({});
  const [couponCode, setCouponCode] = useState("");
  // const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const {
    pricingModel,
    discount,
    additionalFeatures,
    setPricingModel,
    setDiscount,
    addAdditionalFeature,
    removeAdditionalFeature,
  } = useSelectPricing();

  const prevSelectedAddOns = useRef<{
    [key: string]: { [key: string]: boolean };
  }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Handle side-effects after selectedAddOns changes
  useEffect(() => {
    Object.keys(selectedAddOns).forEach((plan) => {
      const prevPlanAddOns = prevSelectedAddOns.current[plan] || {};
      const currentPlanAddOns = selectedAddOns[plan] || {};

      Object.keys(currentPlanAddOns).forEach((addOn) => {
        const wasSelected = prevPlanAddOns[addOn] || false;
        const isSelected = currentPlanAddOns[addOn];

        if (!wasSelected && isSelected) {
          // Add the additional feature
          const addOnPrice =
            PRICING_MODEL.find((p) => p.name === plan)?.addOns?.find(
              (a) => a.name === addOn,
            )?.price || 0;

          addAdditionalFeature({
            name: addOn,
            price: addOnPrice,
          });
        } else if (wasSelected && !isSelected) {
          // Remove the additional feature
          removeAdditionalFeature(addOn);
        }
      });
    });

    // Update previous state
    prevSelectedAddOns.current = selectedAddOns;
  }, [
    selectedAddOns,
    addAdditionalFeature,
    removeAdditionalFeature,
    PRICING_MODEL,
  ]);

  const toggleAddOn = (plan: string, addOn: string) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [plan]: {
        ...prev[plan],
        [addOn]: !prev[plan]?.[addOn],
      },
    }));
  };

  console.log("Additional features: ", additionalFeatures);

  const calculatePrice = (basePrice: number | string, planName: string) => {
    if (typeof basePrice === "string") return basePrice; // For custom website

    const addOnTotal = Object.entries(selectedAddOns[planName] || {})
      .filter(([_, isSelected]) => isSelected)
      .reduce((total, [addOn]) => {
        const addOnPrice =
          PRICING_MODEL.find((p) => p.name === planName)?.addOns?.find(
            (a) => a.name === addOn,
          )?.price || 0;
        return total + addOnPrice;
      }, 0);

    const totalBeforeDiscount = basePrice + addOnTotal;
    const discountedPrice =
      totalBeforeDiscount - totalBeforeDiscount * discount;
    return discountedPrice.toFixed(2);
  };

  const applyCoupon = () => {
    // TODO: fetch coupon code from backend
    if (couponCode.toLowerCase() === "shanto$$") {
      // setAppliedDiscount(0.2); // 20% additional discount
      setDiscount(0.2);
      setDiscountError("");
    } else {
      // setAppliedDiscount(0);
      setDiscount(0);
      setDiscountError("Invalid discount code. Please try again.");
    }
  };

  async function handleOnClick(model: PricingModel) {
    // scroll to "#contact" section
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop,
      behavior: "smooth",
    });
    setPricingModel(model);
  }

  return (
    <Section id="pricing" ref={sectionRef} className="relative">
      {/* TODO: custom cursor */}

      <SectionTitle text="Pricing" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
          {PRICING_MODEL.map((plan) => (
            <BackgroundGradient
              key={plan.name}
              className="relative flex h-full flex-col rounded-2xl bg-zinc-950 p-8"
              animate={false}
              containerClassName="transition-transform duration-300 ease-in-out scale-100 hover:scale-105"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-300">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline">
                  {"price" in plan ? (
                    <>
                      <span className="text-5xl font-extrabold tracking-tight">
                        ${calculatePrice(plan.price!, plan.name)}
                      </span>
                      <span className="ml-2 text-2xl font-semibold text-gray-400 line-through">
                        ${plan.originalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-5xl font-extrabold tracking-tight">
                      {plan.priceRange}
                    </span>
                  )}
                </p>
                <ul className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="h-6 w-6 flex-shrink-0 text-green-500" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {plan.addOns && (
                <div className="mt-8">
                  <h4 className="mb-4 text-xl font-semibold text-emerald-500">
                    Add-ons
                  </h4>
                  {plan.addOns.map((addOn) => (
                    <div
                      key={addOn.name}
                      className="flex items-center justify-between py-2"
                    >
                      <div>
                        <p className="font-medium">{addOn.name}</p>
                        <p className="text-sm text-gray-400">${addOn.price}</p>
                      </div>
                      <Switch
                        checked={
                          selectedAddOns[plan.name]?.[addOn.name] || false
                        }
                        onCheckedChange={() =>
                          toggleAddOn(plan.name, addOn.name)
                        }
                      />
                    </div>
                  ))}
                </div>
              )}
              <Button
                className="mt-8 text-xl transition-transform duration-300 ease-in-out active:scale-95"
                style={roboto.style}
                onClick={() => handleOnClick(plan.name)}
              >
                Get started
              </Button>
            </BackgroundGradient>
          ))}
        </div>

        {/* Discount Section */}
        {/* TODO: make it more animated and attractive */}
        <AnimatePresence>
          {isSectionVisible && (
            <motion.div
              className="fixed bottom-[20rem] right-5 flex flex-col items-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {discount > 0 && (
                  <motion.div
                    className="mb-2 rounded-full bg-green-500 px-4 py-2 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    20% discount applied!
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showDiscountInput ? (
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                  >
                    <Input
                      type="text"
                      placeholder="Enter discount code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-40"
                    />
                    <Button onClick={applyCoupon} size="sm">
                      Apply
                    </Button>
                    <Button
                      onClick={() => setShowDiscountInput(false)}
                      size="sm"
                      variant="ghost"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                  >
                    <Image
                      onClick={() => setShowDiscountInput(true)}
                      src={DiscountImage}
                      alt="Discount"
                      width={70}
                      height={70}
                      className="cursor-pointer"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
