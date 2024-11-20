import { PricingModel } from "@/types/pricing";
import { create } from "zustand";

type PricingState = {
  pricingModel: PricingModel;
  discount: number;
  setPricingModel: (model: PricingModel) => void;
  setDiscount: (discount: number) => void;
};

export const useSelectPricing = create<PricingState>((set) => ({
  pricingModel: PricingModel.Basic,
  discount: 0,
  setPricingModel: (model) => set({ pricingModel: model }),
  setDiscount: (discount) => set({ discount }),
}));
