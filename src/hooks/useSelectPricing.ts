import { PricingModel } from "@/types/pricing";
import { create } from "zustand";

type PricingState = {
  pricingModel: PricingModel;
  setPricingModel: (model: PricingModel) => void;
};

export const useSelectPricing = create<PricingState>((set) => ({
  pricingModel: PricingModel.Basic,
  setPricingModel: (model) => set({ pricingModel: model }),
}));
