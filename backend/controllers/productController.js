import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`
    SELECT * FROM products
    ORDER BY created_at DESC
    `;
    console.log("🚀 ~ getProducts ~ products:", products);

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log("🚀 ~ getProducts ~ error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await sql`
     SELECT * FROM products WHERE id=${id}
    `;

    console.log("🚀 ~ getProduct ~ product:", product);

    res.status(200).json({
      success: true,
      data: product[0],
    });
  } catch (error) {
    console.log("🚀 ~ getProduct ~ error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required!!" });
  }

  try {
    const newProduct = await sql`
    INSERT INTO products (name,price,image)
    VALUES (${name},${price},${image})
    RETURNING *
   `;
    console.log("🚀 ~ createProduct ~ newProduct:", newProduct);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct[0],
    });
  } catch (error) {
    console.log("🚀 ~ createProduct ~ error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required!!" });
  }

  try {
    const updateProduct = await sql`
        UPDATE products
        SET name=${name}, price=${price}, image=${image}
        WHERE id=${id}
        RETURNING *
    `;

    console.log("🚀 ~ updateProduct ~ updateProduct:", updateProduct);

    if (updateProduct.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updateProduct[0],
    });
  } catch (error) {
    console.log("🚀 ~ updateProduct ~ error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await sql`
    DELETE FROM products WHERE id=${id} RETURNING * 
    `;

    if (deleteProduct.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: deleteProduct[0],
    });
  } catch (error) {
    console.log("🚀 ~ deleteProduct ~ error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
