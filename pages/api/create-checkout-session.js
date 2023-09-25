const Stripe = require('stripe')
const stripe = Stripe('sk_test_51MbuVTEbb53jrzwWxafpC9BfCzeKMWTIHxbeBmxDbVfM3CmdXL3tIzlkyLfFuZlD4Ab5TtM18zL9PFzlKVVlmRoR00x2jeYKim');


export default async (req, res) => {

  const { products, email } = req.body;

  const itemsToStripe = products.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100 * item.quantity,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: itemsToStripe,
    mode: "payment",
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/checkout`,
    metadata: {
      email,
      images: JSON.stringify(products.map((item) => item.image)),
    }
  });
  res.status(200).json({ id: session.id })
};
