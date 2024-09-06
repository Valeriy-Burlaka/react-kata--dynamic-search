import { SearchInput } from './components/SearchInput';

import products from './unique_products.json';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#445544'
    }}>
      <div style={{ marginBottom: '20px' }}>
        {/* <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#E37151',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          PS
        </div> */}
      </div>
      <div style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>
        Product Search
      </div>
      <SearchInput products={products} />
    </div>
  );
}
