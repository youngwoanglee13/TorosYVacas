import TorosYVacas from "./TorosYVacas";
const torito = new TorosYVacas();
describe("Ejecutar comandos", () => {
    it("Ingresar y obtener clave", () => {
      torito.setClave(1234);
      expect(torito.getClave()).toEqual(1234);
    });
    it("intento fallar todas", () => {
      expect(torito.intentar(7777)).toEqual("");
    });
  });
  