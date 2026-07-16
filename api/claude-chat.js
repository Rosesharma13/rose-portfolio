export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { message } = req.body;
  const CLAUDE_API_KEY = process.env.ANTHROPIC_API_KEY;

  if (!CLAUDE_API_KEY) return res.status(500).json({ error: 'Key configuration missing.' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 150,
        messages: [{ role: 'user', content: `Answer briefly about Rose Sharma's tech profile: ${message}` }]
      })
    });
    const data = await response.json();
    return res.status(200).json({ reply: data.content[0].text });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to connect to LLM.' });
  }
}
