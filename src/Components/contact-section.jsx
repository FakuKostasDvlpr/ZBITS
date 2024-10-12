import React from 'react';
import { Mail } from "lucide-react";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import { Button } from "../Components/ui/button";

export function ContactSectionJsx() {
  return (
    (<section className="h-fit w-full gap-14 bg-gradient-to-t from-[#0A0909] to-[rgba(167,81,81,0.13)] flex flex-col justify-center items-center px-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <div className="lg:pt-2">
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <div
                className="flex items-center justify-center w-12 h-12 bg-[#800000] text-red-600 rounded-full">
                <Mail color='white' className="w-6 h-6" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">Consulta!</h2>
            <div className='flex mb-10'>
              <p className="mt-4 text-lg leading-8 text-gray-400">
              ¿Necesitas una cotización personalizada o tienes alguna duda? Nuestro equipo está listo para ayudarte. Rellena el formulario de contacto y te brindaremos toda la información que necesitas.
              </p>
            </div>
            
            <div className='mb-10'>
              <img
                src="/contactImage.jpg"
                alt="Ilustración de contacto"
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none" />
            </div>

          </div>
          <form className="lg:mt-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold leading-6 text-gray-400">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className="mt-2"
                    placeholder="Tu nombre" />
                </div>
                <div>
                  <label
                    htmlFor="apellido"
                    className="block text-sm font-semibold leading-6 text-gray-400">
                    Apellido
                  </label>
                  <Input
                    id="apellido"
                    name="apellido"
                    type="text"
                    required
                    className="mt-2"
                    placeholder="Tu apellido" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-semibold leading-6 text-gray-400">
                  Empresa
                </label>
                <Input
                  id="empresa"
                  name="empresa"
                  type="text"
                  className="mt-2"
                  placeholder="Nombre de tu empresa" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-400">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2"
                  placeholder="tu@ejemplo.com" />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-semibold leading-6 text-gray-400">
                  Teléfono
                </label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  className="mt-2"
                  placeholder="+56 XXXXXXXXX" />
              </div>
              <div>
                <label
                  htmlFor="asunto"
                  className="block text-sm font-semibold leading-6 text-gray-400">
                  Asunto
                </label>
                <Input
                  id="asunto"
                  name="asunto"
                  type="text"
                  required
                  className="mt-2"
                  placeholder="Cotización" />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold leading-6 text-gray-400">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  className="mt-2"
                  placeholder="Escribe tu mensaje aquí..." />
              </div>
            </div>
            <div className="mt-8">
              <Button type="submit" className="w-full bg-transparent duration-200 transition-all ease-in-out hover:bg-red-700">
                Enviar mensaje
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>)
  );
}