import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 🔴 GEÇİCİ OLARAK BİLGİLERİ DOĞRUDAN YAZIYORUZ (TEST İÇİN)
    const supabaseUrl = 'https://aljqfilwbhfpgpvcgcvm.supabase.co'
    const supabaseKey = 'sb_publishable_et5jO4D3ZQDHlnbFCE8udA_CUCBGlBW'

    const response = await fetch(`${supabaseUrl}/rest/v1/businesses?select=id&limit=1`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Supabase response error:', error)
      return NextResponse.json({ error: `Supabase error: ${error}` }, { status: response.status })
    }

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Fetch error:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
