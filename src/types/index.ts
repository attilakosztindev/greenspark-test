export interface RootState {
  version?: string;
}

export interface WidgetState {
  widgets: Widget[];
  loading: boolean;
  error: string | null;
}

export interface Widget {
  id: number;
  action: string;
  active: boolean;
  amount: number;
  linked: boolean;
  selectedColor: string;
  type: string;
}

export interface MeasureMapping {
  unit: string;
  fullName: string;
}

export interface TooltipProps {
  isActive: boolean;
  description: string;
  link?: string;
  linkUrl?: string;
  linkIsAllowed: boolean;
};

export type ColorMap = {
  [key: string]: string;
};