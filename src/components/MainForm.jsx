<div style={{ display: 'flex', flexDirection: 'column', gap: '1em', backgroundColor: '#f0f0f0', padding: '2em', overflowX: 'hidden' }}>
  {/* Верхня частина: загальна інформація */}
  <div style={{ backgroundColor: '#3a3a3a', color: '#ffffff', padding: '1em', borderRadius: '5px' }}>
    <Form1 />
  </div>

  {/* Середня частина */}
  <div style={{ display: 'flex', gap: '1em' }}>
    {/* Транспортний засіб A */}
    <div style={{ flex: 1, backgroundColor: '#2a4d69', color: '#ffffff', padding: '1em', borderRadius: '5px' }}>
      <Form2 participant="Транспортний засіб A" />
    </div>

    {/* Обставини ДТП */}
    <div style={{ flex: 1, backgroundColor: '#3a3a3a', color: '#ffffff', padding: '1em', borderRadius: '5px' }}>
      <Form4 />
    </div>

    {/* Транспортний засіб B */}
    <div style={{ flex: 1, backgroundColor: '#4a752c', color: '#ffffff', padding: '1em', borderRadius: '5px' }}>
      <Form3 participant="Транспортний засіб B" />
    </div>
  </div>
</div>