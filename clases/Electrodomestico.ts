export class Electrodomestico {
   static PRECIO_BASE: number = 100;
   static COLOR_DEFECTO: string = "blanco";
   static CONSUMO_ENERGETICO_DEFECTO: string = "F";
   static PESO_DEFECTO: number = 5;

   constructor(
      protected precioBase: number = Electrodomestico.PRECIO_BASE,
      protected color: string = Electrodomestico.COLOR_DEFECTO,
      protected consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO,
      protected peso: number = Electrodomestico.PESO_DEFECTO
   ) {
      this.comprobarConsumoEnergetico(consumoEnergetico);
      this.comprobarColor(color);
   }

   getPrecioBase(): number {
      return this.precioBase;
   }

   getColor(): string {
      return this.color;
   }

   getConsumoEnergetico(): string {
      return this.consumoEnergetico;
   }

   getPeso(): number {
      return this.peso;
   }

   protected comprobarConsumoEnergetico(letra: string): void {
      const letrasValidas = ["A", "B", "C", "D", "E", "F"];

      if (!letrasValidas.includes(letra.toUpperCase())) {
         this.consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_DEFECTO;
      } else {
         this.consumoEnergetico = letra.toUpperCase();
      }
   }

   protected comprobarColor(color: string): void {
      const coloresValidos = ["blanco", "negro", "rojo", "azul", "gris"];

      if (!coloresValidos.includes(color.toLowerCase())) {
         this.color = Electrodomestico.COLOR_DEFECTO;
      } else {
         this.color = color.toLowerCase();
      }
   }

   precioFinal(): number {
      let precioFinal = this.precioBase;

      // Incremento segun consumo energetico
      switch (this.consumoEnergetico) {
         case "A":
            precioFinal += 100;
            break;
         case "B":
            precioFinal += 80;
            break;
         case "C":
            precioFinal += 60;
            break;
         case "D":
            precioFinal += 50;
            break;
         case "E":
            precioFinal += 30;
            break;
         case "F":
            precioFinal += 10;
            break;
         default:
            break;
      }

      // Incremento segun peso
      if (this.peso >= 0 && this.peso <= 19) {
         precioFinal += 10;
      } else if (this.peso >= 20 && this.peso <= 49) {
         precioFinal += 50;
      } else if (this.peso >= 50 && this.peso <= 79) {
         precioFinal += 80;
      } else {
         precioFinal += 100;
      }

      return precioFinal;
   }
}
