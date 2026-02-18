export default async function handler(req, res) {
  try {
    const r = await fetch("https://your-app.onrender.com");
    return res.status(200).json({ ok: true, status: r.status });
  } catch (e) {
    return res.status(500).json({ ok: false });
  }
}
