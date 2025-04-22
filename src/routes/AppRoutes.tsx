import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DCHLayout from '@/layouts/DCHLayout';
import LayersPage from '@/pages/LayersPage';
import MapsPage from '@/pages/MapsPage';
import DocumentsPage from '@/pages/DocumentsPage';
import DCHHomePage from "@/pages/DCHHomePage.tsx";
import DataMartsPage from "@/pages/DataMartsPage.tsx";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<DCHLayout />}>
                <Route index element={<DCHHomePage />} />
                <Route path="layers" element={<LayersPage />} />
                <Route path="maps" element={<MapsPage />} />
                <Route path="documents" element={<DocumentsPage />} />
                <Route path="datamarts" element={<DataMartsPage />} />
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;
