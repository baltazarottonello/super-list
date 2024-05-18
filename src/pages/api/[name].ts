import type { APIRoute } from "astro"
import { db, eq, Products } from "astro:db";


export const POST: APIRoute = async (context) => {
    const body = await context.request.json();
    await db.update(Products).set({stock: body.stock}).where(eq(Products.name, `${body.name}` ))
    return new Response(JSON.stringify({
        message: "updated"
      })
    )
  }