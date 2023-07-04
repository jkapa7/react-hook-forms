import { useForm } from "react-hook-form";
import { edadValidator } from "./validate";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.nombre?.type === "required" && <p>El campo es requerido</p>}
          {errors.nombre?.type === "maxLength" && (
            <p>El campo debe tener menos de 10 caracteres</p>
          )}
        </div>

        <div>
          <label>Direccion</label>
          <input type="text" {...register("direccion", { required: true })} />
        </div>

        <div>
          <label>Emial</label>
          <input
            type="text"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>

        <div>
          <label>Edad</label>
          <input
            type="text"
            {...register("edad", { validate: edadValidator })}
          />
          {errors.edad && <p>La edad ser entre 18 y 65</p>}
        </div>

        <div>
          <label>Pais</label>
          <select {...register("pais")}>
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
          </select>
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
