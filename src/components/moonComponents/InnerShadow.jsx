const InnerShadow = () => (
    <div
      className="absolute inset-0"
      style={{
        boxShadow: 'inset 12px 12px 16px rgba(0, 0, 0, 0.3), inset -8px -8px 12px rgba(0, 0, 0, 0.2)',
        filter: 'blur(4px)',
      }}
    />
  )
  
  export default InnerShadow
  