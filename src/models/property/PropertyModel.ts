import { CategoryModel } from "../category/CategoryModel";
import { Document } from "mongoose";
import { PropertyDeveloperModel } from "../propertyDeveloper/PropertyDeveloperModel";
import { PropertyFloorPlanModel } from "./PropertyFloorPlanModel";
import { PropertyLocationModel } from "./PropertyLocationModel";
import { PropertyMediaModel } from "./PropertyMediaModel";
import { PropertyPriceModal } from "./PropertyPriceModel";
import { PropertySpecificationModal } from "./PropertySpecificationModal";

export enum PropertyType {
  Appartment = "Appartment",
  Villa = "Villa",
  Plot = "Plot",
}

export enum PropertyStatus {
  "New Launch" = "New Launch",
  "Early Stage" = "Early Stage",
  "Mid Stage" = "Mid Stage",
  "Near Possession" = "Near Possession",
  "Ready To Move" = "Ready To Move",
  "Well Occupied" = "Well Occupied",
}

export interface PropertyModel extends Document {
  name: string;
  city: string;
  subLocation: string;
  reraNumber: string;
  possessionBy: Date;
  categories: CategoryModel[];
  numberOfUnits: number;
  usps: string[];
  price: PropertyPriceModal;
  media: PropertyMediaModel[];
  amenities: string[];
  specifications: PropertySpecificationModal;
  propertyDeveloper: PropertyDeveloperModel["id"] | PropertyDeveloperModel;
  floorPlan: PropertyFloorPlanModel[];
  paymentTranches: string;
  location: PropertyLocationModel;
  propertyType: PropertyType;
  propertyStatus: PropertyStatus;
}
