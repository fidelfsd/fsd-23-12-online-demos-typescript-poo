import { Electrodomestico } from "./Electrodomestico";

export class Lavadora extends Electrodomestico {
   static CARGA_DEFECTO: number = 5;

   constructor(
      protected carga: number = Lavadora.CARGA_DEFECTO,
      precioBase: number = Electrodomestico.PRECIO_BASE,
      color: string = Electrodomestico.COLOR_DEFECTO,
      consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO,
      peso: number = Electrodomestico.PESO_DEFECTO
   ) {
      super(precioBase, color, consumoEnergetico, peso); // // super aqui hace referencia al constructor en el padre
   }

   getCarga(): number {
      return this.carga;
   }

   precioFinal(): number {
      let precioElectromestico = super.precioFinal(); // super aqui hace referencia al objeto en el padre

      // Incremento segun la carga
      return this.carga > 30 ? precioElectromestico + 50 : precioElectromestico;
   }
}
