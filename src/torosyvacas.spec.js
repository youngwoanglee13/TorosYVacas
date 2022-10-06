import TorosYVacas from "./TorosYVacas";

const torito = new TorosYVacas();
describe("Ejecutar comandos", () => {
  
    it("Ingresar y obtener clave", () => {
      torito.setClave(1234);
      expect(torito.getClave()).toEqual(1234);
    });
  
  });
  