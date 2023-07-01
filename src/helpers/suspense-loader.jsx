const { DotWave } = require('@uiball/loaders');

export const SuspenseLoader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      <DotWave size={100} speed={1} color="#204154" />
    </div>
  );
};
