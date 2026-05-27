
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('Bağlanıyor...');

  useEffect(() => {
    fetch('/api/supabase-check')
      .then(res => res.json())
      .then(data => {
        if (data.error) setStatus(`❌ Bağlı değil: ${data.error}`);
        else setStatus('✅ Aktif');
      })
      .catch(err => setStatus(`❌ Hata: ${err.message}`));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Restoran SaaS</h1>
      <p>Sistem çalışıyor!</p>
      <p>Supabase bağlantısı: {status}</p>
    </div>
  );
}
