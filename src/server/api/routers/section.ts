import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const sectionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      try {
        // Simular una llamada lenta a la base de datos
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Crear una nueva sección en la base de datos
        const createdSection = await ctx.db.section.create({
          data: {
            name: input.name,
            createdBy: { connect: { id: ctx.session.user.id } },
          },
        });

        return createdSection; // Devolver la sección creada
      } catch (error) {
        console.error('Error al crear la sección:', error);
        throw new Error('No se pudo crear la sección'); // Manejo básico de errores
      }
    }),

  getSections: protectedProcedure.query(({ ctx }) => {
    return ctx.db.section.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
});


/* 

  create: protectedProcedure
    .input(z.object({ text: z.string().min(4) }))
    .mutation(async ({ ctx, input }) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const createdSection = ctx.db.section.create({
          data: {
            name: input.text,
            createdBy: { connect: { id: ctx.session.user.id } },
          },
        });
        return createdSection; // Asumiendo que `ctx.db.section.create` devuelve el objeto creado
      } catch (error) {
        console.error('Error al crear la sección:', error);
        throw new Error('No se pudo crear la sección'); // Manejo básico de error
      }
    }),

  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),



*/


/* 
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
 */