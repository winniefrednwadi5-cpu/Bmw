import { Vehicle } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'i7',
    series: '7',
    model: 'BMW i7 M70 xDrive',
    type: 'Electric',
    price: 158000,
    highlight: 'The fully electric flagship sedan.',
    image: 'https://images.unsplash.com/photo-1695642316531-10dc5384666f?q=80&w=2070&auto=format&fit=crop',
    specs: {
      acceleration: '3.7s',
      range: '560km',
      topSpeed: '250 km/h',
      power: '660 hp'
    }
  },
  {
    id: 'm4',
    series: 'M',
    model: 'BMW M4 Competition',
    type: 'Performance',
    price: 98000,
    highlight: 'Uncompromising performance on every curve.',
    image: 'https://images.unsplash.com/photo-1617469767053-d8229a9a611c?q=80&w=2070&auto=format&fit=crop',
    specs: {
      acceleration: '3.9s',
      topSpeed: '290 km/h',
      power: '510 hp'
    }
  },
  {
    id: 'ix',
    series: 'i',
    model: 'BMW iX xDrive50',
    type: 'SUV',
    price: 84000,
    highlight: 'Pioneer of a new era.',
    image: 'https://images.unsplash.com/photo-1634033630626-d62fbc0fa12a?q=80&w=2070&auto=format&fit=crop',
    specs: {
      acceleration: '4.6s',
      range: '630km',
      topSpeed: '200 km/h',
      power: '523 hp'
    }
  },
  {
    id: 'xm',
    series: 'M',
    model: 'BMW XM',
    type: 'SUV',
    price: 185000,
    highlight: 'Extravagant, expressive, electrified.',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2071&auto=format&fit=crop',
    specs: {
      acceleration: '4.3s',
      topSpeed: '270 km/h',
      power: '653 hp'
    }
  }
];
