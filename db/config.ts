import { column, defineDb, defineTable } from 'astro:db';


const Products = defineTable({
  columns: {
    name: column.text(),
    stock: column.text(),
  }
})


export default defineDb({
  tables: { Products }
});
