import { PricingModel } from "@/types/pricing";
import { create } from "zustand";

type PricingState = {
  pricingModel: PricingModel | null;
  discount: number;
  additionalFeatures: { name: string; price: number }[];
  setPricingModel: (model: PricingModel) => void;
  setDiscount: (discount: number) => void;
  addAdditionalFeature: (feature: { name: string; price: number }) => void;
  removeAdditionalFeature: (featureName: string) => void;
};

export const useSelectPricing = create<PricingState>((set) => ({
  pricingModel: null,
  discount: 0,
  additionalFeatures: [],
  setPricingModel: (model) => set({ pricingModel: model }),
  setDiscount: (discount) => set({ discount }),
  addAdditionalFeature: (feature) =>
    set((state) => ({
      additionalFeatures: [...state.additionalFeatures, feature],
    })),
  removeAdditionalFeature: (feature) =>
    set((state) => ({
      additionalFeatures: state.additionalFeatures.filter(
        (f) => f.name !== feature,
      ),
    })),
}));
