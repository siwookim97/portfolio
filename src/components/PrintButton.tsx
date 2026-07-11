const PrintButton = () => {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="fixed bottom-6 right-6 z-10 rounded-full bg-PRIMARY px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-PRIMARY_HEAVY print:hidden"
    >
      PDF 다운로드
    </button>
  );
};

export default PrintButton;
