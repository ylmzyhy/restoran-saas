import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function Home() {
  // Test query - businesses tablosundaki ilk kaydı al
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .limit(1)

  const isConnected = !error && data !== null

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Restoran SaaS</h1>
      <p>Sistem calisiyor!</p>
      <p style={{ color: isConnected ? 'green' : 'red' }}>
        Supabase baglantisi: {isConnected ? '✅ Aktif' : '❌ Bagli degil'}
      </p>
      {error && <p style={{ color: 'red', fontSize: '12px' }}>Hata: {error.message}</p>}
    </div>
  )
}
