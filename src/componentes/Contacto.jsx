import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StarIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../assets/css/contacto.css";
import Fondo from "../assets/imgs/hilatis-fondo.jpeg";

export const Contacto = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
      empresa: "",
      rating: 0,
      mensaje: "",
      privacyPolicy: false,
    },
  });

  const [submittedData, setSubmittedData] = useState(null);

  const rating = watch("rating");

  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
    // Aquí manejarías el envío de datos al backend
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-[#2a2420]">
        <section className="hero-section">
          <div className="custom-overlay"></div>
          <div className="custom-content">
            <h1 className="custom-heading">Contáctanos</h1>
            <p className="custom-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="content-grid">
            {/* Información de contacto */}
            <div className="contact-info">
              <img src={Fondo} alt="" className="imagen-cont"/>
              <div className="items-info">
                {/* Teléfono */}
                <div className="">
                  <div>
                    <h3 className="label-cont font-semibold">Teléfono</h3>
                    <div className="info-label">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p className="text-gray-600">+51 999 270 883</p>
                    </div>
                  </div>
                </div>

                {/* Correo */}
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="label-cont font-semibold">Correo</h3>
                    <div className="info-label">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gray-600">email@nistiskusav.com</p>
                    </div>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="label-cont font-semibold">Ubicación</h3>
                    <div className="info-label">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-gray-600">
                        Calle los girasoles #455 - Castilla
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="contact-form">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-grid">
                  {/* Nombre */}
                  <div className="input-wrapper">
                    <label className="input-label">Nombre:</label>
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder="John Carter"
                        className="input-field"
                        {...register("nombre", {
                          required: "Este campo es requerido",
                        })}
                      />
                    </div>
                    {errors.nombre && (
                      <p className="error-message">
                        <ExclamationCircleIcon className="error-icon" />
                        <span>{errors.nombre.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Correo */}
                  <div className="input-wrapper">
                    <label className="input-label">Correo:</label>
                    <div className="input-container">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="input-field"
                        {...register("correo", {
                          required: "Este campo es requerido",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Correo electrónico inválido",
                          },
                        })}
                      />
                    </div>
                    {errors.correo && (
                      <p className="error-message">
                        <ExclamationCircleIcon className="error-icon" />
                        <span>{errors.correo.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div className="input-wrapper">
                    <label className="input-label">Teléfono:</label>
                    <div className="input-container">
                      <input
                        type="tel"
                        placeholder="123456789"
                        className="input-field"
                        {...register("telefono", {
                          required: "Este campo es requerido",
                          pattern: {
                            value: /^[0-9]{9}$/,
                            message: "Número de teléfono inválido",
                          },
                        })}
                      />
                    </div>
                    {errors.telefono && (
                      <p className="error-message">
                        <ExclamationCircleIcon className="error-icon" />
                        <span>{errors.telefono.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Empresa */}
                  <div className="input-wrapper">
                    <label className="input-label">Empresa:</label>
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder="Company name"
                        className="input-field"
                        {...register("empresa")}
                      />
                    </div>
                    {errors.empresa && (
                      <p className="error-message">
                        <ExclamationCircleIcon className="error-icon" />
                        <span>{errors.empresa.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Califique nuestro servicio:
                    </label>
                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setValue("rating", star)}
                          className="text-2xl focus:outline-none"
                        >
                          <StarIcon
                            className={`w-6 h-6 ${
                              star <= rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "bg-[#E1D7BF]-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="input-label">Mensaje:</label>
                  <div className="input-container">
                    <textarea
                      rows={4}
                      placeholder="Si tienes algún comentario adicional, escríbelo aquí..."
                      className="input-field textarea-field"
                      {...register("mensaje", {
                        required: "Este campo es requerido",
                      })}
                    />
                  </div>
                  {errors.mensaje && (
                    <p className="error-message">
                      <ExclamationCircleIcon className="error-icon" />
                      <span>{errors.mensaje.message}</span>
                    </p>
                  )}
                </div>

                {/* Política de privacidad */}
                <div className="privacy-policy-container">
                  <div className="privacy-policy-checkbox">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="rounded"
                      {...register("privacyPolicy", {
                        required: "Debes aceptar la Política de Privacidad",
                      })}
                    />
                    <label htmlFor="privacy" className="privacy-policy-label">
                      He leído y acepto la Política de Privacidad
                    </label>
                  </div>
                  {errors.privacyPolicy && (
                    <p className="error-message">
                      <ExclamationCircleIcon className="error-icon" />
                      <span>{errors.privacyPolicy.message}</span>
                    </p>
                  )}
                </div>

                <button type="submit" className="submit-button">
                  Enviar mensaje
                </button>
              </form>
              {/* {submittedData && (
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Datos enviados:</h3>
                  <pre className="whitespace-pre-wrap">{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
              )} */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
