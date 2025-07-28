import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CategoryManagementPage from './pages/CategoryManagementPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="flex h-screen font-sans">
      <Toaster position="bottom-right" />
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-0">
        <Header />
        <main className="flex-1" style={{ backgroundColor: '#FAF4F0' }}>
          <div className="h-full w-full px-8">
            <CategoryManagementPage />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
