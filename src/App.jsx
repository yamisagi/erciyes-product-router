import ProductDataContextProvider from './context/ProductDataContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ProductDataContextProvider>
      <AppRouter />;
    </ProductDataContextProvider>
  );
}

export default App;
