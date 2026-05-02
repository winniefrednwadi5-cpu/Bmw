export interface Vehicle {
  id: string;
  series: string;
  model: string;
  type: 'Sedan' | 'SUV' | 'Coupe' | 'Electric' | 'Performance';
  price: number;
  highlight: string;
  image: string;
  specs: {
    acceleration: string; // 0-100 km/h
    range?: string; // for electric
    topSpeed: string;
    power: string;
  };
}

export interface ConfigOption {
  id: string;
  name: string;
  price: number;
  image?: string;
  color?: string;
}

export interface ConfigStep {
  title: string;
  options: ConfigOption[];
}
