import { SearchSection } from '@/components/organisms/SearchSection';
import { MainLayout } from '@/components/templates/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="h-full flex items-center justify-center">
        <SearchSection />
      </div>
    </MainLayout>
  );
}
