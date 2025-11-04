import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { name, email, organization, usecase, message, company_website } = req.body || {};

    // Honeypot check
    if (company_website) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Placeholder: In production, send email or store in CRM.
    // For now, log to server (visible in Vercel logs) and return success.
    console.log('Contact submission:', { name, email, organization, usecase, message });

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Server error' });
  }
}


