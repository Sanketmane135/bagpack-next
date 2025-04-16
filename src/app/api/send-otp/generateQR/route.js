
import generateQR from "@omkarbhosale/upiqr";

export async function POST(req) {
  const { amount } = await req.json();

  const data = await generateQR({
    UPI_ID: "sanketmane0407@okhdfcbank",
    AMOUNT: amount,
  });

  return new Response(JSON.stringify({ qr: data }), {
    headers: { "Content-Type": "application/json" },
  });
}
